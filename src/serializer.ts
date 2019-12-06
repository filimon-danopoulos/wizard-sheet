import Wizard from './model/wizards/Wizard'
import Chronomancer from './model/wizards/Chronomancer'
import Elementalist from './model/wizards/Elementalist'
import Enchanter from './model/wizards/Enchanter'
import Illusionist from './model/wizards/Illusionist'
import Necromancer from './model/wizards/Necromancer'
import Sigilist from './model/wizards/Sigilist'
import Soothsayer from './model/wizards/Soothsayer'
import Summoner from './model/wizards/Summoner'
import Thaumaturge from './model/wizards/Thaumaturge'
import Witch from './model/wizards/Witch'
import Character from './model/Character'
import Item from './model/items/Item'
import Apprentice from './model/wizards/Apprentice'
import Soldier from './model/soldiers/Soldier'
import Apothecary from './model/soldiers/Apothecary'
import Archer from './model/soldiers/Archer'
import Barbarian from './model/soldiers/Barbarian'
import Crossbowman from './model/soldiers/Crossbowman'
import Infantryman from './model/soldiers/Infantryman'
import Knight from './model/soldiers/Knight'
import ManAtArms from './model/soldiers/ManAtArms'
import Marksman from './model/soldiers/Marksman'
import Ranger from './model/soldiers/Ranger'
import Templar from './model/soldiers/Templar'
import Thief from './model/soldiers/Thief'
import Thug from './model/soldiers/Thug'
import Tracker from './model/soldiers/Tracker'
import TreassureHunter from './model/soldiers/TreassureHunter'
import WarHound from './model/soldiers/WarHound'
import LeatherArmour from './model/items/basic/armour/LeatherArmour'
import MailArmour from './model/items/basic/armour/MailArmour'
import Shield from './model/items/basic/armour/Shield'
import Bow from './model/items/basic/weapons/Bow'
import Crossbow from './model/items/basic/weapons/Crossbow'
import Dagger from './model/items/basic/weapons/Dagger'
import HandWeapon from './model/items/basic/weapons/HandWeapon'
import Staff from './model/items/basic/weapons/Staff'
import TwoHandedWeapon from './model/items/basic/weapons/TwoHandedWeapon'
import Unarmed from './model/items/basic/weapons/Unarmed'
import DemonInABottle from './model/items/potions/DemonInABottle'
import ElixirOfLife from './model/items/potions/ElixirOfLife'
import ElixirOfSpeed from './model/items/potions/ElixirOfSpeed'
import ExplosiveCocktail from './model/items/potions/ExplosiveCocktail'
import HealingPotion from './model/items/potions/HealingPotion'
import PotionOfInvisibility from './model/items/potions/PotionOfInvisibility'
import PotionOfInvulnerability from './model/items/potions/PotionOfInvulnerability'
import PotionOfStrength from './model/items/potions/PotionOfStrength'
import PotionOfTeleport from './model/items/potions/PotionOfTeleport'
import PotionOfThoughness from './model/items/potions/PotionOfToughness'
import Spell from './model/magic/Spell'
import Decay from './model/magic/chronomancy/Decay'
import Crumble from './model/magic/chronomancy/Crumble'
import FastAct from './model/magic/chronomancy/FastAct'
import FleetFeet from './model/magic/chronomancy/FleetFeet'
import Petrify from './model/magic/chronomancy/Petrify'
import Slow from './model/magic/chronomancy/Slow'
import TimeStone from './model/magic/chronomancy/TimeStone'
import TimeWalk from './model/magic/chronomancy/TimeWalk'
import CallStorm from './model/magic/elementalism/CallStorm'
import DestructiveSphere from './model/magic/elementalism/DestructiveSphere'
import ElementalBall from './model/magic/elementalism/ElementalBall'
import ElementalBolt from './model/magic/elementalism/ElementalBolt'
import ElementalHammer from './model/magic/elementalism/ElementalHammer'
import ElementalShield from './model/magic/elementalism/ElementalShield'
import ScatterShot from './model/magic/elementalism/ScatterShot'
import Wall from './model/magic/elementalism/Wall'
import AnimateConstruct from './model/magic/enchanting/AnimateConstruct'
import ControlConstruct from './model/magic/enchanting/ControlConstruct'
import EmbedEnchantment from './model/magic/enchanting/EmbedEnchantment'
import EnchantArmour from './model/magic/enchanting/EnchantArmour'
import EnchantWeapon from './model/magic/enchanting/EnchantWeapon'
import Grenade from './model/magic/enchanting/Grenade'
import Strength from './model/magic/enchanting/Strength'
import Telekinesis from './model/magic/enchanting/Telekinesis'
import Beauty from './model/magic/illusionism/Beauty'
import FoolsGold from './model/magic/illusionism/FoolsGold'
import Glow from './model/magic/illusionism/Glow'
import IllusionarySoldier from './model/magic/illusionism/IllusionarySoldier'
import Invisibility from './model/magic/illusionism/Invisibility'
import MonstrousForm from './model/magic/illusionism/MonstrousForm'
import Teleport from './model/magic/illusionism/Teleport'
import Transpose from './model/magic/illusionism/Transpose'
import BoneDart from './model/magic/necromancy/BoneDart'
import BonesOfTheEarth from './model/magic/necromancy/BonesOfTheEarth'
import ControlUndead from './model/magic/necromancy/ControlUndead'
import RaiseZombie from './model/magic/necromancy/RaiseZombie'
import RevealDeath from './model/magic/necromancy/RevealDeath'
import SpellEater from './model/magic/necromancy/SpellEater'
import StealHealth from './model/magic/necromancy/StealHealth'
import StrikeDead from './model/magic/necromancy/StrikeDead'
import AbsorbKnowledge from './model/magic/sigilism/AbsorbKnowledge'
import CreateGrimoire from './model/magic/sigilism/CreateGrimoire'
import DrainingWord from './model/magic/sigilism/DrainingWord'
import ExplosiveRune from './model/magic/sigilism/ExplosiveRune'
import FuriousQuill from './model/magic/sigilism/FuriousQuill'
import PowerWord from './model/magic/sigilism/PowerWord'
import Push from './model/magic/sigilism/Push'
import WriteScroll from './model/magic/sigilism/WriteScroll'
import Awareness from './model/magic/soothsaying/Awareness'
import CombatAwareness from './model/magic/soothsaying/CombatAwareness'
import ForgetSpell from './model/magic/soothsaying/ForgetSpell'
import MindControl from './model/magic/soothsaying/MindControl'
import RevealInvisible from './model/magic/soothsaying/RevealInvisible'
import RevealSecret from './model/magic/soothsaying/RevealSecret'
import WillPower from './model/magic/soothsaying/WillPower'
import WizardEye from './model/magic/soothsaying/WizardEye'
import BindDemon from './model/magic/summoning/BindDemon'
import Imp from './model/magic/summoning/Imp'
import Leap from './model/magic/summoning/Leap'
import PlagueOfInsects from './model/magic/summoning/PlagueOfInsects'
import PlanarTear from './model/magic/summoning/PlanarTear'
import Planewalk from './model/magic/summoning/Planewalk'
import Posses from './model/magic/summoning/Posses'
import SummonDemon from './model/magic/summoning/SummonDemon'
import Banish from './model/magic/thaumaturgy/Banish'
import BlindingLight from './model/magic/thaumaturgy/BlindingLight'
import CircleOfProtection from './model/magic/thaumaturgy/CircleOfProtection'
import Dispel from './model/magic/thaumaturgy/Dispel'
import Heal from './model/magic/thaumaturgy/Heal'
import MiraculousCure from './model/magic/thaumaturgy/MiraculousCure'
import RestoreLife from './model/magic/thaumaturgy/RestoreLife'
import ShieldSpell from './model/magic/thaumaturgy/Shield'
import AnimalCompanion from './model/magic/witchcraft/AnimalCompanion'
import BrewPotion from './model/magic/witchcraft/BrewPotion'
import ControlAnimal from './model/magic/witchcraft/ControlAnimal'
import Familiar from './model/magic/witchcraft/Familiar'
import Fog from './model/magic/witchcraft/Fog'
import Mud from './model/magic/witchcraft/Mud'
import Curse from './model/magic/witchcraft/Curse'
import PoisonDart from './model/magic/witchcraft/PoisonDart'
import Base from './model/bases/Base'
import Resource from './model/bases/resources/Resource'
import Inn from './model/bases/Inn'
import Brewery from './model/bases/Brewery'
import Crypt from './model/bases/Crypt'
import Laboratory from './model/bases/Laboratory'
import Library from './model/bases/Library'
import Temple from './model/bases/Temple'
import Tower from './model/bases/Tower'
import Treasury from './model/bases/Treasury'
import ArcaneCandle from './model/bases/resources/ArcaneCandle'
import CarrierPidgeons from './model/bases/resources/CarrierPidgeons'
import CelestialTelescope from './model/bases/resources/CelestialTelescope'
import CrystalBall from './model/bases/resources/CrystalBall'
import EnchantersWorkshop from './model/bases/resources/EnchantersWorkshop'
import GiantCauldron from './model/bases/resources/GiantCauldron'
import Kennel from './model/bases/resources/Kennel'
import SarcophagusOfHealing from './model/bases/resources/SarcophagusOfHealing'
import Scriptorium from './model/bases/resources/Scriptorium'
import SummoningCircle from './model/bases/resources/SummoningCircle'
import * as utils from '@/utils'

export function serialize(wizard: Wizard) {
  return serializeWizard(wizard)
}
export function deserialize(json: IWizardRecord): Wizard {
  return parseWizard(json)
}

export interface IWizardRecord {
  name: string
  move: number
  fight: number
  shoot: number
  will: number
  health: number
  items: IItemRecord[]
  type: string
  apprentice: IApprenticeRecord | null
  soldiers: ISoldierRecord[]
  gold: number
  experience: number
  level: number
  unspentPoints: number
  spells: ISpellRecord[]
  base: IBaseRecord | null
}

function serializeWizard(wizard: Wizard): IWizardRecord {
  return {
    name: wizard.name,
    move: wizard.move.base,
    fight: wizard.fight.base,
    shoot: wizard.shoot.base,
    will: wizard.will.base,
    health: wizard.health.base,
    items: serializeItems(wizard.items),
    type: wizard.type,
    apprentice: wizard.apprentice !== null ? serializeApprentice(wizard.apprentice) : null,
    soldiers: wizard.soldiers.map(serializeSoldier),
    gold: wizard.gold,
    experience: wizard.experience,
    level: wizard.level,
    unspentPoints: wizard.unspentPoints,
    spells: wizard.spells.map(serializeSpell),
    base: serializeBase(wizard.base)
  }
}

function parseWizard(json: IWizardRecord): Wizard {
  const ctor = getWizardCtor(json.type)
  const wizard = Wizard.load(ctor, {
    name: json.name,
    fight: json.fight,
    health: json.health,
    move: json.move,
    shoot: json.shoot,
    will: json.will,
    level: json.level,
    gold: json.gold,
    experience: json.experience,
    unspentPoints: json.unspentPoints,
    soldiers: json.soldiers.map(parseSoldier),
    items: json.items.map(parseItem),
    spells: json.spells.map(parseSpell),
    effects: []
  })
  wizard.apprentice = json.apprentice !== null ? parseApprentice(json.apprentice, wizard) : null
  wizard.base = json.base !== null ? parseBase(json.base) : null
  return wizard
}
function getWizardCtor(type: string): new (name: string) => Wizard {
  switch (type) {
    case 'chronomancer':
      return Chronomancer as new (name: string) => Chronomancer
    case 'elementalist':
      return Elementalist as new (name: string) => Elementalist
    case 'enchanter':
      return Enchanter as new (name: string) => Enchanter
    case 'illusionist':
      return Illusionist as new (name: string) => Illusionist
    case 'necromancer':
      return Necromancer as new (name: string) => Necromancer
    case 'sigilist':
      return Sigilist as new (name: string) => Sigilist
    case 'soothsayer':
      return Soothsayer as new (name: string) => Soothsayer
    case 'summoner':
      return Summoner as new (name: string) => Summoner
    case 'thaumaturge':
      return Thaumaturge as new (name: string) => Thaumaturge
    case 'witch':
      return Witch as new (name: string) => Witch
  }
  throw new Error(`Unknown wizard "${type}"`)
}

interface IApprenticeRecord {
  name: string
  items: IItemRecord[]
}

function serializeApprentice(apprentice: Apprentice) {
  return {
    name: apprentice.name,
    items: serializeItems(apprentice.items)
  }
}

function parseApprentice(json: IApprenticeRecord, wizard: Wizard) {
  const apprentice = new Apprentice(json.name, wizard)
  json.items.map(parseItem).forEach(item => apprentice.addItem(item))
  return apprentice
}

export interface ISoldierRecord {
  type: string
  items: IItemRecord[]
  name: string
}

function serializeSoldier(soldier: Soldier): ISoldierRecord {
  return {
    type: soldier.type,
    items: serializeItems(soldier.items),
    name: soldier.name
  }
}

function parseSoldier(json: ISoldierRecord): Soldier {
  const soldier = getSoldier(json.type)
  soldier.name = json.name
  return soldier
}

function getSoldier(type: string) {
  switch (type) {
    case 'apothecary':
      return new Apothecary()
    case 'archer':
      return new Archer()
    case 'barbarian':
      return new Barbarian()
    case 'crossbowman':
      return new Crossbowman()
    case 'infantryman':
      return new Infantryman()
    case 'knight':
      return new Knight()
    case 'manatarms':
      return new ManAtArms()
    case 'marksman':
      return new Marksman()
    case 'ranger':
      return new Ranger()
    case 'templar':
      return new Templar()
    case 'thief':
      return new Thief()
    case 'thug':
      return new Thug()
    case 'tracker':
      return new Tracker()
    case 'treassurehunter':
      return new TreassureHunter()
    case 'warhound':
      return new WarHound()
  }
  throw new Error(`Unknown soldier "${type}"`)
}

export interface IItemRecord {
  type: string
  required: boolean
}

function serializeItems(items: Item[]): IItemRecord[] {
  return items
    .filter(item => !item.required)
    .map(item => ({
      type: item.type,
      required: item.required
    }))
}

function parseItem(json: IItemRecord): Item {
  switch (json.type) {
    case 'leatherarmour':
      return new LeatherArmour(json.required)
    case 'mainarmour':
      return new MailArmour(json.required)
    case 'shield':
      return new Shield(json.required)
    case 'bow':
      return new Bow(json.required)
    case 'crossbow':
      return new Crossbow(json.required)
    case 'dagger':
      return new Dagger(json.required)
    case 'handweapon':
      return new HandWeapon(json.required)
    case 'staff':
      return new Staff(json.required)
    case 'twohandedweapon':
      return new TwoHandedWeapon(json.required)
    case 'unarmed':
      return new Unarmed(json.required)
    case 'demoninabottle':
      return new DemonInABottle(json.required)
    case 'elixiroflife':
      return new ElixirOfLife(json.required)
    case 'elixirofspeed':
      return new ElixirOfSpeed(json.required)
    case 'explosivecocktail':
      return new ExplosiveCocktail(json.required)
    case 'healingpotion':
      return new HealingPotion(json.required)
    case 'potionofinvisibility':
      return new PotionOfInvisibility(json.required)
    case 'potionofinvulnerability':
      return new PotionOfInvulnerability(json.required)
    case 'potionofstrength':
      return new PotionOfStrength(json.required)
    case 'potionofteleport':
      return new PotionOfTeleport(json.required)
    case 'potionofthoughness':
      return new PotionOfThoughness(json.required)
  }
  throw new Error(`Unknown item "${json.type}"`)
}

interface ISpellRecord {
  type: string
  difficulty: number
}

function serializeSpell(spell: Spell) {
  return {
    type: spell.type,
    difficulty: spell.difficulty
  }
}

function parseSpell(json: ISpellRecord): Spell {
  const spell = getSpell(json.type)
  spell.difficulty = json.difficulty
  return spell
}

const allSpells = utils.allSpells()
function getSpell(type: string): Spell {
  const spell = allSpells.find(s => s.type === type)
  if (spell) {
    return spell.copy()
  }
  throw new Error(`Unknown spell "${type}"`)
}

export interface IBaseRecord {
  type: string
  vault: IItemRecord[]
  resources: IResourceRecord[]
}

function serializeBase(base: Base | null): IBaseRecord | null {
  if (base === null) {
    return null
  }
  return {
    type: base.type,
    vault: serializeItems(base.vault),
    resources: serializeResources(base.resources)
  }
}

function parseBase(json: IBaseRecord): Base {
  const base = getBase(json.type)
  json.resources.map(parseResource).forEach(resource => {
    base.resources.push(resource)
  })
  json.vault.map(parseItem).forEach(item => {
    base.vault.push(item)
  })
  return base
}

function getBase(type: string): Base {
  switch (type) {
    case 'brewery':
      return new Brewery()
    case 'crypt':
      return new Crypt()
    case 'inn':
      return new Inn()
    case 'laboratory':
      return new Laboratory()
    case 'library':
      return new Library()
    case 'temple':
      return new Temple()
    case 'tower':
      return new Tower()
    case 'treasury':
      return new Treasury()
  }
  throw new Error(`Unknown base "${type}"`)
}

export interface IResourceRecord {
  type: string
}

function serializeResources(resources: Resource[]): IResourceRecord[] {
  return resources.map(resource => ({
    type: resource.type
  }))
}

function parseResource(json: IResourceRecord): Resource {
  switch (json.type) {
    case 'arcanecandle':
      return new ArcaneCandle()
    case 'carrierpidgeons':
      return new CarrierPidgeons()
    case 'celestialtelescope':
      return new CelestialTelescope()
    case 'crystalball':
      return new CrystalBall()
    case 'enchantersworkshop':
      return new EnchantersWorkshop()
    case 'giantcauldron':
      return new GiantCauldron()
    case 'kennel':
      return new Kennel()
    case 'sarcophagusofhealing':
      return new SarcophagusOfHealing()
    case 'scriptorium':
      return new Scriptorium()
    case 'summoningcircle':
      return new SummoningCircle()
  }
  throw new Error(`Unknown record "${json.type}"`)
}

;(window as any).parseWizard = parseWizard
