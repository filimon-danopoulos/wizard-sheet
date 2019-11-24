import Spell, { Category, School } from '../Spell'

export default class EmbedEnchantment extends Spell {
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
}
