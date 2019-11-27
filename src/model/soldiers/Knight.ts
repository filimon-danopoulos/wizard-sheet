import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Shield from '../items/basic/armour/Shield'
import MailArmour from '../items/basic/armour/MailArmour'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new HandWeapon(true), new Shield(true), new MailArmour(true)]
export default class Knight extends Soldier {
  public readonly type = 'knight' as string
  public readonly description = 'Knight' as string
  public readonly cost: number = 100
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(4)
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
