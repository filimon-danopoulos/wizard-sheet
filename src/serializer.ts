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
import Warband from './model/Warband'
import Captain, { CaptainStatIncrease } from './model/captain/Captain'

export interface IWarbandRecord {
  wizard: IWizardRecord
  captain: ICaptainRecord | null
  base: IBaseRecord | null
  soldiers: ISoldierRecord[]
  vault: IItemRecord[]
  numberOfGames: number
  gold: number
}

export function serialize(warband: Warband): IWarbandRecord {
  return {
    wizard: serializeWizard(warband.wizard),
    captain: serializeCaptain(warband.captain),
    base: serializeBase(warband.base),
    soldiers: warband.soldiers.map(serializeSoldier),
    vault: serializeItems(warband.vault),
    numberOfGames: warband.numberOfGames,
    gold: warband.gold
  }
}
export function deserialize(json: IWarbandRecord): Warband {
  const wizard = parseWizard(json.wizard)
  const warband = new Warband(wizard)
  warband.base = json.base !== null ? parseBase(json.base) : null
  warband.captain = json.captain !== null ? parseCaptain(json.captain) : null
  json.soldiers.map(parseSoldier).forEach(soldier => {
    warband.soldiers.push(soldier)
  })
  json.vault.map(parseItem).forEach(item => {
    warband.vault.push(item)
  })
  warband.numberOfGames = json.numberOfGames
  warband.gold = json.gold
  return warband
}

export interface ICaptainRecord {
  name: string
  items: IItemRecord[]
  level: number
  experience: number
}
function serializeCaptain(captain: Captain | null): ICaptainRecord | null {
  if (captain === null) {
    return null
  }
  return {
    name: captain.name,
    items: serializeItems(captain.items),
    level: captain.level,
    experience: captain.experience
  }
}

function parseCaptain(json: ICaptainRecord): Captain {
  const captain = new Captain(CaptainStatIncrease.Fight)
  captain.name = json.name
  captain.level = json.level
  captain.experience = json.experience
  json.items.map(parseItem).forEach(item => captain.items.push(item))
  return captain
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
  experience: number
  level: number
  unspentPoints: number
  spells: ISpellRecord[]
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
    experience: wizard.experience,
    level: wizard.level,
    unspentPoints: wizard.unspentPoints,
    spells: wizard.spells.map(serializeSpell)
  }
}

function parseWizard(json: IWizardRecord): Wizard {
  const ctor = getWizardCtor(json.type)
  const wizard = new ctor(json.name)
  wizard.fight.base = json.fight
  wizard.health.base = json.health
  wizard.move.base = json.move
  wizard.shoot.base = json.shoot
  wizard.will.base = json.will
  wizard.level = json.level
  wizard.experience = json.experience
  wizard.unspentPoints = json.unspentPoints
  json.items.map(parseItem).forEach(item => wizard.items.push(item))
  json.spells.map(parseSpell).forEach(spell => wizard.spells.push(spell))
  wizard.apprentice = json.apprentice !== null ? parseApprentice(json.apprentice, wizard) : null
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
  const allItems = utils.allItems()
  const item = allItems.find(s => s.type === json.type)
  if (item) {
    return item
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

function getSpell(type: string): Spell {
  const allSpells = utils.allSpells()
  const spell = allSpells.find(s => s.type === type)
  if (spell) {
    return spell
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
