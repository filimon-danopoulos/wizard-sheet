import Soldier from './Soldier'
import CrossBow from '../items/basic/weapons/Crossbow'
import Dagger from '../items/basic/weapons/Dagger'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Crossbowman',
  move: 6,
  fight: 2,
  shoot: 2,
  will: 0,
  health: 10,
  cost: 50,
  items: [new CrossBow(), new Dagger(), new LeatherArmour()],
  notes: ''
}

export default class Crossbowman extends Soldier {
  public readonly type = 'crossbowman' as string
  constructor() {
    super({
      ...config,
      maxEquipment: config.items.length + 1
    })
  }
}
