import Armour from './Armour'

export default class Shield extends Armour {
  public readonly type = 'shield' as string
  public readonly name = 'Shield' as string
  public readonly description = '' as string
  public readonly cost: number = 5
  constructor(required: boolean = false) {
    super(1, required)
  }
}
