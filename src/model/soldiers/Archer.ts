import Soldier from './Soldier'
import Bow from '../items/basic/weapons/Bow'
import Dagger from '../items/basic/weapons/Dagger'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Archer',
  move: 6,
  fight: 2,
  shoot: 2,
  will: 0,
  health: 10,
  cost: 50,
  items: [new Bow(), new Dagger(), new LeatherArmour()],
  notes: ''
}

export default class Archer extends Soldier {
  public readonly type = 'archer'
  constructor() {
    super({
      ...config,
      maxEquipment: config.items.length + 1
    })
  }
}
