import MagicItem from '@/model/items/magic/items/MagicItem'

export default class CandleOfSummoning extends MagicItem {
  public readonly type: string = 'candleofsummoning'
  public readonly name: string = 'Candle of Summoning'
  public readonly cost: number = 200
  public readonly description: string = 'The bearer gains +1 to the Summon Demon spell.'
}
