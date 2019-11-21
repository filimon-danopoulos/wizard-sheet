import Armour from './Armour'

export default class Shield extends Armour {
  public readonly type = 'shield' as string
  constructor() {
    super(1, 0)
  }
}
