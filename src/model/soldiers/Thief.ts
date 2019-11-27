import Soldier from './Soldier'
import Dagger from '../items/basic/weapons/Dagger'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new Dagger(true)]
export default class Thief extends Soldier {
  public readonly type = 'thief' as string
  public readonly description = 'Thief' as string
  public readonly cost: number = 20
  public readonly move: Stat = new Stat(7)
  public readonly fight: Stat = new Stat(1)
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
