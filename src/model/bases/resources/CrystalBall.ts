import Character from '../../Character'
import Resource from './Resource'

export default class CrystalBall extends Resource {
  public name: string = 'Crystal Ball'
  public description: string = 'Confers a +1 on all Reveal Secret spells.'
  public readonly type: string = 'crystalball'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
