import Character from '../../Character'
import Resource from './Resource'

export default class SummoningCircle extends Resource {
  public name: string = 'Summoning Circle'
  public description: string =
    'A summoning circle allows the wizard to cast Summon Demon spells Out of Game. In such a case, the wizard may attempt to cast Summon Demon, followed by Bind Demon. If both spells are successful, the demon joins the wizard’s warband for the next game only. This demon does not count towards the warband’s maximum size. The wizard may not cast Bind Demon while this demon is in play.'
  public readonly type: string = 'summoningcircle'
  public readonly cost: number = 300
  public apply(character: Character): void {}
}
