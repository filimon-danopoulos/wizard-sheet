import Spell, { Category, School } from '../Spell'

export default class FuriousQuill extends Spell {
  constructor() {
    super({
      name: 'Furious Quill',
      description: '',
      school: School.Sigilism,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
}
