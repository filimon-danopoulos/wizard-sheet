import Soldier from './Soldier'
import Bow from '../items/basic/weapons/Bow'
import Dagger from '../items/basic/weapons/Dagger'
import LeatherArmour from '../items/basic/armour/LeatherArmour'
import Stat from '../Stat'
import Health from '../Health'

const config = {
  move: 6,
  fight: 2,
  shoot: 2,
  will: 0,
  health: 10,
  cost: 50,
  notes: ''
}
const startingItems = [new Bow(true), new Dagger(true), new LeatherArmour(true)]

export default class Archer extends Soldier {
  public readonly type = 'archer' as string
  public readonly description = 'Archer' as string
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
