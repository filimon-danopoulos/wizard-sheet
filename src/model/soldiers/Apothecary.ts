import Soldier from './Soldier'
import Staff from '../items/basic/weapons/Staff'
import HealingPotion from '../items/potions/HealingPotion'

const config = {
  description: 'Apothecary',
  move: 6,
  fight: 0,
  shoot: 0,
  will: 0,
  health: 12,
  cost: 100,
  items: [new Staff(), new HealingPotion()],
  notes: 'Starts each game with a healing potion'
}

export default class Apothecary extends Soldier {
  public readonly type = 'apothecary' as string
  constructor() {
    super({
      ...config,
      maxEquipment: config.items.length + 1
    })
  }
  public fromJSON(json: any): void {
    super.fromJSON(json)
    if (!this.items.some(item => item instanceof HealingPotion)) {
      this.items.push(new HealingPotion())
    }
  }
}
