import Spell, { Category, School } from '../Spell'

export default class BlindingLight extends Spell {
  constructor() {
    super({
      name: 'Binding Light',
      description: '',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
