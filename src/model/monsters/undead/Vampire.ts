import Undead from './Undead'
import { MonsterAttribute } from '../Monster'

export default class Vampire extends Undead {
  public readonly name: string = 'Vampire'
  public readonly move: number = 7
  public readonly fight: number = 4
  public readonly shoot: number = 0
  public readonly armour: number = 12
  public readonly will: number = 4
  public readonly health: number = 14
  constructor() {
    super()
    this.attributes.push(MonsterAttribute.ImmuneToNonMagicWeapons)
  }
}
