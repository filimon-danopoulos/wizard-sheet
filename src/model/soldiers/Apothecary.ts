import Soldier from './Soldier'
import Staff from '../items/basic/weapons/Staff'
import HealingPotion from '../items/potions/HealingPotion'
import Stat from '../Stat'
import Health from '../Health'

const startingItems = [new Staff(true), new HealingPotion(true)]

export default class Apothecary extends Soldier {
  public readonly type = 'apothecary' as string
  public readonly description = 'Apothecary' as string
  public readonly cost: number = 100
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(0)
  public readonly shoot: Stat = new Stat(0)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(0)
  public readonly health: Health = new Health(12)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = startingItems.length + 1
  constructor() {
    super()
    startingItems.forEach(item => this.addItem(item))
  }
}
