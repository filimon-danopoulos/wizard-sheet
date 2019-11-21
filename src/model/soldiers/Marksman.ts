import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import MailArmour from '../items/basic/armour/MailArmour'
import Crossbow from '../items/basic/weapons/Crossbow'

const config = {
  description: 'Marksman',
  move: 5,
  fight: 2,
  shoot: 3,
  will: 1,
  health: 12,
  cost: 100,
  items: [new Crossbow(), new HandWeapon(), new MailArmour()],
  notes: ''
}
export default class Marksman extends Soldier {
  public readonly type = 'marksman' as string
  constructor() {
    super({ ...config, maxEquipment: config.items.length + 1 })
  }
}
