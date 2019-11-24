import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Shield from '../items/basic/armour/Shield'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Man At Arms',
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
  public readonly type = 'manatarms' as string
  constructor() {
    super({
      ...config,
      maxItems: config.items.length + 1
    })
  }
}
