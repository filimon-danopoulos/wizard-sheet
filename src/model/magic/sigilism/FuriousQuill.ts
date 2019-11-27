import Spell, { Category, School } from '../Spell'

export default class FuriousQuill extends Spell {
  public readonly type: string = 'furiousquill'
  constructor() {
    super({
      name: 'Furious Quill',
      description: '',
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new FuriousQuill()
    spell.difficulty = this.difficulty
    return spell
  }
}
