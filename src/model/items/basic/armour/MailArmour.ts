import Armour from './Armour'

export default class MailArmour extends Armour {
  public readonly type = 'mailarmour' as string
  public readonly name = 'Mail Armour' as string
  public readonly description = '' as string
  constructor() {
    super(2, 0)
  }
}
