import Spell, { Category, School } from '../Spell'

export default class AnimalCompanion extends Spell {
  constructor() {
    super({
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
}
