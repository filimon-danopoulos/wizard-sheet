import Soldier from './Soldier'
import TwoHandedWeapon from '../items/basic/weapons/TwoHandedWeapon'

const config = {
  description: 'Barbarian',
  move: 6,
  fight: 4,
  shoot: 0,
  will: 3,
  health: 14,
  cost: 100,
  items: [new TwoHandedWeapon()],
  notes: ''
}
export default class Barbarian extends Soldier {
  public readonly type = 'barbarian' as string
  constructor() {
    super({
      ...config,
      maxEquipment: config.items.length + 1
    })
  }
}
