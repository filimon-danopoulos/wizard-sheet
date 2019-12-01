import Item from '../Item'
import Character, { Effect } from '@/model/Character'

export enum MagicItemEffect {
  OneDamage,
  TwoDamage,
  OneFight,
  TwoFight,
  OneShoot,
  OneArmour
}

export default abstract class MagicItem extends Item {
  public abstract readonly baseItem: Item
  public readonly effect: MagicItemEffect

  constructor(effect: MagicItemEffect) {
    super(false)
    this.effect = effect
  }

  public apply(character: Character) {
    this.baseItem.apply(character)
    this.applyEffect(this.effect, character)
  }

  public remove(character: Character) {
    this.baseItem.remove(character)
    this.removeEffect(this.effect, character)
  }

  private applyEffect(effect: MagicItemEffect, character: Character) {
    switch (effect) {
      case MagicItemEffect.OneDamage:
        character.damage.modify(1)
        break
      case MagicItemEffect.TwoDamage:
        character.damage.modify(2)
        break
      case MagicItemEffect.OneFight:
        character.fight.modify(1)
        break
      case MagicItemEffect.TwoFight:
        character.fight.modify(2)
        break
      case MagicItemEffect.OneShoot:
        character.shoot.modify(1)
        break
      case MagicItemEffect.OneArmour:
        character.armour.modify(1)
        break
    }
  }

  private removeEffect(effect: MagicItemEffect, character: Character) {
    switch (effect) {
      case MagicItemEffect.OneDamage:
        character.damage.modify(-1)
        break
      case MagicItemEffect.TwoDamage:
        character.damage.modify(-2)
        break
      case MagicItemEffect.OneFight:
        character.fight.modify(-1)
        break
      case MagicItemEffect.TwoFight:
        character.fight.modify(-2)
        break
      case MagicItemEffect.OneShoot:
        character.shoot.modify(-1)
        break
      case MagicItemEffect.OneArmour:
        character.armour.modify(-1)
        break
    }
  }
}
