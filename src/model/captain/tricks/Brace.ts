import Trick, { trickTiming } from './Trick'

export default class Brace extends Trick {
  public readonly type: string = 'brace'
  public readonly timing: trickTiming = 'Before Rolls'
  public name: string = 'Brace'
  public description: string = '+3 Armour for one attack'
}
