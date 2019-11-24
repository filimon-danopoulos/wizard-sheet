import Spell, { Category, School } from '../Spell'

export default class FoolsGold extends Spell {
  constructor() {
    super({
      name: 'Fools Gold',
      description: '',
      school: School.Illusionism,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
}
