import Spell, { Category, School } from '../Spell'

export default class RestoreLife extends Spell {
  public readonly type: string = 'restorelife'
  constructor() {
    super({
      name: 'Restore Life',
      description:
        'This spell can only be cast by a wizard. A wizard may cast this spell immediately after a game in which a member of his warband has died. If successful, that figure is brought back to life, and may return to action in the very next game.',
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
