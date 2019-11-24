import Soldier from './Soldier'
import { Race } from '../Character'

const config = {
  race: Race.Animal,
  description: 'Warhound',
  move: 8,
  fight: 1,
  shoot: 0,
  will: 2,
  health: 8,
  cost: 10,
  items: [],
  notes: 'Cannot carry treasure'
}
export default class WarHound extends Soldier {
  public readonly type = 'warhound' as string
  constructor() {
    super({ ...config, maxItems: 0 })
  }
}
