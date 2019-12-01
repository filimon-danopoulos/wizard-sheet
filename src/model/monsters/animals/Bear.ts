import Animal from './Animal'
import { MonsterAttribute } from '../Monster'

export default class Bear extends Animal {
  public readonly name: string = 'Bear'
  public readonly move: number = 6
  public readonly fight: number = 4
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 0
  public readonly health: number = 14

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.Large)
  }
}
