import Spell, { Category, School } from '../Spell'

export default class RestoreLife extends Spell {
  constructor() {
    super({
      school: School.Thaumaturgy,
      category: Category.OutOfGame,
      difficulty: 20,
      effect: ''
    })
  }
}
