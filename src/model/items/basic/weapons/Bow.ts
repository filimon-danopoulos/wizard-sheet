import Weapon from './Weapon'

export default class Bow extends Weapon {
  public readonly type = 'bow' as string
  public readonly name = 'Bow' as string
  public readonly description = '' as string
  public readonly cost: number = 5
  constructor(required: boolean = false) {
    super(0, required)
  }
}
