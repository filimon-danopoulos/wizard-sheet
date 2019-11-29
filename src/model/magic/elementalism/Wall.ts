import Spell, { Category, School } from '../Spell'

export default class Wall extends Spell {
  public readonly type: string = 'wall'
  constructor() {
    super({
      name: 'Wall',
      description:
        'This spell creates an impenetrable 6”-long, 3”-high wall within 6” of the spellcaster. At the end of each following turn, roll a d20 – on a 17+ the wall vanishes.',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Wall()
    spell.difficulty = this.difficulty
    return spell
  }
}
