import Spell, { Category, School } from '../Spell'

export default class BonesOfTheEarth extends Spell {
  constructor() {
    super({
      name: 'Bones of the Earth',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
