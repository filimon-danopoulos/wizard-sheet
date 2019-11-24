import Spell, { Category, School } from '../Spell'

export default class BindDemon extends Spell {
  constructor() {
    super({
      name: 'Bind Demon',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
