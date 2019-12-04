import Trick, { trickTiming } from './Trick'

export default class FuriousAttack extends Trick {
  public readonly type: string = 'furiousattack'
  public readonly timing: trickTiming = 'Before Rolls'
  public name: string = 'Furious Attack'
  public description: string = '+3 Fight for one attack'
}
