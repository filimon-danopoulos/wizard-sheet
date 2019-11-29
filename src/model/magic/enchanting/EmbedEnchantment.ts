import Spell, { Category, School } from '../Spell'

export default class EmbedEnchantment extends Spell {
  public readonly type: string = 'embedenchantment'
  constructor() {
    super({
      name: 'Embed Enchantment',
      description:
        'This spell causes any Enchant Armour or Enchant Weapon spell that is still active at the end of a game, to become permanent, and the weapon or armour in question to become a magic item. Alternatively, a spellcaster may cast either of those spells after a game (even though neither are usually an Out of Game spell), immediately followed by Embed Enchantment. If both spells are successful, the item becomes permanently enchanted.',
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
