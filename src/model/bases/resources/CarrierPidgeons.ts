import Character from '../../Character'
import Resource from './Resource'

export default class CarrierPidgeons extends Resource {
  public name: string = 'Carrier Pidgeons'
  public description: string = 'Soldiers cost 1gc less'
  public readonly type: string = 'carrierpidgeons'
  public readonly cost: number = 5
  public apply(character: Character): void {}
}
