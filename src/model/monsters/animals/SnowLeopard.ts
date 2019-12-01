import Animal from './Animal'

export default class SnowLeopard extends Animal {
  public readonly name: string = 'Snow Leopard'
  public readonly move: number = 8
  public readonly fight: number = 2
  public readonly shoot: number = 0
  public readonly armour: number = 10
  public readonly will: number = 2
  public readonly health: number = 10
}
