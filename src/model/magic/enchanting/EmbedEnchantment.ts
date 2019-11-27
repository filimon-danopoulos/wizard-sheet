import Spell, { Category, School } from '../Spell'

export default class EmbedEnchantment extends Spell {
  public readonly type: string = 'embedenchantment'
  constructor() {
    super({
      name: 'Embed Enchantment',
      description: '',
      school: School.Enchanting,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new EmbedEnchantment()
    spell.difficulty = this.difficulty
    return spell
  }
}
