import Spell, { Category, School } from '../Spell'

export default class RaiseZombie extends Spell {
  constructor() {
    super({
      school: School.Necromancy,
      category: Category.OutOfGame & Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
}
