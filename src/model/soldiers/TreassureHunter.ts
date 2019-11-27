import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Dagger from '../items/basic/weapons/Dagger'
import LeatherArmour from '../items/basic/armour/LeatherArmour'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new HandWeapon(true), new Dagger(true), new LeatherArmour(true)]
export default class TreassureHunter extends Soldier {
  public readonly type = 'treassurehunter' as string
  public readonly description = 'Treassure Hunter' as string
  public readonly cost: number = 80
  public readonly move: Stat = new Stat(7)
  public readonly fight: Stat = new Stat(3)
  public readonly shoot: Stat = new Stat(0)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(2)
  public readonly health: Health = new Health(12)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = startingItems.length + 1
  constructor() {
    super()
    startingItems.forEach(item => this.addItem(item))
  }
}
