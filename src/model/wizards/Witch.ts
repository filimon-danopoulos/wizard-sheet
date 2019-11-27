import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Witch extends Wizard {
  public readonly type = 'witch' as string
  public readonly description = 'Witch' as string

  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Witchcraft,
      allignedSchools: [School.Enchanting, School.Necromancy, School.Summoning],
      neutralSchools: [
        School.Thaumaturgy,
        School.Illusionism,
        School.Elementalism,
        School.Sigilism,
        School.Chronomancy
      ],
      opposedSchool: School.Soothsaying
    })
  }
}
