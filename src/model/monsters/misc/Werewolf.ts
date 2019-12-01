import Monster, { MonsterAttribute } from '../Monster'

export default class Werewolf extends Monster {
  public readonly name: string = 'Werewolf'
  public readonly move: number = 7
  public readonly fight: number = 4
  public readonly shoot: number = 0
  public readonly armour: number = 11
  public readonly will: number = 5
  public readonly health: number = 12

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.Agile)
    this.attributes.push(MonsterAttribute.Bounty)
  }
}
