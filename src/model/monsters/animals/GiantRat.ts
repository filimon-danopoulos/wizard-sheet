import Animal from './Animal'
import { MonsterAttribute } from '../Monster'

export default class GiantRat extends Animal {
  public readonly name: string = 'Giant Rat'
  public readonly move: number = 6
  public readonly fight: number = 0
  public readonly shoot: number = 0
  public readonly armour: number = 6
  public readonly will: number = 0
  public readonly health: number = 1

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.PackHunter)
  }
}
