import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Shield from '../items/basic/armour/Shield'
import LeatherArmour from '../items/basic/armour/LeatherArmour'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new HandWeapon(true), new Shield(true), new LeatherArmour(true)]
export default class ManAtArms extends Soldier {
  public readonly type = 'manatarms' as string
  public readonly description = 'Man At Arms' as string
  public readonly cost: number = 80
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(3)
  public readonly shoot: Stat = new Stat(0)
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
