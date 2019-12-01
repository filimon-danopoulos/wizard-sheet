import Undead from './Undead'

export default class Ghoul extends Undead {
  public readonly name: string = 'Ghoul'
  public readonly move: number = 6
  public readonly fight: number = 2
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 2
  public readonly health: number = 10
}
