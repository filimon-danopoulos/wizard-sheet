import Item from './items/Item'
import Stat from './Stat'
import Health from './Health'
import Spell from './magic/Spell'
import Potion from './items/potions/Potion'
import JSONSerializable from './JSONSerializable'

export interface ICharacterConfig {
  description: string
  name?: string
  race?: Race
  move: number
  fight: number
  shoot: number
  will: number
  health: number
  items: Item[]
  maxEquipment: number
}

export interface IMercenary {
  readonly cost: number
}

export interface ISpellcaster {
  readonly spells: Spell[]
}

export enum Effect {
  Invisible,
  Invulnerable
}

export enum Race {
  Hunamoid,
  Animal
}

export default abstract class Character extends JSONSerializable {
  protected _name: string
  public get name(): string {
    return this._name
  }
  protected _description: string
  public get description(): string {
    return this._description
  }
  protected _race: Race
  public get race(): Race {
    return this._race
  }
  protected _move: Stat
  public get move(): Stat {
    return this._move
  }
  protected _fight: Stat
  public get fight(): Stat {
    return this._fight
  }
  protected _shoot: Stat
  public get shoot(): Stat {
    return this._shoot
  }
  protected _armour: Stat
  public get armour(): Stat {
    return this._armour
  }
  protected _will: Stat
  public get will(): Stat {
    return this._will
  }
  protected _health: Health
  public get health(): Health {
    return this._health
  }
  protected _damage: Stat
  public get damage(): Stat {
    return this._damage
  }
  protected _save: Stat
  public get save(): Stat {
    return this._save
  }
  protected _effects: Effect[]
  public get effects(): Effect[] {
    return this._effects
  }
  protected _items: Item[]
  public get items(): Item[] {
    return this._items
  }
  protected _maxEquipment: number
  public get maxEquipment(): number {
    return this._maxEquipment
  }

  constructor(config: ICharacterConfig) {
    super()
    this._name = typeof config.name !== 'undefined' ? config.name : ''
    this._race = typeof config.race !== 'undefined' ? config.race : Race.Hunamoid
    this._move = new Stat(config.move)
    this._fight = new Stat(config.fight)
    this._shoot = new Stat(config.shoot)
    this._will = new Stat(config.will)
    this._health = new Health(config.health)
    this._damage = new Stat(0)
    this._save = new Stat(0)
    this._armour = new Stat(10)
    this._effects = []
    this._items = config.items
    this._maxEquipment = config.maxEquipment
    this._description = config.description
    this.applyEquipment()
  }

  private applyEquipment(): void {
    this.items
      .filter(equipment => !(equipment instanceof Potion))
      .forEach(equipment => equipment.apply(this))
  }

  public addEffect(effect: Effect) {
    if (!this.effects.includes(effect)) {
      this.effects.push(effect)
    }
  }
  public toJSON(): string {
    return JSON.stringify({
      type: this.type,
      name: this.name
    })
  }
  public fromJSON(json: string): void {
    const data = JSON.parse(json)
    this._name = data.name
  }
}
