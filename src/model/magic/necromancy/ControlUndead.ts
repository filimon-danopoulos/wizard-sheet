import Spell, { Category, School } from '../Spell'

export default class ControlUndead extends Spell {
  constructor() {
    super({
      name: 'Control Undead',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
