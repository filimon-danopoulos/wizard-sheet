import Spell, { Category, School } from '../Spell'

export default class Crumble extends Spell {
  public readonly type: string = 'crumble'
  constructor() {
    super({
      name: 'Crumble',
      description:
        'This spell only works against man-made structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can effectively create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Will roll versus the casting roll, or fall to the next level down and taking damage appropriately.',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Crumble()
    spell.difficulty = this.difficulty
    return spell
  }
}
