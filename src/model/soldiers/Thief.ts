import Soldier from './Soldier'
import Dagger from '../items/basic/weapons/Dagger'

const config = {
  description: 'Thief',
  move: 7,
  fight: 1,
  shoot: 0,
  will: 0,
  health: 10,
  cost: 20,
  items: [new Dagger()],
  notes: ''
}
export default class Thief extends Soldier {
  public readonly type = 'thief' as string
  constructor() {
    super({ ...config, maxEquipment: config.items.length + 1 })
  }
}
