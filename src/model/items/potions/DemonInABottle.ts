import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class DemonInABottle extends Potion {
  public readonly type = 'demoninabottle' as string
  public readonly name = 'Demon in a bottle' as string
  public readonly description = '' as string
  public readonly cost: number = 200
  constructor(required: boolean = false) {
    super(required)
  }
}
