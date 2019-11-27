import Wizard from './Wizard'
import { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'

export default class Necromancer extends Wizard {
  public readonly type = 'necromancer' as string
  public readonly description = 'Necromancer' as string

  constructor(name: string) {
    super({
      name: name,
      primarySchool: School.Necromancy,
      allignedSchools: [School.Witchcraft, School.Chronomancy, School.Summoning],
      neutralSchools: [
        School.Elementalism,
        School.Sigilism,
        School.Illusionism,
        School.Enchanting,
        School.Soothsaying
      ],
      opposedSchool: School.Thaumaturgy
    })
  }
}
