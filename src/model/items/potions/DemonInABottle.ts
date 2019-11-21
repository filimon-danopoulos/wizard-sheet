import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class DemonInABottle extends Potion {
  public readonly type = 'demoninabottle' as string
  constructor() {
    super(200)
  }
}
