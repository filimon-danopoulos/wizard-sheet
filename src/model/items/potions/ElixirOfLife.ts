import Potion from './Potion'
import Character, { Effect } from '../../Character'

export default class ElixirOfLife extends Potion {
  public readonly type = 'elixiroflife' as string
  public readonly name = 'Elixir of Life' as string
  public readonly description = '' as string
  public readonly cost: number = 500
  constructor(required: boolean = false) {
    super(required)
  }
}
