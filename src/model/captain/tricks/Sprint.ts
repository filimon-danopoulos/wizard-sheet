import Trick, { trickTiming } from './Trick'

export default class Sprint extends Trick {
  public readonly type: string = 'sprint'
  public readonly timing: trickTiming = 'Upon Activation'
  public name: string = 'Sprint'
  public description: string = '+2 Move for the rest of the turn'
}
