import Monster, { MonsterAttribute } from '../Monster'

export default class FrostGiant extends Monster {
  public readonly name: string = 'Frost Giant'
  public readonly move: number = 6
  public readonly fight: number = 5
  public readonly shoot: number = 0
  public readonly armour: number = 15
  public readonly will: number = 4
  public readonly health: number = 25

  constructor() {
    super()
    this.attributes.push(MonsterAttribute.Large)
    this.attributes.push(MonsterAttribute.HugeWeapon)
  }
}
