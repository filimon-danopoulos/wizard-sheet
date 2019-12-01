export enum MonsterAttribute {
  Immaterial,
  DrainLifeForce,
  ImmuneToNonMagicWeapons,
  Large,
  PackHunter,
  PowerfullJaws,
  HugeWeapon,
  Agile,
  Bounty,
  Venom
}

export default abstract class Monster {
  public abstract readonly name: string
  public abstract readonly move: number
  public abstract readonly fight: number
  public abstract readonly shoot: number
  public abstract readonly armour: number
  public abstract readonly will: number
  public abstract readonly health: number
  public readonly attributes: MonsterAttribute[] = []

  static attributeAsString(attribute: MonsterAttribute) {
    switch (attribute) {
      case MonsterAttribute.Immaterial:
        return 'Immaterial, can move through terrain.'
      case MonsterAttribute.DrainLifeForce:
        return 'Drain Life Force, attacks do double damage.'
      case MonsterAttribute.ImmuneToNonMagicWeapons:
        return 'Immune to non-magic weapons.'
      case MonsterAttribute.Large:
        return 'Large, shot at with a modifier of -2.'
      case MonsterAttribute.PackHunter:
        return 'Pack Hunter, if multiple are encountered they activate and move as one.'
      case MonsterAttribute.PowerfullJaws:
        return 'Powerful Jaws, attacks cause triple damage.'
      case MonsterAttribute.HugeWeapon:
        return 'Huge Weapon, treat as if armed with a two-handed weapon.'
      case MonsterAttribute.Agile:
        return 'Agile, treat difficult terrain as normal terrain.'
      case MonsterAttribute.Bounty:
        return 'Bounty, head can be sold for 20gc after the game.'
      case MonsterAttribute.Venom:
        return 'Venom, treat any human damaged by an ice spider as ’wounded’.'
    }
  }
}
