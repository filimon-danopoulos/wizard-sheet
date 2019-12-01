import Demon from './Demon'

export default class MinorDemon extends Demon {
  public readonly name: string = 'Minor Demon'
  public readonly move: number = 6
  public readonly fight: number = 3
  public readonly shoot: number = 0
  public readonly armour: number = 11
  public readonly will: number = 4
  public readonly health: number = 12
}
