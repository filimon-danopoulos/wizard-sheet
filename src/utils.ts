import Spell from './model/magic/Spell'
import Monster from './model/monsters/Monster'
import Undead from './model/monsters/undead/Undead'
import Item from './model/items/Item'
import Soldier from './model/soldiers/Soldier'
import Armour from './model/items/basic/armour/Armour'
import Weapon from './model/items/basic/weapons/Weapon'
import MagicItem from './model/items/magic/items/MagicItem'
import Wizard from './model/wizards/Wizard'
import Base from './model/bases/Base'
import Resource from './model/bases/resources/Resource'
import Trick from './model/captain/tricks/Trick'
import Character from './model/Character'
import Potion from './model/items/potions/Potion'
import SpellItem from './model/items/magic/SpellItem'
import Demon from './model/monsters/demons/Demon'
import Construct from './model/monsters/construct/Construct'
import Animal from './model/monsters/animals/Animal'
import Apprentice from './model/wizards/Apprentice'
import Captain from './model/captain/Captain'
import MagicWeapon from './model/items/magic/weapons/MagicWeapon'
import MagicArmour from './model/items/magic/armour/MagicArmour'

const restrictedImports = [
  // Bases
  Base,
  Resource,
  // Items
  Item,
  Armour,
  Weapon,
  Potion,
  MagicItem,
  MagicWeapon,
  MagicArmour,
  SpellItem,
  // Magic
  Spell,
  Trick,
  // Characters
  Character,
  Wizard,
  Soldier,
  Apprentice,
  Captain,
  // Monsters
  Monster,
  Undead,
  Demon,
  Construct,
  Animal
]

const cache = {
  wizards: [] as (new () => Wizard)[],
  items: [] as (new () => Item)[],
  monsters: [] as (new () => Monster)[],
  soldiers: [] as (new () => Soldier)[],
  spells: [] as (new () => Spell)[],
  tricks: [] as (new () => Trick)[]
}

function importAll(r: any, type: keyof typeof cache) {
  r.keys().forEach((key: string) => {
    const imported = r(key).default
    if (!restrictedImports.includes(imported)) {
      cache[type].push(imported)
    }
  })
}
importAll(require.context('@/model/wizards', true, /\.ts$/), 'wizards')
importAll(require.context('@/model/items', true, /\.ts$/), 'items')
importAll(require.context('@/model/monsters', true, /\.ts$/), 'monsters')
importAll(require.context('@/model/soldiers', true, /\.ts$/), 'soldiers')
importAll(require.context('@/model/magic', true, /\.ts$/), 'spells')
importAll(require.context('@/model/captain/tricks', true, /\.ts$/), 'tricks')

export function allWizards(): Wizard[] {
  return cache.wizards.map(wizard => new wizard())
}

export function allItems(): Item[] {
  return cache.items.map(item => new item())
}

export function allMonsters(): Monster[] {
  return cache.monsters.map(monster => new monster())
}

export function allSoldiers(): Soldier[] {
  return cache.soldiers.map(soldier => new soldier())
}

export function allSpells(): Spell[] {
  return cache.spells.map(spell => new spell())
}

export function allTricks(): Trick[] {
  return cache.tricks.map(trick => new trick())
}
