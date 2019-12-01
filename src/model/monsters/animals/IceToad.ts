import Animal from './Animal'
import { MonsterAttribute } from '../Monster'

export default class IceToad extends Animal {
  public readonly name: string = 'Ice Toad'
  public readonly move: number = 3
  public readonly fight: number = 2
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 0
  public readonly health: number = 5

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.PowerfullJaws)
  }
}
