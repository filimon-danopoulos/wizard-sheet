import Soldier from './Soldier'
import TwoHandedWeapon from '../items/basic/weapons/TwoHandedWeapon'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new TwoHandedWeapon(true)]
export default class Barbarian extends Soldier {
  public readonly type = 'barbarian' as string
  public readonly description = 'Barbarian' as string
  public readonly cost: number = 100
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(4)
  public readonly shoot: Stat = new Stat(0)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(3)
  public readonly health: Health = new Health(14)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = startingItems.length + 1
  constructor() {
    super()
    startingItems.forEach(item => this.addItem(item))
  }
}
