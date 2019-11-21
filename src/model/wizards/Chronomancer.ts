import Wizard from './Wizard'
import { School } from '../magic/Spell'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Staff from '../items/basic/weapons/Staff'

export default class Chronomancer extends Wizard {
  public readonly type = 'chronomancer' as string
  constructor(name: string, weapon: Staff | HandWeapon) {
    super({
      name: name,
      description: 'Chronomancer',
      primarySchool: School.Chronomancy,
      allignedSchools: [School.Necromancy, School.Soothsaying, School.Elementalism],
      neutralSchools: [
        School.Thaumaturgy,
        School.Summoning,
        School.Illusionism,
        School.Witchcraft,
        School.Sigilism
      ],
      opposedSchool: School.Enchanting,
      weapon: weapon
    })
  }
}
