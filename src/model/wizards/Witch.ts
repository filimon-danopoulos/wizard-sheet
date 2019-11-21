import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Witch extends Wizard {
  public readonly type = 'witch' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Witch',
      primarySchool: School.Witchcraft,
      allignedSchools: [School.Enchanting, School.Necromancy, School.Summoning],
      neutralSchools: [
        School.Thaumaturgy,
        School.Illusionism,
        School.Elementalism,
        School.Sigilism,
        School.Chronomancy
      ],
      opposedSchool: School.Soothsaying,
      weapon: weapon
    })
  }
}
