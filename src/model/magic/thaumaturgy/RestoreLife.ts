import Spell, { Category, School } from '../Spell'

export default class RestoreLife extends Spell {
  public readonly type: string = 'restorelife'
  constructor() {
    super({
      name: 'Restore Life',
      description: '',
      school: School.Thaumaturgy,
      category: Category.OutOfGame,
      difficulty: 20,
      effect: ''
    })
  }
  public copy() {
    const spell = new RestoreLife()
    spell.difficulty = this.difficulty
    return spell
  }
}
