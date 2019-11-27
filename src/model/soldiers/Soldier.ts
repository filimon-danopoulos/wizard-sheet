import Character, { ICharacterConfig, IMercenary } from '../Character'
import Item from '../items/Item'

export default abstract class Soldier extends Character implements IMercenary {
  public abstract readonly cost: number
}
