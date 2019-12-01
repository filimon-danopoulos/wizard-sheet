import Weapon from './Weapon'

export default class Crossbow extends Weapon {
  public readonly type = 'crossbow' as string
  public readonly name = 'Crossbow' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(2, required)
  }
}
