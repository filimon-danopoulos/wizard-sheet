import Spell, { Category, School } from '../Spell'
import RevealInvisible from './RevealInvisible'

export default class RevealSecret extends Spell {
  public readonly type: string = 'revealsecret'
  constructor() {
    super({
      name: 'Reveal Secret',
      description: '',
      school: School.Soothsaying,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new RevealInvisible()
    spell.difficulty = this.difficulty
    return spell
  }
}
