import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import MailArmour from '../items/basic/armour/MailArmour'
import Crossbow from '../items/basic/weapons/Crossbow'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new Crossbow(true), new HandWeapon(true), new MailArmour(true)]
export default class Marksman extends Soldier {
  public readonly type = 'marksman' as string
  public readonly description = 'Marksman' as string
  public readonly cost: number = 100
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(2)
  public readonly shoot: Stat = new Stat(3)
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
