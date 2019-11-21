import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Shield from '../items/basic/armour/Shield'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'ManAtArms',
  move: 6,
  fight: 3,
  shoot: 0,
  will: 1,
  health: 12,
  cost: 80,
  items: [new HandWeapon(), new Shield(), new LeatherArmour()],
  notes: ''
}
export default class ManAtArms extends Soldier {
  public readonly type = 'manatarms'
  constructor() {
    super({
      ...config,
      maxEquipment: config.items.length + 1
    })
  }
}
