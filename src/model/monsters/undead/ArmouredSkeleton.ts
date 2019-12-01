import Undead from './Undead'

export default class ArmouredSkeleton extends Undead {
  public readonly name: string = 'Armoured Skeleton'
  public readonly move: number = 6
  public readonly fight: number = 2
  public readonly shoot: number = 0
  public readonly armour: number = 12
  public readonly will: number = 0
  public readonly health: number = 1
}
