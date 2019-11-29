import Spell, { Category, School } from '../Spell'

export default class AnimalCompanion extends Spell {
  public readonly type: string = 'animalcompanion'
  constructor() {
    super({
      name: 'Animal Companion',
      description:
        'The spellcaster summons an animal companion of his choice from the following options to join his warband: Bear, Wolf, Snow Leopard, Ice Toad (see Chapter 6: Bestiary). The animal takes the place of a soldier for the purposes of maximum warband size. Animal companions may not collect treasure or carry items. They may be controlled by another spellcaster using the Control Animal spell, although they will re-join their original warband after the game. Animal companions are more strongwilled than wild examples of their species – give them +2 to the Will stat found in the appropriate Bestiary entry. A spellcaster may only have one animal companion at any time.',
      school: School.Witchcraft,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new AnimalCompanion()
    spell.difficulty = this.difficulty
    return spell
  }
}
