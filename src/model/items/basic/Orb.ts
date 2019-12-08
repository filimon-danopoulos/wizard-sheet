import Item from '../Item'

export default class Orb extends Item {
  public readonly type: string = 'ring'
  public readonly name: string = 'Ring'
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(required)
  }
}
