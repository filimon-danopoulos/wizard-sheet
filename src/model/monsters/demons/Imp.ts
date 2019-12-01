import Demon from './Demon'

export default class Imp extends Demon {
  public readonly name: string = 'Imp'
  public readonly move: number = 6
  public readonly fight: number = 1
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 4
  public readonly health: number = 6
}
