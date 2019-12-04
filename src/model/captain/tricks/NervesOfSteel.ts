import Trick, { trickTiming } from './Trick'

export default class NervesOfSteel extends Trick {
  public readonly type: string = 'nervesofsteel'
  public readonly timing: trickTiming = 'Before Rolls'
  public name: string = 'Nerves Of Steel'
  public description: string = '+4 Will for one Will Roll'
}
