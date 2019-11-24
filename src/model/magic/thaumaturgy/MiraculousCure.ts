import Spell, { Category, School } from '../Spell'

export default class MiraculousCure extends Spell {
  constructor() {
    super({
      name: 'Miraculous Cure',
      description: '',
      school: School.Thaumaturgy,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
