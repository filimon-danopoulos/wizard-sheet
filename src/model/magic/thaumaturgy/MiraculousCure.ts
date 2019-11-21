import Spell, { Category, School } from '../Spell'

export default class MiraculousCure extends Spell {
  constructor() {
    super({
      school: School.Thaumaturgy,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
