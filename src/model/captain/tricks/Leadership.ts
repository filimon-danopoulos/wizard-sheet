import Trick, { trickTiming } from './Trick'

export default class LeaderShip extends Trick {
  public readonly type: string = 'leadership'
  public readonly timing: trickTiming = 'Upon Activation'
  public name: string = 'LeaderShip'
  public description: string =
    'If using a Group Activation, the captain may activate up to three soldiers within 3" who have not already been activated in the turn'
}
