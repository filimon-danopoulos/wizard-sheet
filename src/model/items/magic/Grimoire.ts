import SpellItem from './SpellItem'

export default class Grimoire extends SpellItem {
  public readonly name: string = 'Grimoire'
  public readonly type: string = 'grimoire'
  public readonly description: string = ''
  public readonly cost: number = 500
}
