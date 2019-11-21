import Character, { ICharacterConfig, IMercenary } from '../Character'

export interface ISoldierCofig extends ICharacterConfig {
  cost: number
  notes: string
}

export default abstract class Soldier extends Character implements IMercenary {
  public readonly cost: number
  public readonly notes: string

  constructor(config: ISoldierCofig) {
    super(config)
    this.cost = config.cost
    this.notes = config.notes
  }
}
