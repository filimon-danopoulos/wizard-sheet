import MagicItem from '@/model/items/magic/items/MagicItem'

export default class HornOfDestruction extends MagicItem {
  public readonly type: string = 'hornofdestruction'
  public readonly name: string = 'Horn of Destruction'
  public readonly cost: number = 300
  public readonly description: string =
    'Once per game, the bearer may use one action to blow on the horn. Treat this as a successfully cast Crumble spell.'
}
