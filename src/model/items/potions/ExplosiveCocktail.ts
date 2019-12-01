import Potion from './Potion'
import Character from '../../Character'

export default class ExplosiveCocktail extends Potion {
  public readonly type = 'explosivecocktail' as string
  public readonly name = 'Explosive Coktail' as string
  public readonly description = '' as string
  public readonly cost: number = 50
  constructor(required: boolean = false) {
    super(required)
  }
}
