import Character from '../../Character'
import Resource from './Resource'

export default class CelestialTelescope extends Resource {
  public name: string = 'CelestialTelescope'
  public readonly type: string = 'celestialtelescope'
  public readonly cost: number = 250
  public apply(character: Character): void {}
}
