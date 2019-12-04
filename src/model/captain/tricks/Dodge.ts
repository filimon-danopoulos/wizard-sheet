import Trick, { trickTiming } from './Trick'

export default class Dodge extends Trick {
  public readonly type: string = 'dodge'
  public readonly timing: trickTiming = 'After Rolls'
  public name: string = 'Dodge'
  public description: string = '+1 Armour for one attack'
}
