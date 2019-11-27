import Soldier from './Soldier'
import Stat from '../Stat'
import Health from '../Health'

export default class WarHound extends Soldier {
  public readonly type = 'warhound' as string
  public readonly description = 'Warhound' as string
  public readonly cost: number = 10
  public readonly move: Stat = new Stat(8)
  public readonly fight: Stat = new Stat(1)
  public readonly shoot: Stat = new Stat(0)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(2)
  public readonly health: Health = new Health(8)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = 0
}
