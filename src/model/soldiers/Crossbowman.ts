import Soldier from './Soldier'
import Crossbow from '../items/basic/weapons/Crossbow'
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
  items: [new Crossbow(), new Dagger(), new LeatherArmour()],
  notes: ''
}

export default class Crossbowman extends Soldier {
  public readonly type = 'crossbowman' as string
  constructor() {
    super({
      ...config,
      maxItems: config.items.length + 1
    })
  }
}
