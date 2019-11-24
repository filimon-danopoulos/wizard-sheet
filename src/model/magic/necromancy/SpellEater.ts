import Spell, { Category, School } from '../Spell'

export default class SpellEater extends Spell {
  constructor() {
    super({
      name: 'Spell Eater',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
