import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class ElixirOfLife extends Potion {
  public readonly type = 'elixiroflife' as string
  constructor() {
    super(500)
  }
}
