import Spell, { Category, School } from '../Spell'

export default class BonesOfTheEarth extends Spell {
  public readonly type: string = 'bonesoftheearth'
  constructor() {
    super({
      name: 'Bones of the Earth',
      description:
        'A skeletal hand reaches out of the ground and grabs the target’s ankle. The target is held fast and may not move. Any magic form of movement will allow the target to escape the hand. Otherwise, the only way to escape the hand is to fight. The hand has Fight +0 and Health 1. If the hand is damaged, it vanishes, and the target is free. This spell may only be cast against a target that is standing on ground level. The maximum range for this spell is 18”.',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new BonesOfTheEarth()
    spell.difficulty = this.difficulty
    return spell
  }
}
