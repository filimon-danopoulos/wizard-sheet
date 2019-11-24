import Spell, { Category, School } from '../Spell'

export default class RaiseZombie extends Spell {
  constructor() {
    super({
      name: 'Raise Zombie',
      description: '',
      school: School.Necromancy,
      category: Category.OutOfGame & Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
}
