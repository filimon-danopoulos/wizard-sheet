import Armour from './Armour'

export default class LeatherArmour extends Armour {
  public readonly type = 'leatherarmour' as string
  constructor() {
    super(1, 0)
  }
}
