import Character from '../../Character'
import Resource from './Resource'

export default class CrystalBall extends Resource {
  public name: string = 'Crystal Ball'
  public description: string = '+1 when casting Reveal Secrets'
  public readonly type: string = 'crystalball'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
