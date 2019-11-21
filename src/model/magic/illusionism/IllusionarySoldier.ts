import Spell, { Category, School } from '../Spell'

export default class IllusionarySoldier extends Spell {
  constructor() {
    super({
      school: School.Illusionism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
