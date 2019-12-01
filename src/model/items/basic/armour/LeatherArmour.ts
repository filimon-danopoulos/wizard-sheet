import Armour from './Armour'

export default class LeatherArmour extends Armour {
  public readonly type = 'leatherarmour' as string
  public readonly name = 'Leather Armour' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(1, required)
  }
}
