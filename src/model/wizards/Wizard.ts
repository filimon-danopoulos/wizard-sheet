import Character, { ISpellcaster } from '../Character'
import Spell, { School } from '../magic/Spell'
import Staff from '../items/basic/weapons/Staff'
import HandWeapon from '../items/basic/weapons/HandWeapon'
import Soldier from '../soldiers/Soldier'
import Apprentice from './Apprentice'

export interface IWizardConfig {
  description: string
  name: string
  primarySchool: School
  allignedSchools: School[]
  neutralSchools: School[]
  opposedSchool: School
  weapon: Staff | HandWeapon
}

const defaults = {
  move: 6,
  fight: 2,
  shoot: 0,
  will: 4,
  health: 14,
  maxEquipment: 5
}

export default abstract class Wizard extends Character implements ISpellcaster {
  private _level: number
  public get level(): number {
    return this._level
  }
  private _unspentPoints: number
  public get unspentPoints(): number {
    return this._unspentPoints
  }
  private _experience: number
  public get experience(): number {
    return this._experience
  }
  private _gold: number
  public get gold(): number {
    return this._gold
  }
  public readonly soldiers: Soldier[]
  private _apprentice: Apprentice | null
  public get apprentice(): Apprentice | null {
    return this._apprentice
  }

  private readonly primarySchool: School
  private readonly allignedSchools: School[]
  private readonly neutralSchools: School[]
  private readonly opposedSchool: School
  private _spells: Spell[]
  public get spells(): Spell[] {
    return this._spells.map(spell => {
      return new Spell({
        name: spell.name,
        description: spell.description,
        school: spell.school,
        category: spell.category,
        difficulty: this.calculateSpellDificulty(spell),
        effect: spell.effect
      })
    })
  }

  constructor(config: IWizardConfig) {
    super({
      ...defaults,
      description: config.description,
      name: config.name,
      items: [config.weapon]
    })
    this._apprentice = null
    this._level = 0
    this._unspentPoints = 0
    this._experience = 0
    this._gold = 500
    this.soldiers = []

    this.primarySchool = config.primarySchool
    this.allignedSchools = config.allignedSchools
    this.neutralSchools = config.neutralSchools
    this.opposedSchool = config.opposedSchool
    this._spells = []
  }

  public learnSpell(spell: Spell) {
    if (!this._spells.some(s => s instanceof spell.constructor)) {
      this._spells.push(spell)
    }
  }

  public hire(mercenary: Soldier | Apprentice) {
    if (this.gold < mercenary.cost) {
      return
    }
    if (mercenary instanceof Soldier) {
      this.soldiers.push(mercenary)
    } else {
      this._apprentice = mercenary
    }
    this._gold -= mercenary.cost
  }

  public dismiss(mercenary: Soldier | Apprentice) {
    if (mercenary instanceof Soldier && this.soldiers.includes(mercenary)) {
      this.soldiers.splice(this.soldiers.indexOf(mercenary), 1)
    } else if (this.apprentice === mercenary) {
      delete this._apprentice
    }
  }

  public grantExperience(experience: number) {
    this._experience += experience
    while (this._experience >= 100) {
      this._level += 1
      this._unspentPoints += 1
      this._experience -= 100
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
  public toJSON(): any {
    const data = super.toJSON()
    return Object.assign(data, {
      apprentice: this.apprentice && this.apprentice!.toJSON(),
      soldiers: this.soldiers.map(soldier => soldier.toJSON())
    })
  }
  public fromJSON(json: string): void {
    throw new Error('Method not implemented.')
  }
}
