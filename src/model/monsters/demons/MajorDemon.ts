import Demon from './Demon'
import { MonsterAttribute } from '../Monster'

export default class MajorDemon extends Demon {
  public readonly name: string = 'Major Demon'
  public readonly move: number = 6
  public readonly fight: number = 4
  public readonly shoot: number = 0
  public readonly armour: number = 12
  public readonly will: number = 6
  public readonly health: number = 15

  constructor(large: Boolean) {
    super()
    if (large) {
      this.attributes.push(MonsterAttribute.Large)
    }
  }
}
