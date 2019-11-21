import Spell, { Category, School } from '../Spell'

export default class WriteScroll extends Spell {
  constructor() {
    super({
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
