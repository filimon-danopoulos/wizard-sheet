import SpellItem from './SpellItem'

export default class Grimoire extends SpellItem {
  public readonly name: string = 'Scroll'
  public readonly type: string = 'scroll'
  public readonly description: string = ''
  public readonly cost: number = 500
}
