import Item from '../Item'

export default abstract class Potion extends Item {
  constructor(cost: number, required: boolean) {
    super(cost, required)
  }
}
