import Spell, { Category, School } from '../Spell'

export default class StealHealth extends Spell {
  constructor() {
    super({
      name: 'Steal Health',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
