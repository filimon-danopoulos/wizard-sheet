import Spell, { Category, School } from '../Spell'

export default class CreateGrimoire extends Spell {
  constructor() {
    super({
      name: 'Create Grimoire',
      description: '',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
