import MagicItem from '@/model/items/magic/items/MagicItem'

export default class BannerOfCourage extends MagicItem {
  public readonly type: string = 'bannerofcourage'
  public readonly name: string = 'Banner Of Courage'
  public readonly cost: number = 300
  public readonly description: string =
    'All members of the bearer’s warband who are within 12” and in line of sight gain +1 to all Will rolls. A figure carrying the banner may not cast spells.'
}
