import Weapon from './Weapon'

export default class Crossbow extends Weapon {
  public readonly type = 'crossbow' as string
  public readonly name = 'Crossbow' as string
  public readonly description = '' as string
  constructor() {
    super(2, 0)
  }
}
