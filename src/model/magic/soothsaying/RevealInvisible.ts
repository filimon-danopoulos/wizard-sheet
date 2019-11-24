import Spell, { Category, School } from '../Spell'

export default class RevealInvisible extends Spell {
  constructor() {
    super({
      name: 'Reveal Invisible',
      description: '',
      school: School.Soothsaying,
      category: Category.AreaEffect,
      difficulty: 8,
      effect: ''
    })
  }
}
