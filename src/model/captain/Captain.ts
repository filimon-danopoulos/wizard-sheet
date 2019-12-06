import Character, { IMercenary } from '../Character'
import Stat from '../Stat'
import Health from '../Health'
import Trick from './tricks/Trick'

export enum CaptainStatIncrease {
  Move,
  Fight,
  Shoot,
  Will,
  Health
}

export enum CaptainAdvancement {
  Health,
  Will
}

export default class Captain extends Character implements IMercenary {
  public readonly type: string = 'captain'
  public readonly description: string = 'Captain'
  public readonly cost: number = 100
  public readonly move: Stat = new Stat(6)
  public readonly fight: Stat = new Stat(2)
  public readonly shoot: Stat = new Stat(1)
  public readonly armour: Stat = new Stat(10)
  public readonly will: Stat = new Stat(3)
  public readonly health: Health = new Health(12)
  public readonly damage: Stat = new Stat(0)
  public readonly save: Stat = new Stat(0)
  public readonly tricks: Trick[] = []
  public readonly maxItems: number = 5
  public readonly advancements: CaptainAdvancement[] = []

  public level: number = 0
  public unspentPoints: number = 0
  public experience: number = 0

  constructor(increase: CaptainStatIncrease) {
    super()
    switch (increase) {
      case CaptainStatIncrease.Move:
        this.move.modify(1)
        break
      case CaptainStatIncrease.Fight:
        this.fight.modify(1)
        break
      case CaptainStatIncrease.Shoot:
        this.shoot.modify(1)
        break
      case CaptainStatIncrease.Will:
        this.will.modify(1)
        break
      case CaptainStatIncrease.Health:
        this.health.base += 2
        break
    }
  }

  public learnTrick(trick: Trick) {
    if (this.tricks.every(t => t.type !== trick.type) && this.unspentPoints > 0) {
      this.unspentPoints -= 1
      this.tricks.push(trick)
    }
  }

  public advance(advancements: CaptainAdvancement) {
    if (this.unspentPoints > 0) {
      if (advancements === CaptainAdvancement.Will) {
        if (this.advancements.includes(CaptainAdvancement.Will)) {
          return
        }
        this.will.modify(1)
      }
      if (advancements === CaptainAdvancement.Health) {
        if (this.advancements.filter(a => a === CaptainAdvancement.Health).length === 2) {
          return
        }
        this.health.base += 1
      }

      this.advancements.push(advancements)
      this.unspentPoints -= 1
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
}
