import Spell, { Category, School } from '../Spell'

export default class RevealSecret extends Spell {
  constructor() {
    super({
      name: 'Reveal Secret',
      description: '',
      school: School.Soothsaying,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
