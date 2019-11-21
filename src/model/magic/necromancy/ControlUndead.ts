import Spell, { Category, School } from '../Spell'

export default class ControlUndead extends Spell {
  constructor() {
    super({
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
