import Undead from './Undead'
import { MonsterAttribute } from '../Monster'

export default class Wraith extends Undead {
  public readonly name: string = 'Wraith'
  public readonly move: number = 6
  public readonly fight: number = 2
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 3
  public readonly health: number = 6
  constructor() {
    super()
    this.attributes.push(MonsterAttribute.Immaterial)
    this.attributes.push(MonsterAttribute.DrainLifeForce)
    this.attributes.push(MonsterAttribute.ImmuneToNonMagicWeapons)
  }
}
