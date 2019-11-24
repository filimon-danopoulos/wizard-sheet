import Spell, { Category, School } from '../Spell'

export default class ControlAnimal extends Spell {
  constructor() {
    super({
      name: 'COntrol Animal',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
