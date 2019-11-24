import Spell, { Category, School } from '../Spell'

export default class PlanarTear extends Spell {
  constructor() {
    super({
      name: 'Planar Tear',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
