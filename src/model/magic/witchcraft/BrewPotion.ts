import Spell, { Category, School } from '../Spell'

export default class AnimalCompanion extends Spell {
  constructor() {
    super({
      name: 'Brew Potion',
      description: '',
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
