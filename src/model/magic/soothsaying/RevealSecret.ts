import Spell, { Category, School } from '../Spell'
import RevealInvisible from './RevealInvisible'

export default class RevealSecret extends Spell {
  public readonly type: string = 'revealsecret'
  constructor() {
    super({
      name: 'Reveal Secret',
      description:
        'This spell reveals the location of secret treasure, and may be cast immediately before a game. If successful, the spellcaster’s warband may place one additional treasure token within 6” of their deployment area. Only one extra treasure per warband may be placed in this way each game.',
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
