import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class PotionOfStrength extends Potion {
  public readonly type = 'potionofteleport' as string
  public readonly name = 'Potion of Teleport' as string
  public readonly description = '' as string
  constructor() {
    super(100)
  }
}
