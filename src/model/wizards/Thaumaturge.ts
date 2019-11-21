import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Thaumaturge extends Wizard {
  public readonly type = 'thaumaturge' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Thaumaturge',
      primarySchool: School.Thaumaturgy,
      allignedSchools: [School.Soothsaying, School.Sigilism, School.Illusionism],
      neutralSchools: [
        School.Elementalism,
        School.Witchcraft,
        School.Chronomancy,
        School.Summoning,
        School.Enchanting
      ],
      opposedSchool: School.Necromancy,
      weapon: weapon
    })
  }
}
