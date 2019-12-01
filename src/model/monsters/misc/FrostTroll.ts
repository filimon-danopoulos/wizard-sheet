import Monster, { MonsterAttribute } from '../Monster'

export default class FrostTroll extends Monster {
  public readonly name: string = 'Frost Troll'
  public readonly move: number = 4
  public readonly fight: number = 4
  public readonly shoot: number = 0
  public readonly armour: number = 14
  public readonly will: number = 2
  public readonly health: number = 16

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.Large)
    this.attributes.push(MonsterAttribute.HugeWeapon)
  }
}
