import Item from './items/Item'
import Stat from './Stat'
import Health from './Health'
import Spell from './magic/Spell'
import Potion from './items/potions/Potion'
import JSONSerializable from './JSONSerializable'
import Armour from './items/basic/armour/Armour'
import Weapon from './items/basic/weapons/Weapon'

export interface ICharacterConfig {
  name?: string
  move: number
  fight: number
  shoot: number
  will: number
  health: number
  items: Item[]
  maxItems: number
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

export default abstract class Character extends JSONSerializable {
  public name: string = ''
  public abstract readonly description: string
  public abstract readonly move: Stat
  public abstract readonly fight: Stat
  public abstract readonly shoot: Stat
  public abstract readonly armour: Stat
  public abstract readonly will: Stat
  public abstract readonly health: Health
  public abstract readonly damage: Stat
  public abstract readonly save: Stat
  public abstract readonly maxItems: number
  public readonly effects: Effect[] = []
  public readonly items: Item[] = []

  public addEffect(effect: Effect) {
    if (!this.effects.includes(effect)) {
      this.effects.push(effect)
    }
  }

  public addItem(item: Item) {
    if (this.items.length < this.maxItems) {
      this.items.push(item)
      if (item instanceof Weapon || item instanceof Armour) {
        item.apply(this)
      }
    }
  }
}
