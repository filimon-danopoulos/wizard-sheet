import Spell, { Category, School } from '../Spell'

export default class Telekinesis extends Spell {
  public readonly type: string = 'telekinesis'
  constructor() {
    super({
      name: 'Telekinesis',
      description:
        'The spellcaster may move any currently unclaimed treasure within 24” by up to 6” in any direction. As long as he can maintain line of sight to the treasure, he can move it over any terrain or obstacle. If the treasure moves out of line of sight, it immediately falls straight to the ground.',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Telekinesis()
    spell.difficulty = this.difficulty
    return spell
  }
}
