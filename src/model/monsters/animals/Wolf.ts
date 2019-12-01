import Animal from './Animal'

export default class Wolf extends Animal {
  public readonly name: string = 'Wolf'
  public readonly move: number = 8
  public readonly fight: number = 1
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 0
  public readonly health: number = 6
}
