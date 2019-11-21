import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Bow from '../items/basic/weapons/Bow'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Ranger',
  move: 7,
  fight: 2,
  shoot: 2,
  will: 2,
  health: 12,
  cost: 100,
  items: [new Bow(), new HandWeapon(), new LeatherArmour()],
  notes: ''
}
export default class Ranger extends Soldier {
  public readonly type = 'ranger' as string
  constructor() {
    super({ ...config, maxEquipment: config.items.length + 1 })
  }
}
