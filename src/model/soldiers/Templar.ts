import Soldier from './Soldier'
import TwoHandedWeapon from '../items/basic/weapons/TwoHandedWeapon'
import MailArmour from '../items/basic/armour/MailArmour'

const config = {
  description: 'Templar',
  move: 5,
  fight: 4,
  shoot: 0,
  will: 1,
  health: 12,
  cost: 100,
  items: [new TwoHandedWeapon(), new MailArmour()],
  notes: ''
}
export default class Templar extends Soldier {
  public readonly type = 'templar' as string
  constructor() {
    super({ ...config, maxItems: config.items.length + 1 })
  }
}
