import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Shield from '../items/basic/armour/Shield'
import MailArmour from '../items/basic/armour/MailArmour'
import Infantryman from './Infantryman'

const config = {
  description: 'Knight',
  move: 5,
  fight: 4,
  shoot: 0,
  will: 1,
  health: 12,
  cost: 100,
  items: [new HandWeapon(), new Shield(), new MailArmour()],
  notes: ''
}
export default class Knight extends Soldier {
  public readonly type = 'knight'
  constructor() {
    super({
      ...config,
      maxEquipment: config.items.length + 1
    })
  }
}
