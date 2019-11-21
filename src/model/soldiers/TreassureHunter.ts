import Soldier from './Soldier'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Dagger from '../items/basic/weapons/Dagger'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Treassure Hunter',
  move: 7,
  fight: 3,
  shoot: 0,
  will: 2,
  health: 12,
  cost: 80,
  items: [new HandWeapon(), new Dagger(), new LeatherArmour()],
  notes: ''
}
export default class TreassureHunter extends Soldier {
  public readonly type = 'treassurehunter' as string
  constructor() {
    super({ ...config, maxEquipment: config.items.length + 1 })
  }
}
