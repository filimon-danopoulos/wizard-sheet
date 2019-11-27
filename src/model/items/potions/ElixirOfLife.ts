import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class ElixirOfLife extends Potion {
  public readonly type = 'elixiroflife' as string
  public readonly name = 'Elixir of Life' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(500, required)
  }
}
