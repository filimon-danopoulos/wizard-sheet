import Spell, { Category, School } from '../Spell'

export default class AbsorbKnowledge extends Spell {
  constructor() {
    super({
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
}
