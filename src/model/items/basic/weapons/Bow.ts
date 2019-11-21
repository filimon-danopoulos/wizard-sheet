import Weapon from './Weapon'

export default class Bow extends Weapon {
  public readonly type = 'bow' as string
  constructor() {
    super(0, 0)
  }
}
