import Soldier from './Soldier'
import TwoHandedWeapon from '../items/basic/weapons/TwoHandedWeapon'
import LeatherArmour from '../items/basic/armour/LeatherArmour'

const config = {
  description: 'Infantryman',
  move: 6,
  fight: 3,
  shoot: 0,
  will: 0,
  health: 10,
  cost: 50,
  items: [new TwoHandedWeapon(), new LeatherArmour()],
  notes: ''
}

export default class Infantryman extends Soldier {
  public readonly type = 'infantryman' as string
  constructor() {
    super({
      ...config,
      maxItems: config.items.length
    })
  }
}
