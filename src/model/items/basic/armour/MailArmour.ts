import Armour from './Armour'

export default class MailArmour extends Armour {
  public readonly type = 'mailarmour' as string
  constructor() {
    super(2, 0)
  }
}
