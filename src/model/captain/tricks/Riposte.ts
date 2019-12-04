import Trick, { trickTiming } from './Trick'

export default class Riposte extends Trick {
  public readonly type: string = 'riposte'
  public readonly timing: trickTiming = 'After Rolls'
  public name: string = 'Riposte'
  public description: string = '+1 Fight for one attack'
}
