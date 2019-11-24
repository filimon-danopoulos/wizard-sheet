import Spell, { Category, School } from '../Spell'

export default class Mud extends Spell {
  constructor() {
    super({
      name: 'Mud',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
