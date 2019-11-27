import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Staff from '../items/basic/weapons/Staff'
import Bow from '../items/basic/weapons/Bow'
import LeatherArmour from '../items/basic/armour/LeatherArmour'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new Staff(true), new Bow(true), new LeatherArmour(true)]

export default class Tracker extends Soldier {
  public readonly type = 'tracker' as string
  public readonly description = 'Tracker' as string
  public readonly cost: number = 80
  public readonly move: Stat = new Stat(7)
  public readonly fight: Stat = new Stat(2)
  public readonly shoot: Stat = new Stat(2)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(1)
  public readonly health: Health = new Health(12)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = startingItems.length + 1
  constructor() {
    super()
    startingItems.forEach(item => this.addItem(item))
  }
}
