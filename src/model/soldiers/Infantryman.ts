import Soldier from './Soldier'
import TwoHandedWeapon from '../items/basic/weapons/TwoHandedWeapon'
import LeatherArmour from '../items/basic/armour/LeatherArmour'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new TwoHandedWeapon(true), new LeatherArmour(true)]

export default class Infantryman extends Soldier {
  public readonly type = 'infantryman' as string
  public readonly description = 'Infantryman' as string
  public readonly cost: number = 50
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(3)
  public readonly shoot: Stat = new Stat(0)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(0)
  public readonly health: Health = new Health(10)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = startingItems.length + 1
  constructor() {
    super()
    startingItems.forEach(item => this.addItem(item))
  }
}
