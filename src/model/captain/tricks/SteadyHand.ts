import Trick, { trickTiming } from './Trick'

export default class SteadyHand extends Trick {
  public readonly type: string = 'steadyhand'
  public readonly timing: trickTiming = 'Before Rolls'
  public name: string = 'Steady Hand'
  public description: string = '+3 Shoot for one attack'
}
