import Animal from './Animal'
import { MonsterAttribute } from '../Monster'

export default class IceSpider extends Animal {
  public readonly name: string = 'Ice Spider'
  public readonly move: number = 6
  public readonly fight: number = 0
  public readonly shoot: number = 0
  public readonly armour: number = 8
  public readonly will: number = 0
  public readonly health: number = 4

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.Venom)
  }
}
