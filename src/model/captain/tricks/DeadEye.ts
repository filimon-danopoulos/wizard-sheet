import Trick, { trickTiming } from './Trick'

export default class DeadEye extends Trick {
  public readonly type: string = 'deadeye'
  public readonly timing: trickTiming = 'After Rolls'
  public name: string = 'Dead Eye'
  public description: string = '+1 Shoot for one attack'
}
