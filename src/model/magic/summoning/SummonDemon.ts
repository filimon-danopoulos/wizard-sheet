import Spell, { Category, School } from '../Spell'

export default class SummonDemon extends Spell {
  constructor() {
    super({
      name: 'Summon Demon',
      description: '',
      school: School.Summoning,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
}
