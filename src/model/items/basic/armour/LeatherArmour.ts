import Armour from './Armour'

export default class LeatherArmour extends Armour {
  public readonly type = 'leatherarmour' as string
  public readonly name = 'Leather Armmour' as string
  public readonly description = '' as string
  constructor() {
    super(1, 0)
  }
}
