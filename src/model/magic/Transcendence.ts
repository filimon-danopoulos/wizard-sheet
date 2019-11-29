import Spell, { School, Category } from './Spell'

export default class Transcendence extends Spell {
  public type: string = 'transendence'
  constructor() {
    super({
      name: 'Transcendence',
      difficulty: 20,
      effect: '',
      school: School.All,
      category: Category.OutOfGame,
      description:
        'Only a wizard may cast Transcendence. This spell has no specific school of wizardry, so the modifiers for aligned, neutral and opposed schools do not apply. After each game, a wizard may make one attempt to cast Transcendence. If the spell succeeds, the wizard is immediately transported to a higher plane of existence and has essentially ‘won’ the campaign. Players must decide amongst themselves if they should declare the campaign over, or if they should continue with the remaining wizards to see if any of them can also obtain Transcendence. In such a case, the player who has just won should be allowed to create a new wizard and warband (probably at a somewhat more advanced level) in order to continue playing. With the other players’ agreement, he can promote his apprentice to be his new wizard, but this apprentice will be so close to reaching Transcendence himself that it may seem a bit redundant'
    })
  }
  public copy(): Spell {
    const spell = new Transcendence()
    spell.difficulty = this.difficulty
    return spell
  }
}
