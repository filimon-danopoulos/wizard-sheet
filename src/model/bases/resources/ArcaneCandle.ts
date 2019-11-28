import Character from '../../Character'
import Resource from './Resource'

export default class ArcaneCandle extends Resource {
  public name: string = 'ArcaneCandle'
  public readonly type: string = 'arcanecandle'
  public readonly cost: number = 100
  public apply(character: Character): void {}
}
