import Character, { ISpellcaster, Effect } from '../Character'
import Spell, { School } from '../magic/Spell'
import Soldier from '../soldiers/Soldier'
import Apprentice from './Apprentice'
import Item from '../items/Item'
import Stat from '../Stat'
import Health from '../Health'

export interface IWizardConfig {
  name: string
  primarySchool: School
  allignedSchools: School[]
  neutralSchools: School[]
  opposedSchool: School
}

export default abstract class Wizard extends Character implements ISpellcaster {
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(2, 5)
  public readonly shoot: Stat = new Stat(0, 5)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(4, 8)
  public readonly health: Health = new Health(14, 20)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly maxItems: number = 5

  public level: number = 0
  public unspentPoints: number = 0
  public experience: number = 0
  public apprentice: Apprentice | null = null
  public readonly spells: Spell[] = []

  public primarySchool: School
  public allignedSchools: School[]
  public neutralSchools: School[]
  public opposedSchool: School

  constructor(config: IWizardConfig) {
    super()
    this.name = config.name
    this.primarySchool = config.primarySchool
    this.allignedSchools = config.allignedSchools
    this.neutralSchools = config.neutralSchools
    this.opposedSchool = config.opposedSchool
  }

  public learnSpell(spell: Spell) {
    if (!this.spells.some(s => s instanceof spell.constructor)) {
      spell.difficulty = this.calculateSpellDificulty(spell)
      this.spells.push(spell)
    }
  }

  public grantExperience(experience: number) {
    this.experience += experience
    while (this.experience >= 100) {
      this.level += 1
      this.unspentPoints += 1
      this.experience -= 100
    }
  }

  private calculateSpellDificulty(spell: Spell): number {
    let difficulty = spell.difficulty
    if (spell.school === this.opposedSchool) {
      difficulty += 6
    } else if (this.neutralSchools.includes(spell.school)) {
      difficulty += 4
    } else if (this.allignedSchools.includes(spell.school)) {
      difficulty += 2
    }
    return difficulty
  }
}
