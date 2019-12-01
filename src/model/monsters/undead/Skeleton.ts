import Undead from './Undead'

export default class Skeleton extends Undead {
  public readonly name: string = 'Skeleton'
  public readonly move: number = 6
  public readonly fight: number = 1
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 0
  public readonly health: number = 1
}
