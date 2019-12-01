import Armour from './Armour'

export default class Cloak extends Armour {
  public readonly type = 'cloak' as string
  public readonly name = 'Cloak' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(0, required)
  }
}
