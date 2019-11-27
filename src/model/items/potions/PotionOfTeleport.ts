import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class PotionOfTeleport extends Potion {
  public readonly type = 'potionofteleport' as string
  public readonly name = 'Potion of Teleport' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(100, required)
  }
}
