import Soldier from './Soldier'
import Crossbow from '../items/basic/weapons/Crossbow'
import Dagger from '../items/basic/weapons/Dagger'
import LeatherArmour from '../items/basic/armour/LeatherArmour'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new Crossbow(true), new Dagger(true), new LeatherArmour(true)]

export default class Crossbowman extends Soldier {
  public readonly type = 'crossbowman' as string
  public readonly description = 'Crossbowman' as string
  public readonly cost: number = 50
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(2)
  public readonly shoot: Stat = new Stat(2)
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
