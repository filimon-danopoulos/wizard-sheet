import Spell, { Category, School } from '../Spell'

export default class ScatterShot extends Spell {
  public readonly type: string = 'scattershot'
  constructor() {
    super({
      name: 'Scatter Shot',
      description: '',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ScatterShot()
    spell.difficulty = this.difficulty
    return spell
  }
}
