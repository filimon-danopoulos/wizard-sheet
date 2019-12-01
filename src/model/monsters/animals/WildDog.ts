import Animal from './Animal'
import { MonsterAttribute } from '../Monster'

export default class WildDog extends Animal {
  public readonly name: string = 'Wild Dog'
  public readonly move: number = 8
  public readonly fight: number = 0
  public readonly shoot: number = 0
  public readonly armour: number = 8
  public readonly will: number = 0
  public readonly health: number = 4

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.PackHunter)
  }
}
