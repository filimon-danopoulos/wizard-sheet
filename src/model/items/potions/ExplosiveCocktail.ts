import Potion from './Potion'
import Character from '../../Character'

export default class ExplosiveCocktail extends Potion {
  public readonly type = 'explosivecocktail' as string
  constructor() {
    super(50)
  }
}
