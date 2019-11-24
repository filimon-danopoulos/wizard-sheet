import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Staff from '../items/basic/weapons/Staff'
import Bow from '../items/basic/weapons/Bow'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Tracker',
  move: 7,
  fight: 2,
  shoot: 2,
  will: 1,
  health: 12,
  cost: 80,
  items: [new Staff(), new Bow(), new LeatherArmour()],
  notes: ''
}
export default class Tracker extends Soldier {
  public readonly type = 'tracker' as string
  constructor() {
    super({ ...config, maxItems: config.items.length + 1 })
  }
}
