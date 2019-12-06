import Wizard from './wizards/Wizard'
import Base from './bases/Base'
import Captain from './captain/Captain'
import Soldier from './soldiers/Soldier'
import Item from './items/Item'
import Apprentice from './wizards/Apprentice'
import { IMercenary } from './Character'
import Scroll from './items/magic/Scroll'
import SpellItem from './items/magic/SpellItem'

export default class Warband {
  public wizard: Wizard
  public captain: Captain | null = null
  public base: Base | null = null
  public soldiers: Soldier[] = []
  public vault: Item[] = []
  public numberOfGames: number = 0
  public gold: number = 500

  constructor(wizard: Wizard) {
    this.wizard = wizard
  }

  public selectBase(base: Base) {
    if (this.numberOfGames === 0) {
      return
    }
    this.base = base
  }

  public hire(mercenary: IMercenary) {
    if (this.gold < mercenary.cost) {
      return
    }
    if (mercenary instanceof Soldier) {
      this.soldiers.push(mercenary)
    } else if (mercenary instanceof Apprentice) {
      this.wizard.apprentice = mercenary
    } else if (mercenary instanceof Captain) {
      this.captain = mercenary
    } else {
      return
    }
    this.gold -= mercenary.cost
  }

  public dismiss(mercenary: IMercenary) {
    let removed = false
    if (mercenary instanceof Soldier && this.soldiers.includes(mercenary)) {
      this.soldiers.splice(this.soldiers.indexOf(mercenary), 1)
      removed = true
    } else if (this.wizard.apprentice === mercenary) {
      this.wizard.apprentice = null
      removed = true
    } else if (this.captain === mercenary) {
      this.captain = null
      removed = true
    }

    if (removed && this.numberOfGames === 0) {
      this.gold += mercenary.cost
    }
  }

  public sell(item: Item) {
    if (this.base && this.base.vault.includes(item)) {
      if (item instanceof SpellItem && !this.wizard.spells.includes(item.spell)) {
        return
      }
      const index = this.base!.vault.findIndex(i => i === item)
      this.base.vault.splice(index, 1)
      this.gold += item instanceof Scroll ? 100 : Math.floor(item.cost / 2)
    }
  }

  public buy(item: Item) {
    if (this.base && this.gold >= item.cost) {
      this.base.vault.push(item)
      this.gold -= item.cost
    }
  }

  public archive(item: Item) {
    if (this.base) {
      this.base.vault.push(item)
    }
  }
}
