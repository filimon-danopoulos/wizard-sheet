import Spell, { Category, School } from '../Spell'

export default class AnimateConstruct extends Spell {
  constructor() {
    super({
      name: 'Animate Construct',
      description: '',
      school: School.Enchanting,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
}
