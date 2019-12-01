import Character, { ISpellcaster, Effect } from '../Character'
import Spell, { School } from '../magic/Spell'
import Soldier from '../soldiers/Soldier'
import Apprentice from './Apprentice'
import Item from '../items/Item'
import Stat from '../Stat'
import Health from '../Health'
import Base from '../bases/Base'
import Scroll from '../items/magic/Scroll'
import SpellItem from '../items/magic/SpellItem'

export interface IWizardConfig {
  name: string
  primarySchool: School
  allignedSchools: School[]
  neutralSchools: School[]
  opposedSchool: School
}

export interface IWizardData {
  name: string
  move: number
  fight: number
  shoot: number
  will: number
  health: number
  level: number
  gold: number
  experience: number
  unspentPoints: number
  soldiers: Soldier[]
  items: Item[]
  spells: Spell[]
  effects: Effect[]
}

export default abstract class Wizard extends Character implements ISpellcaster {
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(2)
  public readonly shoot: Stat = new Stat(0)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(4)
  public readonly health: Health = new Health(14)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = 5

  public level: number = 0
  public unspentPoints: number = 0
  public experience: number = 0
  public gold: number = 500
  public apprentice: Apprentice | null = null
  public base: Base | null = null
  public readonly soldiers: Soldier[] = []
  public readonly spells: Spell[] = []
  public numberOfGames: number = 0

  public primarySchool: School
  public allignedSchools: School[]
  public neutralSchools: School[]
  public opposedSchool: School

  constructor(config: IWizardConfig) {
    super()
    this.name = config.name
    this.primarySchool = config.primarySchool
    this.allignedSchools = config.allignedSchools
    this.neutralSchools = config.neutralSchools
    this.opposedSchool = config.opposedSchool
  }

  public learnSpell(spell: Spell) {
    if (!this.spells.some(s => s instanceof spell.constructor)) {
      spell.difficulty = this.calculateSpellDificulty(spell)
      this.spells.push(spell)
    }
  }

  public selectBase(base: Base) {
    if (this.numberOfGames === 0) {
      return
    }
    this.base = base
  }

  public hire(mercenary: Soldier | Apprentice) {
    if (this.gold < mercenary.cost) {
      return
    }
    if (mercenary instanceof Soldier) {
      this.soldiers.push(mercenary)
    } else {
      this.apprentice = mercenary
    }
    this.gold -= mercenary.cost
  }

  public dismiss(mercenary: Soldier | Apprentice) {
    let removed = false
    if (mercenary instanceof Soldier && this.soldiers.includes(mercenary)) {
      this.soldiers.splice(this.soldiers.indexOf(mercenary), 1)
      removed = true
    } else if (this.apprentice === mercenary) {
      this.apprentice = null
      removed = true
    }

    if (removed && this.numberOfGames === 0) {
      this.gold += mercenary.cost
    }
  }

  public grantExperience(experience: number) {
    this.experience += experience
    while (this.experience >= 100) {
      this.level += 1
      this.unspentPoints += 1
      this.experience -= 100
    }
  }

  private calculateSpellDificulty(spell: Spell): number {
    let difficulty = spell.difficulty
    if (spell.school === this.opposedSchool) {
      difficulty += 6
    } else if (this.neutralSchools.includes(spell.school)) {
      difficulty += 4
    } else if (this.allignedSchools.includes(spell.school)) {
      difficulty += 2
    }
    return difficulty
  }

  public sell(item: Item) {
    if (this.base && this.base.vault.includes(item)) {
      if (item instanceof SpellItem && !this.spells.includes(item.spell)) {
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

  public static load<T extends Wizard>(ctor: new (name: string) => T, json: IWizardData): T {
    const wizard = new ctor(json.name)
    json.effects.forEach(effect => {
      wizard.effects.push(effect)
    })
    wizard.experience = json.experience
    wizard.fight.base = json.fight
    wizard.gold = json.gold
    wizard.health.base = json.health
    json.items.forEach(item => {
      wizard.items.push(item)
    })
    wizard.level = json.level
    wizard.move.base = json.move
    wizard.shoot.base = json.shoot
    json.soldiers.forEach(soldier => {
      wizard.soldiers.push(soldier)
    })
    wizard.unspentPoints = json.unspentPoints
    wizard.will.base = json.will
    json.spells.forEach(spell => {
      wizard.spells.push(spell)
    })
    return wizard
  }
}
