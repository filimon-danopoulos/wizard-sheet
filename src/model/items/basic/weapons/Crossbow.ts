import Weapon from './Weapon'

export default class Crossbow extends Weapon {
  public readonly type = 'crossbow' as string
  public readonly name = 'Crossbow' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(2, 0, required)
  }
}
