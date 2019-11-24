import Spell, { Category, School } from '../Spell'

export default class WriteScroll extends Spell {
  constructor() {
    super({
      name: 'Write Scroll',
      description: '',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
