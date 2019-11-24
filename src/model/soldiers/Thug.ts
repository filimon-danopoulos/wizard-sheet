import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'

const config = {
  description: 'Thug',
  move: 6,
  fight: 2,
  shoot: 0,
  will: -1,
  health: 10,
  cost: 20,
  items: [new HandWeapon()],
  notes: ''
}
export default class Thug extends Soldier {
  public readonly type = 'thug' as string
  constructor() {
    super({ ...config, maxItems: config.items.length + 1 })
  }
}
