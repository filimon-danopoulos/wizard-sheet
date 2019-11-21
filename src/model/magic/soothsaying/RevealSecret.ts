import Spell, { Category, School } from '../Spell'

export default class RevealSecret extends Spell {
  constructor() {
    super({
      school: School.Soothsaying,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
