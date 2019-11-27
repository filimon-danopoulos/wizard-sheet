import Staff from '../items/basic/weapons/Staff'
import Wizard from './Wizard'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Character, { ISpellcaster, IMercenary } from '../Character'
import Spell from '../magic/Spell'
import Stat from '../Stat'
import Health from '../Health'

export default class Apprentice extends Character implements ISpellcaster, IMercenary {
  public name: string
  public readonly type = 'apprentice' as string
  public readonly description = 'Apprentice' as string
  public readonly maxItems: number = 4
  public readonly move: Stat = new Stat(6)
  public readonly armour: Stat = new Stat(10)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly fight: Stat
  public readonly shoot: Stat
  public readonly will: Stat
  public readonly health: Health
  public readonly cost: number
  public readonly spells: Spell[]

  private readonly wizard: Wizard
  constructor(name: string, wizard: Wizard) {
    super()
    this.fight = new Stat(wizard.fight.base - 2)
    this.shoot = new Stat(wizard.shoot.base - 2)
    this.will = new Stat(wizard.will.base - 2)
    this.health = new Health(wizard.health.base - 4)
    this.name = name
    this.wizard = wizard
    this.cost = (wizard.level - 10) * 10 + 300
    this.spells = this.wizard.spells.map(s => {
      const spell = s.copy()
      spell.difficulty += 2
      return spell
    })
  }
}
