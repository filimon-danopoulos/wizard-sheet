import Animal from './Animal'

export default class Boar extends Animal {
  public readonly name: string = 'Boar'
  public readonly move: number = 6
  public readonly fight: number = 2
  public readonly shoot: number = 0
  public readonly armour: number = 12
  public readonly will: number = 2
  public readonly health: number = 8
}
