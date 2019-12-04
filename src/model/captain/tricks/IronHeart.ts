import Trick, { trickTiming } from './Trick'

export default class IronHeart extends Trick {
  public readonly type: string = 'ironheart'
  public readonly timing: trickTiming = 'After Rolls'
  public name: string = 'IronHeart'
  public description: string = '+2 Will for one Will Roll'
}
