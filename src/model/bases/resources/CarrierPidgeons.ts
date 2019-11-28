import Character from '../../Character'
import Resource from './Resource'

export default class CarrierPidgeons extends Resource {
  public name: string = 'CarrierPidgeons'
  public readonly type: string = 'carrierpidgeons'
  public readonly cost: number = 5
  public apply(character: Character): void {}
}
