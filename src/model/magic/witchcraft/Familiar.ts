import Spell, { Category, School } from '../Spell'

export default class Familiar extends Spell {
  constructor() {
    super({
      name: 'Familiar',
      description: '',
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
}
