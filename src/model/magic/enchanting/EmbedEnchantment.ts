import Spell, { Category, School } from '../Spell'

export default class EmbedEnchantment extends Spell {
  constructor() {
    super({
      school: School.Enchanting,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
}
