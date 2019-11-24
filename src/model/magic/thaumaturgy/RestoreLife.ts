import Spell, { Category, School } from '../Spell'

export default class RestoreLife extends Spell {
  constructor() {
    super({
      name: 'Restore Life',
      description: '',
      school: School.Thaumaturgy,
      category: Category.OutOfGame,
      difficulty: 20,
      effect: ''
    })
  }
}
