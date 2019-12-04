import Trick, { trickTiming } from './Trick'

export default class CoupeDeGrace extends Trick {
  public readonly type: string = 'coupedegrace'
  public readonly timing: trickTiming = 'After Damage is Calculated'
  public name: string = 'Coupe de Grâce'
  public description: string =
    '+2 Damage to any hand-to-hand attack that has dealt at least 1 point of damage'
}
