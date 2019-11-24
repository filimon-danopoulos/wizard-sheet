import Spell, { Category, School } from '../Spell'

export default class RevealDeath extends Spell {
  constructor() {
    super({
      name: 'Reveal Death',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
