import Undead from './Undead'

export default class Zombie extends Undead {
  public readonly name: string = 'Zombie'
  public readonly move: number = 4
  public readonly fight: number = 0
  public readonly shoot: number = 0
  public readonly armour: number = 12
  public readonly will: number = 0
  public readonly health: number = 6
}
