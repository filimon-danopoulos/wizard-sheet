import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class DemonInABottle extends Potion {
  public readonly type = 'demoninabottle' as string
  public readonly name = 'Demon in a bottle' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(200, required)
  }
}
