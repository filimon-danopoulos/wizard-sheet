import Armour from './Armour'

export default class Ring extends Armour {
  public readonly type = 'ring' as string
  public readonly name = 'Ring' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(0, required)
  }
}
