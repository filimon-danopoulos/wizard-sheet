import Animal from './Animal'

export default class GiantWorm extends Animal {
  public readonly name: string = 'Giant Worm'
  public readonly move: number = 7
  public readonly fight: number = 4
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 5
  public readonly health: number = 20
}
