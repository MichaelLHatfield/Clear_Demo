//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.59;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.59] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *   option (only when selling).
 * - Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 *   - Default priority level is '50'.
 * - Items, weapons, and armors with higher priority values will be sorted
 *   higher up on the list while lower values will be lower on the list.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 * 
 * <Added EType: x>
 * <Added ETypes: x, x, x>
 * 
 * - Used for: Armor Notetags
 * - This is for armors only and does NOT work with weapons!
 * - Allows a piece of armor to belong to multiple ETypes. This means a glove
 *   can be equipped as "Armgear" or as an "Accessory" if you so choose.
 * - Replace 'x' with a number representing the ID of the EType you wish to add
 *   to the list of ETypes.
 *   - Insert multiple 'x' entries to add more than one EType ID.
 * 
 * ---
 * 
 * <Cursed>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this weapon or armor is equipped, it cannot manually be removed by the
 *   player until it is purified.
 * - To remove it, it must be done by event commands, script calls, or through
 *   the Purify-related Plugin Commands provided by this plugin.
 * - Once purified, the weapon or armor will become unequipped unless it has a
 *   purify transformation.
 *   - If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * - If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become cursed
 *   in order to allow free weapon swapping. Weaponry will not be cursed
 *   if VisuMZ_2_WeaponSwapSystem is installed.
 * 
 * ---
 * 
 * <Purify Transform: id>
 * <Purify Transform: name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this notetag is present on a <Cursed> weapon or armor, then upon the
 *   actor receiving purification, the weapon or armor will transform into a
 *   different item.
 * - Replace 'id' with a number representing the transformed weapon/armor's ID.
 * - Replace 'name' with text representing the transformed weapon/armor's name.
 * - Weapons can only transform into weapons.
 * - Armors can only transform into armors.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 * 
 * '''WARNING!''' If you are trying to calculate a value based off a full
 * parameter value, such as "ATK = user.atk * 0.10", it's going to break and
 * will cause an infinite loop. Use base parameter values instead.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following for skills and items:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'key' with one of the following for weapons and armors:
 *   - 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 *   - For those with VisuMZ_0_CoreEngine:
 *     - 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 *     - 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 *   - Only relevant if the Draw Style for equipment is "classic" or "double".
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - For clarity regarding "Damage Multiplier" and "HP Recovery"/"HP Damage":
 *   - "Damage Multiplier" refers to the amount determined by damage formulas.
 *   - "HP Recovery"/"HP Damage" refers to the "Recover HP" database effect.
 *   - Likewise, the same will apply to "MP Recovery"/"MP Damage" if the damage
 *     formula type is to deal MP recovery/damage instead.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 *   - When used with weapon or armor database objects, this information is
 *     only relevant if the Draw Style for equipment is "classic" or "double".
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Status Style: Compare>
 * <Status Style: Classic>
 * <Status Style: Double>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes up the way the shop status window displays data for this database
 *   object in particular.
 *     - Compare - Compares selected equip to equipped gear
 *       - Lists all main party actors
 *       - Displays the parameter differences when equipped
 *       - Calculates custom JS values
 *     - Classic - Shows basic parameters of selected equip
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 *     - Double - Shows basic parameters in double columns
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 * 
 * ---
 * 
 * <Custom Status Parameters: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Requires VisuMZ_0_CoreEngine!
 *   - This will not work otherwise!
 * - Customize which parameters are displayed for this equipment object's shop
 *   status window.
 *   - This ONLY applies to the shop status window and not other windows.
 * - Replace 'name' with any of the following to display custom parameters:
 *   - 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and 'LUK'
 *   - 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 *   - 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 *   - Does not work with custom parameters as those are calculated per actor.
 * - Parameters will be displayed in the order inserted into the notetag.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Purify Plugin Commands ===
 * 
 * ---
 * 
 * Purify: Target Actor(s)
 * - Purifies target actor(s) of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 * ---
 * 
 * Purify: Whole Party
 * - Purifies whole party of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 * 
 *     Sort By:
 *     - Sort this category (in Scene_Item and Scene_Shop only) this way.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *   Cursed Equip Popup:
 *   - Text popup appears when an actor equips a cursed weapon/armor.
 *   - Text codes allowed.
 *   - Requires VisuMZ_0_CoreEngine!
 *   - Empty to not use.
 *   -  %1 - Actor, %2 - Equip, %3 - Icon.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Data Style:
 *   - How do you wish to display equipment data?
 *     - Compare - Compares selected equip to equipped gear
 *       - Lists all main party actors
 *       - Displays the parameter differences when equipped
 *       - Calculates custom JS values
 *     - Classic - Shows basic parameters of selected equip
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 *     - Double - Shows basic parameters in double columns
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 * 
 *     Compare Style:
 * 
 *       Already Equipped:
 *       - Marker used to show an actor cannot equip an item.
 * 
 *       Can't Equip:
 *       - Marker used to show an actor cannot equip an item.
 * 
 *       No Changes:
 *       - Marker used to show no changes have occurred.
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *     Classic Style:
 * 
 *       Added Weapon Params:
 *       Added Armor Params:
 *       - Display these parameters when a weapon/armor is selected.
 *       - Requires VisuMZ_0_CoreEngine!
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *     Double Style:
 * 
 *       Added Weapon Params:
 *       Added Armor Params:
 *       - Display these parameters when a weapon/armor is selected.
 *       - Requires VisuMZ_0_CoreEngine!
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.59: October 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where a changed parameter in the equipment menu would
 *    accidentally highlight the next parameter's name. Fix made by Irina.
 * 
 * Version 1.58: February 20, 2025
 * * Bug Fixes!
 * ** Optimize no longer allows player to bypass the following notetags:
 *    <Equip Copy Limit: x>, <Equip Weapon Type Limit: x>, and
 *    <Equip Armor Type Limit: x>. Fix made by Arisu.
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Better compatibility with different icon sizes.
 * 
 * Version 1.57: January 16, 2025
 * * Bug Fixes!
 * ** Fixed an issue where certain icons were not aligning properly at
 *    different line height settings. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarity for <Status Info> notetag:
 * *** For clarity regarding "Damage Multiplier" and "HP Recovery"/"HP Damage":
 * **** "Damage Multiplier" refers to the amount determined by damage formulas.
 * **** "HP Recovery"/"HP Damage" refers to the "Recover HP" database effect.
 * **** Likewise, the same will apply to "MP Recovery"/"MP Damage" if the
 *      damage formula type is to deal MP recovery/damage instead.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Status Style: type>
 * **** Changes up the way the shop status window displays data for this
 *      database object in particular.
 * *** <Custom Status Parameters: name, name, name>
 * **** Customize which parameters are displayed for this equipment object's
 *      shop status window.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.56: December 19, 2024
 * * Bug Fixes!
 * ** Fixed a bug where newly added equipment would cause crashes upon
 *    interaction. Fix made by Irina.
 * 
 * Version 1.55: November 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where you can no longer attempt to equip an actor with zero
 *    equip slots and causing a crash. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated <Status Info>
 * *** Used for: Skill, Item, Weapon, Armor Notetags
 * **** Replace 'key' with one of the following for weapons and armors:
 * ***** 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 * ***** For those with VisuMZ_0_CoreEngine:
 * ****** 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 * ****** 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 * **** Only relevant if the Draw Style for equipment is "classic" or "double".
 * ** Updated <Custom Status Info> notetag:
 * *** Used for: Skill, Item, Weapon, Armor Notetags
 * **** When used with weapon or armor database objects, this information is
 *      only relevant if the Draw Style for equipment is "classic" or "double".
 * * New Feature!
 * ** New Plugin Parameters: 
 * *** Parameters > Shop Status Window > Data Style:
 * **** How do you wish to display equipment data?
 * ***** Compare - Compares selected equip to equipped gear
 * ****** Lists all main party actors
 * ****** Displays the parameter differences when equipped
 * ****** Calculates custom JS values
 * ***** Classic - Shows basic parameters of selected equip
 * ***** Double - Shows basic parameters in double columns
 * ****** Involves no actors, only shows the item's stats
 * ****** Shows weapon or armor specific parameters
 * ****** Does not show custom JS values as those are calculated per actor
 * ****** Does not show custom parameters as those are calculated per actor
 * ****** Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *        add custom data to classic equip data
 * **** Data Style > Classic Style:
 * **** Data Style > Double Style:
 * ***** Added Weapon Params
 * ***** Added Armor Params
 * ****** Display these parameters when a weapon/armor is selected.
 * ****** Requires VisuMZ_0_CoreEngine!
 * 
 * Version 1.54: October 17, 2024
 * * Feature Update!
 * ** If "Modern Controls" is selected while "Remove Equip" and "Optimize" are
 *    gone from the Equip Menu, right click will exit the menu. Feature added
 *    by Arisu.
 * 
 * Version 1.53: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added warning to <JS Parameters>:
 * *** If you are trying to calculate a value based off a full parameter value,
 *     such as "ATK = user.atk * 0.10", it's going to break and will cause an
 *     infinite loop. Use base parameter values instead.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *      option (only when selling).
 * **** Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 * **** Default priority level is '50'.
 * **** Items, weapons, and armors with higher priority values will be sorted
 *      higher up on the list while lower values will be lower on the list.
 * 
 * Version 1.52: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Item Categories > Category List > Category > Sorted By:
 * **** You can now sort specific item categories by ID or Name.
 * **** Only usable within Scene_Item and Scene_Shop.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.51: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an item is unequipped, it may cause a crash. Fix
 *    made by Arisu.
 * ** Fixed a bug where <Proxy: id> did not properly give the proxy item. Fix
 *    made by Arisu.
 * 
 * Version 1.50: November 16, 2023
 * * Bug Fixes!
 * ** <JS Buy Price> and <JS Sell Price> was not working properly. Fix made
 *    by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Cursed>
 * **** If this weapon or armor is equipped, it cannot manually be removed by
 *      the player until it is purified.
 * **** To remove it, it must be done by event commands, script calls, or
 *     through the Purify-related Plugin Commands provided by this plugin.
 * **** Once purified, the weapon or armor will become unequipped unless it has
 *     a purify transformation.
 * **** If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * **** If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become
 *      cursed in order to allow free weapon swapping. Weaponry will not be
 *      cursed if VisuMZ_2_WeaponSwapSystem is installed.
 * *** <Purify Transform: id>
 * *** <Purify Transform: name>
 * **** If this notetag is present on a <Cursed> weapon or armor, then upon the
 *      actor receiving purification, the weapon or armor will transform into a
 *      different item.
 * ** New Plugin Commands added by Arisu:
 * *** Purify: Target Actor(s)
 * **** Purifies target actor(s) of any cursed weapons or armors.
 * *** Purify: Whole Party
 * **** Purifies whole party of any cursed weapons or armors.
 * ** Added "Cursed Equip Popup" to Equip Scene Plugin Parameters.
 * *** Text popup appears when an actor equips a cursed weapon/armor.
 * ** Added "Ally or Enemy" or "Enemy or Ally" scopes to Shop Status Window
 *    Plugin Parameters.
 * *** If unused, will default to "1 Ally" or "1 Enemy" like usual.
 *     Added by Irina.
 * 
 * Version 1.49: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a problem where for weapon types, all weapon types are listed in
 *    the equip menu even when the actor cannot equip them (though they would
 *    be disabled). Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia and sponsored by AndyL:
 * *** <Added EType: x>
 * *** <Added ETypes: x, x, x>
 * **** This is for armors only and does NOT work with weapons!
 * **** Allows a piece of armor to belong to multiple ETypes. This means a
 *      glove can be equipped as "Armgear" or as an "Accessory" if you so
 *      choose.
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Purify
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyActors
 * @text Purify: Target Actor(s)
 * @desc Purifies target actor(s) of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyParty
 * @text Purify: Whole Party
 * @desc Purifies whole party of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nif (this.innerHeight > 444) {\\n    this.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\\n} else {\\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 2);\\n}\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    const standardWidth = ImageManager.standardIconWidth || 32;\\n    paramNameWidth += standardWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","CursedTextPopup:json":"\"%1 is cursed by %3%2!\"","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","equipCmdDesc:json":"\"Pick and choose equipment to change.\"","CommandAddOptimize:eval":"true","optimizeCmdDesc:json":"\"Equip the strongest available equipment.\"","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","clearCmdDesc:json":"\"Remove all available equipment.\"","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","EquipDataStyle:str":"compare","EquipDataCompare":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","EquipDataClassic":"","ClassicWeaponParameters:arraystr":"[\"HIT\"]","ClassicArmorParameters:arraystr":"[\"EVA\"]","DrawEquipClassicData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Item Weapon Type or Armor Type\\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\\n\\n// Draw Parameter Values\\nconst params = this.actorParams();\\nfor (const paramId of params) {\\n    if (this.isCustomParameter(paramId)) continue;\\n    this.drawActorParamClassic(paramId, x, y, width);\\n    y += lineHeight;\\n}\\n\\n// Draw Custom Entries\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","EquipDataDouble":"","DoubleWeaponParameters:arraystr":"[\"HIT\",\"CNT\"]","DoubleArmorParameters:arraystr":"[\"EVA\",\"GRD\"]","DrawEquipDoubleData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Item Weapon Type or Armor Type\\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\\n\\n// Draw Parameter Values\\nconst params = this.actorParams();\\nfor (const paramId of params) {\\n    if (this.isCustomParameter(paramId)) continue;\\n    this.drawActorParamClassic(paramId, x, y, hw);\\n    if (x === hw) {\\n        y += lineHeight;\\n        x = 0;\\n    } else {\\n        x = hw;\\n    }\\n}\\n// Realign\\nif (x === hw) {\\n    this.drawItemDarkRect(hw, y, hw, lineHeight);\\n    y += lineHeight;\\n    x = 0;\\n}\\n\\n// Draw Custom Entries\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","EquipDelayMS:num":"240","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","ScopeAllyOrEnemy:str":"Ally/Enemy","ScopeEnemyOrAlly:str":"Enemy/Ally","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes","EquipType":"","WeaponType:str":"Weapon Type","ArmorType:str":"Armor Type","NoEquipTypeResult:str":"-"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 * @param SortBy:str
 * @text Sorted By
 * @type select
 * @option ID
 * @option Name
 * @desc Sort this category (in Scene_Item and Scene_Shop only) this way.
 * @default ID
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nif (this.innerHeight > 444) {\n    this.drawActorClass(this._actor, x, dataY + lineHeight * 2);\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\n} else {\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 2);\n}"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    const standardWidth = ImageManager.standardIconWidth || 32;\n    paramNameWidth += standardWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param CursedTextPopup:json
 * @text Cursed Equip Popup
 * @parent General
 * @type note
 * @desc %1 - Actor, %2 - Equip, %3 - Icon. Text codes allowed.
 * Requires VisuMZ_0_CoreEngine! Empty to not use.
 * @default "%1 is cursed by %3%2!"
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 * 
 * @param EquipDataStyle:str
 * @text Data Style
 * @parent EquipData
 * @type select
 * @option Compare - Compares selected equip to equipped gear
 * @value compare
 * @option Classic - Shows basic parameters of selected equip
 * @value classic
 * @option Double - Shows basic parameters in double columns
 * @value double
 * @desc How do you wish to display equipment data?
 * @default compare
 *
 * @param EquipDataCompare
 * @text Compare Style
 * @parent EquipDataStyle:str
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipDataCompare
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipDataCompare
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipDataCompare
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataCompare
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param EquipDataClassic
 * @text Classic Style
 * @parent EquipDataStyle:str
 *
 * @param ClassicWeaponParameters:arraystr
 * @text Added Weapon Params
 * @parent EquipDataClassic
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc Display these parameters when a weapon is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["HIT"]
 *
 * @param ClassicArmorParameters:arraystr
 * @text Added Armor Params
 * @parent EquipDataClassic
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc Display these parameters when an armor is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["EVA"]
 *
 * @param DrawEquipClassicData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataClassic
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Item Weapon Type or Armor Type\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\n\n// Draw Parameter Values\nconst params = this.actorParams();\nfor (const paramId of params) {\n    if (this.isCustomParameter(paramId)) continue;\n    this.drawActorParamClassic(paramId, x, y, width);\n    y += lineHeight;\n}\n\n// Draw Custom Entries\ny = this.drawItemCustomEntries(x, y, width);\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param EquipDataDouble
 * @text Double Style
 * @parent EquipDataStyle:str
 *
 * @param DoubleWeaponParameters:arraystr
 * @text Added Weapon Params
 * @parent EquipDataDouble
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc Display these parameters when a weapon is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["HIT","CNT"]
 *
 * @param DoubleArmorParameters:arraystr
 * @text Added Armor Params
 * @parent EquipDataDouble
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc Display these parameters when an armor is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["EVA","GRD"]
 *
 * @param DrawEquipDoubleData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataDouble
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Item Weapon Type or Armor Type\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\n\n// Draw Parameter Values\nconst params = this.actorParams();\nfor (const paramId of params) {\n    if (this.isCustomParameter(paramId)) continue;\n    this.drawActorParamClassic(paramId, x, y, hw);\n    if (x === hw) {\n        y += lineHeight;\n        x = 0;\n    } else {\n        x = hw;\n    }\n}\n// Realign\nif (x === hw) {\n    this.drawItemDarkRect(hw, y, hw, lineHeight);\n    y += lineHeight;\n    x = 0;\n}\n\n// Draw Custom Entries\ny = this.drawItemCustomEntries(x, y, width);\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 * @text Data Settings
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param ScopeAllyOrEnemy:str
 * @text Ally or Enemy
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Ally or Enemy> notetag.
 * @default Ally/Enemy
 *
 * @param ScopeEnemyOrAlly:str
 * @text Enemy or Ally
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Enemy or Ally> notetag.
 * @default Enemy/Ally
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 * @param EquipType
 * @parent Vocabulary
 * @text Equip Type
 *
 * @param WeaponType:str
 * @text Weapon Type
 * @parent EquipType
 * @desc Vocabulary used for this data entry.
 * @default Weapon Type
 *
 * @param ArmorType:str
 * @text Armor Type
 * @parent EquipType
 * @desc Vocabulary used for this data entry.
 * @default Armor Type
 *
 * @param NoEquipTypeResult:str
 * @text No Equip Type
 * @parent EquipType
 * @desc Marker used to show an unlisted equip type.
 * @default -
 *
 */
//=============================================================================

function _0x56e6(_0x3a5ec3,_0x51b3ee){const _0x4b9ab9=_0x4b9a();return _0x56e6=function(_0x56e6a2,_0x1cf600){_0x56e6a2=_0x56e6a2-0x19d;let _0x102b54=_0x4b9ab9[_0x56e6a2];return _0x102b54;},_0x56e6(_0x3a5ec3,_0x51b3ee);}const _0x1028f8=_0x56e6;(function(_0x1311e0,_0x2de7ef){const _0x1f0bce=_0x56e6,_0x1640ce=_0x1311e0();while(!![]){try{const _0x29328c=-parseInt(_0x1f0bce(0x3a3))/0x1*(parseInt(_0x1f0bce(0x2a7))/0x2)+parseInt(_0x1f0bce(0x4bd))/0x3+-parseInt(_0x1f0bce(0x5bb))/0x4*(parseInt(_0x1f0bce(0x201))/0x5)+parseInt(_0x1f0bce(0x5f7))/0x6*(-parseInt(_0x1f0bce(0x50d))/0x7)+parseInt(_0x1f0bce(0x3c8))/0x8*(parseInt(_0x1f0bce(0x566))/0x9)+-parseInt(_0x1f0bce(0x2f6))/0xa*(-parseInt(_0x1f0bce(0x505))/0xb)+parseInt(_0x1f0bce(0x313))/0xc;if(_0x29328c===_0x2de7ef)break;else _0x1640ce['push'](_0x1640ce['shift']());}catch(_0x55c805){_0x1640ce['push'](_0x1640ce['shift']());}}}(_0x4b9a,0x68c1f));function _0x4b9a(){const _0x36f15e=['setNewItem','getItemConsumableText','LUK','classic','initialize','rateHP','Scene_Shop_createCategoryWindow','buyWindowRect','JSON','refresh','Step3End','SellPriceRate','getShopTrackingGoldSell','EVA','round','drawNewLabelIcon','_classIDs','setValue','ELEMENT','newLabelEnabled','buttonAssistText1','canEquipArmor','getParamValueClassicNoCore','shift','addStateBuffChanges','AlreadyEquipMarker','Game_BattlerBase_meetsItemConditions','equipTypes','baseSellingPrice','addEquipCommand','isClearCommandEnabled','SUCCESS\x20RATE','initShopTrackingData','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','speed','MultiplierStandard','Game_Actor_changeClass','reloadMapIfUpdated','equipHasCustomParams','params','clearCmdDesc','setupBattleTestItems','isPartyArtifact','postCreateSlotWindowItemsEquipsCore','postCreateItemsEquipsCore','createStatusWindow','uiMenuStyle','getNextAvailableEtypeId','drawEquipData','1420197YVzRzi','goldWindowRect','deactivate','_getClassRequirements','hideDisabledCommands','MRG','etypeId','isHovered','parseLocalizedText','Scene_Item','Scene_Shop_onBuyOk','isCursorMovable','Game_BattlerBase_canEquip_artifact','LabelRecoverMP','isUseItemsEquipsCoreUpdatedLayout','makeDeepCopy','contentsBack','maxBattleMembers','HideAnySwitches','ItemSceneAdjustItemList','drawEquipDataDouble','gainTP','isRepeated','meetsShopListingConditions','getItemEffectsRemovedStatesBuffsText','LabelElement','loadCharacter','updateChangedSlots','_equips','_itemData','createSlotWindow','setTopRow','version','parameters','IncludeShopItem','price','drawItemStyleIcon','getMatchingInitEquip','FadeSpeed','DoubleArmorParameters','createCategoryNameWindow','_numberWindow','commandWindowRectItemsEquipsCore','remove','sellWindowRect','_allowArtifactParamBase','nonRemovableEtypes','drawItemCustomEntries','isEquipped','DAMAGE\x20MULTIPLIER','getItemEffectsHpRecoveryLabel','top','isPlaytest','Game_Party_consumeItem','commandName','pagedown','Scene_Shop_commandWindowRect','hideAdditionalSprites','addWindow','_shopTrackingData','drawItemQuantity','rateMP','ARRAYEVAL','LabelRepeats','armor-%1','hitType','buttonAssistKey2','_categoryWindow','cursorLeft','RegExp','Scene_Equip_statusWindowRect','mainAreaBottom','11zekKyV','_allowArtifactTraitObjects','buttonAssistKey3','playEquip','meetsEquipRequirements','constructor','addOptimizeCommand','HitType%1','3459673UrEogl','Game_Party_setupBattleTestItems_artifact','isCancelled','drawItemSuccessRate','_skillIDs','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','uiHelpPosition','helpWindowRect','%1%','process_VisuMZ_ItemsEquipsCore_Notetags','USER\x20TP\x20GAIN','isEquipChangeOk','isNewItem','updateHelp','itemLineRect','isSellCommandEnabled','ScopeAllyOrEnemy','Scene_ItemBase_activateItemWindow','addSellCommand','HIT\x20TYPE','EQUIP_DELAY_MS','keyItem','getItemIdWithName','textColor','status','numberWindowRectItemsEquipsCore','sortListItemScene','isEquipItem','addShopTrackingItem','artifacts','move','WeaponType','statusWindowRectItemsEquipsCore','Parse_Notetags_Category','getItemSuccessRateText','SetupProxyItemGroup','LabelRecoverTP','RemoveEquipText','getPurifyTransformation','isCommandEnabled','drawItemData','isHandled','EquipDataStyle','getShopTrackingItemSell','goodsToItem','isBuyCommandEnabled','updatedLayoutStyle','Scene_Shop_categoryWindowRect','ShopScene','hideNewLabelSprites','equipSlotIndex','inBattle','processCursorMoveModernControls','onCategoryOk','_sellWindow','isTriggered','drawText','getItemEffectsTpDamageLabel','isGoodShown','slotWindowRectItemsEquipsCore','changeBuff','hide','actorParams','getClassIdWithName','indexOf','Scene_Item_itemWindowRect','uiInputPosition','getItemEffectsTpRecoveryText','getEtypeIDs','MDR','itemAt','drawItemEffectsHpRecovery','MaxMP','onBuyCancelItemsEquipsCore','currencyUnit','Parse_Notetags_ParamJS','isTroopArtifact','gaugeBackColor','gold','getItemEffectsTpRecoveryLabel','occasion','Speed1000','Step1End','middle','_doubleTouch','determineBaseSellingPrice','List','CmdStyle','iconWidth','1545471xxmPyZ','drawItemEffects','activateItemWindow','_goodsCount','isClearEquipOk','processHandling','MP\x20RECOVERY','isItem','height','addInnerChild','atk','paramJS','REMOVED\x20EFFECTS','EFFECT_ADD_BUFF','value1','ScopeEnemyOrAlly','optKeyItemsNumber','Pick\x20and\x20choose\x20equipment\x20to\x20change.','getItemEffectsMpDamageLabel','standardIconWidth','LabelRecoverHP','getItemEffectsAddedStatesBuffsLabel','ADDED\x20EFFECTS','prepareNextScene','onSellItem','adjustHiddenShownGoods','create','CmdIconEquip','commandNameWindowDrawText','ItemScene','commandNameWindowCenter','loadFaceImages','category','contents','ParseClassNotetags','getShopTrackingData','loseItem','drawItemCost','_bypassReleaseUnequippableItemsItemsEquipsCore','getClassRequirements','buttonAssistSmallIncrement','update','tradeItemWithParty','SetupArtifactItemIDs','value2','Scene_Shop_statusWindowRect','pageup','adjustItemWidthByStatus','isEnabled','windowPadding','setCategory','defaultItemMax','Window_ItemList_updateHelp','addItemCategory','Window_ItemList_maxCols','OffsetX','ParseArmorNotetags','mmp','TGR','isOptimizeCommandEnabled','REPEAT','postCreateItemWindowModernControls','isToggleSkill','buttonAssistRemove','Game_Party_gainItem_artifact','_item','Window_Selectable_setHelpWindowItem','getItemColor','text','isLearnedSkill','sellingPrice','changeEquipBase','optimize','Window_ItemList_item','smoothSelect','Window_ShopBuy_price','right','getItemEffectsMpRecoveryText','_bypassNewLabel','nextActor','Game_Actor_tradeItemWithParty','revertGlobalNamespaceVariables','AllItems','sort','changeTextColor','20rarwOH','canSortListItemScene','initEquips','proxyItem','min','doBuy','UNDEFINED!','makeCommandList','categoryWindowRectItemsEquipsCore','numItems','categoryStyle','drawItemStyleIconText','itemWindowRectItemsEquipsCore','DoubleWeaponParameters','items','prepareRefreshItemsEquipsCoreLayout','_category','Categories','HideAllSwitches','Step3Start','hasItem','drawParamsItemsEquipsCore','getItemConsumableLabel','drawItemCustomEntryLine','actorId','numberWindowRect','standardIconHeight','OffsetY','scrollTo','getEquipDataStyle','isHoverEnabled','Game_Actor_equips_artifacts','prototype','helpWindowRectItemsEquipsCore','buffIconIndex','Scene_Equip_helpWindowRect','modifiedBuyPriceItemsEquipsCore','changeClass','prepare','ActorResetEquipSlots','itemDataFontSize','commandStyleCheck','description','fontSizeRatio','canEquip','consumeItem','level','Step2End','Window_EquipItem_isEnabled','Slots','getItemOccasionText','EFFECT_GAIN_TP','Window_ShopCommand_initialize','getShopTrackingItemBuy','LabelDamageHP','convertInitEquipsToItems','New','buttonAssistText2','DrawIcons','Scene_Shop_onCategoryCancel','6QSZPTa','drawItemEffectsTpRecovery','LabelHitType','customEquipParams','onTouchCancel','_cache_etypeIDs','process_VisuMZ_ItemsEquipsCore_EquipSlots','categoryNameWindowDrawBackground','processShopCondListingOnSellItem','Window_ItemList_drawItem','getItemHitTypeLabel','Scene_Load_reloadMapIfUpdated','mpRate','mat','W%1','getEtypeIDsCache','paramchangeTextColor','_itemIDs','getEtypeIdWithName','left','A%1','PurifyParty','partyArtifactIDs','buttonAssistText3','GRD','processTouchModernControls','QUANTITY','createNewLabelSprite','Scene_Equip','resetFontSettings','drawEquipDataCompare','MaxHP','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ARMOR','SetupProxyItemGroups','mainAreaTop','Settings','getItemScopeText','setHelpWindow','callUpdateHelp','commandWindowRect','optimizeCmdDesc','isWeapon','MaxItems','drawItemEffectsMpDamage','isClearCommandAdded','Window_EquipItem_includes','equips','selfTP','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','onTouchOk','\x5cI[%1]%2','Window_Selectable_initialize','Scene_Equip_slotWindowRect','SellTurnSwitchOff','ElementWeapon','drawItemActorMenuImage','ARRAYSTR','NoEquipTypeResult','categoryWindowRect','commandBuyItemsEquipsCore','Scene_Shop_onSellCancel','addLoadListener','KeyItems','isSceneShop','item-%1','isDualWield','paramBase','MANUAL','MenuPortraits','addCancelCommand','drawItemEffectsAddedStatesBuffs','previousActor','WEAPON','getItemRepeatsLabel','drawParamName','item','drawEquipDataClassic','drawItemName','commandSell','double','armors','fontSize','successRate','initNewLabelSprites','ARRAYFUNC','fill','CoreEngine','getItemEffectsHpDamageText','?????','hitIndex','AllArmors','possession','getArmorIdWithName','discardEquip','helpDesc','FontFace','buyWindowRectItemsEquipsCore','drawUpdatedParamName','processCursorHomeEndTrigger','helpAreaHeight','482845waZLGu','isOptimizeEquipOk','weapons','equip','categories','textLocale','getEquipRequirements','Parse_Notetags_EquipSlots','VisuMZ_1_SkillsStatesCore','SellPriceJS','artifactIDs','CmdIconSell','armorTypes','troopArtifacts','drawItemDamage','HP\x20RECOVERY','log','_scene','equipCmdDesc','_handlers','createCommandNameWindow','onTouchSelect','drawItemHitType','Weapon\x20Type','setItemDelay','drawItemDamageAmount','DrawParamJS','_buyWindow','isArray','EquipScene','getItemEffectsMpDamageText','CmdHideDisabled','getItemEffectsRemovedStatesBuffsLabel','+%1','clear','getDamageStyle','DamageType%1','FontSize','drawItemNumber','_bypassProxy','Enable','PurifyActors','buttonAssistItemListRequirement','Style','drawItemEquipType','_statusWindow','buttonAssistKey1','Scene_Shop_onBuyCancel','processShiftRemoveShortcut','addShopTrackingItemBuy','addClearCommand','_newLabelOpacity','Scene_Shop_goldWindowRect','VisuMZ_0_CoreEngine','KeyItemProtect','troopArtifactIDs','onCategoryCancelItemsEquipsCore','getItemEffectsHpDamageLabel','goldWindowRectItemsEquipsCore','isBottomHelpMode','currentExt','EFFECT_REMOVE_BUFF','DrawBackRect','param','isSoleArmorType','statusWindowRect','DrawItemData','Window_ShopStatus_setItem','actor','initNewItemsList','getParamValueClassicCore','_dummyWindow','_tempActor','canUse','bind','ParseItemNotetags','paramPlusItemsEquipsCoreCustomJS','Scene_Item_create','Scene_Shop_commandBuy','Param','paramValueByName','Scene_Item_categoryWindowRect','exit','getItemSpeedText','LabelSelfGainTP','commandNameWindowDrawBackground','BuyTurnSwitchOff','HiddenItemA','_scrollDuration','allowShiftScrolling','Window_ShopBuy_item','buyingPrice','replace','battleMembers','refreshDelay','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ItemQuantityFmt','processShopCondListingOnBuyItem','shouldCommandWindowExist','checkItemConditionsSwitchNotetags','innerWidth','processCursorSpecialCheckModernControls','DrawFaceJS','foreground','Parse_Notetags_Prices','ScopeRandomAny','Consumable','normalColor','setObject','Scope%1','REC','drawParamText','_goods','getItemEffectsTpDamageText','getInputMultiButtonStrings','drawUpdatedAfterParamValue','smallParamFontSize','ARRAYSTRUCT','purifyCursedEquips','value','drawItemOccasion','Scene_Equip_onSlotOk','drawIcon','random','refreshItemsEquipsCoreNoMenuImage','addState','_cache','needsNewTempActor','createItemWindow','LayoutStyle','_newLabelOpacityUpperLimit','textSizeEx','concat','FieldUsable','categoryItemTypes','drawItemEffectsSelfTpGain','RemoveEquipIcon','ParamValueFontSize','prepareNewEquipSlotsOnLoad','ShowAnySwitches','buttonAssistLargeIncrement','ShowAllSwitches','maxmp','bitmap','setItem','TCR','onBuyCancel','removeState','CmdIconClear','MP\x20DAMAGE','DrawEquipData','getWeaponIdWithName','powerDownColor','object','drawItemScope','Scene_Equip_onSlotCancel','systemColor','members','loadSystem','Window_ShopBuy_refresh','DEF','weapon-%1','currentClass','drawItemEffectsRemovedStatesBuffs','_purchaseOnly','parse','80FBsFPR','Parse_Notetags_Sorting','clamp','updateMoneyAmount','clearEquipments','isOptimizeCommandAdded','categoryStyleCheck','ItemsEquipsCore','paramPlus','Game_Actor_paramPlus','ParamChangeFontSize','equipItems','canConsumeItem','registerCommand','meetsItemConditionsJS','CommandAddOptimize','onSellCancel','meetsItemConditionsNotetags','popScene','Scene_Shop_helpWindowRect','calcEquipItemPerformance','isCursedItem','Scene_Shop_commandSell','activateSellWindow','setMp','wtypeId','SpeedNeg1999','NUM','TRG','buttonAssistSlotWindowShift','(%1)','BackRectColor','_calculatingJSParameters','name','calcWindowHeight','getItemDamageAmountLabelOriginal','elementId','addShopTrackingItemSell','repeats','createTempActorEquips','CRI','_categoryNameWindow','OCCASION','formula','textWidth','setStatusWindow','processCursorMove','isMainMenuCoreMenuImageOptionAvailable','_tempActorB','commandEquip','getItemDamageAmountTextOriginal','getItemDamageElementText','onActorChange','consumable','allMembers','trim','hasOwnProperty','SortBy','getEmptyEquipSlotOfSameEtype','prepareItemCustomData','ShopMenuStatusStandard','getShopTrackingGoldBuy','smoothScrollTo','opacity','Scene_Shop_numberWindowRect','damageColor','mainFontSize','SellTurnSwitchOn','isPressed','Occasion%1','getItemHitTypeText','gainItem','makeItemList','getMenuImage','placeNewLabel','drawNewLabelText','traits','helpAreaTop','categoryNameWindowDrawText','5012170nApgLL','damage','isVisuMzLocalizationEnabled','MDF','MAXHP','BuyPriceJS','sell','length','getItemEffects','Scene_Shop_doBuy','checkShiftRemoveShortcut','isShowNew','sellPriceRate','isEquipTypeSealed','ParseWeaponNotetags','Game_Item_setObject','flatMP','AlwaysUsable','AGI','\x5cb%1\x5cb','ConvertParams','user','Parse_Notetags_EnableJS','drawCustomShopGraphicLoad','EFFECT_REMOVE_DEBUFF','drawTextEx','compare','HIT','getSkillIdWithName','163188CfAUeB','down','ClassicWeaponParameters','changeEquip','commandSellItemsEquipsCore','postCreateSellWindowItemsEquipsCore','isOpenAndActive','innerHeight','createCommandWindow','_getEquipRequirements','Type','isPurifyItemSwapOk','active','createBitmap','type','ScopeAlliesButUser','Translucent','show','maxVisibleItems','resetTextColor','lineHeight','Scene_Shop_prepare','NAME','_resetFontColor','_newLabelSprites','getItemRepeatsText','meetsEquipRequirement','getItemsEquipsCoreBackColor2','refreshCursor','getItemDamageAmountLabel','versionId','ShowShopStatus','LabelConsume','Window_ShopBuy_goodsToItem','fillRect','maxItemAmount','Window_EquipStatus_refresh','addChild','toUpperCase','Text','createCategoryWindow','refreshActor','Scope1','Game_Party_numItems','Damage\x20Formula\x20Error\x20for\x20%1','drawPossession','itypeId','NonRemoveETypes','BuyTurnSwitchOn','boxWidth','currentSymbol','_actor','getShopTrackingItem','NotConsumable','NeverUsable','iconText','getInputButtonString','0000','(+%1)','onSlotOkAutoSelect','MAT','getItemDamageAmountLabelBattleCore','ShopListingRegExp','playOkSound','ARRAYNUM','\x5cI[%1]','Window_Selectable_refresh','effects','index','note','cursorRight','CheckCursedItemMsg','isUseParamNamesWithIcons','switchProxyItem','max','HRG','Blacklist','removeBattleTestArtifacts','blt','drawItemDamageElement','isDrawItemNumber','gaugeLineHeight','Width','categoryNameWindowCenter','buttonAssistCategory','processDownCursorSpecialCheckModernControls','onBuyOk','maxItems','_tempActorA','drawItemConsumable','n/a','includes','_forcedSlots','ScopeRandomEnemies','width','QoL','partyArtifacts','allowCreateStatusWindow','HP\x20DAMAGE','removeStateBuffChanges','Scene_Shop_create','center','localeCompare','EnableLayout','every','onTouchSelectModernControls','categoryList','addCommand','Game_BattlerBase_param_artifact','CEV','meetsClassRequirements','onSlotOk','drawActorParamClassic','_list','helpDescriptionText','MRF','isArmor','MAXMP','select','Game_Enemy_traitObjects_artifact','Window_ItemList_makeItemList','atypeId','drawItemEffectsTpDamage','setHp','traitObjects','ATK','meetsItemConditions','drawCurrencyValue','100%','sellWindowRectItemsEquipsCore','_checkEquipRequirements','commandStyle','TP\x20DAMAGE','getItemSpeedLabel','TP\x20RECOVERY','def','drawRemoveItem','Scene_Item_createItemWindow','ActorChangeEquipSlots','Scene_Item_helpWindowRect','Whitelist','elements','playBuzzerSound','IconSet','6723dflKhm','CmdCancelRename','some','Game_Actor_isEquipChangeOk','StatusWindowWidth','getItemDamageElementLabel','Scene_Shop_createSellWindow','SortByIDandPriority','Scene_Shop_sellWindowRect','drawItemDarkRect','drawItemEffectsMpRecovery','CNT','itemTextAlign','Scene_Shop_activateSellWindow','+%1%','onMenuImageLoad','toLowerCase','addShopTrackingGoldSell','cursorPagedown','_itemWindow','_helpWindow','mdf','CommandAddClear','postCreateCategoryWindowItemsEquipsCore','ParseAllNotetags','Speed1','getItemSuccessRateLabel','forceResetEquipSlots','Nonconsumable','getColor','ceil','drawItemSpeed','doSell','Scene_Shop_onSellOk','isArtifact','Scene_Shop_buyingPrice','pop','32UnTxGG','EquipAdjustHpMp','nonOptimizeEtypes','BattleUsable','CmdTextAlign','EquipParams','match','iconIndex','splice','mainAreaHeight','EXR','getItemDamageAmountText','Actors','setItemWindow','getItemEffectsHpRecoveryText','Window_ItemList_colSpacing','LabelSuccessRate','isSoleWeaponType','forceChangeEquip','#%1','Scene_Equip_create','itemEnableJS','STRUCT','drawItemRepeats','setBackgroundType','Parse_Notetags_ParamValues','FDR','drawItem','flatHP','_weaponIDs','drawCustomShopGraphic','ExtDisplayedParams','dataId','isBattleTest','loadPicture','visible','buttonAssistOffset3','getPrototypeOf','%1-%2','isShiftRemoveShortcutEnabled','Game_Party_initialize','NoChangeMarker','Scene_Shop_buyWindowRect','canEquipWithOptimize','addItemCategories','limitedPageUpDownSceneCheck','drawItemEquipSubType','releaseUnequippableItems','Scene_Boot_onDatabaseLoaded','buy','placeItemNewLabel','allowCommandWindowCursorUp','SwitchBuy','activate','Window_ItemCategory_setItemWindow','Game_Actor_discardEquip','Scene_Equip_itemWindowRect','isCustomParameter','MaxIcons','PHA','toggleType','equipSlots','Remove\x20all\x20available\x20equipment.','Game_Party_gainItem','optimizeEquipments','mainCommandWidth','refreshActorEquipSlotsIfUpdated','PDR','Step1Start','addShopTrackingGoldBuy','createSellWindow','Scene_Equip_commandWindowRect','filter','setHelpWindowItem','_shopStatusMenuMode','format','isEquipAtypeOk','auto','_newItemsList','getItemEffectsAddedStatesBuffsText','itemWindowRect','agi','iconHeight','tpGain','resetShopSwitches','processDrawIcon','VisuMZ_1_BattleCore','StatusWindow','Scene_Equip_createSlotWindow','DrawEquipDoubleData','BorderRegExp','===','split','MaxWeapons','_armorIDs','_newLabelOpacityChange','getItemEffectsMpRecoveryLabel','paintOpacity','test','equip2','_paramPlus','bestEquipItem','Scene_Shop_sellingPrice','maxCols','_etypeIDs','Scene_Shop_doSell','removeDebuff','characterName','values','Armor\x20Type','ITEMS_EQUIPS_CORE','EFFECT_RECOVER_HP','onSellOk','MaxArmors','_resetFontSize','isRightInputMode','call','_shopStatusMenuAlly','background','_money','deselect','getProxyItem','cursorPageup','Parse_Notetags_Batch','canShiftRemoveEquipment','setHandler','STR','playCancel','playCursorSound','deepCopy','luk','_commandNameWindow','floor','clearNewLabelFromItem','_buyWindowLastIndex','itemPadding','equipAdjustHpMp','makeItemData','clearNewItem','updateCommandNameWindow','drawItemEffectsHpDamage','weapon','Icon','isEquipWtypeOk','onSlotCancel','ItemMenuStatusBgType','getItemEffectsSelfTpGainText','Scene_Equip_onActorChange','MEV','updateNewLabelOpacity','push','_slotWindow','isUseModernControls','forceChangeEquipSlots','getItemQuantityText','slotWindowRect','drawUpdatedParamValueDiff','isShiftShortcutKeyForRemove','Speed2000','_customItemInfo','geUpdatedLayoutStatusWidth','start','removeBuff','setShopStatusWindowMode','drawItemKeyData','sortPriority','isStackableArtifact','drawActorParamDifference','powerUpColor','SpeedNeg999','isProxyItem','weaponTypes','cancel','commandBuy','anyEmptyEquipSlotsOfSameEtype','statusWidth','getTextColor','_commandWindow','map','isOpen','setupItemDamageTempActors','icon','Scene_Equip_commandEquip','_data','ScopeRandomAllies','MCR','onBuyItem','ElementNone','changePaintOpacity','Step2Start','isKeyItem','CursedTextPopup','Game_Actor_forceChangeEquip','Window_Selectable_update','onCategoryCancel','colSpacing'];_0x4b9a=function(){return _0x36f15e;};return _0x4b9a();}var label=_0x1028f8(0x2ae),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x6b3070){const _0x367e51=_0x1028f8;return _0x6b3070[_0x367e51(0x525)]&&_0x6b3070[_0x367e51(0x5e5)][_0x367e51(0x36e)]('['+label+']');})[0x0];VisuMZ[label][_0x1028f8(0x1c0)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x3fe5bf,_0x1f4446){const _0x4944c5=_0x1028f8;for(const _0x5f2a53 in _0x1f4446){if(_0x5f2a53['match'](/(.*):(.*)/i)){const _0x3478e5=String(RegExp['$1']),_0x317eb1=String(RegExp['$2'])[_0x4944c5(0x339)]()[_0x4944c5(0x2de)]();let _0x9c3d3f,_0x209fa9,_0xc39b98;switch(_0x317eb1){case _0x4944c5(0x2c2):_0x9c3d3f=_0x1f4446[_0x5f2a53]!==''?Number(_0x1f4446[_0x5f2a53]):0x0;break;case _0x4944c5(0x353):_0x209fa9=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):[],_0x9c3d3f=_0x209fa9[_0x4944c5(0x47a)](_0x56a5a9=>Number(_0x56a5a9));break;case'EVAL':_0x9c3d3f=_0x1f4446[_0x5f2a53]!==''?eval(_0x1f4446[_0x5f2a53]):null;break;case _0x4944c5(0x4fb):_0x209fa9=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):[],_0x9c3d3f=_0x209fa9[_0x4944c5(0x47a)](_0x3c4c44=>eval(_0x3c4c44));break;case _0x4944c5(0x494):_0x9c3d3f=_0x1f4446[_0x5f2a53]!==''?JSON['parse'](_0x1f4446[_0x5f2a53]):'';break;case'ARRAYJSON':_0x209fa9=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):[],_0x9c3d3f=_0x209fa9[_0x4944c5(0x47a)](_0x22651f=>JSON[_0x4944c5(0x2a6)](_0x22651f));break;case'FUNC':_0x9c3d3f=_0x1f4446[_0x5f2a53]!==''?new Function(JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53])):new Function('return\x200');break;case _0x4944c5(0x1f1):_0x209fa9=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):[],_0x9c3d3f=_0x209fa9[_0x4944c5(0x47a)](_0x1ce275=>new Function(JSON[_0x4944c5(0x2a6)](_0x1ce275)));break;case _0x4944c5(0x446):_0x9c3d3f=_0x1f4446[_0x5f2a53]!==''?String(_0x1f4446[_0x5f2a53]):'';break;case _0x4944c5(0x1d5):_0x209fa9=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):[],_0x9c3d3f=_0x209fa9[_0x4944c5(0x47a)](_0x51ef56=>String(_0x51ef56));break;case _0x4944c5(0x3de):_0xc39b98=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):{},_0x3fe5bf[_0x3478e5]={},VisuMZ['ConvertParams'](_0x3fe5bf[_0x3478e5],_0xc39b98);continue;case _0x4944c5(0x276):_0x209fa9=_0x1f4446[_0x5f2a53]!==''?JSON[_0x4944c5(0x2a6)](_0x1f4446[_0x5f2a53]):[],_0x9c3d3f=_0x209fa9[_0x4944c5(0x47a)](_0x472789=>VisuMZ['ConvertParams']({},JSON[_0x4944c5(0x2a6)](_0x472789)));break;default:continue;}_0x3fe5bf[_0x3478e5]=_0x9c3d3f;}}return _0x3fe5bf;},(_0x589487=>{const _0x4fec75=_0x1028f8,_0xb56a15=_0x589487[_0x4fec75(0x2c8)];for(const _0x4fe9a5 of dependencies){if(!Imported[_0x4fe9a5]){alert(_0x4fec75(0x260)[_0x4fec75(0x413)](_0xb56a15,_0x4fe9a5)),SceneManager[_0x4fec75(0x253)]();break;}}const _0x350d06=_0x589487[_0x4fec75(0x5e5)];if(_0x350d06[_0x4fec75(0x3ce)](/\[Version[ ](.*?)\]/i)){const _0x4c2095=Number(RegExp['$1']);_0x4c2095!==VisuMZ[label][_0x4fec75(0x4dd)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4fec75(0x413)](_0xb56a15,_0x4c2095)),SceneManager['exit']());}if(_0x350d06[_0x4fec75(0x3ce)](/\[Tier[ ](\d+)\]/i)){const _0x23f403=Number(RegExp['$1']);_0x23f403<tier?(alert(_0x4fec75(0x1bc)[_0x4fec75(0x413)](_0xb56a15,_0x23f403,tier)),SceneManager['exit']()):tier=Math[_0x4fec75(0x35d)](_0x23f403,tier);}VisuMZ[_0x4fec75(0x30a)](VisuMZ[label][_0x4fec75(0x1c0)],_0x589487[_0x4fec75(0x4de)]);})(pluginData),PluginManager[_0x1028f8(0x2b4)](pluginData[_0x1028f8(0x2c8)],_0x1028f8(0x39d),_0x2abd5d=>{const _0x524db2=_0x1028f8;VisuMZ['ConvertParams'](_0x2abd5d,_0x2abd5d);const _0x587cd6=_0x2abd5d[_0x524db2(0x3d4)][_0x524db2(0x47a)](_0x53d567=>$gameActors[_0x524db2(0x245)](_0x53d567)),_0x9e52dc=_0x2abd5d[_0x524db2(0x5ec)][_0x524db2(0x47a)](_0x203bb5=>$dataSystem['equipTypes'][_0x524db2(0x54d)](_0x203bb5[_0x524db2(0x2de)]()));for(const _0xcd07f3 of _0x587cd6){if(!_0xcd07f3)continue;_0xcd07f3[_0x524db2(0x461)](_0x9e52dc);}}),PluginManager['registerCommand'](pluginData[_0x1028f8(0x2c8)],_0x1028f8(0x5e2),_0x5d210d=>{const _0x1b424e=_0x1028f8;VisuMZ[_0x1b424e(0x30a)](_0x5d210d,_0x5d210d);const _0x10c252=_0x5d210d[_0x1b424e(0x3d4)]['map'](_0x448ba9=>$gameActors[_0x1b424e(0x245)](_0x448ba9));for(const _0x29534a of _0x10c252){if(!_0x29534a)continue;_0x29534a[_0x1b424e(0x3be)]();}}),PluginManager[_0x1028f8(0x2b4)](pluginData[_0x1028f8(0x2c8)],_0x1028f8(0x22a),_0x551992=>{const _0x5e710f=_0x1028f8;if($gameParty['inBattle']())return;VisuMZ[_0x5e710f(0x30a)](_0x551992,_0x551992);const _0x86520=_0x551992['Actors'][_0x5e710f(0x47a)](_0x4cb999=>$gameActors[_0x5e710f(0x245)](_0x4cb999));for(const _0x1cdacb of _0x86520){if(!_0x1cdacb)continue;_0x1cdacb['purifyCursedEquips']();}}),PluginManager['registerCommand'](pluginData[_0x1028f8(0x2c8)],_0x1028f8(0x1b1),_0x4fb754=>{const _0x146663=_0x1028f8;if($gameParty[_0x146663(0x540)]())return;$gameParty['purifyCursedEquips']();}),PluginManager[_0x1028f8(0x2b4)](pluginData[_0x1028f8(0x2c8)],'BatchShop',_0x3825c6=>{const _0x2daaf0=_0x1028f8;VisuMZ[_0x2daaf0(0x30a)](_0x3825c6,_0x3825c6);const _0x1fb341=[],_0x54a0cc=_0x3825c6[_0x2daaf0(0x35f)][_0x2daaf0(0x47a)](_0x2b6d6a=>_0x2b6d6a['toUpperCase']()['trim']()),_0x95bb6b=_0x3825c6[_0x2daaf0(0x39f)][_0x2daaf0(0x47a)](_0x3cf0f8=>_0x3cf0f8[_0x2daaf0(0x339)]()[_0x2daaf0(0x2de)]()),_0x45c732=_0x3825c6[_0x2daaf0(0x55f)]>=_0x3825c6[_0x2daaf0(0x40c)]?_0x3825c6[_0x2daaf0(0x40c)]:_0x3825c6[_0x2daaf0(0x55f)],_0x2b49c8=_0x3825c6['Step1End']>=_0x3825c6[_0x2daaf0(0x40c)]?_0x3825c6[_0x2daaf0(0x55f)]:_0x3825c6[_0x2daaf0(0x40c)],_0x557817=Array(_0x2b49c8-_0x45c732+0x1)[_0x2daaf0(0x1f2)]()[_0x2daaf0(0x47a)]((_0x3024db,_0x390cf2)=>_0x45c732+_0x390cf2);for(const _0x12f2fd of _0x557817){const _0x139394=$dataItems[_0x12f2fd];if(!_0x139394)continue;if(!VisuMZ[_0x2daaf0(0x2ae)][_0x2daaf0(0x4df)](_0x139394,_0x54a0cc,_0x95bb6b))continue;_0x1fb341[_0x2daaf0(0x45e)]([0x0,_0x12f2fd,0x0,_0x139394['price']]);}const _0x3807c1=_0x3825c6[_0x2daaf0(0x5ea)]>=_0x3825c6['Step2Start']?_0x3825c6[_0x2daaf0(0x485)]:_0x3825c6[_0x2daaf0(0x5ea)],_0x346a8a=_0x3825c6[_0x2daaf0(0x5ea)]>=_0x3825c6['Step2Start']?_0x3825c6[_0x2daaf0(0x5ea)]:_0x3825c6[_0x2daaf0(0x485)],_0x24bd76=Array(_0x346a8a-_0x3807c1+0x1)['fill']()[_0x2daaf0(0x47a)]((_0x56ed12,_0x5c4611)=>_0x3807c1+_0x5c4611);for(const _0x4845b0 of _0x24bd76){const _0x42bbe9=$dataWeapons[_0x4845b0];if(!_0x42bbe9)continue;if(!VisuMZ[_0x2daaf0(0x2ae)][_0x2daaf0(0x4df)](_0x42bbe9,_0x54a0cc,_0x95bb6b))continue;_0x1fb341[_0x2daaf0(0x45e)]([0x1,_0x4845b0,0x0,_0x42bbe9['price']]);}const _0x47ce70=_0x3825c6[_0x2daaf0(0x496)]>=_0x3825c6[_0x2daaf0(0x5ce)]?_0x3825c6[_0x2daaf0(0x5ce)]:_0x3825c6[_0x2daaf0(0x496)],_0x19b253=_0x3825c6[_0x2daaf0(0x496)]>=_0x3825c6['Step3Start']?_0x3825c6[_0x2daaf0(0x496)]:_0x3825c6['Step3Start'],_0x19f1c3=Array(_0x19b253-_0x47ce70+0x1)[_0x2daaf0(0x1f2)]()[_0x2daaf0(0x47a)]((_0x357be2,_0x30cc8e)=>_0x47ce70+_0x30cc8e);for(const _0x59730a of _0x19f1c3){const _0x5f3e1c=$dataArmors[_0x59730a];if(!_0x5f3e1c)continue;if(!VisuMZ[_0x2daaf0(0x2ae)]['IncludeShopItem'](_0x5f3e1c,_0x54a0cc,_0x95bb6b))continue;_0x1fb341[_0x2daaf0(0x45e)]([0x2,_0x59730a,0x0,_0x5f3e1c[_0x2daaf0(0x4e0)]]);}SceneManager[_0x2daaf0(0x45e)](Scene_Shop),SceneManager[_0x2daaf0(0x57d)](_0x1fb341,_0x3825c6['PurchaseOnly']);}),VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x4df)]=function(_0x1c2f6e,_0x522591,_0x510947){const _0x2ab440=_0x1028f8;if(_0x1c2f6e[_0x2ab440(0x2c8)]['trim']()==='')return![];if(_0x1c2f6e[_0x2ab440(0x2c8)][_0x2ab440(0x3ce)](/-----/i))return![];const _0x38df31=_0x1c2f6e[_0x2ab440(0x205)];if(_0x522591['length']>0x0)for(const _0x5eb63d of _0x522591){if(!_0x5eb63d)continue;if(_0x38df31[_0x2ab440(0x36e)](_0x5eb63d))return![];}if(_0x510947[_0x2ab440(0x2fd)]>0x0){for(const _0x3a180f of _0x510947){if(!_0x3a180f)continue;if(_0x38df31['includes'](_0x3a180f))return!![];}return![];}return!![];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3f8)]=Scene_Boot[_0x1028f8(0x5db)]['onDatabaseLoaded'],Scene_Boot['prototype']['onDatabaseLoaded']=function(){const _0x2daf5d=_0x1028f8;this['process_VisuMZ_ItemsEquipsCore_RegExp'](),VisuMZ[_0x2daf5d(0x2ae)]['Scene_Boot_onDatabaseLoaded'][_0x2daf5d(0x43c)](this),this['process_VisuMZ_ItemsEquipsCore_Notetags'](),VisuMZ['ItemsEquipsCore'][_0x2daf5d(0x1be)](),VisuMZ['ItemsEquipsCore'][_0x2daf5d(0x591)]();},Scene_Boot['prototype']['process_VisuMZ_ItemsEquipsCore_RegExp']=function(){const _0x442da1=_0x1028f8;VisuMZ[_0x442da1(0x2ae)][_0x442da1(0x502)]={},VisuMZ[_0x442da1(0x2ae)][_0x442da1(0x502)][_0x442da1(0x3cd)]=[],VisuMZ[_0x442da1(0x2ae)]['RegExp'][_0x442da1(0x422)]=[];const _0x4cab53=[_0x442da1(0x1bb),_0x442da1(0x555),_0x442da1(0x390),_0x442da1(0x2a1),_0x442da1(0x34f),_0x442da1(0x2f9),_0x442da1(0x308),_0x442da1(0x48e)];for(const _0x4a7fd5 of _0x4cab53){const _0x40bedc=_0x442da1(0x512)['format'](_0x4a7fd5);VisuMZ[_0x442da1(0x2ae)][_0x442da1(0x502)][_0x442da1(0x3cd)][_0x442da1(0x45e)](new RegExp(_0x40bedc,'i'));const _0x528756=_0x442da1(0x309)['format'](_0x4a7fd5);VisuMZ[_0x442da1(0x2ae)][_0x442da1(0x502)][_0x442da1(0x422)][_0x442da1(0x45e)](new RegExp(_0x528756,'g'));}},Scene_Boot['prototype'][_0x1028f8(0x516)]=function(){const _0x4ed6fb=_0x1028f8;if(VisuMZ[_0x4ed6fb(0x3bb)])return;this[_0x4ed6fb(0x1a2)]();const _0x2b6855=[$dataItems,$dataWeapons,$dataArmors];for(const _0x1a1692 of _0x2b6855){for(const _0x2e95f1 of _0x1a1692){if(!_0x2e95f1)continue;VisuMZ[_0x4ed6fb(0x2ae)]['Parse_Notetags_Category'](_0x2e95f1,_0x1a1692),VisuMZ['ItemsEquipsCore']['Parse_Notetags_Prices'](_0x2e95f1,_0x1a1692),VisuMZ[_0x4ed6fb(0x2ae)]['Parse_Notetags_ParamValues'](_0x2e95f1,_0x1a1692),VisuMZ[_0x4ed6fb(0x2ae)][_0x4ed6fb(0x558)](_0x2e95f1,_0x1a1692),VisuMZ[_0x4ed6fb(0x2ae)][_0x4ed6fb(0x30c)](_0x2e95f1,_0x1a1692);}}},Scene_Boot[_0x1028f8(0x5db)]['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x45c8f8=_0x1028f8;for(const _0x399c6a of $dataClasses){if(!_0x399c6a)continue;VisuMZ[_0x45c8f8(0x2ae)]['Parse_Notetags_EquipSlots'](_0x399c6a);}},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x588)]=VisuMZ[_0x1028f8(0x588)],VisuMZ[_0x1028f8(0x588)]=function(_0x37d3cf){const _0x17ca58=_0x1028f8;VisuMZ[_0x17ca58(0x2ae)]['ParseClassNotetags'][_0x17ca58(0x43c)](this,_0x37d3cf),VisuMZ[_0x17ca58(0x2ae)][_0x17ca58(0x208)](_0x37d3cf);},VisuMZ['ItemsEquipsCore']['ParseItemNotetags']=VisuMZ[_0x1028f8(0x24c)],VisuMZ[_0x1028f8(0x24c)]=function(_0x5b8c18){const _0x217c8b=_0x1028f8;VisuMZ[_0x217c8b(0x2ae)]['ParseItemNotetags']['call'](this,_0x5b8c18),VisuMZ['ItemsEquipsCore'][_0x217c8b(0x443)](_0x5b8c18,$dataItems);},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x304)]=VisuMZ[_0x1028f8(0x304)],VisuMZ['ParseWeaponNotetags']=function(_0x292df4){const _0x398443=_0x1028f8;VisuMZ[_0x398443(0x2ae)][_0x398443(0x304)]['call'](this,_0x292df4),VisuMZ['ItemsEquipsCore']['Parse_Notetags_Batch'](_0x292df4,$dataWeapons);},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x59e)]=VisuMZ[_0x1028f8(0x59e)],VisuMZ[_0x1028f8(0x59e)]=function(_0x3efd3a){const _0x23021f=_0x1028f8;VisuMZ[_0x23021f(0x2ae)][_0x23021f(0x59e)][_0x23021f(0x43c)](this,_0x3efd3a),VisuMZ[_0x23021f(0x2ae)][_0x23021f(0x443)](_0x3efd3a,$dataArmors);},VisuMZ['ItemsEquipsCore']['Parse_Notetags_EquipSlots']=function(_0x5c593f){const _0x96582b=_0x1028f8;_0x5c593f[_0x96582b(0x405)]=[];const _0x56163e=$dataSystem[_0x96582b(0x4a7)]['map'](_0x597759=>_0x597759?_0x597759[_0x96582b(0x2de)]():'');if(!BattleManager[_0x96582b(0x3e9)]()&&_0x5c593f[_0x96582b(0x358)][_0x96582b(0x3ce)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0xa92c95=String(RegExp['$1'])[_0x96582b(0x424)](/[\r\n]+/);for(const _0x5b69d4 of _0xa92c95){const _0x457973=_0x56163e[_0x96582b(0x54d)](_0x5b69d4[_0x96582b(0x2de)]());if(_0x457973>0x0)_0x5c593f[_0x96582b(0x405)]['push'](_0x457973);}}else for(const _0x182408 of _0x56163e){const _0x493712=_0x56163e[_0x96582b(0x54d)](_0x182408[_0x96582b(0x2de)]());if(_0x493712>0x0)_0x5c593f[_0x96582b(0x405)][_0x96582b(0x45e)](_0x493712);}},VisuMZ[_0x1028f8(0x2ae)]['Parse_Notetags_Batch']=function(_0x176241,_0x451427){const _0x57f083=_0x1028f8;VisuMZ[_0x57f083(0x2ae)][_0x57f083(0x52e)](_0x176241,_0x451427),VisuMZ['ItemsEquipsCore'][_0x57f083(0x269)](_0x176241,_0x451427),VisuMZ['ItemsEquipsCore'][_0x57f083(0x3e1)](_0x176241,_0x451427),VisuMZ['ItemsEquipsCore'][_0x57f083(0x558)](_0x176241,_0x451427),VisuMZ[_0x57f083(0x2ae)][_0x57f083(0x30c)](_0x176241,_0x451427);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x52e)]=function(_0x20105b,_0x2a4975){const _0x37687d=_0x1028f8;_0x20105b[_0x37687d(0x205)]=[];const _0x3943f8=_0x20105b['note']||'',_0x1c43bd=_0x3943f8[_0x37687d(0x3ce)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x1c43bd)for(const _0x5c7b3c of _0x1c43bd){_0x5c7b3c['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0xbb372b=String(RegExp['$1'])[_0x37687d(0x339)]()[_0x37687d(0x2de)]()['split'](',');for(const _0x3e72f0 of _0xbb372b){_0x20105b[_0x37687d(0x205)][_0x37687d(0x45e)](_0x3e72f0[_0x37687d(0x2de)]());}}if(_0x3943f8[_0x37687d(0x3ce)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x3e260e=RegExp['$1'][_0x37687d(0x424)](/[\r\n]+/);for(const _0x6cb650 of _0x3e260e){_0x20105b[_0x37687d(0x205)][_0x37687d(0x45e)](_0x6cb650[_0x37687d(0x339)]()[_0x37687d(0x2de)]());}}},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x2a8)]=function(_0xc95e31,_0x21b36b){const _0x51fb06=_0x1028f8;if(!_0xc95e31)return;_0xc95e31[_0x51fb06(0x46d)]=0x32;const _0x446027=_0xc95e31[_0x51fb06(0x358)]||'';_0x446027['match'](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0xc95e31[_0x51fb06(0x46d)]=Number(RegExp['$1']));},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x269)]=function(_0x2fbad6,_0x38fe65){const _0x5476e2=_0x1028f8;_0x2fbad6[_0x5476e2(0x358)][_0x5476e2(0x3ce)](/<PRICE:[ ](\d+)>/i)&&(_0x2fbad6['price']=Number(RegExp['$1']));},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x3e1)]=function(_0x4977c6,_0x3e58cf){const _0x47bda0=_0x1028f8;if(_0x3e58cf===$dataItems)return;for(let _0x4e267d=0x0;_0x4e267d<0x8;_0x4e267d++){const _0x1b0c2b=VisuMZ[_0x47bda0(0x2ae)]['RegExp'][_0x47bda0(0x3cd)][_0x4e267d];_0x4977c6[_0x47bda0(0x358)][_0x47bda0(0x3ce)](_0x1b0c2b)&&(_0x4977c6['params'][_0x4e267d]=parseInt(RegExp['$1']));}},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x571)]={},VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamJS']=function(_0x4fd25e,_0x54176d){const _0x12edc5=_0x1028f8;if(_0x54176d===$dataItems)return;if(_0x4fd25e['note'][_0x12edc5(0x3ce)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x265273=String(RegExp['$1']),_0x2438e1=(_0x54176d===$dataWeapons?_0x12edc5(0x1aa):_0x12edc5(0x1b0))['format'](_0x4fd25e['id']),_0x5d79dc=_0x12edc5(0x4ad)[_0x12edc5(0x413)](_0x265273);for(let _0x2308f8=0x0;_0x2308f8<0x8;_0x2308f8++){if(_0x265273['match'](VisuMZ['ItemsEquipsCore'][_0x12edc5(0x502)][_0x12edc5(0x422)][_0x2308f8])){const _0x3cc99c='%1-%2'['format'](_0x2438e1,_0x2308f8);VisuMZ['ItemsEquipsCore'][_0x12edc5(0x571)][_0x3cc99c]=new Function(_0x12edc5(0x1e8),'paramId',_0x5d79dc);}}}},VisuMZ[_0x1028f8(0x2ae)]['itemEnableJS']={},VisuMZ[_0x1028f8(0x2ae)]['Parse_Notetags_EnableJS']=function(_0x27c4e3,_0x352dfd){const _0x2d975e=_0x1028f8;if(_0x352dfd!==$dataItems)return;if(_0x27c4e3[_0x2d975e(0x358)][_0x2d975e(0x3ce)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x9ca14e=String(RegExp['$1']),_0xf3daa6=_0x2d975e(0x1cd)[_0x2d975e(0x413)](_0x9ca14e);VisuMZ[_0x2d975e(0x2ae)][_0x2d975e(0x3dd)][_0x27c4e3['id']]=new Function('item',_0xf3daa6);}},DataManager[_0x1028f8(0x486)]=function(_0x501c97){const _0x5eee12=_0x1028f8;return this[_0x5eee12(0x56d)](_0x501c97)&&_0x501c97[_0x5eee12(0x341)]===0x2;},DataManager['maxItemAmount']=function(_0x1a1e1e){const _0xb3e25c=_0x1028f8;if(!_0x1a1e1e)return 0x63;else return _0x1a1e1e[_0xb3e25c(0x358)]['match'](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0xb3e25c(0x599)](_0x1a1e1e);},DataManager[_0x1028f8(0x599)]=function(_0x6a4efd){const _0x424b4c=_0x1028f8;if(this[_0x424b4c(0x56d)](_0x6a4efd))return VisuMZ[_0x424b4c(0x2ae)][_0x424b4c(0x1c0)][_0x424b4c(0x583)][_0x424b4c(0x1c7)];else{if(this[_0x424b4c(0x1c6)](_0x6a4efd))return VisuMZ[_0x424b4c(0x2ae)][_0x424b4c(0x1c0)]['ItemScene'][_0x424b4c(0x425)];else{if(this[_0x424b4c(0x387)](_0x6a4efd))return VisuMZ[_0x424b4c(0x2ae)][_0x424b4c(0x1c0)][_0x424b4c(0x583)][_0x424b4c(0x439)];}}},DataManager['getClassIdWithName']=function(_0x20e2ca){const _0x20384b=_0x1028f8;_0x20e2ca=_0x20e2ca[_0x20384b(0x339)]()[_0x20384b(0x2de)](),this[_0x20384b(0x49c)]=this[_0x20384b(0x49c)]||{};if(this[_0x20384b(0x49c)][_0x20e2ca])return this[_0x20384b(0x49c)][_0x20e2ca];for(const _0x48c924 of $dataClasses){if(!_0x48c924)continue;let _0x3e6da2=_0x48c924['name'];_0x3e6da2=_0x3e6da2[_0x20384b(0x25d)](/\x1I\[(\d+)\]/gi,''),_0x3e6da2=_0x3e6da2[_0x20384b(0x25d)](/\\I\[(\d+)\]/gi,''),this[_0x20384b(0x49c)][_0x3e6da2['toUpperCase']()[_0x20384b(0x2de)]()]=_0x48c924['id'];}return this[_0x20384b(0x49c)][_0x20e2ca]||0x0;},DataManager[_0x1028f8(0x312)]=function(_0x59d300){const _0x3a46f9=_0x1028f8;_0x59d300=_0x59d300['toUpperCase']()['trim'](),this['_skillIDs']=this[_0x3a46f9(0x511)]||{};if(this[_0x3a46f9(0x511)][_0x59d300])return this[_0x3a46f9(0x511)][_0x59d300];for(const _0x1d9f27 of $dataSkills){if(!_0x1d9f27)continue;this[_0x3a46f9(0x511)][_0x1d9f27[_0x3a46f9(0x2c8)][_0x3a46f9(0x339)]()[_0x3a46f9(0x2de)]()]=_0x1d9f27['id'];}return this[_0x3a46f9(0x511)][_0x59d300]||0x0;},DataManager['getItemIdWithName']=function(_0x4518d6){const _0x29854c=_0x1028f8;_0x4518d6=_0x4518d6[_0x29854c(0x339)]()[_0x29854c(0x2de)](),this[_0x29854c(0x1ad)]=this['_itemIDs']||{};if(this[_0x29854c(0x1ad)][_0x4518d6])return this['_itemIDs'][_0x4518d6];for(const _0x6abff1 of $dataItems){if(!_0x6abff1)continue;this[_0x29854c(0x1ad)][_0x6abff1[_0x29854c(0x2c8)][_0x29854c(0x339)]()['trim']()]=_0x6abff1['id'];}return this[_0x29854c(0x1ad)][_0x4518d6]||0x0;},DataManager['getWeaponIdWithName']=function(_0x3f9df8){const _0x31c380=_0x1028f8;_0x3f9df8=_0x3f9df8[_0x31c380(0x339)]()[_0x31c380(0x2de)](),this[_0x31c380(0x3e5)]=this[_0x31c380(0x3e5)]||{};if(this['_weaponIDs'][_0x3f9df8])return this['_weaponIDs'][_0x3f9df8];for(const _0x1d26a of $dataWeapons){if(!_0x1d26a)continue;this[_0x31c380(0x3e5)][_0x1d26a[_0x31c380(0x2c8)][_0x31c380(0x339)]()[_0x31c380(0x2de)]()]=_0x1d26a['id'];}return this[_0x31c380(0x3e5)][_0x3f9df8]||0x0;},DataManager[_0x1028f8(0x1f9)]=function(_0x412f23){const _0x3abfcf=_0x1028f8;_0x412f23=_0x412f23[_0x3abfcf(0x339)]()[_0x3abfcf(0x2de)](),this[_0x3abfcf(0x426)]=this[_0x3abfcf(0x426)]||{};if(this[_0x3abfcf(0x426)][_0x412f23])return this['_armorIDs'][_0x412f23];for(const _0x12536e of $dataArmors){if(!_0x12536e)continue;this['_armorIDs'][_0x12536e[_0x3abfcf(0x2c8)][_0x3abfcf(0x339)]()[_0x3abfcf(0x2de)]()]=_0x12536e['id'];}return this[_0x3abfcf(0x426)][_0x412f23]||0x0;},DataManager[_0x1028f8(0x1ae)]=function(_0x2f2a7c){const _0x456e6c=_0x1028f8;_0x2f2a7c=_0x2f2a7c['toUpperCase']()[_0x456e6c(0x2de)](),this[_0x456e6c(0x430)]=this[_0x456e6c(0x430)]||{};if(this['_etypeIDs'][_0x2f2a7c])return this[_0x456e6c(0x430)][_0x2f2a7c];for(const _0x335b01 of $dataSystem[_0x456e6c(0x4a7)]){this[_0x456e6c(0x430)][_0x335b01['toUpperCase']()[_0x456e6c(0x2de)]()]=$dataSystem['equipTypes'][_0x456e6c(0x54d)](_0x335b01);}return this[_0x456e6c(0x430)][_0x2f2a7c]||0x0;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1be)]=function(){const _0x59b471=_0x1028f8;VisuMZ[_0x59b471(0x2ae)][_0x59b471(0x530)]($dataItems),VisuMZ[_0x59b471(0x2ae)][_0x59b471(0x530)]($dataWeapons),VisuMZ[_0x59b471(0x2ae)][_0x59b471(0x530)]($dataArmors);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x530)]=function(_0x388cfb){const _0x12327e=_0x1028f8;for(const _0x25ab57 of _0x388cfb){if(!_0x25ab57)continue;if(!DataManager[_0x12327e(0x472)](_0x25ab57))continue;const _0x2877e4=DataManager[_0x12327e(0x441)](_0x25ab57),_0x5cec23=['name',_0x12327e(0x3cf),_0x12327e(0x5e5)];for(const _0x5bd5fc of _0x5cec23){_0x25ab57[_0x5bd5fc]=_0x2877e4[_0x5bd5fc];}}},DataManager[_0x1028f8(0x472)]=function(_0x3f0394){const _0x236811=_0x1028f8;if(!_0x3f0394)return![];if(!_0x3f0394[_0x236811(0x358)])return![];return _0x3f0394&&_0x3f0394['note'][_0x236811(0x3ce)](/<PROXY:[ ](.*)>/i);},DataManager['getProxyItem']=function(_0x707d3e){const _0xdd5351=_0x1028f8;return this['isProxyItem'](_0x707d3e)?this[_0xdd5351(0x35c)](_0x707d3e)||_0x707d3e:_0x707d3e;},DataManager[_0x1028f8(0x35c)]=function(_0x1707c4){const _0x1fb00a=_0x1028f8;_0x1707c4[_0x1fb00a(0x358)]['match'](/<PROXY:[ ](.*)>/i);const _0x446006=RegExp['$1'][_0x1fb00a(0x2de)](),_0x3327dd=/^\d+$/['test'](_0x446006);if(this[_0x1fb00a(0x56d)](_0x1707c4)){const _0x8fca6=_0x3327dd?Number(_0x446006):DataManager[_0x1fb00a(0x523)](_0x446006);return $dataItems[_0x8fca6]||_0x1707c4;}else{if(this[_0x1fb00a(0x1c6)](_0x1707c4)){const _0x527252=_0x3327dd?Number(_0x446006):DataManager[_0x1fb00a(0x298)](_0x446006);return $dataWeapons[_0x527252]||_0x1707c4;}else{if(this[_0x1fb00a(0x387)](_0x1707c4)){const _0x364a00=_0x3327dd?Number(_0x446006):DataManager[_0x1fb00a(0x1f9)](_0x446006);return $dataArmors[_0x364a00]||_0x1707c4;}}}return _0x1707c4;},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x5af)]=Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x1e8)],Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x1e8)]=function(){const _0x354048=_0x1028f8;if($gameTemp['_bypassProxy'])return VisuMZ[_0x354048(0x2ae)][_0x354048(0x5af)][_0x354048(0x43c)](this);return DataManager[_0x354048(0x441)](VisuMZ[_0x354048(0x2ae)][_0x354048(0x5af)][_0x354048(0x43c)](this));},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x5be)]=function(){const _0x29feb6=_0x1028f8;return VisuMZ[_0x29feb6(0x2ae)][_0x29feb6(0x5af)][_0x29feb6(0x43c)](this);},VisuMZ[_0x1028f8(0x2ae)]['Window_ShopBuy_item']=Window_ShopBuy[_0x1028f8(0x5db)][_0x1028f8(0x1e8)],Window_ShopBuy[_0x1028f8(0x5db)][_0x1028f8(0x1e8)]=function(){const _0x524df0=_0x1028f8;if($gameTemp['_bypassProxy'])return VisuMZ['ItemsEquipsCore'][_0x524df0(0x25b)]['call'](this);return DataManager[_0x524df0(0x441)](VisuMZ[_0x524df0(0x2ae)][_0x524df0(0x25b)]['call'](this));},Window_ShopBuy['prototype'][_0x1028f8(0x5be)]=function(){const _0x1aa4c3=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x1aa4c3(0x25b)][_0x1aa4c3(0x43c)](this);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x305)]=Game_Item[_0x1028f8(0x5db)][_0x1028f8(0x26d)],Game_Item['prototype'][_0x1028f8(0x26d)]=function(_0x1a0c42){const _0x2a406c=_0x1028f8;if(DataManager['isProxyItem'](_0x1a0c42))return;VisuMZ['ItemsEquipsCore'][_0x2a406c(0x305)][_0x2a406c(0x43c)](this,_0x1a0c42);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x591)]=function(){const _0x1241e7=_0x1028f8;this[_0x1241e7(0x20b)]={'partyArtifactIDs':[],'troopArtifactIDs':[]};for(const _0x1f8d6e of $dataArmors){if(!_0x1f8d6e)continue;if(!DataManager[_0x1241e7(0x3c5)](_0x1f8d6e))continue;DataManager['isPartyArtifact'](_0x1f8d6e)&&this['artifactIDs']['partyArtifactIDs'][_0x1241e7(0x45e)](_0x1f8d6e['id']),DataManager['isTroopArtifact'](_0x1f8d6e)&&this[_0x1241e7(0x20b)][_0x1241e7(0x238)][_0x1241e7(0x45e)](_0x1f8d6e['id']);}},DataManager['isArtifact']=function(_0x10bbfa){const _0x24fcbb=_0x1028f8;if(!this[_0x24fcbb(0x387)](_0x10bbfa))return![];const _0x25c151=_0x10bbfa[_0x24fcbb(0x358)];if(!_0x25c151)return![];if(_0x25c151[_0x24fcbb(0x3ce)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x25c151[_0x24fcbb(0x3ce)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x25c151[_0x24fcbb(0x3ce)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x25c151[_0x24fcbb(0x3ce)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1028f8(0x46e)]=function(_0x5f2ace){const _0x2a7161=_0x1028f8;if(!this[_0x2a7161(0x3c5)](_0x5f2ace))return![];const _0x2b0582=_0x5f2ace[_0x2a7161(0x358)];if(!_0x2b0582)return![];if(_0x2b0582[_0x2a7161(0x3ce)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2b0582[_0x2a7161(0x3ce)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1028f8(0x4b6)]=function(_0x39e92a){const _0x3a4e54=_0x1028f8;if(!this[_0x3a4e54(0x3c5)](_0x39e92a))return![];const _0x1a7c88=_0x39e92a[_0x3a4e54(0x358)];if(!_0x1a7c88)return![];if(_0x1a7c88[_0x3a4e54(0x3ce)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x1a7c88[_0x3a4e54(0x3ce)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1028f8(0x559)]=function(_0x43615e){const _0x66da4b=_0x1028f8;if(!this[_0x66da4b(0x3c5)](_0x43615e))return![];const _0x46a8aa=_0x43615e[_0x66da4b(0x358)];if(!_0x46a8aa)return![];if(_0x46a8aa[_0x66da4b(0x3ce)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x46a8aa[_0x66da4b(0x3ce)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x4c9)]=Game_BattlerBase['prototype']['canEquip'],Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x5e7)]=function(_0x2cc9ba){const _0x1fe0de=_0x1028f8;if(DataManager[_0x1fe0de(0x3c5)](_0x2cc9ba))return![];if(!DataManager[_0x1fe0de(0x381)](this,_0x2cc9ba))return![];if(!DataManager[_0x1fe0de(0x509)](this,_0x2cc9ba))return![];return VisuMZ['ItemsEquipsCore']['Game_BattlerBase_canEquip_artifact']['call'](this,_0x2cc9ba);},VisuMZ[_0x1028f8(0x2ae)]['Game_BattlerBase_param_artifact']=Game_BattlerBase[_0x1028f8(0x5db)]['param'],Game_BattlerBase[_0x1028f8(0x5db)]['param']=function(_0x146dc0){const _0x3b072a=_0x1028f8;this[_0x3b072a(0x4ea)]=!![];const _0x3e20dd=VisuMZ[_0x3b072a(0x2ae)][_0x3b072a(0x37f)][_0x3b072a(0x43c)](this,_0x146dc0);return this[_0x3b072a(0x4ea)]=undefined,_0x3e20dd;},VisuMZ[_0x1028f8(0x2ae)]['Game_Actor_artifact']=Game_Actor[_0x1028f8(0x5db)]['traitObjects'],Game_Actor['prototype'][_0x1028f8(0x38f)]=function(){const _0x2e2813=_0x1028f8;this[_0x2e2813(0x506)]=!![];const _0x9c22be=VisuMZ[_0x2e2813(0x2ae)]['Game_Actor_artifact']['call'](this);return this[_0x2e2813(0x506)]=undefined,_0x9c22be;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5da)]=Game_Actor['prototype'][_0x1028f8(0x1cb)],Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x1cb)]=function(){const _0x564e97=_0x1028f8,_0x1fae4a=VisuMZ[_0x564e97(0x2ae)][_0x564e97(0x5da)]['call'](this);if(this['_allowArtifactTraitObjects']||this[_0x564e97(0x4ea)]){const _0x239556=_0x1fae4a[_0x564e97(0x285)]($gameParty[_0x564e97(0x373)]());return _0x239556;}else return _0x1fae4a;},VisuMZ['ItemsEquipsCore']['Game_BattlerBase_paramPlus_artifact']=Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x2af)],Game_BattlerBase[_0x1028f8(0x5db)]['paramPlus']=function(_0xb8f053){const _0x45cf4f=_0x1028f8;let _0x5783da=VisuMZ[_0x45cf4f(0x2ae)]['Game_BattlerBase_paramPlus_artifact']['call'](this,_0xb8f053);if(this['constructor']===Game_Enemy)for(const _0x379af of $gameParty[_0x45cf4f(0x20e)]()){if(_0x379af)_0x5783da+=_0x379af[_0x45cf4f(0x4b3)][_0xb8f053];}return _0x5783da;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x38a)]=Game_Enemy[_0x1028f8(0x5db)][_0x1028f8(0x38f)],Game_Enemy[_0x1028f8(0x5db)][_0x1028f8(0x38f)]=function(){const _0x44b3a4=_0x1028f8;let _0x36439d=VisuMZ['ItemsEquipsCore'][_0x44b3a4(0x38a)][_0x44b3a4(0x43c)](this);return _0x36439d[_0x44b3a4(0x285)]($gameParty['troopArtifacts']());},VisuMZ[_0x1028f8(0x2ae)]['Game_Party_gainItem_artifact']=Game_Party['prototype'][_0x1028f8(0x2ee)],Game_Party['prototype'][_0x1028f8(0x2ee)]=function(_0x190232,_0x45f6f9,_0xdf928c){const _0x5c9d53=_0x1028f8;VisuMZ[_0x5c9d53(0x2ae)][_0x5c9d53(0x5a6)][_0x5c9d53(0x43c)](this,_0x190232,_0x45f6f9,_0xdf928c);if(DataManager[_0x5c9d53(0x3c5)](_0x190232)){let _0x236144=$gameParty[_0x5c9d53(0x2dd)]();if($gameParty[_0x5c9d53(0x540)]())_0x236144=_0x236144[_0x5c9d53(0x285)]($gameTroop['members']());for(const _0x2a6a65 of _0x236144){if(!_0x2a6a65)continue;_0x2a6a65[_0x5c9d53(0x27f)]={};}}},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x373)]=function(){const _0x3943d2=_0x1028f8;let _0x3f7d48=[];const _0x584cbf=VisuMZ['ItemsEquipsCore'][_0x3943d2(0x20b)][_0x3943d2(0x1b2)];if(_0x584cbf)for(const _0x49a36c of _0x584cbf){const _0x1f3182=$dataArmors[_0x49a36c];if(!_0x1f3182)continue;if(!this[_0x3943d2(0x5cf)](_0x1f3182))continue;let _0x213c8e=0x1;if(DataManager[_0x3943d2(0x46e)](_0x1f3182))_0x213c8e=this[_0x3943d2(0x5c4)](_0x1f3182);while(_0x213c8e--)_0x3f7d48[_0x3943d2(0x45e)](_0x1f3182);}return _0x3f7d48;},Game_Party['prototype']['troopArtifacts']=function(){const _0x4bb99b=_0x1028f8;let _0x27ca14=[];const _0x3fb537=VisuMZ['ItemsEquipsCore']['artifactIDs'][_0x4bb99b(0x238)];if(_0x3fb537)for(const _0x26f4ae of _0x3fb537){const _0x32a02d=$dataArmors[_0x26f4ae];if(!_0x32a02d)continue;if(!this[_0x4bb99b(0x5cf)](_0x32a02d))continue;let _0x2f5c71=0x1;if(DataManager[_0x4bb99b(0x46e)](_0x32a02d))_0x2f5c71=this[_0x4bb99b(0x5c4)](_0x32a02d);while(_0x2f5c71--)_0x27ca14[_0x4bb99b(0x45e)](_0x32a02d);}return _0x27ca14;},Game_Party['prototype'][_0x1028f8(0x52a)]=function(){const _0x3541d0=_0x1028f8;return this[_0x3541d0(0x373)]()['concat'](this[_0x3541d0(0x20e)]());},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x50e)]=Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x4b5)],Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x4b5)]=function(){const _0x268704=_0x1028f8;VisuMZ[_0x268704(0x2ae)][_0x268704(0x50e)]['call'](this),this[_0x268704(0x360)]();},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x360)]=function(){const _0x1538ab=_0x1028f8,_0x51f3c5=$gameParty[_0x1538ab(0x1ed)]()[_0x1538ab(0x410)](_0x4a9c79=>DataManager['isArtifact'](_0x4a9c79));for(const _0x4a6e87 of _0x51f3c5){const _0x56c689=this[_0x1538ab(0x5c4)](_0x4a6e87);if(_0x56c689)this[_0x1538ab(0x58a)](_0x4a6e87,_0x56c689);}},DataManager[_0x1028f8(0x381)]=function(_0x5cdddc,_0x3f4c60){const _0x50de45=_0x1028f8;if(this[_0x50de45(0x56d)](_0x3f4c60))return![];if(!_0x5cdddc)return![];if($gameTemp[_0x50de45(0x395)])return!![];if(BattleManager[_0x50de45(0x3e9)]())return!![];const _0x1a2b0c=this['getClassRequirements'](_0x3f4c60);if(_0x1a2b0c['length']<=0x0)return!![];return _0x1a2b0c['includes'](_0x5cdddc[_0x50de45(0x2a3)]()['id']);},DataManager[_0x1028f8(0x58d)]=function(_0x2b50e6){const _0x1e5ec0=_0x1028f8;if(!_0x2b50e6)return[];this[_0x1e5ec0(0x4c0)]=this['_getClassRequirements']||{};const _0x19a86a=_0x1e5ec0(0x3ee)['format'](this[_0x1e5ec0(0x1c6)](_0x2b50e6)?_0x1e5ec0(0x1e5):_0x1e5ec0(0x1bd),_0x2b50e6['id']);if(this[_0x1e5ec0(0x4c0)][_0x19a86a]!==undefined)return this[_0x1e5ec0(0x4c0)][_0x19a86a];let _0x461a9e=[];const _0x1cc629=_0x2b50e6[_0x1e5ec0(0x358)]||'';if(_0x1cc629[_0x1e5ec0(0x3ce)](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x25d055=String(RegExp['$1'])['split'](',')[_0x1e5ec0(0x47a)](_0x23da5e=>_0x23da5e[_0x1e5ec0(0x2de)]());for(const _0x3a459d of _0x25d055){const _0x49a194=/^\d+$/[_0x1e5ec0(0x42a)](_0x3a459d);_0x49a194?_0x461a9e['push'](Number(_0x3a459d)):_0x461a9e['push'](DataManager[_0x1e5ec0(0x54c)](_0x3a459d));}}return this['_getClassRequirements'][_0x19a86a]=_0x461a9e,this[_0x1e5ec0(0x4c0)][_0x19a86a];},DataManager[_0x1028f8(0x509)]=function(_0x2eca20,_0x37ff93){const _0x6ac835=_0x1028f8;if(this['isItem'](_0x37ff93))return![];if(!_0x2eca20)return![];if($gameTemp[_0x6ac835(0x395)])return!![];if(BattleManager[_0x6ac835(0x3e9)]())return!![];const _0x3d21cc=this['getEquipRequirements'](_0x37ff93);for(const _0x593792 of _0x3d21cc){if(!this[_0x6ac835(0x32d)](_0x2eca20,_0x593792))return![];}return!![];},DataManager[_0x1028f8(0x207)]=function(_0x4b0b25){const _0x4fc3d2=_0x1028f8;if(!_0x4b0b25)return[];this[_0x4fc3d2(0x31c)]=this[_0x4fc3d2(0x31c)]||{};const _0x30f7d8=_0x4fc3d2(0x3ee)['format'](this[_0x4fc3d2(0x1c6)](_0x4b0b25)?_0x4fc3d2(0x1e5):'ARMOR',_0x4b0b25['id']);if(this['_getEquipRequirements'][_0x30f7d8]!==undefined)return this[_0x4fc3d2(0x31c)][_0x30f7d8];let _0x4f9d61=[];const _0x39c241=_0x4b0b25[_0x4fc3d2(0x358)]||'';return _0x39c241[_0x4fc3d2(0x3ce)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x4f9d61=String(RegExp['$1'])['split'](/[\r\n]+/)),this[_0x4fc3d2(0x31c)][_0x30f7d8]=_0x4f9d61,this[_0x4fc3d2(0x31c)][_0x30f7d8];},DataManager[_0x1028f8(0x32d)]=function(_0x2ce8a4,_0x5cb222){const _0x489e3c=_0x1028f8;if(_0x5cb222[_0x489e3c(0x3ce)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0xfd3ec0=String(RegExp['$1'])['trim'](),_0x5b066b=Number(RegExp['$2']);switch(_0xfd3ec0){case'>':return _0x2ce8a4[_0x489e3c(0x5e9)]>_0x5b066b;case'>=':return _0x2ce8a4[_0x489e3c(0x5e9)]>=_0x5b066b;case _0x489e3c(0x423):return _0x2ce8a4[_0x489e3c(0x5e9)]===_0x5b066b;case'<=':return _0x2ce8a4[_0x489e3c(0x5e9)]<=_0x5b066b;case'<':return _0x2ce8a4['level']<_0x5b066b;}return![];}if(_0x5cb222[_0x489e3c(0x3ce)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x34f134=String(RegExp['$1'])[_0x489e3c(0x3b3)]()[_0x489e3c(0x2de)](),_0x3718e9=String(RegExp['$2'])[_0x489e3c(0x2de)](),_0x1f34cb=Number(RegExp['$3']);let _0x5eb335=0x0;if([_0x489e3c(0x28f),_0x489e3c(0x59f)][_0x489e3c(0x36e)](_0x34f134))_0x5eb335=0x1;const _0x368b91=_0x2ce8a4[_0x489e3c(0x42c)][_0x5eb335]||0x0;switch(_0x3718e9){case'>':return _0x2ce8a4[_0x489e3c(0x1df)](_0x5eb335)+_0x368b91>_0x1f34cb;case'>=':return _0x2ce8a4['paramBase'](_0x5eb335)+_0x368b91>=_0x1f34cb;case _0x489e3c(0x423):return _0x2ce8a4['paramBase'](_0x5eb335)+_0x368b91===_0x1f34cb;case'<=':return _0x2ce8a4[_0x489e3c(0x1df)](_0x5eb335)+_0x368b91<=_0x1f34cb;case'<':return _0x2ce8a4[_0x489e3c(0x1df)](_0x5eb335)+_0x368b91<_0x1f34cb;}return![];}if(_0x5cb222['match'](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x4854ba=String(RegExp['$1'])[_0x489e3c(0x3b3)]()[_0x489e3c(0x2de)](),_0x3c52e3=String(RegExp['$2'])[_0x489e3c(0x2de)](),_0x47f7aa=Number(RegExp['$3']),_0x3657fa=[_0x489e3c(0x570),_0x489e3c(0x39a),_0x489e3c(0x1a9),_0x489e3c(0x3b8),_0x489e3c(0x419),_0x489e3c(0x44a)];let _0xdcb8ea=_0x3657fa[_0x489e3c(0x54d)](_0x4854ba)+0x2;if(_0xdcb8ea<0x2)return![];const _0x4dbef5=_0x2ce8a4[_0x489e3c(0x42c)][_0xdcb8ea]||0x0;switch(_0x3c52e3){case'>':return _0x2ce8a4[_0x489e3c(0x1df)](_0xdcb8ea)+_0x4dbef5>_0x47f7aa;case'>=':return _0x2ce8a4[_0x489e3c(0x1df)](_0xdcb8ea)+_0x4dbef5>=_0x47f7aa;case _0x489e3c(0x423):return _0x2ce8a4[_0x489e3c(0x1df)](_0xdcb8ea)+_0x4dbef5===_0x47f7aa;case'<=':return _0x2ce8a4[_0x489e3c(0x1df)](_0xdcb8ea)+_0x4dbef5<=_0x47f7aa;case'<':return _0x2ce8a4['paramBase'](_0xdcb8ea)+_0x4dbef5<_0x47f7aa;}return![];}if(_0x5cb222[_0x489e3c(0x3ce)](/LEARNED SKILL:[ ](\d+)/i)){const _0x49547f=Number(RegExp['$1']);return _0x2ce8a4[_0x489e3c(0x5ab)](_0x49547f);}else{if(_0x5cb222['match'](/LEARNED SKILL:[ ](.*)/i)){const _0x181ee5=String(RegExp['$1']),_0x259165=this[_0x489e3c(0x312)](_0x181ee5);return _0x2ce8a4['isLearnedSkill'](_0x259165);}}if(_0x5cb222[_0x489e3c(0x3ce)](/SWITCH:[ ](\d+)/i)){const _0x33e7e9=Number(RegExp['$1']);return $gameSwitches['value'](_0x33e7e9);}return!![];},DataManager[_0x1028f8(0x551)]=function(_0x2e7528){const _0x122989=_0x1028f8;return this[_0x122989(0x387)](_0x2e7528)?this[_0x122989(0x1ab)](_0x2e7528):[_0x2e7528['etypeId']||0x0];},DataManager[_0x1028f8(0x1ab)]=function(_0x3a4a32){const _0x2b6c80=_0x1028f8;this[_0x2b6c80(0x1a1)]=this[_0x2b6c80(0x1a1)]||{};if(this['_cache_etypeIDs'][_0x3a4a32['id']]!==undefined)return this[_0x2b6c80(0x1a1)][_0x3a4a32['id']];this[_0x2b6c80(0x1a1)][_0x3a4a32['id']]=[_0x3a4a32[_0x2b6c80(0x4c3)]||0x0];const _0x39e214=_0x3a4a32['note']||'';if(_0x39e214[_0x2b6c80(0x3ce)](/<ADDED ETYPE(?:|S):[ ](.*)>/i)){const _0x353d6d=String(RegExp['$1'])[_0x2b6c80(0x424)](',')['map'](_0x12eeab=>_0x12eeab[_0x2b6c80(0x2de)]());for(const _0x4a45d3 of _0x353d6d){const _0x7c8570=/^\d+$/[_0x2b6c80(0x42a)](_0x4a45d3);let _0x3ec6e8=0x0;_0x7c8570?_0x3ec6e8=Number(_0x4a45d3):_0x3ec6e8=this['getEtypeIdWithName'](_0x4a45d3),_0x3ec6e8>0x1&&this[_0x2b6c80(0x1a1)][_0x3a4a32['id']][_0x2b6c80(0x45e)](_0x3ec6e8);}}return this[_0x2b6c80(0x1a1)][_0x3a4a32['id']];},Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x4a1)]=function(_0x357cd7){const _0x4d6a7d=_0x1028f8;return this[_0x4d6a7d(0x414)](_0x357cd7[_0x4d6a7d(0x38c)])&&!this[_0x4d6a7d(0x303)](_0x357cd7[_0x4d6a7d(0x4c3)])&&DataManager[_0x4d6a7d(0x551)](_0x357cd7)[_0x4d6a7d(0x37b)](_0x220788=>!this[_0x4d6a7d(0x303)](_0x220788));},DataManager[_0x1028f8(0x2bc)]=function(_0xc70768){const _0x1e7b19=_0x1028f8;if(!this[_0x1e7b19(0x1c6)](_0xc70768)&&!this[_0x1e7b19(0x387)](_0xc70768))return![];if(Imported['VisuMZ_2_WeaponSwapSystem']&&this['isWeapon'](_0xc70768))return![];if(!_0xc70768[_0x1e7b19(0x358)])return![];return _0xc70768['note'][_0x1e7b19(0x3ce)](/<CURSED>/i);},DataManager[_0x1028f8(0x533)]=function(_0x22d5d9){const _0x218086=_0x1028f8;if(!_0x22d5d9)return _0x22d5d9;if(!this[_0x218086(0x1c6)](_0x22d5d9)&&!this[_0x218086(0x387)](_0x22d5d9))return _0x22d5d9;if(_0x22d5d9[_0x218086(0x358)][_0x218086(0x3ce)](/<PURIFY TRANSFORM:[ ](.*)>/i)){const _0x2a63d9=String(RegExp['$1'])[_0x218086(0x2de)](),_0x17fced=/^\d+$/[_0x218086(0x42a)](_0x2a63d9);if(_0x17fced){if(this[_0x218086(0x1c6)](_0x22d5d9))return $dataWeapons[Number(_0x2a63d9)];if(this[_0x218086(0x387)](_0x22d5d9))return $dataArmors[Number(_0x2a63d9)];}else{if(this[_0x218086(0x1c6)](_0x22d5d9))return $dataWeapons[this[_0x218086(0x298)](_0x2a63d9)];if(this[_0x218086(0x387)](_0x22d5d9))return $dataArmors[this[_0x218086(0x1f9)](_0x2a63d9)];}}return _0x22d5d9;},Game_Party['prototype'][_0x1028f8(0x277)]=function(){const _0x2470f1=_0x1028f8,_0x2648aa=this[_0x2470f1(0x2dd)]();for(const _0x39f3e5 of _0x2648aa){if(!_0x39f3e5)continue;_0x39f3e5[_0x2470f1(0x277)]();}},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x277)]=function(){const _0x2cb8ce=_0x1028f8,_0x4d0792=this[_0x2cb8ce(0x405)]()[_0x2cb8ce(0x2fd)];for(let _0x3fe221=0x0;_0x3fe221<_0x4d0792;_0x3fe221++){const _0x160ff3=this[_0x2cb8ce(0x4d9)][_0x3fe221];if(!_0x160ff3)continue;const _0x541f02=_0x160ff3[_0x2cb8ce(0x29a)]();if(!DataManager[_0x2cb8ce(0x2bc)](_0x541f02))continue;let _0x39dd59=DataManager[_0x2cb8ce(0x533)](_0x541f02);this[_0x2cb8ce(0x31e)](_0x541f02,_0x39dd59)?(!this[_0x2cb8ce(0x4d9)][_0x3fe221]&&(this[_0x2cb8ce(0x4d9)][_0x3fe221]=new Game_Item()),this[_0x2cb8ce(0x4d9)][_0x3fe221][_0x2cb8ce(0x26d)](_0x39dd59),this[_0x2cb8ce(0x495)]()):this[_0x2cb8ce(0x316)](_0x3fe221,null);}},Game_Actor[_0x1028f8(0x5db)]['isPurifyItemSwapOk']=function(_0x5d166d,_0x2d4c2d){const _0x412fd4=_0x1028f8;if(_0x5d166d===_0x2d4c2d)return![];const _0x482132=DataManager['getEtypeIDs'](_0x2d4c2d);if(!_0x482132[_0x412fd4(0x36e)](_0x5d166d['etypeId']))return![];if(DataManager[_0x412fd4(0x1c6)](_0x2d4c2d))return this[_0x412fd4(0x457)](_0x2d4c2d[_0x412fd4(0x2c0)]);else{if(DataManager[_0x412fd4(0x387)](_0x2d4c2d))return this[_0x412fd4(0x414)](_0x2d4c2d[_0x412fd4(0x38c)]);}return![];},TextManager['ITEMS_EQUIPS_CORE']={'helpDesc':{'equip':VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1c0)]['EquipScene'][_0x1028f8(0x213)]??_0x1028f8(0x577),'optimize':VisuMZ['ItemsEquipsCore'][_0x1028f8(0x1c0)][_0x1028f8(0x21e)][_0x1028f8(0x1c5)]??'Equip\x20the\x20strongest\x20available\x20equipment.','clear':VisuMZ['ItemsEquipsCore'][_0x1028f8(0x1c0)][_0x1028f8(0x21e)][_0x1028f8(0x4b4)]??_0x1028f8(0x406)}},ColorManager[_0x1028f8(0x5a9)]=function(_0x4ebf9b){const _0x4ce9b8=_0x1028f8;if(!_0x4ebf9b)return this[_0x4ce9b8(0x26c)]();else{if(_0x4ebf9b[_0x4ce9b8(0x358)]['match'](/<COLOR:[ ](\d+)>/i))return this['textColor'](Number(RegExp['$1'])[_0x4ce9b8(0x2a9)](0x0,0x1f));else return _0x4ebf9b[_0x4ce9b8(0x358)][_0x4ce9b8(0x3ce)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0x4ce9b8(0x26c)]();}},ColorManager['getColor']=function(_0x538c53){const _0x201c12=_0x1028f8;return _0x538c53=String(_0x538c53),_0x538c53['match'](/#(.*)/i)?_0x201c12(0x3db)['format'](String(RegExp['$1'])):this[_0x201c12(0x524)](Number(_0x538c53));},SceneManager[_0x1028f8(0x1dc)]=function(){const _0x1479a0=_0x1028f8;return this['_scene']&&this[_0x1479a0(0x212)][_0x1479a0(0x50a)]===Scene_Shop;},Game_Temp[_0x1028f8(0x5db)]['newLabelEnabled']=function(){const _0x2e79a7=_0x1028f8;if(this[_0x2e79a7(0x5b4)])return![];return VisuMZ[_0x2e79a7(0x2ae)][_0x2e79a7(0x1c0)]['New'][_0x2e79a7(0x229)];},VisuMZ[_0x1028f8(0x2e3)]=VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1c0)][_0x1028f8(0x41f)][_0x1028f8(0x4af)],VisuMZ[_0x1028f8(0x2ae)]['Game_BattlerBase_param']=Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x240)],Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x240)]=function(_0x54d3ba){const _0x72f194=_0x1028f8;return this[_0x72f194(0x412)]?this[_0x72f194(0x43d)]?VisuMZ['ShopMenuStatusStandard']:0x1:VisuMZ['ItemsEquipsCore']['Game_BattlerBase_param'][_0x72f194(0x43c)](this,_0x54d3ba);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x4a6)]=Game_BattlerBase['prototype'][_0x1028f8(0x391)],Game_BattlerBase['prototype'][_0x1028f8(0x391)]=function(_0x13fc23){const _0x17d3f9=_0x1028f8;if(!_0x13fc23)return![];if(!VisuMZ[_0x17d3f9(0x2ae)][_0x17d3f9(0x4a6)][_0x17d3f9(0x43c)](this,_0x13fc23))return![];if(!this[_0x17d3f9(0x2b8)](_0x13fc23))return![];if(!this[_0x17d3f9(0x2b5)](_0x13fc23))return![];return!![];},Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x2b8)]=function(_0xe3a19d){const _0x6927d8=_0x1028f8;if(!this[_0x6927d8(0x264)](_0xe3a19d))return![];return!![];},Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x264)]=function(_0x2fec3){const _0x5905e2=_0x1028f8,_0x569404=_0x2fec3[_0x5905e2(0x358)];if(_0x569404[_0x5905e2(0x3ce)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x54a5f9=JSON['parse']('['+RegExp['$1'][_0x5905e2(0x3ce)](/\d+/g)+']');for(const _0x53c60f of _0x54a5f9){if(!$gameSwitches[_0x5905e2(0x278)](_0x53c60f))return![];}return!![];}if(_0x569404[_0x5905e2(0x3ce)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xd9410d=JSON['parse']('['+RegExp['$1'][_0x5905e2(0x3ce)](/\d+/g)+']');for(const _0x28e395 of _0xd9410d){if(!$gameSwitches['value'](_0x28e395))return![];}return!![];}if(_0x569404[_0x5905e2(0x3ce)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5b51e9=JSON[_0x5905e2(0x2a6)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x5647c8 of _0x5b51e9){if($gameSwitches['value'](_0x5647c8))return!![];}return![];}if(_0x569404[_0x5905e2(0x3ce)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x57d25a=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x4ce5d4 of _0x57d25a){if(!$gameSwitches[_0x5905e2(0x278)](_0x4ce5d4))return!![];}return![];}if(_0x569404[_0x5905e2(0x3ce)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x47aaf1=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x5e66b2 of _0x47aaf1){if(!$gameSwitches[_0x5905e2(0x278)](_0x5e66b2))return!![];}return![];}if(_0x569404['match'](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2cdbae=JSON[_0x5905e2(0x2a6)]('['+RegExp['$1'][_0x5905e2(0x3ce)](/\d+/g)+']');for(const _0x59668e of _0x2cdbae){if($gameSwitches['value'](_0x59668e))return![];}return!![];}return!![];},Game_BattlerBase[_0x1028f8(0x5db)][_0x1028f8(0x2b5)]=function(_0x45e2ad){const _0x54470e=_0x1028f8,_0x589607=_0x45e2ad['note'],_0xff2851=VisuMZ[_0x54470e(0x2ae)]['itemEnableJS'];return _0xff2851[_0x45e2ad['id']]?_0xff2851[_0x45e2ad['id']][_0x54470e(0x43c)](this,_0x45e2ad):!![];},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x2ab)]=function(){const _0x8a81b7=_0x1028f8,_0x1984a2=this['equipSlots']()[_0x8a81b7(0x2fd)];for(let _0x30e092=0x0;_0x30e092<_0x1984a2;_0x30e092++){if(this[_0x8a81b7(0x56a)](_0x30e092))this[_0x8a81b7(0x316)](_0x30e092,null);}},Game_Actor['prototype'][_0x1028f8(0x56a)]=function(_0xae2f12){const _0x34325d=_0x1028f8;return this[_0x34325d(0x4eb)]()[_0x34325d(0x36e)](this[_0x34325d(0x405)]()[_0xae2f12])?![]:this[_0x34325d(0x518)](_0xae2f12);},Game_Actor['prototype']['nonRemovableEtypes']=function(){const _0x2e427b=_0x1028f8;return VisuMZ[_0x2e427b(0x2ae)][_0x2e427b(0x1c0)][_0x2e427b(0x21e)][_0x2e427b(0x342)];},Game_Actor['prototype'][_0x1028f8(0x408)]=function(){const _0x357fce=_0x1028f8,_0x500edc=this[_0x357fce(0x405)]()[_0x357fce(0x2fd)];for(let _0x435d23=0x0;_0x435d23<_0x500edc;_0x435d23++){if(this[_0x357fce(0x202)](_0x435d23))this[_0x357fce(0x316)](_0x435d23,null);}for(let _0x5035de=0x0;_0x5035de<_0x500edc;_0x5035de++){if(this[_0x357fce(0x202)](_0x5035de))this[_0x357fce(0x316)](_0x5035de,this[_0x357fce(0x42d)](_0x5035de));}},Game_Actor['prototype'][_0x1028f8(0x202)]=function(_0xad8262){const _0x3fa162=_0x1028f8;return this[_0x3fa162(0x3ca)]()['includes'](this['equipSlots']()[_0xad8262])?![]:this[_0x3fa162(0x518)](_0xad8262);},VisuMZ[_0x1028f8(0x2ae)]['Game_Actor_isEquipChangeOk']=Game_Actor[_0x1028f8(0x5db)]['isEquipChangeOk'],Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x518)]=function(_0xf874f7){const _0x415bb4=_0x1028f8;!this['_equips'][_0xf874f7]&&(this[_0x415bb4(0x4d9)][_0xf874f7]=new Game_Item());const _0x262c49=this[_0x415bb4(0x4d9)][_0xf874f7];if(_0x262c49){const _0x3fcac8=_0x262c49[_0x415bb4(0x29a)]();if(DataManager[_0x415bb4(0x2bc)](_0x3fcac8))return![];}return VisuMZ[_0x415bb4(0x2ae)][_0x415bb4(0x3a6)]['call'](this,_0xf874f7);},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x3ca)]=function(){const _0x5e9b28=_0x1028f8;return VisuMZ[_0x5e9b28(0x2ae)][_0x5e9b28(0x1c0)][_0x5e9b28(0x21e)]['NonOptimizeETypes'];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5b6)]=Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x590)],Game_Actor['prototype'][_0x1028f8(0x590)]=function(_0x2d40ba,_0x3ebaf5){const _0xf70237=_0x1028f8;if(this[_0xf70237(0x249)])return![];$gameTemp[_0xf70237(0x5b4)]=!![];const _0x1f2c23=VisuMZ['ItemsEquipsCore'][_0xf70237(0x5b6)]['call'](this,_0x2d40ba,_0x3ebaf5);return $gameTemp[_0xf70237(0x5b4)]=![],_0x1f2c23;},Game_Actor[_0x1028f8(0x5db)]['changeEquipById']=function(_0x1c4164,_0x2fa229){const _0x5a34c4=_0x1028f8,_0xb7b332=this['getNextAvailableEtypeId'](_0x1c4164);if(_0xb7b332<0x0)return;const _0x12dfcc=_0x1c4164===0x1?$dataWeapons[_0x2fa229]:$dataArmors[_0x2fa229];this[_0x5a34c4(0x316)](_0xb7b332,_0x12dfcc);},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x4bb)]=function(_0x3587c0){const _0x32623e=_0x1028f8;let _0x198a82=0x0;const _0x5c5a96=this[_0x32623e(0x405)](),_0x2ddd4c=this[_0x32623e(0x1cb)]();for(let _0x54c1b9=0x0;_0x54c1b9<_0x5c5a96[_0x32623e(0x2fd)];_0x54c1b9++){if(_0x5c5a96[_0x54c1b9]===_0x3587c0){_0x198a82=_0x54c1b9;if(!_0x2ddd4c[_0x54c1b9])return _0x198a82;}}return _0x198a82;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x2b0)]=Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x2af)],Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x2af)]=function(_0xfc32ed){const _0x1ba50c=_0x1028f8;let _0x35293b=VisuMZ[_0x1ba50c(0x2ae)][_0x1ba50c(0x2b0)][_0x1ba50c(0x43c)](this,_0xfc32ed);for(const _0x4ce6e4 of this[_0x1ba50c(0x1cb)]()){if(_0x4ce6e4)_0x35293b+=this[_0x1ba50c(0x24d)](_0x4ce6e4,_0xfc32ed);}return _0x35293b;},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x24d)]=function(_0x35da09,_0x588f0d){const _0x2a33e6=_0x1028f8;if(this[_0x2a33e6(0x2c7)])return 0x0;const _0x3b2505=(DataManager[_0x2a33e6(0x1c6)](_0x35da09)?_0x2a33e6(0x1aa):_0x2a33e6(0x1b0))[_0x2a33e6(0x413)](_0x35da09['id']),_0x4ca3cb='%1-%2'[_0x2a33e6(0x413)](_0x3b2505,_0x588f0d);if(VisuMZ[_0x2a33e6(0x2ae)][_0x2a33e6(0x571)][_0x4ca3cb]){this[_0x2a33e6(0x2c7)]=!![];const _0xa17bbc=VisuMZ['ItemsEquipsCore']['paramJS'][_0x4ca3cb][_0x2a33e6(0x43c)](this,_0x35da09,_0x588f0d);return this[_0x2a33e6(0x2c7)]=![],_0xa17bbc;}else return 0x0;},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x46b)]=function(_0x345591){const _0x47460e=_0x1028f8;this[_0x47460e(0x412)]=!![],this[_0x47460e(0x43d)]=_0x345591;},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x5bd)]=function(_0x17b8aa){const _0x3bf209=_0x1028f8;_0x17b8aa=this[_0x3bf209(0x5f2)](_0x17b8aa);const _0x33e0bc=this['equipSlots']();this[_0x3bf209(0x4d9)]=[];for(let _0x599313=0x0;_0x599313<_0x33e0bc['length'];_0x599313++){this['_equips'][_0x599313]=new Game_Item();}for(let _0x5490a6=0x0;_0x5490a6<_0x33e0bc['length'];_0x5490a6++){const _0x119865=_0x33e0bc[_0x5490a6],_0x198c96=this['getMatchingInitEquip'](_0x17b8aa,_0x119865);if(this['canEquip'](_0x198c96))this[_0x3bf209(0x4d9)][_0x5490a6][_0x3bf209(0x26d)](_0x198c96);}this['releaseUnequippableItems'](!![]),this[_0x3bf209(0x495)]();},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x5f2)]=function(_0x386e8a){const _0x1ba330=_0x1028f8,_0x4f6e1e=[];for(let _0x30b971=0x0;_0x30b971<_0x386e8a[_0x1ba330(0x2fd)];_0x30b971++){const _0x43ef79=_0x386e8a[_0x30b971];if(_0x43ef79<=0x0)continue;const _0x13ac7c=$dataSystem['equipTypes'][_0x30b971+0x1];if(_0x13ac7c===$dataSystem['equipTypes'][0x1]||_0x30b971===0x1&&this[_0x1ba330(0x1de)]())_0x4f6e1e[_0x1ba330(0x45e)]($dataWeapons[_0x43ef79]);else{if(BattleManager[_0x1ba330(0x3e9)]()){const _0x2fcb7f=$dataArmors[_0x43ef79];_0x2fcb7f&&_0x2fcb7f['etypeId']===_0x30b971+0x1&&_0x4f6e1e[_0x1ba330(0x45e)](_0x2fcb7f);}else{const _0x2ab05f=$dataArmors[_0x43ef79];_0x2ab05f&&_0x2ab05f['etypeId']===_0x30b971+0x1&&_0x4f6e1e[_0x1ba330(0x45e)](_0x2ab05f);}}}return _0x4f6e1e;},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x4e2)]=function(_0x39e7d7,_0x1bacd1){const _0x5e1537=_0x1028f8;for(const _0x1ea1eb of _0x39e7d7){if(!_0x1ea1eb)continue;if(_0x1ea1eb[_0x5e1537(0x4c3)]===_0x1bacd1)return _0x39e7d7[_0x5e1537(0x3d0)](_0x39e7d7['indexOf'](_0x1ea1eb),0x1),_0x1ea1eb;}return null;},Game_Actor[_0x1028f8(0x5db)]['equipSlots']=function(){const _0xdb14d2=_0x1028f8,_0x4c8cb1=VisuMZ[_0xdb14d2(0x2ae)]['deepCopy'](this[_0xdb14d2(0x36f)]||this[_0xdb14d2(0x2a3)]()['equipSlots']);if(_0x4c8cb1[_0xdb14d2(0x2fd)]>=0x2&&this[_0xdb14d2(0x1de)]())_0x4c8cb1[0x1]=0x1;return _0x4c8cb1;},Game_Actor['prototype'][_0x1028f8(0x461)]=function(_0x593f49){const _0x42cba3=_0x1028f8;_0x593f49['remove'](0x0),_0x593f49[_0x42cba3(0x4e8)](-0x1),this['_forcedSlots']=_0x593f49,this[_0x42cba3(0x495)](),this[_0x42cba3(0x4d8)]();},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x3be)]=function(){const _0x1596d5=_0x1028f8;this[_0x1596d5(0x36f)]=undefined,this['refresh'](),this[_0x1596d5(0x4d8)]();},Game_Actor['prototype'][_0x1028f8(0x4d8)]=function(){const _0x2b47bc=_0x1028f8;let _0x217b45=this['equipSlots']()[_0x2b47bc(0x2fd)];while(this['_equips'][_0x2b47bc(0x2fd)]>_0x217b45){const _0x178531=this['_equips'][this['_equips'][_0x2b47bc(0x2fd)]-0x1];_0x178531&&_0x178531['object']()&&$gameParty[_0x2b47bc(0x2ee)](_0x178531[_0x2b47bc(0x29a)](),0x1),this[_0x2b47bc(0x4d9)][_0x2b47bc(0x3c7)]();}while(_0x217b45>this['_equips'][_0x2b47bc(0x2fd)]){this[_0x2b47bc(0x4d9)]['push'](new Game_Item());}},VisuMZ[_0x1028f8(0x2ae)]['Game_Actor_changeClass']=Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x5e0)],Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x5e0)]=function(_0x3865de,_0x5194de){const _0x259950=_0x1028f8;VisuMZ[_0x259950(0x2ae)][_0x259950(0x4b0)][_0x259950(0x43c)](this,_0x3865de,_0x5194de),this[_0x259950(0x4d8)]();},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x28b)]=function(){const _0x7c4c31=_0x1028f8,_0x4894f0=this[_0x7c4c31(0x405)]();for(let _0x1e0786=0x0;_0x1e0786<_0x4894f0[_0x7c4c31(0x2fd)];_0x1e0786++){if(!this['_equips'][_0x1e0786])this[_0x7c4c31(0x4d9)][_0x1e0786]=new Game_Item();}this['releaseUnequippableItems'](![]),this[_0x7c4c31(0x495)]();},VisuMZ[_0x1028f8(0x2ae)]['Game_Actor_changeEquip']=Game_Actor[_0x1028f8(0x5db)]['changeEquip'],Game_Actor[_0x1028f8(0x5db)]['changeEquip']=function(_0x49f258,_0x4c1684){const _0x2e46f2=_0x1028f8;if(!this['_tempActor']){const _0x5ae795=JsonEx[_0x2e46f2(0x4cc)](this);_0x5ae795[_0x2e46f2(0x249)]=!![],this['changeEquipBase'](_0x49f258,_0x4c1684),this['equipAdjustHpMp'](_0x5ae795);}else this[_0x2e46f2(0x5ad)](_0x49f258,_0x4c1684);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x488)]=Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x3da)],Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x3da)]=function(_0x3bb3cd,_0xf3800b){const _0xd2a752=_0x1028f8;!this['_equips'][_0x3bb3cd]&&(this[_0xd2a752(0x4d9)][_0x3bb3cd]=new Game_Item());if(!this[_0xd2a752(0x249)]){const _0x496ba1=JsonEx[_0xd2a752(0x4cc)](this);_0x496ba1[_0xd2a752(0x249)]=!![],VisuMZ[_0xd2a752(0x2ae)][_0xd2a752(0x488)][_0xd2a752(0x43c)](this,_0x3bb3cd,_0xf3800b),this['equipAdjustHpMp'](_0x496ba1);}else VisuMZ[_0xd2a752(0x2ae)][_0xd2a752(0x488)][_0xd2a752(0x43c)](this,_0x3bb3cd,_0xf3800b);},VisuMZ[_0x1028f8(0x2ae)]['Game_Actor_discardEquip']=Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x1fa)],Game_Actor['prototype']['discardEquip']=function(_0x55bbca){const _0x39a7bd=_0x1028f8;if(!this['_tempActor']){const _0x5281a9=JsonEx[_0x39a7bd(0x4cc)](this);_0x5281a9[_0x39a7bd(0x249)]=!![],VisuMZ[_0x39a7bd(0x2ae)][_0x39a7bd(0x3ff)][_0x39a7bd(0x43c)](this,_0x55bbca),this[_0x39a7bd(0x450)](_0x5281a9);}else VisuMZ['ItemsEquipsCore'][_0x39a7bd(0x3ff)]['call'](this,_0x55bbca);},Game_Actor['prototype'][_0x1028f8(0x3f7)]=function(_0x53f9a0){const _0x5a9a9e=_0x1028f8;if(this[_0x5a9a9e(0x58c)])return;let _0x45fda4=0x0;for(;;){_0x45fda4++;if(_0x45fda4>0x3)break;const _0x2fc497=this['equipSlots'](),_0x5b4569=this[_0x5a9a9e(0x1cb)](),_0xb059f6=_0x5b4569[_0x5a9a9e(0x2fd)];let _0x16c644=![];for(let _0x14beda=0x0;_0x14beda<_0xb059f6;_0x14beda++){const _0x40d035=_0x5b4569[_0x14beda];if(!_0x40d035)continue;const _0x415633=DataManager[_0x5a9a9e(0x551)](_0x40d035);if(!this[_0x5a9a9e(0x5e7)](_0x40d035)||!_0x415633[_0x5a9a9e(0x36e)](_0x2fc497[_0x14beda])){!_0x53f9a0&&this[_0x5a9a9e(0x590)](null,_0x40d035);if(!this['_tempActor']){const _0xa93320=JsonEx[_0x5a9a9e(0x4cc)](this);_0xa93320[_0x5a9a9e(0x249)]=!![],this['_equips'][_0x14beda][_0x5a9a9e(0x26d)](null),this['_bypassReleaseUnequippableItemsItemsEquipsCore']=!![],this[_0x5a9a9e(0x450)](_0xa93320),this['_bypassReleaseUnequippableItemsItemsEquipsCore']=undefined;}else{if(this[_0x5a9a9e(0x4d9)][_0x14beda])this[_0x5a9a9e(0x4d9)][_0x14beda]['setObject'](null);else continue;}_0x16c644=!![];}}if(!_0x16c644)break;}},Game_Actor['prototype'][_0x1028f8(0x450)]=function(_0x357208){const _0x4c6a8e=_0x1028f8;if(this[_0x4c6a8e(0x249)])return;if(!VisuMZ[_0x4c6a8e(0x2ae)][_0x4c6a8e(0x1c0)][_0x4c6a8e(0x21e)][_0x4c6a8e(0x3c9)])return;const _0x56d8ed=Math[_0x4c6a8e(0x49a)](_0x357208['hpRate']()*this['mhp']),_0x4b6a55=Math['round'](_0x357208[_0x4c6a8e(0x1a8)]()*this['mmp']);if(this['hp']>0x0)this[_0x4c6a8e(0x38e)](_0x56d8ed);if(this['mp']>0x0)this[_0x4c6a8e(0x2bf)](_0x4b6a55);},Game_Actor[_0x1028f8(0x5db)]['changeEquipBase']=function(_0x5a679d,_0xb3e706){const _0x3971c1=_0x1028f8;if(!this['tradeItemWithParty'](_0xb3e706,this[_0x3971c1(0x1cb)]()[_0x5a679d]))return;if(_0xb3e706){const _0x2b077c=DataManager['getEtypeIDs'](_0xb3e706);if(!_0x2b077c['includes'](this[_0x3971c1(0x405)]()[_0x5a679d]))return;}!this[_0x3971c1(0x4d9)][_0x5a679d]&&(this[_0x3971c1(0x4d9)][_0x5a679d]=new Game_Item());this['_equips'][_0x5a679d]['setObject'](_0xb3e706);if(VisuMZ[_0x3971c1(0x2ae)]['CheckCursedItemMsg'](_0xb3e706)){const _0x52d759=VisuMZ[_0x3971c1(0x2ae)][_0x3971c1(0x1c0)][_0x3971c1(0x21e)][_0x3971c1(0x487)]||'',_0x4579b8=this['name'](),_0x111f8f=_0x3971c1(0x354)[_0x3971c1(0x413)](_0xb3e706[_0x3971c1(0x3cf)]),_0x5458f=_0xb3e706['name']||'';let _0x4d7fc8=_0x52d759[_0x3971c1(0x413)](_0x4579b8,_0x111f8f,_0x5458f);if(VisuMZ[_0x3971c1(0x1f3)][_0x3971c1(0x4dd)]>=1.79&&_0x4d7fc8[_0x3971c1(0x2fd)]>0x0)$textPopup(_0x4d7fc8);}this[_0x3971c1(0x495)]();},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x35a)]=function(_0x328883){const _0x599f17=_0x1028f8;if(!_0x328883)return![];if(!Imported[_0x599f17(0x236)])return![];if(VisuMZ[_0x599f17(0x1f3)][_0x599f17(0x4dd)]<1.79)return![];return DataManager[_0x599f17(0x2bc)](_0x328883);},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x42d)]=function(_0x43216){const _0x2d0a57=_0x1028f8,_0x5590fb=this['equipSlots']()[_0x43216],_0x488211=$gameParty[_0x2d0a57(0x2b2)]()[_0x2d0a57(0x410)](_0xbed63=>DataManager['getEtypeIDs'](_0xbed63)['includes'](_0x5590fb)&&this[_0x2d0a57(0x5e7)](_0xbed63)&&!DataManager[_0x2d0a57(0x2bc)](_0xbed63));let _0x3e8e3f=null,_0x7444f6=-0x3e8;for(let _0x40a64c=0x0;_0x40a64c<_0x488211[_0x2d0a57(0x2fd)];_0x40a64c++){const _0x31ba9a=_0x488211[_0x40a64c];if(!this[_0x2d0a57(0x3f3)](_0x31ba9a))continue;const _0x117b00=this[_0x2d0a57(0x2bb)](_0x31ba9a);_0x117b00>_0x7444f6&&(_0x7444f6=_0x117b00,_0x3e8e3f=_0x31ba9a);}return _0x3e8e3f;},Game_Actor['prototype'][_0x1028f8(0x3f3)]=function(_0x134eae){const _0x12ea43=_0x1028f8;if(!_0x134eae)return![];const _0x2adfc6=_0x134eae?_0x134eae[_0x12ea43(0x358)]:'';if(_0x2adfc6[_0x12ea43(0x3ce)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x405431=Number(RegExp['$1'])||0x1,_0x1ac1be=this['equips']()[_0x12ea43(0x410)](_0x3dbf3d=>_0x3dbf3d===_0x134eae);if(_0x1ac1be[_0x12ea43(0x2fd)]>=_0x405431)return![];}if(DataManager[_0x12ea43(0x1c6)](_0x134eae)){if(_0x2adfc6[_0x12ea43(0x3ce)](/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i)){const _0x2262dd=Number(RegExp['$1'])||0x1,_0x3b93ab=this[_0x12ea43(0x203)]()[_0x12ea43(0x4e8)](null)[_0x12ea43(0x410)](_0x40e3db=>_0x40e3db['wtypeId']===_0x134eae['wtypeId']);if(_0x3b93ab[_0x12ea43(0x2fd)]>=_0x2262dd)return![];}{const _0x3230d6=this[_0x12ea43(0x203)]()[_0x12ea43(0x4e8)](null)[_0x12ea43(0x410)](_0x4a8b51=>_0x4a8b51[_0x12ea43(0x2c0)]===_0x134eae[_0x12ea43(0x2c0)]);if(_0x3230d6[_0x12ea43(0x2fd)]>0x0){let _0x2e46a7=0x270f;for(const _0x3d50ee of _0x3230d6){_0x3d50ee[_0x12ea43(0x358)][_0x12ea43(0x3ce)](/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i)&&(_0x2e46a7=Math['min'](_0x2e46a7,Number(RegExp['$1'])));}if(_0x3230d6[_0x12ea43(0x2fd)]>=_0x2e46a7)return![];}}}if(DataManager[_0x12ea43(0x387)](_0x134eae)){if(_0x2adfc6[_0x12ea43(0x3ce)](/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i)){const _0x5578fe=Number(RegExp['$1'])||0x1,_0x263c0f=this['armors']()['remove'](null)[_0x12ea43(0x410)](_0x2ca35b=>_0x2ca35b[_0x12ea43(0x38c)]===_0x134eae[_0x12ea43(0x38c)]);if(_0x263c0f[_0x12ea43(0x2fd)]>=_0x5578fe)return![];}{const _0x45808c=this['armors']()[_0x12ea43(0x4e8)](null)[_0x12ea43(0x410)](_0x4b19f4=>_0x4b19f4[_0x12ea43(0x38c)]===_0x134eae[_0x12ea43(0x38c)]);if(_0x45808c[_0x12ea43(0x2fd)]>0x0){let _0x2ff84a=0x270f;for(const _0x288f09 of _0x45808c){_0x288f09[_0x12ea43(0x358)][_0x12ea43(0x3ce)](/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i)&&(_0x2ff84a=Math[_0x12ea43(0x5bf)](_0x2ff84a,Number(RegExp['$1'])));}if(_0x45808c[_0x12ea43(0x2fd)]>=_0x2ff84a)return![];}}}return!![];},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x3f0)]=Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x490)],Game_Party['prototype'][_0x1028f8(0x490)]=function(){const _0xb60465=_0x1028f8;VisuMZ[_0xb60465(0x2ae)][_0xb60465(0x3f0)]['call'](this),this[_0xb60465(0x246)](),this[_0xb60465(0x4ac)]();},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x246)]=function(){const _0x40107c=_0x1028f8;this[_0x40107c(0x416)]=[];},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x519)]=function(_0x2594d0){const _0x1b50df=_0x1028f8;if(!$gameTemp[_0x1b50df(0x49f)]())return![];if(this['_newItemsList']===undefined)this[_0x1b50df(0x246)]();let _0x4bac7d='';if(DataManager[_0x1b50df(0x56d)](_0x2594d0))_0x4bac7d='item-%1'['format'](_0x2594d0['id']);else{if(DataManager['isWeapon'](_0x2594d0))_0x4bac7d='weapon-%1'['format'](_0x2594d0['id']);else{if(DataManager[_0x1b50df(0x387)](_0x2594d0))_0x4bac7d=_0x1b50df(0x4fd)[_0x1b50df(0x413)](_0x2594d0['id']);else return;}}return this[_0x1b50df(0x416)][_0x1b50df(0x36e)](_0x4bac7d);},Game_Party['prototype']['setNewItem']=function(_0x14910d){const _0x51cb11=_0x1028f8;if(!$gameTemp[_0x51cb11(0x49f)]())return;if(this[_0x51cb11(0x416)]===undefined)this[_0x51cb11(0x246)]();let _0x16fec3='';if(DataManager[_0x51cb11(0x56d)](_0x14910d))_0x16fec3='item-%1'[_0x51cb11(0x413)](_0x14910d['id']);else{if(DataManager['isWeapon'](_0x14910d))_0x16fec3=_0x51cb11(0x2a2)['format'](_0x14910d['id']);else{if(DataManager[_0x51cb11(0x387)](_0x14910d))_0x16fec3='armor-%1'[_0x51cb11(0x413)](_0x14910d['id']);else return;}}if(!this['_newItemsList'][_0x51cb11(0x36e)](_0x16fec3))this[_0x51cb11(0x416)][_0x51cb11(0x45e)](_0x16fec3);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x452)]=function(_0x37bdc3){const _0x286b21=_0x1028f8;if(!$gameTemp[_0x286b21(0x49f)]())return;if(this[_0x286b21(0x416)]===undefined)this[_0x286b21(0x246)]();let _0x2cf30d='';if(DataManager[_0x286b21(0x56d)](_0x37bdc3))_0x2cf30d=_0x286b21(0x1dd)[_0x286b21(0x413)](_0x37bdc3['id']);else{if(DataManager['isWeapon'](_0x37bdc3))_0x2cf30d=_0x286b21(0x2a2)[_0x286b21(0x413)](_0x37bdc3['id']);else{if(DataManager['isArmor'](_0x37bdc3))_0x2cf30d=_0x286b21(0x4fd)[_0x286b21(0x413)](_0x37bdc3['id']);else return;}}this['_newItemsList'][_0x286b21(0x36e)](_0x2cf30d)&&this[_0x286b21(0x416)][_0x286b21(0x3d0)](this[_0x286b21(0x416)]['indexOf'](_0x2cf30d),0x1);},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x33e)]=Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x5c4)],Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x5c4)]=function(_0x24ee27){const _0x52a0fc=_0x1028f8;if(DataManager[_0x52a0fc(0x472)](_0x24ee27))_0x24ee27=DataManager[_0x52a0fc(0x441)](_0x24ee27);return VisuMZ['ItemsEquipsCore']['Game_Party_numItems']['call'](this,_0x24ee27);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x407)]=Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x2ee)],Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x2ee)]=function(_0x19e187,_0x56858f,_0x422481){const _0x1b2ac5=_0x1028f8;if(DataManager[_0x1b2ac5(0x472)](_0x19e187))_0x19e187=null;const _0x4e275e=this[_0x1b2ac5(0x5c4)](_0x19e187);VisuMZ[_0x1b2ac5(0x2ae)][_0x1b2ac5(0x407)][_0x1b2ac5(0x43c)](this,_0x19e187,_0x56858f,_0x422481);if(this['numItems'](_0x19e187)>_0x4e275e)this[_0x1b2ac5(0x48c)](_0x19e187);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x36a)]=function(_0x239bcd){const _0xd9bd6c=_0x1028f8;if(DataManager[_0xd9bd6c(0x472)](_0x239bcd))_0x239bcd=DataManager[_0xd9bd6c(0x441)](_0x239bcd);return DataManager[_0xd9bd6c(0x336)](_0x239bcd);},VisuMZ[_0x1028f8(0x2ae)]['Game_Party_consumeItem']=Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x5e8)],Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x5e8)]=function(_0x831a8f){const _0x18f83e=_0x1028f8;if(_0x831a8f){const _0x1cf2a2=_0x831a8f[_0x18f83e(0x358)]||'';if(_0x1cf2a2[_0x18f83e(0x3ce)](/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)){const _0x216831=Number(RegExp['$1'])*0.01;if(Math[_0x18f83e(0x27c)]()<_0x216831)return;}}VisuMZ[_0x18f83e(0x2ae)][_0x18f83e(0x4f2)]['call'](this,_0x831a8f);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x4ac)]=function(){const _0x371512=_0x1028f8;this[_0x371512(0x4f8)]={'buy':{'gold':0x0,'items':{}},'sell':{'gold':0x0,'items':{}}};},Game_Party['prototype'][_0x1028f8(0x589)]=function(){const _0x45b352=_0x1028f8;return this['_shopTrackingData']===undefined&&this[_0x45b352(0x4ac)](),this['_shopTrackingData'];},Game_Party['prototype']['getShopTrackingItem']=function(_0x68c25f,_0x577fd8){const _0x136fee=_0x1028f8;if(!_0x577fd8)return 0x0;this[_0x136fee(0x4f8)]===undefined&&this['initShopTrackingData']();const _0x104603=this['getShopTrackingData']();if(!_0x104603[_0x68c25f])return 0x0;if(_0x577fd8===_0x136fee(0x55b))return _0x104603[_0x68c25f][_0x136fee(0x55b)]=_0x104603[_0x68c25f][_0x136fee(0x55b)]||0x0,_0x104603[_0x68c25f][_0x136fee(0x55b)];else{if(DataManager[_0x136fee(0x56d)](_0x577fd8))key=_0x136fee(0x1dd)[_0x136fee(0x413)](_0x577fd8['id']);else{if(DataManager[_0x136fee(0x1c6)](_0x577fd8))key=_0x136fee(0x2a2)[_0x136fee(0x413)](_0x577fd8['id']);else{if(DataManager['isArmor'](_0x577fd8))key=_0x136fee(0x4fd)[_0x136fee(0x413)](_0x577fd8['id']);else return 0x0;}}}return _0x104603[_0x68c25f][_0x136fee(0x5c9)][key]=_0x104603[_0x68c25f]['items'][key]||0x0,_0x104603[_0x68c25f][_0x136fee(0x5c9)][key];},Game_Party['prototype'][_0x1028f8(0x5f0)]=function(_0x22bb7c){const _0xf4dd7c=_0x1028f8;return this['getShopTrackingItem'](_0xf4dd7c(0x3f9),_0x22bb7c);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x538)]=function(_0xd26c83){const _0x3ed7d4=_0x1028f8;return this[_0x3ed7d4(0x347)](_0x3ed7d4(0x2fc),_0xd26c83);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x2e4)]=function(){const _0x77938e=_0x1028f8;return this[_0x77938e(0x347)](_0x77938e(0x3f9),'gold');},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x498)]=function(){const _0x5665e3=_0x1028f8;return this[_0x5665e3(0x347)](_0x5665e3(0x2fc),_0x5665e3(0x55b));},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x529)]=function(_0x19dd67,_0x217c50,_0x5e43aa){const _0x55063e=_0x1028f8;if(!_0x217c50)return;if(_0x5e43aa<=0x0)return;this[_0x55063e(0x4f8)]===undefined&&this[_0x55063e(0x4ac)]();const _0x30579d=this[_0x55063e(0x589)]();if(!_0x30579d[_0x19dd67])return;if(_0x217c50===_0x55063e(0x55b)){_0x30579d[_0x19dd67][_0x55063e(0x55b)]=_0x30579d[_0x19dd67][_0x55063e(0x55b)]||0x0,_0x30579d[_0x19dd67][_0x55063e(0x55b)]+=_0x5e43aa;return;}else{if(DataManager['isItem'](_0x217c50))key=_0x55063e(0x1dd)[_0x55063e(0x413)](_0x217c50['id']);else{if(DataManager[_0x55063e(0x1c6)](_0x217c50))key='weapon-%1'['format'](_0x217c50['id']);else{if(DataManager[_0x55063e(0x387)](_0x217c50))key=_0x55063e(0x4fd)[_0x55063e(0x413)](_0x217c50['id']);else return;}}}_0x30579d[_0x19dd67][_0x55063e(0x5c9)][key]=_0x30579d[_0x19dd67]['items'][key]||0x0,_0x30579d[_0x19dd67]['items'][key]+=_0x5e43aa;},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x232)]=function(_0x4f9527,_0x4e7717){const _0xae5a03=_0x1028f8;this['addShopTrackingItem'](_0xae5a03(0x3f9),_0x4f9527,_0x4e7717);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x2cc)]=function(_0x9193c6,_0x3653ba){const _0x47bf8f=_0x1028f8;this['addShopTrackingItem'](_0x47bf8f(0x2fc),_0x9193c6,_0x3653ba);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x40d)]=function(_0x1d5ce4){const _0x473878=_0x1028f8;this['addShopTrackingItem'](_0x473878(0x3f9),_0x473878(0x55b),_0x1d5ce4);},Game_Party[_0x1028f8(0x5db)][_0x1028f8(0x3b4)]=function(_0x2d4311){const _0x5a59bb=_0x1028f8;this[_0x5a59bb(0x529)]('sell',_0x5a59bb(0x55b),_0x2d4311);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x51e)]=Scene_ItemBase[_0x1028f8(0x5db)][_0x1028f8(0x568)],Scene_ItemBase['prototype'][_0x1028f8(0x568)]=function(){const _0x34725f=_0x1028f8;VisuMZ[_0x34725f(0x2ae)][_0x34725f(0x51e)][_0x34725f(0x43c)](this),this[_0x34725f(0x3b6)][_0x34725f(0x1c3)]();},Scene_Item[_0x1028f8(0x5db)]['isBottomHelpMode']=function(){const _0x2e2163=_0x1028f8;if(ConfigManager[_0x2e2163(0x4ba)]&&ConfigManager[_0x2e2163(0x513)]!==undefined)return ConfigManager[_0x2e2163(0x513)];else return this[_0x2e2163(0x4cb)]()?this[_0x2e2163(0x53b)]()[_0x2e2163(0x3ce)](/LOWER/i):Scene_ItemBase['prototype']['isBottomHelpMode'][_0x2e2163(0x43c)](this);},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x43b)]=function(){const _0x22a223=_0x1028f8;if(ConfigManager[_0x22a223(0x4ba)]&&ConfigManager[_0x22a223(0x54f)]!==undefined)return ConfigManager[_0x22a223(0x54f)];else return this[_0x22a223(0x4cb)]()?this['updatedLayoutStyle']()['match'](/RIGHT/i):Scene_ItemBase['prototype'][_0x22a223(0x43b)]['call'](this);},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x53b)]=function(){const _0x4f1f7b=_0x1028f8;return VisuMZ[_0x4f1f7b(0x2ae)][_0x4f1f7b(0x1c0)][_0x4f1f7b(0x583)][_0x4f1f7b(0x282)];},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x460)]=function(){const _0x2aa75a=_0x1028f8;return this[_0x2aa75a(0x500)]&&this[_0x2aa75a(0x500)][_0x2aa75a(0x460)]();},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x4cb)]=function(){const _0x2589f1=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x2589f1(0x1c0)][_0x2589f1(0x583)][_0x2589f1(0x37a)];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x24e)]=Scene_Item['prototype']['create'],Scene_Item[_0x1028f8(0x5db)]['create']=function(){const _0x21e530=_0x1028f8;VisuMZ['ItemsEquipsCore'][_0x21e530(0x24e)][_0x21e530(0x43c)](this),this[_0x21e530(0x460)]()&&this[_0x21e530(0x542)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x39e)]=Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x514)],Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x514)]=function(){const _0x32e11b=_0x1028f8;return this[_0x32e11b(0x4cb)]()?this[_0x32e11b(0x5dc)]():VisuMZ[_0x32e11b(0x2ae)][_0x32e11b(0x39e)][_0x32e11b(0x43c)](this);},Scene_Item['prototype'][_0x1028f8(0x5dc)]=function(){const _0x2441a2=_0x1028f8,_0x38dcca=0x0,_0x5d9720=this[_0x2441a2(0x2f4)](),_0x20a48e=Graphics[_0x2441a2(0x344)],_0x4b6927=this['helpAreaHeight']();return new Rectangle(_0x38dcca,_0x5d9720,_0x20a48e,_0x4b6927);},VisuMZ['ItemsEquipsCore']['Scene_Item_createCategoryWindow']=Scene_Item['prototype'][_0x1028f8(0x33b)],Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x33b)]=function(){const _0x565924=_0x1028f8;VisuMZ[_0x565924(0x2ae)]['Scene_Item_createCategoryWindow']['call'](this),this[_0x565924(0x460)]()&&this[_0x565924(0x3ba)]();},Scene_Item['prototype'][_0x1028f8(0x3ba)]=function(){const _0x5d9311=_0x1028f8;delete this[_0x5d9311(0x500)]['_handlers']['ok'],delete this[_0x5d9311(0x500)][_0x5d9311(0x214)]['cancel'];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x252)]=Scene_Item[_0x1028f8(0x5db)]['categoryWindowRect'],Scene_Item['prototype'][_0x1028f8(0x1d7)]=function(){const _0x4a27e3=_0x1028f8;return this[_0x4a27e3(0x4cb)]()?this[_0x4a27e3(0x5c3)]():VisuMZ['ItemsEquipsCore'][_0x4a27e3(0x252)][_0x4a27e3(0x43c)](this);},Scene_Item[_0x1028f8(0x5db)]['categoryWindowRectItemsEquipsCore']=function(){const _0x4286d7=_0x1028f8,_0x385d56=0x0,_0x50f059=this[_0x4286d7(0x1bf)](),_0x437ddd=Graphics['boxWidth'],_0x1b4192=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x385d56,_0x50f059,_0x437ddd,_0x1b4192);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x39c)]=Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x281)],Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x281)]=function(){const _0x4ccd47=_0x1028f8;VisuMZ[_0x4ccd47(0x2ae)][_0x4ccd47(0x39c)][_0x4ccd47(0x43c)](this),this[_0x4ccd47(0x460)]()&&this[_0x4ccd47(0x5a3)](),this['allowCreateStatusWindow']()&&this[_0x4ccd47(0x4b9)]();},VisuMZ[_0x1028f8(0x2ae)]['Scene_Item_itemWindowRect']=Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x418)],Scene_Item[_0x1028f8(0x5db)]['itemWindowRect']=function(){const _0x31d362=_0x1028f8;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x31d362(0x5c7)]();else{const _0x543bbf=VisuMZ[_0x31d362(0x2ae)][_0x31d362(0x54e)]['call'](this);return this[_0x31d362(0x374)]()&&this[_0x31d362(0x595)]()&&(_0x543bbf[_0x31d362(0x371)]-=this[_0x31d362(0x477)]()),_0x543bbf;}},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x5c7)]=function(){const _0x495664=_0x1028f8,_0x4b9e33=this['isRightInputMode']()?this['statusWidth']():0x0,_0x1fcd04=this[_0x495664(0x500)]['y']+this['_categoryWindow']['height'],_0x1e491a=Graphics[_0x495664(0x344)]-this['statusWidth'](),_0x26ce3b=this[_0x495664(0x504)]()-_0x1fcd04;return new Rectangle(_0x4b9e33,_0x1fcd04,_0x1e491a,_0x26ce3b);},Scene_Item[_0x1028f8(0x5db)]['postCreateItemWindowModernControls']=function(){const _0x1ce849=_0x1028f8;this['_itemWindow'][_0x1ce849(0x445)](_0x1ce849(0x474),this[_0x1ce849(0x2b9)]['bind'](this));},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x374)]=function(){const _0x4662b7=_0x1028f8;return this[_0x4662b7(0x4cb)]()?!![]:VisuMZ[_0x4662b7(0x2ae)][_0x4662b7(0x1c0)][_0x4662b7(0x583)][_0x4662b7(0x332)];},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x595)]=function(){const _0x239162=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x239162(0x1c0)][_0x239162(0x583)][_0x239162(0x4d0)];},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x4b9)]=function(){const _0x14588e=_0x1028f8,_0x590bdf=this[_0x14588e(0x242)]();this[_0x14588e(0x22e)]=new Window_ShopStatus(_0x590bdf),this[_0x14588e(0x4f7)](this[_0x14588e(0x22e)]),this['_itemWindow'][_0x14588e(0x2d4)](this[_0x14588e(0x22e)]);const _0x492b66=VisuMZ[_0x14588e(0x2ae)][_0x14588e(0x1c0)]['ItemScene'][_0x14588e(0x459)];this['_statusWindow'][_0x14588e(0x3e0)](_0x492b66||0x0);},Scene_Item['prototype'][_0x1028f8(0x242)]=function(){const _0x1521a8=_0x1028f8;return this[_0x1521a8(0x4cb)]()?this['statusWindowRectItemsEquipsCore']():VisuMZ[_0x1521a8(0x2ae)]['Settings']['ItemScene']['ItemMenuStatusRect'][_0x1521a8(0x43c)](this);},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x52d)]=function(){const _0x113f4d=_0x1028f8,_0x395988=this['statusWidth'](),_0x3e9fd8=this['_itemWindow'][_0x113f4d(0x56e)],_0x2ecb91=this[_0x113f4d(0x43b)]()?0x0:Graphics[_0x113f4d(0x344)]-this['statusWidth'](),_0x46258a=this[_0x113f4d(0x3b6)]['y'];return new Rectangle(_0x2ecb91,_0x46258a,_0x395988,_0x3e9fd8);},Scene_Item['prototype'][_0x1028f8(0x477)]=function(){const _0x5cf8b8=_0x1028f8;return Scene_Shop[_0x5cf8b8(0x5db)][_0x5cf8b8(0x477)]();},Scene_Item[_0x1028f8(0x5db)][_0x1028f8(0x22b)]=function(){const _0x15e9cb=_0x1028f8;if(!this['updatedLayoutStyle']())return![];if(!this[_0x15e9cb(0x460)]())return![];if(!this[_0x15e9cb(0x3b6)])return![];if(!this[_0x15e9cb(0x3b6)][_0x15e9cb(0x31f)])return![];return this[_0x15e9cb(0x53b)]()&&this['isUseModernControls']();},Scene_Item['prototype'][_0x1028f8(0x22f)]=function(){const _0x5707db=_0x1028f8;if(this[_0x5707db(0x22b)]())return this[_0x5707db(0x3b6)][_0x5707db(0x42f)]()===0x1?TextManager[_0x5707db(0x273)](_0x5707db(0x1af),_0x5707db(0x5b2)):TextManager['getInputMultiButtonStrings'](_0x5707db(0x594),_0x5707db(0x4f4));return Scene_ItemBase[_0x5707db(0x5db)][_0x5707db(0x22f)][_0x5707db(0x43c)](this);},Scene_Item['prototype'][_0x1028f8(0x4a0)]=function(){const _0x590433=_0x1028f8;if(this[_0x590433(0x22b)]())return VisuMZ[_0x590433(0x2ae)][_0x590433(0x1c0)][_0x590433(0x583)]['buttonAssistCategory'];return Scene_ItemBase[_0x590433(0x5db)][_0x590433(0x4a0)][_0x590433(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)]['start']=function(){const _0x4b4b78=_0x1028f8;Scene_ItemBase[_0x4b4b78(0x5db)][_0x4b4b78(0x469)][_0x4b4b78(0x43c)](this),this[_0x4b4b78(0x33c)]();},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x23c)]=function(){const _0x5da130=_0x1028f8;if(ConfigManager[_0x5da130(0x4ba)]&&ConfigManager[_0x5da130(0x513)]!==undefined)return ConfigManager['uiHelpPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x5da130(0x53b)]()[_0x5da130(0x3ce)](/LOWER/i);else Scene_MenuBase[_0x5da130(0x5db)][_0x5da130(0x43b)][_0x5da130(0x43c)](this);}},Scene_Equip['prototype'][_0x1028f8(0x43b)]=function(){const _0x4c2ce2=_0x1028f8;if(ConfigManager[_0x4c2ce2(0x4ba)]&&ConfigManager[_0x4c2ce2(0x54f)]!==undefined)return ConfigManager['uiInputPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x4c2ce2(0x53b)]()['match'](/RIGHT/i);else Scene_MenuBase['prototype'][_0x4c2ce2(0x43b)]['call'](this);}},Scene_Equip['prototype'][_0x1028f8(0x53b)]=function(){const _0x5ea8da=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x5ea8da(0x1c0)][_0x5ea8da(0x21e)][_0x5ea8da(0x282)];},Scene_Equip['prototype'][_0x1028f8(0x460)]=function(){const _0x47a861=_0x1028f8;return this[_0x47a861(0x479)]&&this[_0x47a861(0x479)][_0x47a861(0x460)]();},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x4cb)]=function(){const _0x3e8c53=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x3e8c53(0x1c0)][_0x3e8c53(0x21e)][_0x3e8c53(0x37a)];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3dc)]=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x580)],Scene_Equip[_0x1028f8(0x5db)]['create']=function(){const _0x32acc8=_0x1028f8;VisuMZ[_0x32acc8(0x2ae)][_0x32acc8(0x3dc)][_0x32acc8(0x43c)](this),this[_0x32acc8(0x460)]()&&this[_0x32acc8(0x2d8)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5de)]=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x514)],Scene_Equip[_0x1028f8(0x5db)]['helpWindowRect']=function(){const _0x5c43c6=_0x1028f8;return this[_0x5c43c6(0x4cb)]()?this[_0x5c43c6(0x5dc)]():VisuMZ[_0x5c43c6(0x2ae)][_0x5c43c6(0x5de)][_0x5c43c6(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x5dc)]=function(){const _0x5e5e3f=_0x1028f8,_0x130d9d=0x0,_0x225ae4=this[_0x5e5e3f(0x2f4)](),_0x50f820=Graphics[_0x5e5e3f(0x344)],_0x4657e2=this[_0x5e5e3f(0x200)]();return new Rectangle(_0x130d9d,_0x225ae4,_0x50f820,_0x4657e2);},VisuMZ[_0x1028f8(0x2ae)]['Scene_Equip_statusWindowRect']=Scene_Equip['prototype']['statusWindowRect'],Scene_Equip['prototype']['statusWindowRect']=function(){const _0x55e427=_0x1028f8;return this[_0x55e427(0x4cb)]()?this[_0x55e427(0x52d)]():VisuMZ['ItemsEquipsCore'][_0x55e427(0x503)][_0x55e427(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x52d)]=function(){const _0x4b9c50=_0x1028f8,_0x284fbf=this[_0x4b9c50(0x43b)]()?0x0:Graphics[_0x4b9c50(0x344)]-this['statusWidth'](),_0x3f0fa9=this[_0x4b9c50(0x1bf)](),_0x40c23b=this[_0x4b9c50(0x477)](),_0x1351e1=this[_0x4b9c50(0x3d1)]();return new Rectangle(_0x284fbf,_0x3f0fa9,_0x40c23b,_0x1351e1);},VisuMZ['ItemsEquipsCore']['Scene_Equip_createCommandWindow']=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x31b)],Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x31b)]=function(){const _0x49872a=_0x1028f8;VisuMZ['ItemsEquipsCore']['Scene_Equip_createCommandWindow']['call'](this);if(this[_0x49872a(0x3b7)])this[_0x49872a(0x479)][_0x49872a(0x1c2)](this[_0x49872a(0x3b7)]);},VisuMZ[_0x1028f8(0x2ae)]['Scene_Equip_commandWindowRect']=Scene_Equip['prototype'][_0x1028f8(0x1c4)],Scene_Equip['prototype'][_0x1028f8(0x1c4)]=function(){const _0xa580f=_0x1028f8;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0xa580f(0x4e7)]():VisuMZ[_0xa580f(0x2ae)][_0xa580f(0x40f)][_0xa580f(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)]['shouldCommandWindowExist']=function(){const _0x3eba7b=_0x1028f8,_0x45930e=VisuMZ[_0x3eba7b(0x2ae)][_0x3eba7b(0x1c0)]['EquipScene'];return _0x45930e[_0x3eba7b(0x2b6)]||_0x45930e[_0x3eba7b(0x3b9)];},Scene_Equip['prototype'][_0x1028f8(0x4e7)]=function(){const _0x25edc8=_0x1028f8,_0x46a249=this[_0x25edc8(0x263)](),_0x1dab6a=this[_0x25edc8(0x43b)]()?this[_0x25edc8(0x477)]():0x0,_0x1926b2=this[_0x25edc8(0x1bf)](),_0x41e875=Graphics['boxWidth']-this['statusWidth'](),_0x3eb7da=_0x46a249?this['calcWindowHeight'](0x1,!![]):0x0;return new Rectangle(_0x1dab6a,_0x1926b2,_0x41e875,_0x3eb7da);},VisuMZ[_0x1028f8(0x2ae)]['Scene_Equip_createSlotWindow']=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x4db)],Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x4db)]=function(){const _0x42ec15=_0x1028f8;VisuMZ[_0x42ec15(0x2ae)][_0x42ec15(0x420)][_0x42ec15(0x43c)](this),this['isUseModernControls']()&&this[_0x42ec15(0x4b7)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1d1)]=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x463)],Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x463)]=function(){const _0x2e2fe0=_0x1028f8;return this[_0x2e2fe0(0x4cb)]()?this[_0x2e2fe0(0x548)]():VisuMZ[_0x2e2fe0(0x2ae)][_0x2e2fe0(0x1d1)]['call'](this);},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x548)]=function(){const _0x370376=_0x1028f8,_0x528012=this[_0x370376(0x1c4)](),_0x2c4c15=this[_0x370376(0x43b)]()?this['statusWidth']():0x0,_0x472322=_0x528012['y']+_0x528012[_0x370376(0x56e)],_0x139e72=Graphics[_0x370376(0x344)]-this['statusWidth'](),_0x42db0c=this[_0x370376(0x3d1)]()-_0x528012[_0x370376(0x56e)];return new Rectangle(_0x2c4c15,_0x472322,_0x139e72,_0x42db0c);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x400)]=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x418)],Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x418)]=function(){const _0x4d89f0=_0x1028f8;return this[_0x4d89f0(0x4cb)]()?this[_0x4d89f0(0x463)]():VisuMZ[_0x4d89f0(0x2ae)]['Scene_Equip_itemWindowRect'][_0x4d89f0(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)]['statusWidth']=function(){const _0x2e13d1=_0x1028f8;return this[_0x2e13d1(0x4cb)]()?this['geUpdatedLayoutStatusWidth']():VisuMZ[_0x2e13d1(0x2ae)][_0x2e13d1(0x1c0)][_0x2e13d1(0x21e)][_0x2e13d1(0x3a7)];},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x468)]=function(){const _0x5441e0=_0x1028f8;return Math[_0x5441e0(0x44c)](Graphics[_0x5441e0(0x344)]/0x2);},Scene_Equip['prototype'][_0x1028f8(0x4b7)]=function(){const _0x463c0c=_0x1028f8;this[_0x463c0c(0x45f)][_0x463c0c(0x445)](_0x463c0c(0x474),this['popScene'][_0x463c0c(0x24b)](this)),this[_0x463c0c(0x45f)][_0x463c0c(0x445)](_0x463c0c(0x4f4),this[_0x463c0c(0x5b5)][_0x463c0c(0x24b)](this)),this[_0x463c0c(0x45f)][_0x463c0c(0x445)](_0x463c0c(0x594),this[_0x463c0c(0x1e4)][_0x463c0c(0x24b)](this));},VisuMZ[_0x1028f8(0x2ae)]['Scene_Equip_commandEquip']=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x2d8)],Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x2d8)]=function(){const _0x4df20c=_0x1028f8;this['isUseModernControls']()&&(this['_commandWindow'][_0x4df20c(0x440)](),this[_0x4df20c(0x479)][_0x4df20c(0x4bf)]()),VisuMZ['ItemsEquipsCore'][_0x4df20c(0x47e)][_0x4df20c(0x43c)](this);},VisuMZ[_0x1028f8(0x2ae)]['Scene_Equip_onSlotOk']=Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x382)],Scene_Equip[_0x1028f8(0x5db)]['onSlotOk']=function(){const _0x4cc9ea=_0x1028f8;this['_slotWindow'][_0x4cc9ea(0x357)]()>=0x0?(VisuMZ[_0x4cc9ea(0x2ae)][_0x4cc9ea(0x27a)][_0x4cc9ea(0x43c)](this),this[_0x4cc9ea(0x34e)]()):(this[_0x4cc9ea(0x45f)][_0x4cc9ea(0x5b0)](0x0),this[_0x4cc9ea(0x45f)]['activate']());},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x34e)]=function(){const _0x144adf=_0x1028f8;this[_0x144adf(0x3b6)][_0x144adf(0x495)]();const _0x455a9b=this[_0x144adf(0x45f)][_0x144adf(0x1e8)](),_0x5f21ca=this['_itemWindow']['_data'][_0x144adf(0x54d)](_0x455a9b),_0x2af21c=Math[_0x144adf(0x44c)](this[_0x144adf(0x3b6)][_0x144adf(0x325)]()/0x2)-0x1;this[_0x144adf(0x3b6)][_0x144adf(0x5b0)](_0x5f21ca>=0x0?_0x5f21ca:0x0),this['_itemWindow']['_scrollDuration']>0x1&&(this[_0x144adf(0x3b6)][_0x144adf(0x259)]=0x1,this[_0x144adf(0x3b6)]['updateSmoothScroll']()),this[_0x144adf(0x3b6)][_0x144adf(0x4dc)](this[_0x144adf(0x3b6)][_0x144adf(0x357)]()-_0x2af21c);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x29c)]=Scene_Equip[_0x1028f8(0x5db)]['onSlotCancel'],Scene_Equip[_0x1028f8(0x5db)]['onSlotCancel']=function(){const _0x61b66c=_0x1028f8;VisuMZ[_0x61b66c(0x2ae)][_0x61b66c(0x29c)][_0x61b66c(0x43c)](this),this[_0x61b66c(0x460)]()&&(this['_commandWindow']['smoothSelect'](0x0),this[_0x61b66c(0x45f)][_0x61b66c(0x4bf)]());},VisuMZ[_0x1028f8(0x2ae)]['Scene_Equip_onActorChange']=Scene_Equip['prototype'][_0x1028f8(0x2db)],Scene_Equip['prototype']['onActorChange']=function(){const _0x25b62c=_0x1028f8;VisuMZ['ItemsEquipsCore'][_0x25b62c(0x45b)][_0x25b62c(0x43c)](this),this[_0x25b62c(0x460)]()&&(this[_0x25b62c(0x479)]['deactivate'](),this[_0x25b62c(0x479)][_0x25b62c(0x440)](),this['_slotWindow']['smoothSelect'](0x0),this[_0x25b62c(0x45f)][_0x25b62c(0x3fd)]());},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x2c4)]=function(){const _0x584e38=_0x1028f8;if(!this['_slotWindow'])return![];if(!this[_0x584e38(0x45f)][_0x584e38(0x31f)])return![];return this['_slotWindow']['isShiftRemoveShortcutEnabled']();},Scene_Equip[_0x1028f8(0x5db)]['buttonAssistKey3']=function(){const _0xdd403=_0x1028f8;if(this[_0xdd403(0x2c4)]())return TextManager[_0xdd403(0x34b)](_0xdd403(0x4a3));return Scene_MenuBase[_0xdd403(0x5db)][_0xdd403(0x507)][_0xdd403(0x43c)](this);},Scene_Equip['prototype'][_0x1028f8(0x1b3)]=function(){const _0x326ecc=_0x1028f8;if(this[_0x326ecc(0x2c4)]())return VisuMZ[_0x326ecc(0x2ae)][_0x326ecc(0x1c0)]['EquipScene'][_0x326ecc(0x5a5)];return Scene_MenuBase[_0x326ecc(0x5db)][_0x326ecc(0x1b3)][_0x326ecc(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)]['buttonAssistOffset3']=function(){const _0x418a27=_0x1028f8;if(this['buttonAssistSlotWindowShift']())return this['_buttonAssistWindow'][_0x418a27(0x371)]/0x5/-0x3;return Scene_MenuBase['prototype'][_0x418a27(0x3ec)][_0x418a27(0x43c)](this);},Scene_Equip[_0x1028f8(0x5db)][_0x1028f8(0x2b9)]=function(){SceneManager['pop']();},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x1a7)]=Scene_Load[_0x1028f8(0x5db)][_0x1028f8(0x4b1)],Scene_Load[_0x1028f8(0x5db)]['reloadMapIfUpdated']=function(){const _0x221d8e=_0x1028f8;VisuMZ[_0x221d8e(0x2ae)][_0x221d8e(0x1a7)]['call'](this),this[_0x221d8e(0x40a)]();},Scene_Load[_0x1028f8(0x5db)]['refreshActorEquipSlotsIfUpdated']=function(){const _0x3dda43=_0x1028f8;if($gameSystem[_0x3dda43(0x331)]()!==$dataSystem[_0x3dda43(0x331)])for(const _0x5514a4 of $gameActors[_0x3dda43(0x47f)]){if(_0x5514a4)_0x5514a4[_0x3dda43(0x28b)]();}},Scene_Shop['prototype'][_0x1028f8(0x23c)]=function(){const _0x30dd0f=_0x1028f8;if(ConfigManager[_0x30dd0f(0x4ba)]&&ConfigManager['uiHelpPosition']!==undefined)return ConfigManager[_0x30dd0f(0x513)];else{if(this[_0x30dd0f(0x4cb)]())return this[_0x30dd0f(0x53b)]()[_0x30dd0f(0x3ce)](/LOWER/i);else Scene_MenuBase['prototype'][_0x30dd0f(0x43b)][_0x30dd0f(0x43c)](this);}},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x43b)]=function(){const _0x1327a9=_0x1028f8;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager[_0x1327a9(0x54f)];else{if(this[_0x1327a9(0x4cb)]())return this[_0x1327a9(0x53b)]()[_0x1327a9(0x3ce)](/RIGHT/i);else Scene_MenuBase[_0x1327a9(0x5db)][_0x1327a9(0x43b)]['call'](this);}},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x53b)]=function(){const _0x49509f=_0x1028f8;return VisuMZ[_0x49509f(0x2ae)][_0x49509f(0x1c0)][_0x49509f(0x53d)][_0x49509f(0x282)];},Scene_Shop['prototype']['isUseModernControls']=function(){const _0x365528=_0x1028f8;return this[_0x365528(0x500)]&&this[_0x365528(0x500)][_0x365528(0x460)]();},Scene_Shop['prototype'][_0x1028f8(0x4cb)]=function(){const _0x2b86ce=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x2b86ce(0x1c0)][_0x2b86ce(0x53d)]['EnableLayout'];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x328)]=Scene_Shop['prototype'][_0x1028f8(0x5e1)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5e1)]=function(_0x3de111,_0x33a4ac){const _0x510349=_0x1028f8;_0x3de111=VisuMZ['ItemsEquipsCore'][_0x510349(0x449)](_0x3de111),VisuMZ[_0x510349(0x2ae)][_0x510349(0x328)]['call'](this,_0x3de111,_0x33a4ac),this[_0x510349(0x57f)]();},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x57f)]=function(){const _0x5f2334=_0x1028f8;this[_0x5f2334(0x569)]=0x0;const _0x3f8f93=[];for(const _0x286532 of this[_0x5f2334(0x271)]){this['isGoodShown'](_0x286532)?this[_0x5f2334(0x569)]++:_0x3f8f93['push'](_0x286532);}for(const _0xef019c of _0x3f8f93){this[_0x5f2334(0x271)][_0x5f2334(0x4e8)](_0xef019c);}},Scene_Shop['prototype'][_0x1028f8(0x547)]=function(_0x2f3771){if(_0x2f3771[0x0]>0x2||_0x2f3771[0x0]<0x0)return![];const _0x20b48e=[$dataItems,$dataWeapons,$dataArmors][_0x2f3771[0x0]][_0x2f3771[0x1]];if(!_0x20b48e)return![];return!![];},VisuMZ[_0x1028f8(0x2ae)]['Scene_Shop_create']=Scene_Shop['prototype'][_0x1028f8(0x580)],Scene_Shop['prototype'][_0x1028f8(0x580)]=function(){const _0x202711=_0x1028f8;VisuMZ[_0x202711(0x2ae)][_0x202711(0x377)]['call'](this),this[_0x202711(0x4cb)]()&&this[_0x202711(0x4b8)](),this[_0x202711(0x41c)]();},Scene_Shop[_0x1028f8(0x5db)]['postCreateItemsEquipsCore']=function(){const _0x58e7dd=_0x1028f8;this[_0x58e7dd(0x248)][_0x58e7dd(0x54a)](),this[_0x58e7dd(0x21c)][_0x58e7dd(0x324)](),this[_0x58e7dd(0x21c)]['deselect'](),this[_0x58e7dd(0x22e)][_0x58e7dd(0x324)]();},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x2ba)]=Scene_Shop['prototype']['helpWindowRect'],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x514)]=function(){const _0x3e1cfa=_0x1028f8;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x3e1cfa(0x5dc)]():VisuMZ[_0x3e1cfa(0x2ae)][_0x3e1cfa(0x2ba)][_0x3e1cfa(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5dc)]=function(){const _0x3632c5=_0x1028f8,_0x55c8ab=0x0,_0x15fc17=this[_0x3632c5(0x2f4)](),_0x32ca72=Graphics[_0x3632c5(0x344)],_0x5a40f5=this[_0x3632c5(0x200)]();return new Rectangle(_0x55c8ab,_0x15fc17,_0x32ca72,_0x5a40f5);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x235)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x4be)],Scene_Shop[_0x1028f8(0x5db)]['goldWindowRect']=function(){const _0x1ad71f=_0x1028f8;return this[_0x1ad71f(0x4cb)]()?this['goldWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore']['Scene_Shop_goldWindowRect'][_0x1ad71f(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x23b)]=function(){const _0x389bed=_0x1028f8,_0x1aac3f=this['mainCommandWidth'](),_0x5f26a8=this['calcWindowHeight'](0x1,!![]),_0x3644ce=this[_0x389bed(0x43b)]()?0x0:Graphics[_0x389bed(0x344)]-_0x1aac3f,_0xa5544b=this[_0x389bed(0x1bf)]();return new Rectangle(_0x3644ce,_0xa5544b,_0x1aac3f,_0x5f26a8);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x4f5)]=Scene_Shop['prototype'][_0x1028f8(0x1c4)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1c4)]=function(){const _0x27f1b4=_0x1028f8;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x27f1b4(0x4e7)]():VisuMZ['ItemsEquipsCore'][_0x27f1b4(0x4f5)]['call'](this);},Scene_Shop[_0x1028f8(0x5db)]['commandWindowRectItemsEquipsCore']=function(){const _0x21d23b=_0x1028f8,_0x1ee45a=this['isRightInputMode']()?this[_0x21d23b(0x409)]():0x0,_0x18be6e=this['mainAreaTop'](),_0x55a4d6=Graphics[_0x21d23b(0x344)]-this[_0x21d23b(0x409)](),_0x47746f=this[_0x21d23b(0x2c9)](0x1,!![]);return new Rectangle(_0x1ee45a,_0x18be6e,_0x55a4d6,_0x47746f);},VisuMZ[_0x1028f8(0x2ae)]['Scene_Shop_numberWindowRect']=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5d4)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5d4)]=function(){const _0x479bf0=_0x1028f8;return this[_0x479bf0(0x4cb)]()?this[_0x479bf0(0x526)]():VisuMZ[_0x479bf0(0x2ae)][_0x479bf0(0x2e7)][_0x479bf0(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x526)]=function(){const _0x32473b=_0x1028f8,_0x640c1c=this['_commandWindow']['y']+this['_commandWindow'][_0x32473b(0x56e)],_0x407535=Graphics[_0x32473b(0x344)]-this[_0x32473b(0x477)](),_0x4fcf2b=this[_0x32473b(0x43b)]()?Graphics[_0x32473b(0x344)]-_0x407535:0x0,_0x318437=this[_0x32473b(0x3d1)]()-this[_0x32473b(0x479)][_0x32473b(0x56e)];return new Rectangle(_0x4fcf2b,_0x640c1c,_0x407535,_0x318437);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x593)]=Scene_Shop[_0x1028f8(0x5db)]['statusWindowRect'],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x242)]=function(){const _0x472d73=_0x1028f8;return this[_0x472d73(0x4cb)]()?this['statusWindowRectItemsEquipsCore']():VisuMZ[_0x472d73(0x2ae)][_0x472d73(0x593)][_0x472d73(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)]['statusWindowRectItemsEquipsCore']=function(){const _0x1cd5d8=_0x1028f8,_0x341954=this['statusWidth'](),_0x1d558c=this[_0x1cd5d8(0x3d1)]()-this[_0x1cd5d8(0x479)]['height'],_0x1cac8a=this[_0x1cd5d8(0x43b)]()?0x0:Graphics[_0x1cd5d8(0x344)]-_0x341954,_0x8c044c=this[_0x1cd5d8(0x479)]['y']+this[_0x1cd5d8(0x479)][_0x1cd5d8(0x56e)];return new Rectangle(_0x1cac8a,_0x8c044c,_0x341954,_0x1d558c);},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x3f2)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x493)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x493)]=function(){const _0x56a26f=_0x1028f8;return this[_0x56a26f(0x4cb)]()?this[_0x56a26f(0x1fd)]():VisuMZ['ItemsEquipsCore']['Scene_Shop_buyWindowRect'][_0x56a26f(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1fd)]=function(){const _0x746b4c=_0x1028f8,_0x19c6bb=this['_commandWindow']['y']+this[_0x746b4c(0x479)][_0x746b4c(0x56e)],_0x11f7b9=Graphics[_0x746b4c(0x344)]-this[_0x746b4c(0x477)](),_0x3f621f=this[_0x746b4c(0x3d1)]()-this[_0x746b4c(0x479)][_0x746b4c(0x56e)],_0x3c388e=this[_0x746b4c(0x43b)]()?Graphics['boxWidth']-_0x11f7b9:0x0;return new Rectangle(_0x3c388e,_0x19c6bb,_0x11f7b9,_0x3f621f);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x492)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x33b)],Scene_Shop['prototype'][_0x1028f8(0x33b)]=function(){const _0x59c1f0=_0x1028f8;VisuMZ['ItemsEquipsCore'][_0x59c1f0(0x492)]['call'](this),this[_0x59c1f0(0x460)]()&&this['postCreateCategoryWindowItemsEquipsCore']();},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x53c)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1d7)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1d7)]=function(){const _0x4185b8=_0x1028f8;return this[_0x4185b8(0x4cb)]()?this['categoryWindowRectItemsEquipsCore']():VisuMZ[_0x4185b8(0x2ae)][_0x4185b8(0x53c)][_0x4185b8(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5c3)]=function(){const _0x52a848=_0x1028f8,_0x15a197=this['_commandWindow']['y'],_0x4d6695=this['_commandWindow']['width'],_0x259c0b=this[_0x52a848(0x2c9)](0x1,!![]),_0x407fb1=this[_0x52a848(0x43b)]()?Graphics[_0x52a848(0x344)]-_0x4d6695:0x0;return new Rectangle(_0x407fb1,_0x15a197,_0x4d6695,_0x259c0b);},Scene_Shop['prototype']['postCreateCategoryWindowItemsEquipsCore']=function(){const _0x58d60c=_0x1028f8;delete this[_0x58d60c(0x500)][_0x58d60c(0x214)]['ok'],delete this[_0x58d60c(0x500)][_0x58d60c(0x214)][_0x58d60c(0x474)];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3a9)]=Scene_Shop[_0x1028f8(0x5db)]['createSellWindow'],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x40e)]=function(){const _0x4f8cbc=_0x1028f8;VisuMZ[_0x4f8cbc(0x2ae)][_0x4f8cbc(0x3a9)]['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this['postCreateSellWindowItemsEquipsCore']();},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x3ab)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x4e9)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x4e9)]=function(){const _0x22dad4=_0x1028f8;return this[_0x22dad4(0x4cb)]()?this[_0x22dad4(0x394)]():VisuMZ[_0x22dad4(0x2ae)][_0x22dad4(0x3ab)]['call'](this);},Scene_Shop['prototype'][_0x1028f8(0x394)]=function(){const _0x1297aa=_0x1028f8,_0x5765f9=this[_0x1297aa(0x500)]['y']+this['_categoryWindow'][_0x1297aa(0x56e)],_0x3df754=Graphics[_0x1297aa(0x344)]-this['statusWidth'](),_0x27b5b6=this[_0x1297aa(0x3d1)]()-this['_categoryWindow'][_0x1297aa(0x56e)],_0x55decf=this['isRightInputMode']()?Graphics[_0x1297aa(0x344)]-_0x3df754:0x0;return new Rectangle(_0x55decf,_0x5765f9,_0x3df754,_0x27b5b6);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x318)]=function(){const _0x195e4f=_0x1028f8;this['_sellWindow'][_0x195e4f(0x2d4)](this[_0x195e4f(0x22e)]);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x477)]=function(){const _0x555666=_0x1028f8;return VisuMZ[_0x555666(0x2ae)][_0x555666(0x1c0)][_0x555666(0x41f)][_0x555666(0x365)];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3b0)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x2be)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x2be)]=function(){const _0x12a985=_0x1028f8;VisuMZ[_0x12a985(0x2ae)][_0x12a985(0x3b0)][_0x12a985(0x43c)](this),this[_0x12a985(0x4cb)]()&&this[_0x12a985(0x22e)][_0x12a985(0x324)](),this[_0x12a985(0x543)][_0x12a985(0x51a)]();},VisuMZ[_0x1028f8(0x2ae)]['Scene_Shop_commandBuy']=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x475)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x475)]=function(){const _0x19edea=_0x1028f8;VisuMZ[_0x19edea(0x2ae)][_0x19edea(0x24f)][_0x19edea(0x43c)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x19edea(0x1d8)]();},Scene_Shop[_0x1028f8(0x5db)]['commandBuyItemsEquipsCore']=function(){const _0x5eaeea=_0x1028f8;this[_0x5eaeea(0x44e)]=this[_0x5eaeea(0x44e)]||0x0,this[_0x5eaeea(0x21c)][_0x5eaeea(0x5b0)](this[_0x5eaeea(0x44e)]);},VisuMZ[_0x1028f8(0x2ae)]['Scene_Shop_commandSell']=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1eb)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1eb)]=function(){const _0x47f796=_0x1028f8;VisuMZ[_0x47f796(0x2ae)][_0x47f796(0x2bd)][_0x47f796(0x43c)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x47f796(0x317)](),this[_0x47f796(0x460)]()&&(this['_categoryWindow']['smoothSelect'](0x0),this[_0x47f796(0x542)]());},Scene_Shop['prototype'][_0x1028f8(0x317)]=function(){const _0x491672=_0x1028f8;this['_buyWindow']['hide'](),this[_0x491672(0x479)][_0x491672(0x54a)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x230)]=Scene_Shop[_0x1028f8(0x5db)]['onBuyCancel'],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x293)]=function(){const _0x20bbf0=_0x1028f8;VisuMZ[_0x20bbf0(0x2ae)][_0x20bbf0(0x230)][_0x20bbf0(0x43c)](this),this[_0x20bbf0(0x4cb)]()&&this[_0x20bbf0(0x556)]();},Scene_Shop[_0x1028f8(0x5db)]['onBuyCancelItemsEquipsCore']=function(){const _0x472a44=_0x1028f8;this[_0x472a44(0x44e)]=this[_0x472a44(0x21c)]['index'](),this[_0x472a44(0x21c)][_0x472a44(0x324)](),this[_0x472a44(0x21c)][_0x472a44(0x440)](),this[_0x472a44(0x21c)][_0x472a44(0x2e5)](0x0,0x0),this[_0x472a44(0x22e)][_0x472a44(0x324)](),this[_0x472a44(0x248)][_0x472a44(0x54a)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5f6)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x48a)],Scene_Shop[_0x1028f8(0x5db)]['onCategoryCancel']=function(){const _0x2f342e=_0x1028f8;VisuMZ[_0x2f342e(0x2ae)][_0x2f342e(0x5f6)][_0x2f342e(0x43c)](this),this[_0x2f342e(0x4cb)]()&&this[_0x2f342e(0x239)]();},Scene_Shop[_0x1028f8(0x5db)]['onCategoryCancelItemsEquipsCore']=function(){const _0xb70172=_0x1028f8;this[_0xb70172(0x21c)][_0xb70172(0x324)](),this[_0xb70172(0x479)][_0xb70172(0x324)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x4c7)]=Scene_Shop['prototype'][_0x1028f8(0x369)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x369)]=function(){const _0x11b071=_0x1028f8;$gameTemp[_0x11b071(0x228)]=!![],VisuMZ['ItemsEquipsCore']['Scene_Shop_onBuyOk']['call'](this),$gameTemp[_0x11b071(0x228)]=![],this[_0x11b071(0x5a7)]=this[_0x11b071(0x21c)][_0x11b071(0x1e8)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3c6)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x25c)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x25c)]=function(){const _0x303bf6=_0x1028f8;$gameTemp[_0x303bf6(0x228)]=!![],this['_item']=this[_0x303bf6(0x21c)][_0x303bf6(0x1e8)]();const _0x322bf4=VisuMZ[_0x303bf6(0x2ae)][_0x303bf6(0x3c6)][_0x303bf6(0x43c)](this);return $gameTemp[_0x303bf6(0x228)]=![],this[_0x303bf6(0x5a7)]=this[_0x303bf6(0x21c)]['item'](),_0x322bf4;},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x3c4)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x438)],Scene_Shop[_0x1028f8(0x5db)]['onSellOk']=function(){const _0x23e082=_0x1028f8;VisuMZ[_0x23e082(0x2ae)][_0x23e082(0x3c4)][_0x23e082(0x43c)](this),this[_0x23e082(0x4cb)]()&&this['onSellOkItemsEquipsCore']();},Scene_Shop['prototype']['onSellOkItemsEquipsCore']=function(){const _0x33c0d5=_0x1028f8;this[_0x33c0d5(0x500)][_0x33c0d5(0x324)]();},VisuMZ[_0x1028f8(0x2ae)]['Scene_Shop_onSellCancel']=Scene_Shop[_0x1028f8(0x5db)]['onSellCancel'],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x2b7)]=function(){const _0x304b4b=_0x1028f8;VisuMZ[_0x304b4b(0x2ae)][_0x304b4b(0x1d9)]['call'](this),this[_0x304b4b(0x460)]()&&this[_0x304b4b(0x48a)](),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x304b4b(0x248)][_0x304b4b(0x54a)]();},Scene_Shop[_0x1028f8(0x5db)]['sellPriceOfItem']=function(_0x147251){const _0x239509=_0x1028f8,_0x142b65=this[_0x239509(0x5a7)];this[_0x239509(0x5a7)]=_0x147251;const _0x39f6c5=this[_0x239509(0x5ac)]();return this[_0x239509(0x5a7)]=_0x142b65,_0x39f6c5;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x42e)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5ac)],Scene_Shop['prototype'][_0x1028f8(0x5ac)]=function(){const _0x96efca=_0x1028f8;let _0x53aa24=this[_0x96efca(0x562)]();const _0x4017c9=this[_0x96efca(0x5a7)];return _0x53aa24=VisuMZ[_0x96efca(0x2ae)][_0x96efca(0x1c0)][_0x96efca(0x53d)][_0x96efca(0x20a)]['call'](this,_0x4017c9,_0x53aa24),_0x53aa24;},Scene_Shop[_0x1028f8(0x5db)]['determineBaseSellingPrice']=function(){const _0x126e60=_0x1028f8;let _0x4aa8ea=this[_0x126e60(0x5a7)][_0x126e60(0x4e0)];if(!this[_0x126e60(0x5a7)])return 0x0;else{if(this[_0x126e60(0x5a7)][_0x126e60(0x358)][_0x126e60(0x3ce)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x3a3dba=String(RegExp['$1']);window[_0x126e60(0x1e8)]=this[_0x126e60(0x5a7)],window[_0x126e60(0x4e0)]=_0x4aa8ea*this[_0x126e60(0x302)]();try{eval(_0x3a3dba);}catch(_0x446c85){if($gameTemp[_0x126e60(0x4f1)]())console[_0x126e60(0x211)](_0x446c85);}let _0x295dbe=window[_0x126e60(0x4e0)];window[_0x126e60(0x1e8)]=undefined,window[_0x126e60(0x4e0)]=undefined;if(isNaN(_0x295dbe))_0x295dbe=0x0;return Math['floor'](_0x295dbe);}else return this[_0x126e60(0x5a7)][_0x126e60(0x358)][_0x126e60(0x3ce)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math[_0x126e60(0x44c)](this[_0x126e60(0x4a8)]());}},Scene_Shop[_0x1028f8(0x5db)]['baseSellingPrice']=function(){const _0x3d1b7d=_0x1028f8;return this[_0x3d1b7d(0x5a7)][_0x3d1b7d(0x4e0)]*this[_0x3d1b7d(0x302)]();},Scene_Shop['prototype']['sellPriceRate']=function(){const _0x404f82=_0x1028f8;return VisuMZ[_0x404f82(0x2ae)]['Settings']['ShopScene'][_0x404f82(0x497)];},Scene_Shop[_0x1028f8(0x5db)]['buttonAssistItemListRequirement']=function(){const _0x1d6b27=_0x1028f8;if(!this['updatedLayoutStyle']())return![];if(!this[_0x1d6b27(0x460)]())return![];if(!this[_0x1d6b27(0x543)])return![];if(!this[_0x1d6b27(0x543)][_0x1d6b27(0x31f)])return![];return this[_0x1d6b27(0x53b)]()&&this[_0x1d6b27(0x460)]();},Scene_Shop[_0x1028f8(0x5db)]['buttonAssistKey1']=function(){const _0x4f7740=_0x1028f8;if(this[_0x4f7740(0x22b)]())return this['_sellWindow'][_0x4f7740(0x42f)]()===0x1?TextManager[_0x4f7740(0x273)](_0x4f7740(0x1af),'right'):TextManager[_0x4f7740(0x273)](_0x4f7740(0x594),'pagedown');else{if(this[_0x4f7740(0x4e6)]&&this[_0x4f7740(0x4e6)]['active'])return TextManager[_0x4f7740(0x273)](_0x4f7740(0x1af),'right');}return Scene_MenuBase['prototype'][_0x4f7740(0x22f)][_0x4f7740(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x4ff)]=function(){const _0x43e9a1=_0x1028f8;if(this['_numberWindow']&&this[_0x43e9a1(0x4e6)]['active'])return TextManager['getInputMultiButtonStrings']('up',_0x43e9a1(0x314));return Scene_MenuBase[_0x43e9a1(0x5db)]['buttonAssistKey2'][_0x43e9a1(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x4a0)]=function(){const _0x3db777=_0x1028f8;if(this['buttonAssistItemListRequirement']())return VisuMZ['ItemsEquipsCore'][_0x3db777(0x1c0)]['ItemScene'][_0x3db777(0x367)];else{if(this['_numberWindow']&&this[_0x3db777(0x4e6)]['active'])return VisuMZ[_0x3db777(0x2ae)][_0x3db777(0x1c0)][_0x3db777(0x53d)][_0x3db777(0x58e)];}return Scene_MenuBase[_0x3db777(0x5db)][_0x3db777(0x4a0)][_0x3db777(0x43c)](this);},Scene_Shop['prototype'][_0x1028f8(0x5f4)]=function(){const _0x534406=_0x1028f8;if(this[_0x534406(0x4e6)]&&this['_numberWindow'][_0x534406(0x31f)])return VisuMZ['ItemsEquipsCore'][_0x534406(0x1c0)][_0x534406(0x53d)][_0x534406(0x28d)];return Scene_MenuBase['prototype']['buttonAssistText2'][_0x534406(0x43c)](this);},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x41c)]=function(){const _0x43d556=_0x1028f8;if(!SceneManager[_0x43d556(0x1dc)]())return;const _0x31b144=VisuMZ[_0x43d556(0x2ae)][_0x43d556(0x1c0)][_0x43d556(0x53d)];_0x31b144[_0x43d556(0x3fc)]&&$gameSwitches[_0x43d556(0x49d)](_0x31b144[_0x43d556(0x3fc)],![]),_0x31b144['SwitchSell']&&$gameSwitches['setValue'](_0x31b144['SwitchSell'],![]);},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x2ff)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x5c0)],Scene_Shop[_0x1028f8(0x5db)]['doBuy']=function(_0x1d9d93){const _0xcde1c0=_0x1028f8;VisuMZ[_0xcde1c0(0x2ae)][_0xcde1c0(0x2ff)]['call'](this,_0x1d9d93),this[_0xcde1c0(0x482)](this['_item'],_0x1d9d93);if(_0x1d9d93<=0x0)return;const _0x2a4ff4=VisuMZ['ItemsEquipsCore'][_0xcde1c0(0x1c0)][_0xcde1c0(0x53d)];_0x2a4ff4['SwitchBuy']&&$gameSwitches[_0xcde1c0(0x49d)](_0x2a4ff4[_0xcde1c0(0x3fc)],!![]),this[_0xcde1c0(0x21c)][_0xcde1c0(0x495)](),this[_0xcde1c0(0x543)]['refresh']();},Scene_Shop[_0x1028f8(0x5db)]['onBuyItem']=function(_0x55fd56,_0x4db6cb){const _0x21868f=_0x1028f8;this[_0x21868f(0x262)](_0x55fd56,_0x4db6cb),$gameParty['addShopTrackingItemBuy'](_0x55fd56,_0x4db6cb),$gameParty[_0x21868f(0x40d)](_0x4db6cb*this[_0x21868f(0x25c)]());},Scene_Shop['prototype']['processShopCondListingOnBuyItem']=function(_0x2227f0,_0x1720fe){const _0x63b25c=_0x1028f8;if(!_0x2227f0)return;if(!_0x1720fe)return;const _0x4fea4d=VisuMZ[_0x63b25c(0x2ae)]['ShopListingRegExp'],_0xf672c8=_0x2227f0['note']||'';if(_0xf672c8[_0x63b25c(0x3ce)](_0x4fea4d[_0x63b25c(0x343)])){const _0x2f774f=String(RegExp['$1'])[_0x63b25c(0x424)](',')[_0x63b25c(0x47a)](_0x3738ae=>Number(_0x3738ae));for(const _0x3b90c4 of _0x2f774f){$gameSwitches[_0x63b25c(0x49d)](_0x3b90c4,!![]);}}if(_0xf672c8[_0x63b25c(0x3ce)](_0x4fea4d[_0x63b25c(0x257)])){const _0x152d68=String(RegExp['$1'])[_0x63b25c(0x424)](',')[_0x63b25c(0x47a)](_0x4706c9=>Number(_0x4706c9));for(const _0x4b4cfe of _0x152d68){$gameSwitches['setValue'](_0x4b4cfe,![]);}}},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x431)]=Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x3c3)],Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x3c3)]=function(_0x2f9fa4){const _0x33eb09=_0x1028f8;VisuMZ['ItemsEquipsCore'][_0x33eb09(0x431)][_0x33eb09(0x43c)](this,_0x2f9fa4),this[_0x33eb09(0x57e)](this[_0x33eb09(0x5a7)],_0x2f9fa4);if(_0x2f9fa4<=0x0)return;const _0x460cf7=VisuMZ[_0x33eb09(0x2ae)][_0x33eb09(0x1c0)][_0x33eb09(0x53d)];_0x460cf7[_0x33eb09(0x3fc)]&&$gameSwitches[_0x33eb09(0x49d)](_0x460cf7['SwitchSell'],!![]),this[_0x33eb09(0x21c)][_0x33eb09(0x495)](),this[_0x33eb09(0x543)]['refresh']();},Scene_Shop['prototype'][_0x1028f8(0x57e)]=function(_0x19cfe0,_0x31f294){const _0x284b45=_0x1028f8;this[_0x284b45(0x1a4)](_0x19cfe0,_0x31f294),$gameParty['addShopTrackingItemSell'](_0x19cfe0,_0x31f294),$gameParty['addShopTrackingGoldSell'](_0x31f294*this[_0x284b45(0x5ac)]());},Scene_Shop[_0x1028f8(0x5db)][_0x1028f8(0x1a4)]=function(_0x50afb4,_0xc2dac8){const _0x234647=_0x1028f8;if(!_0x50afb4)return;if(!_0xc2dac8)return;const _0x22e8be=VisuMZ[_0x234647(0x2ae)][_0x234647(0x351)],_0x5d99fc=_0x50afb4['note']||'';if(_0x5d99fc['match'](_0x22e8be[_0x234647(0x2ea)])){const _0xaf2de8=String(RegExp['$1'])[_0x234647(0x424)](',')[_0x234647(0x47a)](_0x434006=>Number(_0x434006));for(const _0x343887 of _0xaf2de8){$gameSwitches[_0x234647(0x49d)](_0x343887,!![]);}}if(_0x5d99fc[_0x234647(0x3ce)](_0x22e8be[_0x234647(0x1d2)])){const _0x121255=String(RegExp['$1'])[_0x234647(0x424)](',')['map'](_0xd7e68=>Number(_0xd7e68));for(const _0x549b8b of _0x121255){$gameSwitches['setValue'](_0x549b8b,![]);}}};function Sprite_NewLabel(){const _0x2d1ba5=_0x1028f8;this[_0x2d1ba5(0x490)](...arguments);}Sprite_NewLabel['prototype']=Object[_0x1028f8(0x580)](Sprite[_0x1028f8(0x5db)]),Sprite_NewLabel[_0x1028f8(0x5db)][_0x1028f8(0x50a)]=Sprite_NewLabel,Sprite_NewLabel[_0x1028f8(0x5db)][_0x1028f8(0x490)]=function(){const _0x100e6d=_0x1028f8;Sprite[_0x100e6d(0x5db)][_0x100e6d(0x490)]['call'](this),this[_0x100e6d(0x320)]();},Sprite_NewLabel[_0x1028f8(0x5db)][_0x1028f8(0x320)]=function(){const _0xe60c6e=_0x1028f8,_0x1f5d31=0x20,_0x1f55ca=0x20;this[_0xe60c6e(0x290)]=new Bitmap(_0x1f5d31,_0x1f55ca),this[_0xe60c6e(0x49b)](),this[_0xe60c6e(0x2f2)]();},Sprite_NewLabel[_0x1028f8(0x5db)][_0x1028f8(0x49b)]=function(){const _0x30bb73=_0x1028f8,_0xe416d9=VisuMZ['ItemsEquipsCore']['Settings'][_0x30bb73(0x5f3)][_0x30bb73(0x456)];if(_0xe416d9<=0x0)return;const _0x36049b=ImageManager[_0x30bb73(0x29f)](_0x30bb73(0x3a2)),_0xefe154=ImageManager[_0x30bb73(0x565)],_0x32e587=ImageManager[_0x30bb73(0x41a)],_0x3463ea=_0xe416d9%0x10*_0xefe154,_0x4ea015=Math[_0x30bb73(0x44c)](_0xe416d9/0x10)*_0x32e587;this['bitmap'][_0x30bb73(0x361)](_0x36049b,_0x3463ea,_0x4ea015,_0xefe154,_0x32e587,0x0,0x0);},Sprite_NewLabel[_0x1028f8(0x5db)][_0x1028f8(0x2f2)]=function(){const _0x33fac8=_0x1028f8,_0x53c771=VisuMZ[_0x33fac8(0x2ae)][_0x33fac8(0x1c0)][_0x33fac8(0x5f3)],_0x16d6d6=_0x53c771[_0x33fac8(0x33a)];if(_0x16d6d6==='')return;const _0x55094f=0x20,_0x2ac9a1=0x20;this['bitmap']['fontFace']=_0x53c771[_0x33fac8(0x1fc)]||$gameSystem['mainFontFace'](),this[_0x33fac8(0x290)][_0x33fac8(0x524)]=this[_0x33fac8(0x478)](),this[_0x33fac8(0x290)][_0x33fac8(0x1ee)]=_0x53c771[_0x33fac8(0x226)],this[_0x33fac8(0x290)]['drawText'](_0x16d6d6,0x0,_0x2ac9a1/0x2,_0x55094f,_0x2ac9a1/0x2,_0x33fac8(0x378));},Sprite_NewLabel[_0x1028f8(0x5db)][_0x1028f8(0x478)]=function(){const _0x300565=_0x1028f8,_0x25f15e=VisuMZ[_0x300565(0x2ae)][_0x300565(0x1c0)]['New']['FontColor'];return _0x25f15e[_0x300565(0x3ce)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x300565(0x524)](_0x25f15e);},Window_Base[_0x1028f8(0x5db)][_0x1028f8(0x1ea)]=function(_0xee0a1a,_0x31608c,_0x2c47e8,_0x299c68){const _0xeec883=_0x1028f8;if(_0xee0a1a){const _0x191ea0=ImageManager[_0xeec883(0x579)]||0x20,_0x4ae771=_0x191ea0-ImageManager[_0xeec883(0x565)],_0x81ca78=_0x191ea0+0x4,_0x4d4123=_0x2c47e8+(this[_0xeec883(0x327)]()-ImageManager[_0xeec883(0x41a)])/0x2,_0x33abe2=Math[_0xeec883(0x35d)](0x0,_0x299c68-_0x81ca78);this[_0xeec883(0x5ba)](ColorManager[_0xeec883(0x5a9)](_0xee0a1a)),this['drawIcon'](_0xee0a1a[_0xeec883(0x3cf)],_0x31608c+Math[_0xeec883(0x3c1)](_0x4ae771/0x2),_0x4d4123),this['drawText'](_0xee0a1a['name'],_0x31608c+_0x81ca78,_0x2c47e8,_0x33abe2),this['resetTextColor']();}},Window_Base[_0x1028f8(0x5db)][_0x1028f8(0x227)]=function(_0x1d9650,_0x44d050,_0x3f5f6e,_0x49a717){const _0x2dda22=_0x1028f8;if(this[_0x2dda22(0x363)](_0x1d9650)){this[_0x2dda22(0x1b9)]();const _0x2ee0b9=VisuMZ[_0x2dda22(0x2ae)]['Settings'][_0x2dda22(0x583)],_0x3a8b88=_0x2ee0b9[_0x2dda22(0x261)],_0x174f3a=_0x3a8b88[_0x2dda22(0x413)]($gameParty[_0x2dda22(0x5c4)](_0x1d9650));this['contents'][_0x2dda22(0x1ee)]=_0x2ee0b9['ItemQuantityFontSize'],this[_0x2dda22(0x545)](_0x174f3a,_0x44d050,_0x3f5f6e,_0x49a717,_0x2dda22(0x5b2)),this[_0x2dda22(0x1b9)]();}},Window_Base['prototype'][_0x1028f8(0x363)]=function(_0x3ab40c){const _0x4a4aa3=_0x1028f8;if(DataManager[_0x4a4aa3(0x486)](_0x3ab40c))return $dataSystem[_0x4a4aa3(0x576)];return!![];},Window_Base['prototype'][_0x1028f8(0x3ac)]=function(_0x10f5a8,_0x5b4c1d,_0x179df3,_0x4c85a0,_0x26b148){const _0x225a33=_0x1028f8;_0x26b148=Math[_0x225a33(0x35d)](_0x26b148||0x1,0x1);while(_0x26b148--){_0x4c85a0=_0x4c85a0||this[_0x225a33(0x327)](),this[_0x225a33(0x4cd)][_0x225a33(0x429)]=0xa0;const _0x332373=ColorManager[_0x225a33(0x55a)]();this['contentsBack'][_0x225a33(0x335)](_0x10f5a8+0x1,_0x5b4c1d+0x1,_0x179df3-0x2,_0x4c85a0-0x2,_0x332373),this['contentsBack'][_0x225a33(0x429)]=0xff;}},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1d0)]=Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x490)],Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x490)]=function(_0x5b3aa7){const _0x358f95=_0x1028f8;this['initNewLabelSprites'](),VisuMZ[_0x358f95(0x2ae)][_0x358f95(0x1d0)]['call'](this,_0x5b3aa7);},Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x1f0)]=function(){const _0x1da80c=_0x1028f8;this[_0x1da80c(0x32b)]={},this['_newLabelOpacity']=0xff,this['_newLabelOpacityChange']=VisuMZ[_0x1da80c(0x2ae)][_0x1da80c(0x1c0)]['New'][_0x1da80c(0x4e3)],this[_0x1da80c(0x283)]=VisuMZ[_0x1da80c(0x2ae)][_0x1da80c(0x1c0)][_0x1da80c(0x5f3)]['FadeLimit'];},Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x301)]=function(){return![];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5a8)]=Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x411)],Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x411)]=function(_0x177a69){const _0x50a12c=_0x1028f8;VisuMZ[_0x50a12c(0x2ae)]['Window_Selectable_setHelpWindowItem'][_0x50a12c(0x43c)](this,_0x177a69);if(this['isShowNew']())this['clearNewLabelFromItem'](_0x177a69);},Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x44d)]=function(_0x343e74){const _0x113a6b=_0x1028f8;if(!_0x343e74)return;$gameParty[_0x113a6b(0x452)](_0x343e74);let _0x2307de='';if(DataManager[_0x113a6b(0x56d)](_0x343e74))_0x2307de=_0x113a6b(0x1dd)[_0x113a6b(0x413)](_0x343e74['id']);else{if(DataManager[_0x113a6b(0x1c6)](_0x343e74))_0x2307de=_0x113a6b(0x2a2)[_0x113a6b(0x413)](_0x343e74['id']);else{if(DataManager[_0x113a6b(0x387)](_0x343e74))_0x2307de=_0x113a6b(0x4fd)['format'](_0x343e74['id']);else return;}}const _0x21a29f=this[_0x113a6b(0x32b)][_0x2307de];if(_0x21a29f)_0x21a29f[_0x113a6b(0x54a)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x355)]=Window_Selectable['prototype']['refresh'],Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x495)]=function(){const _0xb62ff9=_0x1028f8;this[_0xb62ff9(0x53e)](),VisuMZ[_0xb62ff9(0x2ae)][_0xb62ff9(0x355)][_0xb62ff9(0x43c)](this);},Window_Selectable['prototype'][_0x1028f8(0x53e)]=function(){const _0x4320a1=_0x1028f8;for(const _0x5c795e of Object['values'](this[_0x4320a1(0x32b)])){_0x5c795e[_0x4320a1(0x54a)]();}},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x489)]=Window_Selectable[_0x1028f8(0x5db)]['update'],Window_Selectable['prototype'][_0x1028f8(0x58f)]=function(){const _0x597cb7=_0x1028f8;this[_0x597cb7(0x45d)](),VisuMZ[_0x597cb7(0x2ae)]['Window_Selectable_update'][_0x597cb7(0x43c)](this);},Window_Selectable[_0x1028f8(0x5db)][_0x1028f8(0x45d)]=function(){const _0x50179e=_0x1028f8;if(!this[_0x50179e(0x301)]())return;const _0x568a7d=this['_newLabelOpacityUpperLimit'];this['_newLabelOpacity']+=this['_newLabelOpacityChange'];(this[_0x50179e(0x234)]>=_0x568a7d||this[_0x50179e(0x234)]<=0x0)&&(this[_0x50179e(0x427)]*=-0x1);this[_0x50179e(0x234)]=this[_0x50179e(0x234)]['clamp'](0x0,_0x568a7d);for(const _0x515c22 of Object[_0x50179e(0x434)](this[_0x50179e(0x32b)])){_0x515c22['opacity']=this[_0x50179e(0x234)];}},Window_Selectable['prototype'][_0x1028f8(0x1b7)]=function(_0x493a7a){const _0x42c0ec=_0x1028f8,_0x57081e=this['_newLabelSprites'];if(_0x57081e[_0x493a7a])return _0x57081e[_0x493a7a];else{const _0x309ee9=new Sprite_NewLabel();return _0x57081e[_0x493a7a]=_0x309ee9,this[_0x42c0ec(0x56f)](_0x309ee9),_0x309ee9;}},Window_Selectable[_0x1028f8(0x5db)]['placeNewLabel']=function(_0xe8eabb,_0x4d31ab,_0xa5a3d4){const _0x441247=_0x1028f8;let _0x256ad9='';if(DataManager[_0x441247(0x56d)](_0xe8eabb))_0x256ad9=_0x441247(0x1dd)[_0x441247(0x413)](_0xe8eabb['id']);else{if(DataManager[_0x441247(0x1c6)](_0xe8eabb))_0x256ad9=_0x441247(0x2a2)[_0x441247(0x413)](_0xe8eabb['id']);else{if(DataManager[_0x441247(0x387)](_0xe8eabb))_0x256ad9=_0x441247(0x4fd)[_0x441247(0x413)](_0xe8eabb['id']);else return;}}const _0xc9e15a=this[_0x441247(0x1b7)](_0x256ad9);_0xc9e15a[_0x441247(0x52b)](_0x4d31ab,_0xa5a3d4),_0xc9e15a[_0x441247(0x324)](),_0xc9e15a['opacity']=this[_0x441247(0x234)];},Window_ItemCategory['categoryList']=VisuMZ[_0x1028f8(0x2ae)]['Settings'][_0x1028f8(0x5cc)][_0x1028f8(0x563)],Window_ItemCategory[_0x1028f8(0x287)]=[_0x1028f8(0x258),'HiddenItemB','Nonconsumable','Consumable',_0x1028f8(0x307),_0x1028f8(0x3cb),_0x1028f8(0x286),_0x1028f8(0x349)],VisuMZ['ItemsEquipsCore']['Window_ItemCategory_initialize']=Window_ItemCategory[_0x1028f8(0x5db)]['initialize'],Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x490)]=function(_0x3ef88c){const _0x2da2=_0x1028f8;VisuMZ[_0x2da2(0x2ae)]['Window_ItemCategory_initialize'][_0x2da2(0x43c)](this,_0x3ef88c),this[_0x2da2(0x4e5)](_0x3ef88c);},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x4e5)]=function(_0x326ee1){const _0x132ad9=_0x1028f8,_0x5b6bb9=new Rectangle(0x0,0x0,_0x326ee1[_0x132ad9(0x371)],_0x326ee1[_0x132ad9(0x56e)]);this[_0x132ad9(0x2d0)]=new Window_Base(_0x5b6bb9),this['_categoryNameWindow'][_0x132ad9(0x2e6)]=0x0,this[_0x132ad9(0x338)](this[_0x132ad9(0x2d0)]),this['updateCategoryNameWindow']();},Window_ItemCategory['prototype'][_0x1028f8(0x460)]=function(){const _0x23ab9d=_0x1028f8;return Imported[_0x23ab9d(0x236)]&&Window_HorzCommand[_0x23ab9d(0x5db)]['isUseModernControls'][_0x23ab9d(0x43c)](this);},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x1ff)]=function(){},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x352)]=function(){const _0x465e47=_0x1028f8;if(!this[_0x465e47(0x460)]())Window_HorzCommand['prototype'][_0x465e47(0x352)][_0x465e47(0x43c)](this);},Window_ItemCategory['prototype'][_0x1028f8(0x42f)]=function(){const _0x345500=_0x1028f8;return this['_list']?this[_0x345500(0x36a)]():0x4;},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x58f)]=function(){const _0x4d6162=_0x1028f8;Window_HorzCommand[_0x4d6162(0x5db)][_0x4d6162(0x58f)]['call'](this),this[_0x4d6162(0x3b6)]&&this[_0x4d6162(0x3b6)][_0x4d6162(0x598)](this[_0x4d6162(0x23d)]());},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x541)]=function(){const _0x316ef0=_0x1028f8;if(this['isCursorMovable']()){const _0x479487=this[_0x316ef0(0x357)]();if(this[_0x316ef0(0x3b6)]&&this['_itemWindow']['maxCols']()<=0x1)Input['isRepeated'](_0x316ef0(0x5b2))&&this[_0x316ef0(0x359)](Input[_0x316ef0(0x544)](_0x316ef0(0x5b2))),Input[_0x316ef0(0x4d3)](_0x316ef0(0x1af))&&this[_0x316ef0(0x501)](Input[_0x316ef0(0x544)](_0x316ef0(0x1af)));else this['_itemWindow']&&this[_0x316ef0(0x3b6)][_0x316ef0(0x42f)]()>0x1&&(Input[_0x316ef0(0x4d3)]('pagedown')&&!Input[_0x316ef0(0x2eb)](_0x316ef0(0x4a3))&&this[_0x316ef0(0x359)](Input[_0x316ef0(0x544)](_0x316ef0(0x4f4))),Input[_0x316ef0(0x4d3)](_0x316ef0(0x594))&&!Input[_0x316ef0(0x2eb)](_0x316ef0(0x4a3))&&this[_0x316ef0(0x501)](Input[_0x316ef0(0x544)](_0x316ef0(0x594))));this[_0x316ef0(0x357)]()!==_0x479487&&this[_0x316ef0(0x448)]();}},Window_ItemCategory['prototype'][_0x1028f8(0x56b)]=function(){const _0x3e1b7e=_0x1028f8;if(this[_0x3e1b7e(0x460)]())return;Window_HorzCommand[_0x3e1b7e(0x5db)]['processHandling']['call'](this);},Window_ItemCategory['prototype']['isHoverEnabled']=function(){const _0x597bb6=_0x1028f8;return this[_0x597bb6(0x460)]()?![]:Window_HorzCommand[_0x597bb6(0x5db)]['isHoverEnabled'][_0x597bb6(0x43c)](this);},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x1b5)]=function(){const _0x329562=_0x1028f8;if(this[_0x329562(0x319)]()){TouchInput[_0x329562(0x544)]()&&this[_0x329562(0x216)](!![]);if(TouchInput['isClicked']())this[_0x329562(0x1ce)]();else TouchInput[_0x329562(0x50f)]()&&this[_0x329562(0x1a0)]();}},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x216)]=function(_0x3b8c09){const _0x33e178=_0x1028f8;this[_0x33e178(0x460)]()?this['onTouchSelectModern'](!![]):Window_HorzCommand['prototype']['onTouchSelect']['call'](this,_0x3b8c09);},Window_ItemCategory['prototype']['onTouchSelectModern']=function(_0x2c88a5){const _0x43bf41=_0x1028f8;this[_0x43bf41(0x561)]=![];if(this['isCursorMovable']()){const _0x242738=this[_0x43bf41(0x357)](),_0x17f38b=this[_0x43bf41(0x1f6)]();_0x17f38b>=0x0&&_0x17f38b!==this[_0x43bf41(0x357)]()&&this[_0x43bf41(0x389)](_0x17f38b),_0x2c88a5&&this['index']()!==_0x242738&&this[_0x43bf41(0x448)]();}},Window_ItemCategory['prototype']['makeCommandList']=function(){const _0xa72dd2=_0x1028f8;this[_0xa72dd2(0x3f4)](),this[_0xa72dd2(0x389)](this[_0xa72dd2(0x357)]());},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x3f4)]=function(){const _0x121f7c=_0x1028f8;for(const _0x11bbb4 of Window_ItemCategory[_0x121f7c(0x37d)]){this[_0x121f7c(0x59b)](_0x11bbb4);}},Window_ItemCategory['prototype'][_0x1028f8(0x59b)]=function(_0x16bc0a){const _0x4c77d0=_0x1028f8,_0x154e6d=_0x16bc0a[_0x4c77d0(0x31d)],_0x5bc0f3=_0x16bc0a['Icon'],_0x501640=_0x16bc0a['SwitchID']||0x0;if(_0x501640>0x0&&!$gameSwitches[_0x4c77d0(0x278)](_0x501640))return;let _0x38d54a='',_0x12f1a9=_0x4c77d0(0x586),_0x4881eb=_0x154e6d;if(_0x154e6d['match'](/Category:(.*)/i))_0x38d54a=String(RegExp['$1'])[_0x4c77d0(0x2de)]();else{if(Window_ItemCategory[_0x4c77d0(0x287)]['includes'](_0x154e6d))_0x38d54a=VisuMZ[_0x4c77d0(0x2ae)][_0x4c77d0(0x1c0)][_0x4c77d0(0x5cc)][_0x154e6d];else{if([_0x4c77d0(0x5b8),'RegularItems'][_0x4c77d0(0x36e)](_0x154e6d))_0x38d54a=TextManager[_0x4c77d0(0x1e8)];else{if(_0x154e6d===_0x4c77d0(0x1db))_0x38d54a=TextManager[_0x4c77d0(0x522)];else{if(_0x154e6d==='AllWeapons')_0x38d54a=TextManager[_0x4c77d0(0x455)];else{if(_0x154e6d===_0x4c77d0(0x1f7))_0x38d54a=TextManager['armor'];else{if(_0x154e6d[_0x4c77d0(0x3ce)](/WTYPE:(\d+)/i))_0x38d54a=$dataSystem[_0x4c77d0(0x473)][Number(RegExp['$1'])]||'';else{if(_0x154e6d[_0x4c77d0(0x3ce)](/ATYPE:(\d+)/i))_0x38d54a=$dataSystem[_0x4c77d0(0x20d)][Number(RegExp['$1'])]||'';else _0x154e6d[_0x4c77d0(0x3ce)](/ETYPE:(\d+)/i)&&(_0x38d54a=$dataSystem['equipTypes'][Number(RegExp['$1'])]||'');}}}}}}}if(TextManager[_0x4c77d0(0x4c5)]&&TextManager[_0x4c77d0(0x2f8)]()){const _0x49439c=_0x38d54a[_0x4c77d0(0x3b3)]()[_0x4c77d0(0x2de)]();if($dataLocalization[_0x49439c]&&_0x49439c[_0x4c77d0(0x2fd)]>0x0){const _0x14c97b=ConfigManager[_0x4c77d0(0x206)]||'English';_0x38d54a=$dataLocalization[_0x49439c][_0x14c97b]||_0x4c77d0(0x5c1);}}_0x5bc0f3>0x0&&this[_0x4c77d0(0x5c5)]()!==_0x4c77d0(0x5aa)&&(_0x38d54a=_0x4c77d0(0x1cf)[_0x4c77d0(0x413)](_0x5bc0f3,_0x38d54a)),this[_0x4c77d0(0x37e)](_0x38d54a,_0x12f1a9,!![],_0x4881eb);},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x3af)]=function(){const _0x313ee0=_0x1028f8;return VisuMZ[_0x313ee0(0x2ae)][_0x313ee0(0x1c0)][_0x313ee0(0x5cc)]['TextAlign'];},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x3e3)]=function(_0xa41404){const _0xdfaacf=_0x1028f8,_0x2e16f7=this[_0xdfaacf(0x2ad)](_0xa41404);if(_0x2e16f7===_0xdfaacf(0x34a))this[_0xdfaacf(0x5c6)](_0xa41404);else _0x2e16f7===_0xdfaacf(0x47d)?this['drawItemStyleIcon'](_0xa41404):Window_HorzCommand['prototype'][_0xdfaacf(0x3e3)]['call'](this,_0xa41404);},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x5c5)]=function(){const _0xe15d1d=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0xe15d1d(0x1c0)][_0xe15d1d(0x5cc)][_0xe15d1d(0x22c)];},Window_ItemCategory['prototype'][_0x1028f8(0x2ad)]=function(_0x2969e8){const _0x52b41e=_0x1028f8;if(_0x2969e8<0x0)return _0x52b41e(0x5aa);const _0x3e29d9=this[_0x52b41e(0x5c5)]();if(_0x3e29d9!==_0x52b41e(0x415))return _0x3e29d9;else{const _0x3d592c=this[_0x52b41e(0x4f3)](_0x2969e8);if(_0x3d592c[_0x52b41e(0x3ce)](/\\I\[(\d+)\]/i)){const _0x184075=this[_0x52b41e(0x51b)](_0x2969e8),_0x20bd9e=this[_0x52b41e(0x284)](_0x3d592c)[_0x52b41e(0x371)];return _0x20bd9e<=_0x184075[_0x52b41e(0x371)]?'iconText':'icon';}else return'text';}},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x5c6)]=function(_0x2c27a4){const _0x2924d1=_0x1028f8,_0x276ce7=this[_0x2924d1(0x51b)](_0x2c27a4),_0x37dc48=this[_0x2924d1(0x4f3)](_0x2c27a4),_0x5b7e79=this['textSizeEx'](_0x37dc48)[_0x2924d1(0x371)];this[_0x2924d1(0x484)](this['isCommandEnabled'](_0x2c27a4));const _0x48cd4e=this[_0x2924d1(0x3af)]();if(_0x48cd4e===_0x2924d1(0x5b2))this['drawTextEx'](_0x37dc48,_0x276ce7['x']+_0x276ce7['width']-_0x5b7e79,_0x276ce7['y'],_0x5b7e79);else{if(_0x48cd4e===_0x2924d1(0x378)){const _0x5f0eef=_0x276ce7['x']+Math[_0x2924d1(0x44c)]((_0x276ce7[_0x2924d1(0x371)]-_0x5b7e79)/0x2);this[_0x2924d1(0x30f)](_0x37dc48,_0x5f0eef,_0x276ce7['y'],_0x5b7e79);}else this['drawTextEx'](_0x37dc48,_0x276ce7['x'],_0x276ce7['y'],_0x5b7e79);}},Window_ItemCategory[_0x1028f8(0x5db)]['drawItemStyleIcon']=function(_0x5b69b){const _0x22552f=_0x1028f8,_0x1df756=this['commandName'](_0x5b69b);if(_0x1df756[_0x22552f(0x3ce)](/\\I\[(\d+)\]/i)){const _0x194caa=Number(RegExp['$1'])||0x0,_0xe865ce=this[_0x22552f(0x51b)](_0x5b69b),_0x3ddabe=_0xe865ce['x']+Math[_0x22552f(0x44c)]((_0xe865ce[_0x22552f(0x371)]-ImageManager[_0x22552f(0x565)])/0x2),_0x4a7dc6=_0xe865ce['y']+(_0xe865ce[_0x22552f(0x56e)]-ImageManager[_0x22552f(0x41a)])/0x2;this[_0x22552f(0x27b)](_0x194caa,_0x3ddabe,_0x4a7dc6);}},VisuMZ[_0x1028f8(0x2ae)]['Window_ItemCategory_setItemWindow']=Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x3d5)],Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x3d5)]=function(_0x59ba0d){const _0x506c1a=_0x1028f8;VisuMZ[_0x506c1a(0x2ae)][_0x506c1a(0x3fe)][_0x506c1a(0x43c)](this,_0x59ba0d),_0x59ba0d['_categoryWindow']=this;},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x1c3)]=function(){const _0x5095a8=_0x1028f8;Window_HorzCommand[_0x5095a8(0x5db)][_0x5095a8(0x1c3)][_0x5095a8(0x43c)](this);if(this[_0x5095a8(0x2d0)])this['updateCategoryNameWindow']();},Window_ItemCategory[_0x1028f8(0x5db)]['updateCategoryNameWindow']=function(){const _0x41cf6b=_0x1028f8,_0x464d46=this[_0x41cf6b(0x2d0)];_0x464d46[_0x41cf6b(0x587)][_0x41cf6b(0x223)]();const _0xba8af8=this[_0x41cf6b(0x2ad)](this['index']());if(_0xba8af8===_0x41cf6b(0x47d)){const _0xef4483=this['itemLineRect'](this[_0x41cf6b(0x357)]());let _0x3358db=this[_0x41cf6b(0x4f3)](this[_0x41cf6b(0x357)]());_0x3358db=_0x3358db[_0x41cf6b(0x25d)](/\\I\[(\d+)\]/gi,''),_0x464d46[_0x41cf6b(0x1b9)](),this[_0x41cf6b(0x1a3)](_0x3358db,_0xef4483),this[_0x41cf6b(0x2f5)](_0x3358db,_0xef4483),this[_0x41cf6b(0x366)](_0x3358db,_0xef4483);}},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x1a3)]=function(_0x396416,_0x4c95f2){},Window_ItemCategory[_0x1028f8(0x5db)][_0x1028f8(0x2f5)]=function(_0x1f2946,_0x1357a4){const _0x2c6896=_0x1028f8,_0x1172a7=this['_categoryNameWindow'];_0x1172a7[_0x2c6896(0x545)](_0x1f2946,0x0,_0x1357a4['y'],_0x1172a7['innerWidth'],_0x2c6896(0x378));},Window_ItemCategory[_0x1028f8(0x5db)]['categoryNameWindowCenter']=function(_0x9834b3,_0x4f333c){const _0x23d581=_0x1028f8,_0x3da38b=this[_0x23d581(0x2d0)],_0x494ac4=$gameSystem[_0x23d581(0x597)](),_0x4b98e2=_0x4f333c['x']+Math[_0x23d581(0x44c)](_0x4f333c[_0x23d581(0x371)]/0x2)+_0x494ac4;_0x3da38b['x']=_0x3da38b[_0x23d581(0x371)]/-0x2+_0x4b98e2,_0x3da38b['y']=Math[_0x23d581(0x44c)](_0x4f333c['height']/0x2);},Window_ItemList['prototype']['processCursorMoveModernControls']=function(){const _0x151caa=_0x1028f8;if(this[_0x151caa(0x4c8)]()){const _0x55d1ef=this[_0x151caa(0x357)]();if(this[_0x151caa(0x42f)]()<=0x1)!this[_0x151caa(0x536)](_0x151caa(0x4f4))&&Input[_0x151caa(0x544)](_0x151caa(0x4f4))&&this[_0x151caa(0x3b5)](),!this[_0x151caa(0x536)]('pageup')&&Input['isTriggered'](_0x151caa(0x594))&&this[_0x151caa(0x442)]();else this['maxCols']()>0x1&&(Input[_0x151caa(0x4d3)](_0x151caa(0x5b2))&&this[_0x151caa(0x359)](Input['isTriggered']('right')),Input[_0x151caa(0x4d3)](_0x151caa(0x1af))&&this[_0x151caa(0x501)](Input[_0x151caa(0x544)](_0x151caa(0x1af))),this[_0x151caa(0x3f5)]()?(Input[_0x151caa(0x544)](_0x151caa(0x4f4))&&Input[_0x151caa(0x2eb)]('shift')&&this[_0x151caa(0x3b5)](),Input[_0x151caa(0x544)](_0x151caa(0x594))&&Input[_0x151caa(0x2eb)](_0x151caa(0x4a3))&&this[_0x151caa(0x442)]()):(Input[_0x151caa(0x544)](_0x151caa(0x4f4))&&this[_0x151caa(0x3b5)](),Input['isTriggered'](_0x151caa(0x594))&&this['cursorPageup']()));Input[_0x151caa(0x4d3)](_0x151caa(0x314))&&(Input[_0x151caa(0x2eb)](_0x151caa(0x4a3))&&this['allowShiftScrolling']()?this['cursorPagedown']():this['cursorDown'](Input[_0x151caa(0x544)](_0x151caa(0x314)))),Input[_0x151caa(0x4d3)]('up')&&(Input[_0x151caa(0x2eb)](_0x151caa(0x4a3))&&this[_0x151caa(0x25a)]()?this[_0x151caa(0x442)]():this['cursorUp'](Input[_0x151caa(0x544)]('up'))),Imported['VisuMZ_0_CoreEngine']&&this[_0x151caa(0x1ff)](),this[_0x151caa(0x357)]()!==_0x55d1ef&&this[_0x151caa(0x448)]();}},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x3f5)]=function(){const _0x2c5a10=_0x1028f8,_0x4b40ad=SceneManager['_scene'],_0x29afab=[Scene_Item,Scene_Shop];return _0x29afab[_0x2c5a10(0x36e)](_0x4b40ad['constructor']);},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x3fd)]=function(){const _0x154804=_0x1028f8;Window_Selectable[_0x154804(0x5db)][_0x154804(0x3fd)][_0x154804(0x43c)](this),this[_0x154804(0x500)]&&this['_categoryWindow'][_0x154804(0x460)]()&&this[_0x154804(0x500)][_0x154804(0x3fd)]();},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x4bf)]=function(){const _0x2e26f2=_0x1028f8;Window_Selectable['prototype'][_0x2e26f2(0x4bf)][_0x2e26f2(0x43c)](this),this[_0x2e26f2(0x500)]&&this[_0x2e26f2(0x500)]['isUseModernControls']()&&this[_0x2e26f2(0x500)][_0x2e26f2(0x4bf)]();},Window_ItemList[_0x1028f8(0x5db)]['setCategory']=function(_0x41e69b){const _0x3ca9dd=_0x1028f8;this['_category']!==_0x41e69b&&(this[_0x3ca9dd(0x5cb)]=_0x41e69b,this[_0x3ca9dd(0x495)](),this[_0x3ca9dd(0x500)]&&this[_0x3ca9dd(0x500)][_0x3ca9dd(0x460)]()?this['smoothSelect'](0x0):this[_0x3ca9dd(0x5d7)](0x0,0x0));},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x59c)]=Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x42f)],Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x42f)]=function(){const _0x22e9ab=_0x1028f8;if(SceneManager[_0x22e9ab(0x212)][_0x22e9ab(0x50a)]===Scene_Battle)return VisuMZ[_0x22e9ab(0x2ae)][_0x22e9ab(0x59c)][_0x22e9ab(0x43c)](this);else return SceneManager['_scene'][_0x22e9ab(0x50a)]===Scene_Map?VisuMZ[_0x22e9ab(0x2ae)]['Window_ItemList_maxCols'][_0x22e9ab(0x43c)](this):VisuMZ[_0x22e9ab(0x2ae)][_0x22e9ab(0x1c0)][_0x22e9ab(0x583)]['ListWindowCols'];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3d7)]=Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x48b)],Window_ItemList['prototype'][_0x1028f8(0x48b)]=function(){const _0x340295=_0x1028f8;return this[_0x340295(0x42f)]()<=0x1?Window_Selectable['prototype'][_0x340295(0x48b)]['call'](this):VisuMZ['ItemsEquipsCore']['Window_ItemList_colSpacing'][_0x340295(0x43c)](this);},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x36e)]=function(_0x3e36a7){const _0x77338c=_0x1028f8;switch(this[_0x77338c(0x5cb)]){case _0x77338c(0x5b8):return DataManager[_0x77338c(0x56d)](_0x3e36a7);case'RegularItems':return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x341)]===0x1;case _0x77338c(0x1db):return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x341)]===0x2;case _0x77338c(0x258):return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&_0x3e36a7['itypeId']===0x3;case'HiddenItemB':return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x341)]===0x4;case'Consumable':return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&_0x3e36a7['consumable'];case _0x77338c(0x3bf):return DataManager['isItem'](_0x3e36a7)&&!_0x3e36a7[_0x77338c(0x2dc)];case _0x77338c(0x307):return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&[0x0][_0x77338c(0x36e)](_0x3e36a7['occasion']);case _0x77338c(0x3cb):return DataManager['isItem'](_0x3e36a7)&&[0x0,0x1]['includes'](_0x3e36a7[_0x77338c(0x55d)]);case _0x77338c(0x286):return DataManager[_0x77338c(0x56d)](_0x3e36a7)&&[0x0,0x2][_0x77338c(0x36e)](_0x3e36a7[_0x77338c(0x55d)]);case'NeverUsable':return DataManager['isItem'](_0x3e36a7)&&[0x3][_0x77338c(0x36e)](_0x3e36a7[_0x77338c(0x55d)]);case'AllWeapons':return DataManager[_0x77338c(0x1c6)](_0x3e36a7);case'AllArmors':return DataManager['isArmor'](_0x3e36a7);default:if(this['_category'][_0x77338c(0x3ce)](/WTYPE:(\d+)/i))return DataManager[_0x77338c(0x1c6)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x2c0)]===Number(RegExp['$1']);else{if(this[_0x77338c(0x5cb)][_0x77338c(0x3ce)](/WTYPE:(.*)/i)){const _0x1a2eb6=$dataSystem[_0x77338c(0x473)][_0x77338c(0x54d)](String(RegExp['$1'])[_0x77338c(0x2de)]());return DataManager['isWeapon'](_0x3e36a7)&&_0x3e36a7['wtypeId']===_0x1a2eb6;}else{if(this['_category'][_0x77338c(0x3ce)](/ATYPE:(\d+)/i))return DataManager[_0x77338c(0x387)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x38c)]===Number(RegExp['$1']);else{if(this[_0x77338c(0x5cb)][_0x77338c(0x3ce)](/ATYPE:(.*)/i)){const _0x105e4f=$dataSystem[_0x77338c(0x20d)]['indexOf'](String(RegExp['$1'])['trim']());return DataManager[_0x77338c(0x387)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x38c)]===_0x105e4f;}else{if(this[_0x77338c(0x5cb)]['match'](/ETYPE:(\d+)/i))return!!_0x3e36a7&&_0x3e36a7['etypeId']===Number(RegExp['$1']);else{if(this['_category'][_0x77338c(0x3ce)](/ETYPE:(.*)/i)){const _0x3c5271=$dataSystem[_0x77338c(0x4a7)][_0x77338c(0x54d)](String(RegExp['$1'])['trim']());return DataManager[_0x77338c(0x387)](_0x3e36a7)&&_0x3e36a7[_0x77338c(0x4c3)]===_0x3c5271;}else{if(this['_category']['match'](/Category:(.*)/i))return!!_0x3e36a7&&_0x3e36a7[_0x77338c(0x205)][_0x77338c(0x36e)](String(RegExp['$1'])[_0x77338c(0x339)]()[_0x77338c(0x2de)]());}}}}}}}return![];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x38b)]=Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x2ef)],Window_ItemList[_0x1028f8(0x5db)]['makeItemList']=function(){const _0x4705d5=_0x1028f8;VisuMZ[_0x4705d5(0x2ae)][_0x4705d5(0x38b)]['call'](this);if(this['canSortListItemScene']())this[_0x4705d5(0x527)]();},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x5bc)]=function(){const _0x1c17f4=_0x1028f8,_0x5c7d3d=['Scene_Battle',_0x1c17f4(0x4c6),_0x1c17f4(0x1b8),'Scene_Shop'],_0x4608c3=SceneManager[_0x1c17f4(0x212)];return _0x5c7d3d[_0x1c17f4(0x36e)](_0x4608c3[_0x1c17f4(0x50a)][_0x1c17f4(0x2c8)]);},Window_ItemList[_0x1028f8(0x5db)]['sortListItemScene']=function(){const _0x4e8950=_0x1028f8,_0x42542e=Window_ItemCategory[_0x4e8950(0x37d)],_0x952a15=_0x42542e['find'](_0x216525=>_0x216525[_0x4e8950(0x31d)]===this[_0x4e8950(0x5cb)]);if(!_0x952a15){VisuMZ[_0x4e8950(0x2ae)][_0x4e8950(0x3aa)](this[_0x4e8950(0x47f)]);return;}const _0x737e92=((_0x952a15[_0x4e8950(0x2e0)]??'ID')||'ID')[_0x4e8950(0x339)]()[_0x4e8950(0x2de)]();_0x737e92===_0x4e8950(0x329)?this[_0x4e8950(0x47f)][_0x4e8950(0x5b9)]((_0x3b7634,_0x584bd8)=>{const _0x4aab44=_0x4e8950;if(!!_0x3b7634&&!!_0x584bd8)return _0x3b7634['name'][_0x4aab44(0x379)](_0x584bd8[_0x4aab44(0x2c8)]);return 0x0;}):VisuMZ[_0x4e8950(0x2ae)]['SortByIDandPriority'](this[_0x4e8950(0x47f)]);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x3aa)]=function(_0x157458){const _0x2ec1ef=_0x1028f8;return _0x157458[_0x2ec1ef(0x5b9)]((_0xc6df49,_0x215ae5)=>{const _0x3e2126=_0x2ec1ef;if(!!_0xc6df49&&!!_0x215ae5){if(_0xc6df49['sortPriority']===undefined)VisuMZ[_0x3e2126(0x2ae)][_0x3e2126(0x2a8)](_0xc6df49);if(_0x215ae5[_0x3e2126(0x46d)]===undefined)VisuMZ[_0x3e2126(0x2ae)][_0x3e2126(0x2a8)](_0x215ae5);const _0x309c86=_0xc6df49[_0x3e2126(0x46d)],_0x13bd63=_0x215ae5[_0x3e2126(0x46d)];if(_0x309c86!==_0x13bd63)return _0x13bd63-_0x309c86;return _0xc6df49['id']-_0x215ae5['id'];}return 0x0;}),_0x157458;},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x301)]=function(){return!![];},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1a5)]=Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x3e3)],Window_ItemList['prototype'][_0x1028f8(0x3e3)]=function(_0x294632){const _0x31b9ca=_0x1028f8;VisuMZ[_0x31b9ca(0x2ae)]['Window_ItemList_drawItem'][_0x31b9ca(0x43c)](this,_0x294632),this[_0x31b9ca(0x3fa)](_0x294632);},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x227)]=function(_0x218224,_0x1bdd5d,_0x7a855f,_0x5ca114){const _0x27e96e=_0x1028f8;Window_Selectable['prototype']['drawItemNumber'][_0x27e96e(0x43c)](this,_0x218224,_0x1bdd5d,_0x7a855f,_0x5ca114);},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x3fa)]=function(_0x4e2278){const _0x100ca4=_0x1028f8,_0x4389e6=this['itemAt'](_0x4e2278);if(!_0x4389e6||!this[_0x100ca4(0x301)]())return;if(!$gameParty[_0x100ca4(0x519)](_0x4389e6))return;const _0x30be62=this[_0x100ca4(0x51b)](_0x4e2278),_0xdb6ab1=_0x30be62['x'],_0x8e6ecb=_0x30be62['y']+(this[_0x100ca4(0x327)]()-0x20)/0x2,_0x42986a=VisuMZ[_0x100ca4(0x2ae)][_0x100ca4(0x1c0)][_0x100ca4(0x5f3)][_0x100ca4(0x59d)],_0x35c5b5=VisuMZ[_0x100ca4(0x2ae)][_0x100ca4(0x1c0)][_0x100ca4(0x5f3)][_0x100ca4(0x5d6)];this[_0x100ca4(0x2f1)](_0x4389e6,_0xdb6ab1+_0x42986a,_0x8e6ecb+_0x35c5b5);},Window_ItemList[_0x1028f8(0x5db)][_0x1028f8(0x2d4)]=function(_0x6280c){const _0x2cf3b5=_0x1028f8;this['_statusWindow']=_0x6280c,this[_0x2cf3b5(0x1c3)]();},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x59a)]=Window_ItemList[_0x1028f8(0x5db)]['updateHelp'],Window_ItemList['prototype'][_0x1028f8(0x51a)]=function(){const _0x680be7=_0x1028f8;VisuMZ[_0x680be7(0x2ae)][_0x680be7(0x59a)]['call'](this),this[_0x680be7(0x22e)]&&this['_statusWindow'][_0x680be7(0x50a)]===Window_ShopStatus&&this[_0x680be7(0x22e)][_0x680be7(0x291)](this[_0x680be7(0x1e8)]());},Window_BattleItem[_0x1028f8(0x5db)][_0x1028f8(0x596)]=function(_0x4a55d1){const _0x2bc9c2=_0x1028f8;return BattleManager[_0x2bc9c2(0x245)]()?BattleManager['actor']()[_0x2bc9c2(0x24a)](_0x4a55d1):Window_ItemList[_0x2bc9c2(0x5db)]['isEnabled'][_0x2bc9c2(0x43c)](this,_0x4a55d1);},Window_EventItem['prototype'][_0x1028f8(0x301)]=function(){return![];},Window_EquipStatus['prototype'][_0x1028f8(0x4cb)]=function(){const _0x16faa9=_0x1028f8;return VisuMZ[_0x16faa9(0x2ae)][_0x16faa9(0x1c0)][_0x16faa9(0x21e)]['EnableLayout'];},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x337)]=Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x495)],Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x495)]=function(){const _0x4341dd=_0x1028f8;this[_0x4341dd(0x4f6)](),this[_0x4341dd(0x1b9)]();if(this[_0x4341dd(0x346)])this['_actor'][_0x4341dd(0x495)]();this['isUseItemsEquipsCoreUpdatedLayout']()?this['prepareRefreshItemsEquipsCoreLayout']():VisuMZ[_0x4341dd(0x2ae)]['Window_EquipStatus_refresh'][_0x4341dd(0x43c)](this);},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x5ca)]=function(){const _0x14f3c5=_0x1028f8;this[_0x14f3c5(0x587)]['clear']();if(!this[_0x14f3c5(0x346)])return;if(this['isMainMenuCoreMenuImageOptionAvailable']()){const _0x147d2c=ImageManager[_0x14f3c5(0x3ea)](this[_0x14f3c5(0x346)]['getMenuImage']());_0x147d2c[_0x14f3c5(0x1da)](this[_0x14f3c5(0x3b2)][_0x14f3c5(0x24b)](this));}else this[_0x14f3c5(0x27d)]();},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x2d6)]=function(){const _0x5ddb60=_0x1028f8;return Imported['VisuMZ_1_MainMenuCore']&&this[_0x5ddb60(0x346)][_0x5ddb60(0x2f0)]()!==''&&VisuMZ['ItemsEquipsCore']['Settings'][_0x5ddb60(0x21e)][_0x5ddb60(0x1e1)];},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x3b2)]=function(){const _0x57f584=_0x1028f8;VisuMZ[_0x57f584(0x2ae)][_0x57f584(0x1c0)][_0x57f584(0x21e)]['DrawPortraitJS'][_0x57f584(0x43c)](this),this[_0x57f584(0x5d0)]();},Window_EquipStatus['prototype'][_0x1028f8(0x27d)]=function(){const _0x250a4e=_0x1028f8;VisuMZ[_0x250a4e(0x2ae)][_0x250a4e(0x1c0)]['EquipScene'][_0x250a4e(0x267)][_0x250a4e(0x43c)](this),this[_0x250a4e(0x5d0)]();},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x5d0)]=function(){const _0xe52b5a=_0x1028f8;this['resetFontSettings'](),VisuMZ[_0xe52b5a(0x2ae)][_0xe52b5a(0x1c0)]['EquipScene'][_0xe52b5a(0x21b)][_0xe52b5a(0x43c)](this);},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x1d4)]=function(_0xc9b6a,_0x2c5946,_0x73c966,_0x57b9eb,_0x3cfe70){const _0x49c930=_0x1028f8,_0x41e585=ImageManager[_0x49c930(0x3ea)](_0xc9b6a['getMenuImage']()),_0x4a7efd=this[_0x49c930(0x265)]-_0x41e585[_0x49c930(0x371)];_0x2c5946+=_0x4a7efd/0x2;if(_0x4a7efd<0x0)_0x57b9eb-=_0x4a7efd;Window_StatusBase[_0x49c930(0x5db)]['drawItemActorMenuImage'][_0x49c930(0x43c)](this,_0xc9b6a,_0x2c5946,_0x73c966,_0x57b9eb,_0x3cfe70);},Window_EquipStatus[_0x1028f8(0x5db)]['actorParams']=function(){const _0x2077a4=_0x1028f8;return Imported[_0x2077a4(0x236)]?VisuMZ[_0x2077a4(0x1f3)][_0x2077a4(0x1c0)][_0x2077a4(0x250)][_0x2077a4(0x3e7)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus['prototype']['paramValueFontSize']=function(){const _0x3e44d6=_0x1028f8;return VisuMZ[_0x3e44d6(0x2ae)][_0x3e44d6(0x1c0)][_0x3e44d6(0x21e)][_0x3e44d6(0x28a)];},Window_EquipStatus['prototype'][_0x1028f8(0x35b)]=function(){const _0x4c8cab=_0x1028f8;return Imported[_0x4c8cab(0x236)]&&VisuMZ[_0x4c8cab(0x1f3)][_0x4c8cab(0x1c0)][_0x4c8cab(0x250)][_0x4c8cab(0x5f5)];},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x1fe)]=function(_0x2001d9,_0x13dfd6,_0x574c76,_0x4b9242){const _0x91d1ac=_0x1028f8,_0x14a8e4=this[_0x91d1ac(0x44f)]();Imported[_0x91d1ac(0x236)]?this[_0x91d1ac(0x270)](_0x13dfd6+_0x14a8e4,_0x574c76,_0x4b9242,_0x2001d9,![]):(this[_0x91d1ac(0x5ba)](ColorManager[_0x91d1ac(0x29d)]()),this[_0x91d1ac(0x545)](TextManager[_0x91d1ac(0x240)](_0x2001d9),_0x13dfd6+_0x14a8e4,_0x574c76,_0x4b9242));},Window_EquipStatus['prototype']['drawUpdatedBeforeParamValue']=function(_0x337c98,_0x4004c6,_0x2735c7,_0x44a15c){const _0x238217=_0x1028f8,_0x5684f1=this['itemPadding']();let _0x223baf=0x0;Imported[_0x238217(0x236)]?_0x223baf=this['_actor'][_0x238217(0x251)](_0x337c98,!![]):_0x223baf=this[_0x238217(0x346)]['param'](_0x337c98);const _0x32523c=_0x223baf;this[_0x238217(0x545)](_0x223baf,_0x4004c6,_0x2735c7,_0x44a15c-_0x5684f1,_0x238217(0x5b2));},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x274)]=function(_0x53a2cf,_0x9530c1,_0xf973c2,_0x9de3fb){const _0x2fa4ef=_0x1028f8,_0x121abf=this[_0x2fa4ef(0x44f)]();let _0x177bb0=0x0,_0x45a92d=0x0,_0x4bd2e7='';if(this[_0x2fa4ef(0x249)]){Imported['VisuMZ_0_CoreEngine']?(_0x177bb0=this['_actor']['paramValueByName'](_0x53a2cf,![]),_0x45a92d=this[_0x2fa4ef(0x249)][_0x2fa4ef(0x251)](_0x53a2cf,![]),_0x4bd2e7=this[_0x2fa4ef(0x249)][_0x2fa4ef(0x251)](_0x53a2cf,!![])):(_0x177bb0=this['_actor'][_0x2fa4ef(0x240)](_0x53a2cf),_0x45a92d=this[_0x2fa4ef(0x249)][_0x2fa4ef(0x240)](_0x53a2cf),_0x4bd2e7=this[_0x2fa4ef(0x249)][_0x2fa4ef(0x240)](_0x53a2cf));const _0xd32272=_0x177bb0,_0x21504e=_0x45a92d;diffValue=_0x21504e-_0xd32272,this[_0x2fa4ef(0x5ba)](ColorManager['paramchangeTextColor'](diffValue)),this[_0x2fa4ef(0x545)](_0x4bd2e7,_0x9530c1,_0xf973c2,_0x9de3fb-_0x121abf,_0x2fa4ef(0x5b2));}},Window_EquipStatus[_0x1028f8(0x5db)][_0x1028f8(0x464)]=function(_0x1be61c,_0x1519ea,_0x359e97,_0x42b56c){const _0xb2789b=_0x1028f8,_0x126ef5=this[_0xb2789b(0x44f)]();let _0x427a22=0x0,_0x1e9213=0x0,_0x557370=![];if(this[_0xb2789b(0x249)]){Imported[_0xb2789b(0x236)]?(_0x427a22=this[_0xb2789b(0x346)]['paramValueByName'](_0x1be61c,![]),_0x1e9213=this[_0xb2789b(0x249)]['paramValueByName'](_0x1be61c,![]),_0x557370=String(this['_actor'][_0xb2789b(0x251)](_0x1be61c,!![]))[_0xb2789b(0x3ce)](/([%％])/i)):(_0x427a22=this[_0xb2789b(0x346)]['param'](_0x1be61c),_0x1e9213=this[_0xb2789b(0x249)]['param'](_0x1be61c),_0x557370=_0x427a22%0x1!==0x0||_0x1e9213%0x1!==0x0);const _0x17a76b=_0x427a22,_0x53a7d1=_0x1e9213,_0x59eca6=_0x53a7d1-_0x17a76b;let _0x30f3f8=_0x59eca6;if(_0x557370)_0x30f3f8=Math[_0xb2789b(0x49a)](_0x59eca6*0x64)+'%';_0x59eca6!==0x0&&(this[_0xb2789b(0x5ba)](ColorManager[_0xb2789b(0x1ac)](_0x59eca6)),_0x30f3f8=(_0x59eca6>0x0?_0xb2789b(0x34d):_0xb2789b(0x2c5))[_0xb2789b(0x413)](_0x30f3f8),this['drawText'](_0x30f3f8,_0x1519ea+_0x126ef5,_0x359e97,_0x42b56c,'left'));}},Window_EquipStatus[_0x1028f8(0x5db)]['drawItemDarkRect']=function(_0x510a4d,_0x12498f,_0x2f9555,_0x193f39,_0x21a759){const _0x30831a=_0x1028f8;if(VisuMZ[_0x30831a(0x2ae)][_0x30831a(0x1c0)][_0x30831a(0x21e)]['DrawBackRect']===![])return;_0x21a759=Math[_0x30831a(0x35d)](_0x21a759||0x1,0x1);while(_0x21a759--){_0x193f39=_0x193f39||this[_0x30831a(0x327)](),this[_0x30831a(0x587)][_0x30831a(0x429)]=0xa0;const _0xd6ef74=ColorManager['getItemsEquipsCoreBackColor2']();this['contents']['fillRect'](_0x510a4d+0x1,_0x12498f+0x1,_0x2f9555-0x2,_0x193f39-0x2,_0xd6ef74),this[_0x30831a(0x587)][_0x30831a(0x429)]=0xff;}},ColorManager[_0x1028f8(0x32e)]=function(){const _0x4b9213=_0x1028f8,_0x377169=VisuMZ['ItemsEquipsCore'][_0x4b9213(0x1c0)][_0x4b9213(0x21e)];let _0xc9743a=_0x377169[_0x4b9213(0x2c6)]!==undefined?_0x377169[_0x4b9213(0x2c6)]:0x13;return ColorManager[_0x4b9213(0x3c0)](_0xc9743a);},VisuMZ[_0x1028f8(0x2ae)]['Window_EquipCommand_initialize']=Window_EquipCommand['prototype']['initialize'],Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x490)]=function(_0x167755){const _0x24db0a=_0x1028f8;VisuMZ[_0x24db0a(0x2ae)]['Window_EquipCommand_initialize'][_0x24db0a(0x43c)](this,_0x167755),this[_0x24db0a(0x215)](_0x167755);},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x215)]=function(_0x4fc737){const _0x3e4515=_0x1028f8,_0x4f9bf4=new Rectangle(0x0,0x0,_0x4fc737[_0x3e4515(0x371)],_0x4fc737[_0x3e4515(0x56e)]);this[_0x3e4515(0x44b)]=new Window_Base(_0x4f9bf4),this[_0x3e4515(0x44b)]['opacity']=0x0,this[_0x3e4515(0x338)](this[_0x3e4515(0x44b)]),this[_0x3e4515(0x453)]();},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x1c3)]=function(){const _0x4d5223=_0x1028f8;Window_HorzCommand[_0x4d5223(0x5db)]['callUpdateHelp']['call'](this);if(this[_0x4d5223(0x44b)])this['updateCommandNameWindow']();},Window_EquipCommand[_0x1028f8(0x5db)]['updateCommandNameWindow']=function(){const _0x128f25=_0x1028f8,_0x2b0ba3=this[_0x128f25(0x44b)];_0x2b0ba3[_0x128f25(0x587)][_0x128f25(0x223)]();const _0x4dd144=this[_0x128f25(0x5e4)](this[_0x128f25(0x357)]());if(_0x4dd144==='icon'){const _0x17ab6f=this[_0x128f25(0x51b)](this[_0x128f25(0x357)]());let _0x2b082f=this['commandName'](this['index']());_0x2b082f=_0x2b082f[_0x128f25(0x25d)](/\\I\[(\d+)\]/gi,''),_0x2b0ba3['resetFontSettings'](),this[_0x128f25(0x256)](_0x2b082f,_0x17ab6f),this[_0x128f25(0x582)](_0x2b082f,_0x17ab6f),this['commandNameWindowCenter'](_0x2b082f,_0x17ab6f);}},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x256)]=function(_0x186f65,_0x3f8d16){},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x582)]=function(_0x717bd2,_0x4f9e81){const _0x5ba393=_0x1028f8,_0x25845d=this[_0x5ba393(0x44b)];_0x25845d['drawText'](_0x717bd2,0x0,_0x4f9e81['y'],_0x25845d[_0x5ba393(0x265)],_0x5ba393(0x378));},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x584)]=function(_0x522449,_0x21a3d5){const _0x125287=_0x1028f8,_0x2cf68d=this[_0x125287(0x44b)],_0x26f9de=$gameSystem['windowPadding'](),_0x414d5f=_0x21a3d5['x']+Math['floor'](_0x21a3d5[_0x125287(0x371)]/0x2)+_0x26f9de;_0x2cf68d['x']=_0x2cf68d[_0x125287(0x371)]/-0x2+_0x414d5f,_0x2cf68d['y']=Math[_0x125287(0x44c)](_0x21a3d5['height']/0x2);},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x460)]=function(){const _0x512768=_0x1028f8;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x512768(0x5db)]['isUseModernControls'][_0x512768(0x43c)](this);},Window_EquipCommand['prototype']['playOkSound']=function(){const _0x2d470b=_0x1028f8;if(this[_0x2d470b(0x345)]()===_0x2d470b(0x204))Window_HorzCommand[_0x2d470b(0x5db)]['playOkSound'][_0x2d470b(0x43c)](this);},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x541)]=function(){const _0x5534a2=_0x1028f8;!this['processCursorSpecialCheckModernControls']()&&Window_HorzCommand['prototype'][_0x5534a2(0x541)][_0x5534a2(0x43c)](this);},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x266)]=function(){const _0x1f339f=_0x1028f8;if(!this[_0x1f339f(0x4c8)]())return![];if(SceneManager[_0x1f339f(0x212)][_0x1f339f(0x50a)]!==Scene_Equip)return![];return Input[_0x1f339f(0x544)](_0x1f339f(0x314))&&this[_0x1f339f(0x368)](),![];},Window_EquipCommand['prototype']['processDownCursorSpecialCheckModernControls']=function(){const _0x555bbe=_0x1028f8;this[_0x555bbe(0x448)](),SceneManager['_scene'][_0x555bbe(0x2d8)](),SceneManager[_0x555bbe(0x212)][_0x555bbe(0x45f)][_0x555bbe(0x5b0)](-0x1);},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x42f)]=function(){const _0x3eef78=_0x1028f8;return this[_0x3eef78(0x384)]?this[_0x3eef78(0x384)][_0x3eef78(0x2fd)]:0x3;},Window_EquipCommand['prototype'][_0x1028f8(0x1b5)]=function(){const _0x4114c2=_0x1028f8;if(this[_0x4114c2(0x47b)]()&&this['visible']&&SceneManager[_0x4114c2(0x212)][_0x4114c2(0x50a)]===Scene_Equip){if(this[_0x4114c2(0x5d9)]()&&TouchInput[_0x4114c2(0x4c4)]())this[_0x4114c2(0x37c)](![]);else TouchInput[_0x4114c2(0x544)]()&&this[_0x4114c2(0x37c)](!![]);TouchInput['isClicked']()&&this[_0x4114c2(0x1ce)]();}},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x37c)]=function(_0xe9c5da){const _0x70aba4=_0x1028f8;this[_0x70aba4(0x561)]=![];const _0x58fd67=this[_0x70aba4(0x357)](),_0x4232c7=this['hitIndex'](),_0x4ccbe6=SceneManager['_scene'][_0x70aba4(0x45f)];if(_0x4ccbe6[_0x70aba4(0x47b)]()&&_0x4ccbe6[_0x70aba4(0x3eb)]){if(_0x4232c7>=0x0)_0x4232c7===this[_0x70aba4(0x357)]()&&(this[_0x70aba4(0x561)]=!![]),this[_0x70aba4(0x3fd)](),this['select'](_0x4232c7);else _0x4ccbe6[_0x70aba4(0x1f6)]()>=0x0&&(this[_0x70aba4(0x4bf)](),this[_0x70aba4(0x440)]());}_0xe9c5da&&this[_0x70aba4(0x357)]()!==_0x58fd67&&this['playCursorSound']();},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x5c2)]=function(){const _0x425460=_0x1028f8;this[_0x425460(0x4a9)](),this[_0x425460(0x50b)](),this[_0x425460(0x233)]();},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x495)]=function(){const _0x492862=_0x1028f8;Window_HorzCommand[_0x492862(0x5db)][_0x492862(0x495)]['call'](this),this[_0x492862(0x32f)]();},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x4a9)]=function(){const _0x10f5fe=_0x1028f8;if(!this['isEquipCommandAdded']())return;const _0x46b6f7=this[_0x10f5fe(0x396)](),_0xf3a98=VisuMZ['ItemsEquipsCore'][_0x10f5fe(0x1c0)][_0x10f5fe(0x21e)][_0x10f5fe(0x581)],_0x4d5300=_0x46b6f7==='text'?TextManager['equip2']:'\x5cI[%1]%2'[_0x10f5fe(0x413)](_0xf3a98,TextManager[_0x10f5fe(0x42b)]),_0x487451=this['isEquipCommandEnabled']();this[_0x10f5fe(0x37e)](_0x4d5300,_0x10f5fe(0x204),_0x487451);},Window_EquipCommand['prototype']['isEquipCommandAdded']=function(){return!this['isUseModernControls']();},Window_EquipCommand[_0x1028f8(0x5db)]['isEquipCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x1028f8(0x5db)]['addOptimizeCommand']=function(){const _0x23f386=_0x1028f8;if(!this[_0x23f386(0x2ac)]())return;const _0x4bee06=this[_0x23f386(0x396)](),_0x5e0a96=VisuMZ[_0x23f386(0x2ae)][_0x23f386(0x1c0)][_0x23f386(0x21e)]['CmdIconOptimize'],_0x3846f0=_0x4bee06==='text'?TextManager[_0x23f386(0x5ae)]:'\x5cI[%1]%2'[_0x23f386(0x413)](_0x5e0a96,TextManager['optimize']),_0x3ff10e=this[_0x23f386(0x5a1)]();this[_0x23f386(0x37e)](_0x3846f0,_0x23f386(0x5ae),_0x3ff10e);},Window_EquipCommand['prototype']['isOptimizeCommandAdded']=function(){const _0x4bb4fb=_0x1028f8;return VisuMZ[_0x4bb4fb(0x2ae)]['Settings'][_0x4bb4fb(0x21e)]['CommandAddOptimize'];},Window_EquipCommand[_0x1028f8(0x5db)]['isOptimizeCommandEnabled']=function(){return!![];},Window_EquipCommand['prototype'][_0x1028f8(0x233)]=function(){const _0x463ac3=_0x1028f8;if(!this[_0x463ac3(0x1c9)]())return;const _0x489eab=this[_0x463ac3(0x396)](),_0x1eee2c=VisuMZ['ItemsEquipsCore']['Settings'][_0x463ac3(0x21e)][_0x463ac3(0x295)],_0x4ae6af=_0x489eab===_0x463ac3(0x5aa)?TextManager[_0x463ac3(0x223)]:_0x463ac3(0x1cf)[_0x463ac3(0x413)](_0x1eee2c,TextManager[_0x463ac3(0x223)]),_0x385bc8=this['isClearCommandEnabled']();this[_0x463ac3(0x37e)](_0x4ae6af,'clear',_0x385bc8);},Window_EquipCommand[_0x1028f8(0x5db)]['isClearCommandAdded']=function(){const _0x13427a=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x13427a(0x1c0)][_0x13427a(0x21e)]['CommandAddClear'];},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x4aa)]=function(){return!![];},Window_EquipCommand[_0x1028f8(0x5db)]['itemTextAlign']=function(){const _0x4945fe=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x4945fe(0x1c0)][_0x4945fe(0x21e)][_0x4945fe(0x3cc)];},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x3e3)]=function(_0x119417){const _0x499f6e=_0x1028f8,_0x691a08=this[_0x499f6e(0x5e4)](_0x119417);if(_0x691a08===_0x499f6e(0x34a))this[_0x499f6e(0x5c6)](_0x119417);else _0x691a08===_0x499f6e(0x47d)?this[_0x499f6e(0x4e1)](_0x119417):Window_HorzCommand[_0x499f6e(0x5db)][_0x499f6e(0x3e3)][_0x499f6e(0x43c)](this,_0x119417);},Window_EquipCommand[_0x1028f8(0x5db)]['commandStyle']=function(){const _0x42414b=_0x1028f8;return VisuMZ['ItemsEquipsCore']['Settings'][_0x42414b(0x21e)][_0x42414b(0x564)];},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x5e4)]=function(_0x3bd1fc){const _0x27e8bd=_0x1028f8;if(_0x3bd1fc<0x0)return _0x27e8bd(0x5aa);const _0x5c3acf=this[_0x27e8bd(0x396)]();if(_0x5c3acf!==_0x27e8bd(0x415))return _0x5c3acf;else{if(this[_0x27e8bd(0x36a)]()>0x0){const _0x3f8566=this[_0x27e8bd(0x4f3)](_0x3bd1fc);if(_0x3f8566['match'](/\\I\[(\d+)\]/i)){const _0x3ab74c=this[_0x27e8bd(0x51b)](_0x3bd1fc),_0x2515ea=this['textSizeEx'](_0x3f8566)[_0x27e8bd(0x371)];return _0x2515ea<=_0x3ab74c[_0x27e8bd(0x371)]?_0x27e8bd(0x34a):_0x27e8bd(0x47d);}}}return'text';},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x5c6)]=function(_0x5373c5){const _0x2ef51e=_0x1028f8,_0x29c75a=this['itemLineRect'](_0x5373c5),_0x2a8ba9=this[_0x2ef51e(0x4f3)](_0x5373c5),_0x5701b2=this[_0x2ef51e(0x284)](_0x2a8ba9)[_0x2ef51e(0x371)];this[_0x2ef51e(0x484)](this[_0x2ef51e(0x534)](_0x5373c5));const _0xf8236c=this[_0x2ef51e(0x3af)]();if(_0xf8236c===_0x2ef51e(0x5b2))this[_0x2ef51e(0x30f)](_0x2a8ba9,_0x29c75a['x']+_0x29c75a[_0x2ef51e(0x371)]-_0x5701b2,_0x29c75a['y'],_0x5701b2);else{if(_0xf8236c===_0x2ef51e(0x378)){const _0x3f4cec=_0x29c75a['x']+Math['floor']((_0x29c75a[_0x2ef51e(0x371)]-_0x5701b2)/0x2);this[_0x2ef51e(0x30f)](_0x2a8ba9,_0x3f4cec,_0x29c75a['y'],_0x5701b2);}else this['drawTextEx'](_0x2a8ba9,_0x29c75a['x'],_0x29c75a['y'],_0x5701b2);}},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x4e1)]=function(_0x4019cb){const _0x265910=_0x1028f8;this['commandName'](_0x4019cb)['match'](/\\I\[(\d+)\]/i);const _0x104f2d=Number(RegExp['$1'])||0x0,_0x255a7c=this['itemLineRect'](_0x4019cb),_0x4c616a=_0x255a7c['x']+Math[_0x265910(0x44c)]((_0x255a7c[_0x265910(0x371)]-ImageManager['iconWidth'])/0x2),_0x4b5fd5=_0x255a7c['y']+(_0x255a7c[_0x265910(0x56e)]-ImageManager[_0x265910(0x41a)])/0x2;this['drawIcon'](_0x104f2d,_0x4c616a,_0x4b5fd5);},Window_EquipCommand[_0x1028f8(0x5db)][_0x1028f8(0x245)]=function(){const _0x25cf22=_0x1028f8,_0x2a4745=SceneManager['_scene'];if(_0x2a4745&&_0x2a4745[_0x25cf22(0x30b)])return _0x2a4745[_0x25cf22(0x30b)]();return null;},Window_EquipCommand['prototype'][_0x1028f8(0x51a)]=function(){const _0x331d66=_0x1028f8;Window_Command[_0x331d66(0x5db)][_0x331d66(0x51a)]['call'](this),this['_helpWindow']['setText'](this[_0x331d66(0x385)]());},Window_EquipCommand[_0x1028f8(0x5db)]['helpDescriptionText']=function(){const _0x483733=_0x1028f8,_0x12f8f9=this['currentSymbol']();switch(_0x12f8f9){case _0x483733(0x204):return TextManager[_0x483733(0x436)][_0x483733(0x1fb)]['equip'];case _0x483733(0x5ae):return TextManager[_0x483733(0x436)]['helpDesc'][_0x483733(0x5ae)];case _0x483733(0x223):return TextManager[_0x483733(0x436)][_0x483733(0x1fb)][_0x483733(0x223)];default:return'';}},Window_EquipSlot[_0x1028f8(0x5db)]['isUseModernControls']=function(){const _0x58a93f=_0x1028f8;return Imported[_0x58a93f(0x236)]&&Window_HorzCommand['prototype'][_0x58a93f(0x460)][_0x58a93f(0x43c)](this);},Window_EquipSlot[_0x1028f8(0x5db)][_0x1028f8(0x3fd)]=function(){const _0x3e1c23=_0x1028f8;Window_StatusBase[_0x3e1c23(0x5db)][_0x3e1c23(0x3fd)][_0x3e1c23(0x43c)](this),this[_0x3e1c23(0x1c3)]();},Window_EquipSlot[_0x1028f8(0x5db)][_0x1028f8(0x2d5)]=function(){const _0x356cc9=_0x1028f8;Window_StatusBase['prototype']['processCursorMove'][_0x356cc9(0x43c)](this),this[_0x356cc9(0x300)]();},Window_EquipSlot[_0x1028f8(0x5db)][_0x1028f8(0x300)]=function(){const _0x590299=_0x1028f8;if(!this[_0x590299(0x3ef)]())return;if(Input[_0x590299(0x544)](_0x590299(0x4a3))&&this[_0x590299(0x1e8)]()){const _0x27b38c=SceneManager['_scene'][_0x590299(0x346)];_0x27b38c&&(this[_0x590299(0x444)](this[_0x590299(0x357)]())?(this[_0x590299(0x231)](),this[_0x590299(0x51a)]()):this[_0x590299(0x3a1)]());}},Window_EquipSlot[_0x1028f8(0x5db)][_0x1028f8(0x444)]=function(_0x37a8bf){const _0x1940d4=_0x1028f8,_0x54c94f=SceneManager['_scene'][_0x1940d4(0x346)];if(!_0x54c94f)return;if(!_0x54c94f[_0x1940d4(0x518)](_0x37a8bf))return![];const _0x28c435=_0x54c94f['equipSlots']()[_0x37a8bf];if(_0x54c94f[_0x1940d4(0x4eb)]()['includes'](_0x28c435))return![];return!![];;},Window_EquipSlot['prototype'][_0x1028f8(0x231)]=function(){const _0x39a021=_0x1028f8;SoundManager[_0x39a021(0x508)]();const _0x43426b=SceneManager[_0x39a021(0x212)][_0x39a021(0x346)];_0x43426b['changeEquip'](this[_0x39a021(0x357)](),null),this[_0x39a021(0x495)](),this[_0x39a021(0x3b6)]['refresh'](),this['callUpdateHelp']();const _0x436417=SceneManager['_scene'][_0x39a021(0x22e)];if(_0x436417)_0x436417[_0x39a021(0x495)]();},Window_EquipSlot['prototype'][_0x1028f8(0x3ef)]=function(){const _0x16b8d7=_0x1028f8;if(!this[_0x16b8d7(0x31f)])return![];if(!VisuMZ[_0x16b8d7(0x2ae)][_0x16b8d7(0x1c0)][_0x16b8d7(0x21e)]['ShiftShortcutKey'])return![];return!![];},Window_EquipSlot[_0x1028f8(0x5db)][_0x1028f8(0x541)]=function(){const _0x246cc0=_0x1028f8;!this[_0x246cc0(0x266)]()&&Window_StatusBase[_0x246cc0(0x5db)][_0x246cc0(0x541)][_0x246cc0(0x43c)](this);},Window_EquipSlot[_0x1028f8(0x5db)]['processCursorSpecialCheckModernControls']=function(){const _0x488d83=_0x1028f8;if(!this['isCursorMovable']())return![];if(SceneManager[_0x488d83(0x212)][_0x488d83(0x50a)]!==Scene_Equip)return![];if(this[_0x488d83(0x3fb)]())return this[_0x488d83(0x448)](),Input[_0x488d83(0x223)](),SceneManager[_0x488d83(0x212)][_0x488d83(0x458)](),![];else{if(Input[_0x488d83(0x4d3)](_0x488d83(0x314))){const _0x4fceca=this['index']();return Input['isPressed'](_0x488d83(0x4a3))?this[_0x488d83(0x3b5)]():this['cursorDown'](Input['isTriggered'](_0x488d83(0x314))),this['index']()!==_0x4fceca&&this['playCursorSound'](),!![];}else{if(this[_0x488d83(0x465)]()&&Input['isTriggered'](_0x488d83(0x4a3)))return!![];}}return![];},Window_EquipSlot['prototype'][_0x1028f8(0x3fb)]=function(){const _0x5ceff1=_0x1028f8;if(this[_0x5ceff1(0x357)]()!==0x0)return![];const _0x425d89=VisuMZ[_0x5ceff1(0x2ae)][_0x5ceff1(0x1c0)][_0x5ceff1(0x21e)];if(!_0x425d89[_0x5ceff1(0x2b6)]&&!_0x425d89[_0x5ceff1(0x3b9)])return![];return Input[_0x5ceff1(0x544)]('up');},Window_EquipSlot['prototype'][_0x1028f8(0x465)]=function(){const _0x47fbec=_0x1028f8;return VisuMZ[_0x47fbec(0x2ae)][_0x47fbec(0x1c0)][_0x47fbec(0x21e)]['ShiftShortcutKey'];},Window_EquipSlot['prototype'][_0x1028f8(0x1b5)]=function(){const _0x5afe02=_0x1028f8;if(this[_0x5afe02(0x47b)]()&&this[_0x5afe02(0x3eb)]&&SceneManager[_0x5afe02(0x212)][_0x5afe02(0x50a)]===Scene_Equip){if(this[_0x5afe02(0x5d9)]()&&TouchInput[_0x5afe02(0x4c4)]())this[_0x5afe02(0x37c)](![]);else TouchInput[_0x5afe02(0x544)]()&&this[_0x5afe02(0x37c)](!![]);if(TouchInput['isClicked']())this[_0x5afe02(0x1ce)]();else{if(TouchInput[_0x5afe02(0x50f)]()){const _0x21a9f9=VisuMZ['ItemsEquipsCore'][_0x5afe02(0x1c0)]['EquipScene'];this[_0x5afe02(0x460)]()&&this[_0x5afe02(0x31f)]&&!_0x21a9f9['CommandAddOptimize']&&!_0x21a9f9[_0x5afe02(0x3b9)]?(SoundManager[_0x5afe02(0x447)](),SceneManager[_0x5afe02(0x3c7)]()):this['onTouchCancel']();}}}},Window_EquipSlot[_0x1028f8(0x5db)][_0x1028f8(0x37c)]=function(_0x4e44b2){const _0x2b13de=_0x1028f8;this['_doubleTouch']=![];const _0x5417e6=this[_0x2b13de(0x357)](),_0x81764=this['hitIndex'](),_0x49b569=SceneManager['_scene'][_0x2b13de(0x479)];if(_0x49b569[_0x2b13de(0x47b)]()&&_0x49b569[_0x2b13de(0x3eb)]){if(_0x81764>=0x0)_0x81764===this[_0x2b13de(0x357)]()&&(this[_0x2b13de(0x561)]=!![]),this[_0x2b13de(0x3fd)](),this[_0x2b13de(0x389)](_0x81764),_0x49b569['deactivate']();else _0x49b569[_0x2b13de(0x1f6)]()>=0x0&&(this[_0x2b13de(0x4bf)](),this[_0x2b13de(0x440)](),_0x49b569['activate']());}_0x4e44b2&&this[_0x2b13de(0x357)]()!==_0x5417e6&&this['playCursorSound']();},Window_EquipSlot['prototype'][_0x1028f8(0x53f)]=function(){const _0x538033=_0x1028f8;return this[_0x538033(0x357)]();},VisuMZ['ItemsEquipsCore']['Window_EquipSlot_isEnabled']=Window_EquipSlot[_0x1028f8(0x5db)]['isEnabled'],Window_EquipSlot['prototype'][_0x1028f8(0x596)]=function(_0x3111d7){const _0x166260=_0x1028f8;if(this[_0x166260(0x36a)]()<=0x0)return![];return VisuMZ[_0x166260(0x2ae)]['Window_EquipSlot_isEnabled'][_0x166260(0x43c)](this,_0x3111d7);},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x1ca)]=Window_EquipItem['prototype'][_0x1028f8(0x36e)],Window_EquipItem[_0x1028f8(0x5db)][_0x1028f8(0x36e)]=function(_0x1789bb){const _0x161d04=_0x1028f8;if(_0x1789bb===null&&this[_0x161d04(0x4eb)]()[_0x161d04(0x36e)](this['etypeId']()))return![];else{$gameTemp[_0x161d04(0x395)]=!![];let _0x503c42=VisuMZ['ItemsEquipsCore'][_0x161d04(0x1ca)][_0x161d04(0x43c)](this,_0x1789bb);if(!_0x503c42&&_0x1789bb&&DataManager[_0x161d04(0x387)](_0x1789bb)){const _0x4e8644=_0x1789bb['atypeId']||0x0;if(this[_0x161d04(0x346)]&&this[_0x161d04(0x346)]['isEquipAtypeOk'](_0x4e8644)){const _0xc2eb06=DataManager['getEtypeIDs'](_0x1789bb);_0xc2eb06[_0x161d04(0x36e)](this[_0x161d04(0x4c3)]())&&(_0x503c42=!![]);}}return $gameTemp[_0x161d04(0x395)]=undefined,_0x503c42;}},VisuMZ['ItemsEquipsCore']['Window_EquipItem_isEnabled']=Window_EquipItem[_0x1028f8(0x5db)][_0x1028f8(0x596)],Window_EquipItem[_0x1028f8(0x5db)][_0x1028f8(0x596)]=function(_0x525666){const _0x5a586c=_0x1028f8;if(_0x525666&&this[_0x5a586c(0x346)]){if(this['itemHasEquipLimit'](_0x525666))return![];if(this['isSoleWeaponType'](_0x525666))return![];if(this['isSoleArmorType'](_0x525666))return![];if(!this['_actor'][_0x5a586c(0x5e7)](_0x525666))return![];}if(!_0x525666)return!this[_0x5a586c(0x4eb)]()[_0x5a586c(0x36e)](this[_0x5a586c(0x4c3)]());return VisuMZ[_0x5a586c(0x2ae)][_0x5a586c(0x5eb)]['call'](this,_0x525666);},Window_EquipItem['prototype']['itemHasEquipLimit']=function(_0x2311c8){const _0x212f3f=_0x1028f8,_0x4f3aa0=_0x2311c8[_0x212f3f(0x358)];if(_0x4f3aa0[_0x212f3f(0x3ce)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x561c62=Number(RegExp['$1'])||0x1;let _0x5511aa=0x0;const _0xedf4cc=this['_actor'][_0x212f3f(0x1cb)](),_0x31ae5e=SceneManager['_scene'][_0x212f3f(0x45f)][_0x212f3f(0x53f)]();_0xedf4cc[_0x31ae5e]=null;for(const _0x474866 of _0xedf4cc){if(!_0x474866)continue;if(DataManager[_0x212f3f(0x1c6)](_0x2311c8)===DataManager[_0x212f3f(0x1c6)](_0x474866)){if(_0x2311c8['id']===_0x474866['id'])_0x5511aa+=0x1;}}return _0x5511aa>=_0x561c62;}else return![];},Window_EquipItem['prototype'][_0x1028f8(0x3d9)]=function(_0x19526d){const _0xb1c0d5=_0x1028f8;if(!DataManager[_0xb1c0d5(0x1c6)](_0x19526d))return![];const _0x487bd0=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x487357=0x0;const _0x56571d=this[_0xb1c0d5(0x346)]['equips'](),_0x31c93e=SceneManager['_scene'][_0xb1c0d5(0x45f)][_0xb1c0d5(0x53f)]();_0x56571d[_0x31c93e]=null;for(const _0x26de48 of _0x56571d){if(!_0x26de48)continue;if(!DataManager['isWeapon'](_0x26de48))continue;if(_0x19526d[_0xb1c0d5(0x2c0)]===_0x26de48['wtypeId']){_0x487357+=0x1;if(_0x19526d[_0xb1c0d5(0x358)][_0xb1c0d5(0x3ce)](_0x487bd0)){const _0x3918b9=Number(RegExp['$1'])||0x1;if(_0x487357>=_0x3918b9)return!![];}if(_0x26de48[_0xb1c0d5(0x358)][_0xb1c0d5(0x3ce)](_0x487bd0)){const _0x1a8c77=Number(RegExp['$1'])||0x1;if(_0x487357>=_0x1a8c77)return!![];}}}return![];},Window_EquipItem[_0x1028f8(0x5db)][_0x1028f8(0x241)]=function(_0x3882b1){const _0x1dd6c9=_0x1028f8;if(!DataManager[_0x1dd6c9(0x387)](_0x3882b1))return![];const _0x1ca2fb=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x51b0c0=0x0;const _0x24eb57=this[_0x1dd6c9(0x346)][_0x1dd6c9(0x1cb)](),_0xbed0a5=SceneManager[_0x1dd6c9(0x212)]['_slotWindow']['equipSlotIndex']();_0x24eb57[_0xbed0a5]=null;for(const _0x139693 of _0x24eb57){if(!_0x139693)continue;if(!DataManager[_0x1dd6c9(0x387)](_0x139693))continue;if(_0x3882b1[_0x1dd6c9(0x38c)]===_0x139693[_0x1dd6c9(0x38c)]){_0x51b0c0+=0x1;if(_0x3882b1[_0x1dd6c9(0x358)]['match'](_0x1ca2fb)){const _0x377a03=Number(RegExp['$1'])||0x1;if(_0x51b0c0>=_0x377a03)return!![];}if(_0x139693[_0x1dd6c9(0x358)][_0x1dd6c9(0x3ce)](_0x1ca2fb)){const _0x1ae5b8=Number(RegExp['$1'])||0x1;if(_0x51b0c0>=_0x1ae5b8)return!![];}}}return![];},Window_EquipItem['prototype']['nonRemovableEtypes']=function(){const _0x4f5271=_0x1028f8;return VisuMZ[_0x4f5271(0x2ae)]['Settings'][_0x4f5271(0x21e)][_0x4f5271(0x342)];},Window_EquipItem[_0x1028f8(0x5db)][_0x1028f8(0x3e3)]=function(_0xb50e5d){const _0x375f1a=_0x1028f8,_0x2b8ae7=this[_0x375f1a(0x553)](_0xb50e5d);_0x2b8ae7?Window_ItemList[_0x375f1a(0x5db)][_0x375f1a(0x3e3)]['call'](this,_0xb50e5d):this[_0x375f1a(0x39b)](_0xb50e5d);},Window_EquipItem['prototype']['drawRemoveItem']=function(_0x1c6f15){const _0x166871=_0x1028f8;this['changePaintOpacity'](this[_0x166871(0x596)](null));const _0xf493ca=ImageManager[_0x166871(0x579)]||0x20,_0x1f1c38=_0xf493ca-ImageManager['iconWidth'],_0xb6c602=_0xf493ca+0x4,_0x25b91e=VisuMZ[_0x166871(0x2ae)][_0x166871(0x1c0)][_0x166871(0x21e)],_0x1d1bf0=this[_0x166871(0x51b)](_0x1c6f15),_0x35395=_0x1d1bf0['y']+(this[_0x166871(0x327)]()-ImageManager[_0x166871(0x41a)])/0x2,_0x210eb5=Math[_0x166871(0x35d)](0x0,_0x1d1bf0[_0x166871(0x371)]-_0xb6c602);this[_0x166871(0x326)](),this[_0x166871(0x27b)](_0x25b91e[_0x166871(0x289)],_0x1d1bf0['x']+Math['ceil'](_0x1f1c38/0x2),_0x35395),this[_0x166871(0x545)](_0x25b91e[_0x166871(0x532)],_0x1d1bf0['x']+_0xb6c602,_0x1d1bf0['y'],_0x210eb5),this[_0x166871(0x484)](!![]);},Window_EquipItem[_0x1028f8(0x5db)][_0x1028f8(0x51a)]=function(){const _0x535a5c=_0x1028f8;Window_ItemList[_0x535a5c(0x5db)]['updateHelp']['call'](this);if(this['_actor']&&this[_0x535a5c(0x22e)]&&this['_slotId']>=0x0){const _0x165338=JsonEx['makeDeepCopy'](this[_0x535a5c(0x346)]);_0x165338[_0x535a5c(0x249)]=!![],_0x165338[_0x535a5c(0x3da)](this['_slotId'],this['item']()),this[_0x535a5c(0x22e)]['setTempActor'](_0x165338);}},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5ef)]=Window_ShopCommand[_0x1028f8(0x5db)]['initialize'],Window_ShopCommand['prototype'][_0x1028f8(0x490)]=function(_0x2cff14){const _0x352322=_0x1028f8;VisuMZ[_0x352322(0x2ae)]['Window_ShopCommand_initialize']['call'](this,_0x2cff14),this[_0x352322(0x215)](_0x2cff14);},Window_ShopCommand['prototype']['createCommandNameWindow']=function(_0x34c8a9){const _0xc259bd=_0x1028f8,_0xd3ccd1=new Rectangle(0x0,0x0,_0x34c8a9[_0xc259bd(0x371)],_0x34c8a9[_0xc259bd(0x56e)]);this[_0xc259bd(0x44b)]=new Window_Base(_0xd3ccd1),this['_commandNameWindow'][_0xc259bd(0x2e6)]=0x0,this[_0xc259bd(0x338)](this['_commandNameWindow']),this['updateCommandNameWindow']();},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x1c3)]=function(){const _0x353047=_0x1028f8;Window_HorzCommand[_0x353047(0x5db)][_0x353047(0x1c3)][_0x353047(0x43c)](this);if(this[_0x353047(0x44b)])this[_0x353047(0x453)]();},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x453)]=function(){const _0x177823=_0x1028f8,_0x4b422e=this[_0x177823(0x44b)];_0x4b422e[_0x177823(0x587)][_0x177823(0x223)]();const _0xdd9c2d=this['commandStyleCheck'](this[_0x177823(0x357)]());if(_0xdd9c2d===_0x177823(0x47d)){const _0x41ec8a=this['itemLineRect'](this[_0x177823(0x357)]());let _0x1753fe=this[_0x177823(0x4f3)](this[_0x177823(0x357)]());_0x1753fe=_0x1753fe['replace'](/\\I\[(\d+)\]/gi,''),_0x4b422e[_0x177823(0x1b9)](),this[_0x177823(0x256)](_0x1753fe,_0x41ec8a),this[_0x177823(0x582)](_0x1753fe,_0x41ec8a),this[_0x177823(0x584)](_0x1753fe,_0x41ec8a);}},Window_ShopCommand['prototype']['commandNameWindowDrawBackground']=function(_0x16a5ff,_0x359474){},Window_ShopCommand[_0x1028f8(0x5db)]['commandNameWindowDrawText']=function(_0x573d4b,_0x503ce8){const _0x6a73d=_0x1028f8,_0x2cb108=this[_0x6a73d(0x44b)];_0x2cb108[_0x6a73d(0x545)](_0x573d4b,0x0,_0x503ce8['y'],_0x2cb108[_0x6a73d(0x265)],'center');},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x584)]=function(_0x36c712,_0x4835e4){const _0x2a6396=_0x1028f8,_0x26399b=this[_0x2a6396(0x44b)],_0x4f852b=$gameSystem[_0x2a6396(0x597)](),_0x9dcda3=_0x4835e4['x']+Math[_0x2a6396(0x44c)](_0x4835e4[_0x2a6396(0x371)]/0x2)+_0x4f852b;_0x26399b['x']=_0x26399b[_0x2a6396(0x371)]/-0x2+_0x9dcda3,_0x26399b['y']=Math[_0x2a6396(0x44c)](_0x4835e4[_0x2a6396(0x56e)]/0x2);},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x42f)]=function(){const _0x2f177f=_0x1028f8;return this[_0x2f177f(0x384)]?this[_0x2f177f(0x384)][_0x2f177f(0x2fd)]:0x3;},Window_ShopCommand['prototype'][_0x1028f8(0x4c1)]=function(){const _0x19b4eb=_0x1028f8;return VisuMZ[_0x19b4eb(0x2ae)][_0x19b4eb(0x1c0)][_0x19b4eb(0x53d)][_0x19b4eb(0x220)];},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x5c2)]=function(){const _0x3d43b9=_0x1028f8;this['addBuyCommand'](),this['addSellCommand'](),this[_0x3d43b9(0x1e2)]();},Window_ShopCommand[_0x1028f8(0x5db)]['refresh']=function(){const _0x2473c4=_0x1028f8;Window_HorzCommand[_0x2473c4(0x5db)][_0x2473c4(0x495)]['call'](this),this[_0x2473c4(0x32f)]();},Window_ShopCommand['prototype']['addBuyCommand']=function(){const _0x2aca9b=_0x1028f8,_0x12ea6c=this[_0x2aca9b(0x396)](),_0x2df0a6=VisuMZ[_0x2aca9b(0x2ae)]['Settings']['ShopScene']['CmdIconBuy'],_0x203866=_0x12ea6c===_0x2aca9b(0x5aa)?TextManager[_0x2aca9b(0x3f9)]:_0x2aca9b(0x1cf)['format'](_0x2df0a6,TextManager['buy']),_0x3cfceb=this['isBuyCommandEnabled']();if(this[_0x2aca9b(0x4c1)]()&&!_0x3cfceb)return;this['addCommand'](_0x203866,_0x2aca9b(0x3f9),_0x3cfceb);},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x53a)]=function(){const _0x3b88de=_0x1028f8;return SceneManager[_0x3b88de(0x212)][_0x3b88de(0x50a)]===Scene_Shop?SceneManager['_scene'][_0x3b88de(0x569)]>0x0:!![];},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x51f)]=function(){const _0x42d190=_0x1028f8,_0x141ec1=this[_0x42d190(0x396)](),_0x82d3f1=VisuMZ[_0x42d190(0x2ae)]['Settings']['ShopScene'][_0x42d190(0x20c)],_0x6091c4=_0x141ec1==='text'?TextManager['sell']:'\x5cI[%1]%2'[_0x42d190(0x413)](_0x82d3f1,TextManager[_0x42d190(0x2fc)]),_0x5e24dc=this[_0x42d190(0x51c)]();if(this[_0x42d190(0x4c1)]()&&!_0x5e24dc)return;this[_0x42d190(0x37e)](_0x6091c4,_0x42d190(0x2fc),_0x5e24dc);},Window_ShopCommand[_0x1028f8(0x5db)]['isSellCommandEnabled']=function(){const _0x340c10=_0x1028f8;return!this[_0x340c10(0x2a5)];},Window_ShopCommand['prototype'][_0x1028f8(0x1e2)]=function(){const _0x8d99fc=_0x1028f8,_0x40edee=this[_0x8d99fc(0x396)](),_0x1dab7c=VisuMZ[_0x8d99fc(0x2ae)][_0x8d99fc(0x1c0)][_0x8d99fc(0x53d)]['CmdIconCancel'],_0x29abad=VisuMZ[_0x8d99fc(0x2ae)][_0x8d99fc(0x1c0)][_0x8d99fc(0x53d)][_0x8d99fc(0x3a4)],_0x30be39=_0x40edee===_0x8d99fc(0x5aa)?_0x29abad:'\x5cI[%1]%2'['format'](_0x1dab7c,_0x29abad);this[_0x8d99fc(0x37e)](_0x30be39,'cancel');},Window_ShopCommand[_0x1028f8(0x5db)]['itemTextAlign']=function(){const _0x4b8261=_0x1028f8;return VisuMZ[_0x4b8261(0x2ae)][_0x4b8261(0x1c0)][_0x4b8261(0x53d)][_0x4b8261(0x3cc)];},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x3e3)]=function(_0x55156e){const _0x5895fa=_0x1028f8,_0x227ff0=this[_0x5895fa(0x5e4)](_0x55156e);if(_0x227ff0===_0x5895fa(0x34a))this[_0x5895fa(0x5c6)](_0x55156e);else _0x227ff0===_0x5895fa(0x47d)?this[_0x5895fa(0x4e1)](_0x55156e):Window_HorzCommand[_0x5895fa(0x5db)]['drawItem']['call'](this,_0x55156e);},Window_ShopCommand['prototype'][_0x1028f8(0x396)]=function(){const _0x1166e2=_0x1028f8;return VisuMZ[_0x1166e2(0x2ae)][_0x1166e2(0x1c0)][_0x1166e2(0x53d)][_0x1166e2(0x564)];},Window_ShopCommand[_0x1028f8(0x5db)][_0x1028f8(0x5e4)]=function(_0x5cd08a){const _0x6599e5=_0x1028f8;if(_0x5cd08a<0x0)return'text';const _0x1bd353=this[_0x6599e5(0x396)]();if(_0x1bd353!==_0x6599e5(0x415))return _0x1bd353;else{if(this['maxItems']()>0x0){const _0x5ebb2c=this['commandName'](_0x5cd08a);if(_0x5ebb2c[_0x6599e5(0x3ce)](/\\I\[(\d+)\]/i)){const _0x42d5bb=this['itemLineRect'](_0x5cd08a),_0x51cfa7=this[_0x6599e5(0x284)](_0x5ebb2c)[_0x6599e5(0x371)];return _0x51cfa7<=_0x42d5bb[_0x6599e5(0x371)]?_0x6599e5(0x34a):_0x6599e5(0x47d);}}}return _0x6599e5(0x5aa);},Window_ShopCommand[_0x1028f8(0x5db)]['drawItemStyleIconText']=function(_0x2ffc12){const _0x3b3dde=_0x1028f8,_0x5b1ecd=this['itemLineRect'](_0x2ffc12),_0x28aa15=this[_0x3b3dde(0x4f3)](_0x2ffc12),_0x30fb0c=this[_0x3b3dde(0x284)](_0x28aa15)[_0x3b3dde(0x371)];this[_0x3b3dde(0x484)](this[_0x3b3dde(0x534)](_0x2ffc12));const _0x4513fd=this['itemTextAlign']();if(_0x4513fd===_0x3b3dde(0x5b2))this[_0x3b3dde(0x30f)](_0x28aa15,_0x5b1ecd['x']+_0x5b1ecd[_0x3b3dde(0x371)]-_0x30fb0c,_0x5b1ecd['y'],_0x30fb0c);else{if(_0x4513fd===_0x3b3dde(0x378)){const _0x451cbc=_0x5b1ecd['x']+Math[_0x3b3dde(0x44c)]((_0x5b1ecd['width']-_0x30fb0c)/0x2);this[_0x3b3dde(0x30f)](_0x28aa15,_0x451cbc,_0x5b1ecd['y'],_0x30fb0c);}else this[_0x3b3dde(0x30f)](_0x28aa15,_0x5b1ecd['x'],_0x5b1ecd['y'],_0x30fb0c);}},Window_ShopCommand['prototype'][_0x1028f8(0x4e1)]=function(_0x57335f){const _0x5dcd30=_0x1028f8;this[_0x5dcd30(0x4f3)](_0x57335f)[_0x5dcd30(0x3ce)](/\\I\[(\d+)\]/i);const _0x450b7f=Number(RegExp['$1'])||0x0,_0x1b160f=this[_0x5dcd30(0x51b)](_0x57335f),_0x58695b=_0x1b160f['x']+Math[_0x5dcd30(0x44c)]((_0x1b160f[_0x5dcd30(0x371)]-ImageManager['iconWidth'])/0x2),_0x4ca70e=_0x1b160f['y']+(_0x1b160f[_0x5dcd30(0x56e)]-ImageManager['iconHeight'])/0x2;this[_0x5dcd30(0x27b)](_0x450b7f,_0x58695b,_0x4ca70e);},VisuMZ['ItemsEquipsCore']['Window_ShopBuy_refresh']=Window_ShopBuy[_0x1028f8(0x5db)][_0x1028f8(0x495)],Window_ShopBuy['prototype'][_0x1028f8(0x495)]=function(){const _0x485fd8=_0x1028f8;this[_0x485fd8(0x2aa)](),VisuMZ[_0x485fd8(0x2ae)][_0x485fd8(0x2a0)]['call'](this);},Window_ShopBuy['prototype']['updateMoneyAmount']=function(){const _0x4d8214=_0x1028f8;SceneManager[_0x4d8214(0x212)][_0x4d8214(0x50a)]===Scene_Shop&&(this[_0x4d8214(0x43f)]=SceneManager[_0x4d8214(0x212)]['money']());},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x5b1)]=Window_ShopBuy['prototype'][_0x1028f8(0x4e0)],Window_ShopBuy['prototype'][_0x1028f8(0x4e0)]=function(_0x50d18e){const _0x36ec65=_0x1028f8;if(!_0x50d18e)return 0x0;let _0x1cce55=VisuMZ[_0x36ec65(0x2ae)][_0x36ec65(0x5b1)][_0x36ec65(0x43c)](this,_0x50d18e);return Math[_0x36ec65(0x35d)](0x0,this[_0x36ec65(0x5df)](_0x50d18e,_0x1cce55));},Window_ShopBuy['prototype']['modifiedBuyPriceItemsEquipsCore']=function(_0x496b27,_0x2be8b0){const _0x500e85=_0x1028f8,_0x55d298=_0x496b27['note']||'';if(_0x55d298[_0x500e85(0x3ce)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x21b20c=String(RegExp['$1']);window[_0x500e85(0x4e0)]=_0x2be8b0,window[_0x500e85(0x1e8)]=_0x496b27;try{eval(_0x21b20c);}catch(_0x1c3cd9){if($gameTemp[_0x500e85(0x4f1)]())console[_0x500e85(0x211)](_0x1c3cd9);}_0x2be8b0=window[_0x500e85(0x4e0)],window[_0x500e85(0x4e0)]=undefined,window['item']=undefined;}_0x2be8b0=VisuMZ[_0x500e85(0x2ae)][_0x500e85(0x1c0)][_0x500e85(0x53d)][_0x500e85(0x2fb)]['call'](this,_0x496b27,_0x2be8b0);if(isNaN(_0x2be8b0))_0x2be8b0=0x0;return Math[_0x500e85(0x44c)](_0x2be8b0);},VisuMZ['ItemsEquipsCore'][_0x1028f8(0x334)]=Window_ShopBuy[_0x1028f8(0x5db)][_0x1028f8(0x539)],Window_ShopBuy['prototype'][_0x1028f8(0x539)]=function(_0x579341){const _0x37ffd7=_0x1028f8,_0x14f36a=VisuMZ['ItemsEquipsCore'][_0x37ffd7(0x334)][_0x37ffd7(0x43c)](this,_0x579341);return _0x14f36a&&!this[_0x37ffd7(0x4d4)](_0x14f36a)?null:_0x14f36a;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x351)]={'ShowAllSwitches':/<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'ShowAnySwitches':/<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'HideAllSwitches':/<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'HideAnySwitches':/<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOn':/<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOff':/<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOn':/<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOff':/<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i},Window_ShopBuy[_0x1028f8(0x5db)][_0x1028f8(0x4d4)]=function(_0x53253f){const _0x44474e=_0x1028f8;if(!_0x53253f)return![];const _0xcf805e=VisuMZ[_0x44474e(0x2ae)][_0x44474e(0x351)],_0x2b5154=_0x53253f?_0x53253f[_0x44474e(0x358)]||'':'';if(_0x2b5154[_0x44474e(0x3ce)](_0xcf805e[_0x44474e(0x28e)])){const _0x59ff48=String(RegExp['$1'])['split'](',')['map'](_0x291efc=>Number(_0x291efc));if(_0x59ff48[_0x44474e(0x3a5)](_0xc5a46=>!$gameSwitches[_0x44474e(0x278)](_0xc5a46)))return![];}if(_0x2b5154[_0x44474e(0x3ce)](_0xcf805e[_0x44474e(0x28c)])){const _0x1a1354=String(RegExp['$1'])[_0x44474e(0x424)](',')['map'](_0x55bea2=>Number(_0x55bea2));if(_0x1a1354[_0x44474e(0x37b)](_0x65eaeb=>!$gameSwitches[_0x44474e(0x278)](_0x65eaeb)))return![];}if(_0x2b5154[_0x44474e(0x3ce)](_0xcf805e[_0x44474e(0x5cd)])){const _0x4f354e=String(RegExp['$1'])['split'](',')[_0x44474e(0x47a)](_0x4b13ed=>Number(_0x4b13ed));if(_0x4f354e['every'](_0x3691cb=>$gameSwitches[_0x44474e(0x278)](_0x3691cb)))return![];}if(_0x2b5154['match'](_0xcf805e[_0x44474e(0x4cf)])){const _0x3da4b9=String(RegExp['$1'])[_0x44474e(0x424)](',')['map'](_0x13ccba=>Number(_0x13ccba));if(_0x3da4b9[_0x44474e(0x3a5)](_0x513df0=>$gameSwitches[_0x44474e(0x278)](_0x513df0)))return![];}return!![];},Window_ShopBuy['prototype'][_0x1028f8(0x3e3)]=function(_0x47cb91){const _0x5486dc=_0x1028f8;this[_0x5486dc(0x1b9)]();const _0x40631e=this[_0x5486dc(0x553)](_0x47cb91),_0x404b4f=this[_0x5486dc(0x51b)](_0x47cb91),_0x43a7dc=_0x404b4f[_0x5486dc(0x371)];this[_0x5486dc(0x484)](this['isEnabled'](_0x40631e)),this[_0x5486dc(0x1ea)](_0x40631e,_0x404b4f['x'],_0x404b4f['y'],_0x43a7dc),this[_0x5486dc(0x58b)](_0x40631e,_0x404b4f),this[_0x5486dc(0x484)](!![]);},Window_ShopBuy[_0x1028f8(0x5db)][_0x1028f8(0x58b)]=function(_0x423e17,_0x28b4b3){const _0x7d1b58=_0x1028f8,_0x5883c7=this['price'](_0x423e17);this[_0x7d1b58(0x392)](_0x5883c7,TextManager[_0x7d1b58(0x557)],_0x28b4b3['x'],_0x28b4b3['y'],_0x28b4b3[_0x7d1b58(0x371)]);},Window_ShopSell[_0x1028f8(0x5db)][_0x1028f8(0x42f)]=function(){const _0x25d558=_0x1028f8;return SceneManager['_scene'][_0x25d558(0x4cb)]()?0x1:0x2;},VisuMZ[_0x1028f8(0x2ae)]['Window_ShopSell_isEnabled']=Window_ShopSell[_0x1028f8(0x5db)][_0x1028f8(0x596)],Window_ShopSell['prototype'][_0x1028f8(0x596)]=function(_0x59a35e){const _0x2b3643=_0x1028f8;if(!_0x59a35e)return![];const _0x37a778=_0x59a35e['note'];if(_0x37a778[_0x2b3643(0x3ce)](/<CANNOT SELL>/i))return![];if(_0x37a778['match'](/<CAN SELL>/i))return!![];if(_0x37a778[_0x2b3643(0x3ce)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2db1db=JSON['parse']('['+RegExp['$1'][_0x2b3643(0x3ce)](/\d+/g)+']');for(const _0x158339 of _0x2db1db){if(!$gameSwitches[_0x2b3643(0x278)](_0x158339))return![];}}if(_0x37a778[_0x2b3643(0x3ce)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3bc181=JSON[_0x2b3643(0x2a6)]('['+RegExp['$1'][_0x2b3643(0x3ce)](/\d+/g)+']');for(const _0x3175ba of _0x3bc181){if(!$gameSwitches[_0x2b3643(0x278)](_0x3175ba))return![];}}if(_0x37a778[_0x2b3643(0x3ce)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x36850d=JSON[_0x2b3643(0x2a6)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2cafef of _0x36850d){if($gameSwitches[_0x2b3643(0x278)](_0x2cafef))return![];}}return VisuMZ[_0x2b3643(0x2ae)]['Window_ShopSell_isEnabled']['call'](this,_0x59a35e);},Window_ShopStatus['EQUIP_DELAY_MS']=VisuMZ[_0x1028f8(0x2ae)]['Settings'][_0x1028f8(0x41f)]['EquipDelayMS']??0xf0,VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x244)]=Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x291)],Window_ShopStatus[_0x1028f8(0x5db)]['setItem']=function(_0x5dfde8){const _0x2145dd=_0x1028f8;_0x5dfde8=DataManager['getProxyItem'](_0x5dfde8),DataManager[_0x2145dd(0x1c6)](_0x5dfde8)||DataManager[_0x2145dd(0x387)](_0x5dfde8)?this[_0x2145dd(0x219)](_0x5dfde8):VisuMZ[_0x2145dd(0x2ae)][_0x2145dd(0x244)]['call'](this,_0x5dfde8);},Window_ShopStatus['prototype'][_0x1028f8(0x219)]=function(_0x2ad278){const _0x579691=_0x1028f8;this[_0x579691(0x5a7)]=_0x2ad278;const _0x5a0e80=Window_ShopStatus[_0x579691(0x521)];setTimeout(this[_0x579691(0x25f)][_0x579691(0x24b)](this,_0x2ad278),_0x5a0e80);},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x25f)]=function(_0x298e34){this['_item']===_0x298e34&&this['refresh']();},Window_ShopStatus[_0x1028f8(0x5db)]['isPageChangeRequested']=function(){return![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x585)]=function(){const _0x33d735=_0x1028f8;Window_StatusBase[_0x33d735(0x5db)]['loadFaceImages'][_0x33d735(0x43c)](this);for(const _0xebb4cb of $gameParty[_0x33d735(0x29e)]()){ImageManager[_0x33d735(0x4d7)](_0xebb4cb[_0x33d735(0x433)]());}},Window_ShopStatus[_0x1028f8(0x5db)]['translucentOpacity']=function(){const _0x4f895f=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x4f895f(0x1c0)][_0x4f895f(0x41f)][_0x4f895f(0x323)];},Window_ShopStatus['prototype'][_0x1028f8(0x495)]=function(){const _0x23ffed=_0x1028f8;this['contents'][_0x23ffed(0x223)](),this['contentsBack'][_0x23ffed(0x223)](),this[_0x23ffed(0x5a7)]&&(this['resetFontSettings'](),this[_0x23ffed(0x484)](!![]),this['prepareItemCustomData'](),this[_0x23ffed(0x528)]()?this[_0x23ffed(0x4bc)]():this['drawItemData'](),this[_0x23ffed(0x3e6)]());},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x340)]=function(_0x10c582,_0x15883d){const _0xd4ba00=_0x1028f8;if(!this['isEquipItem']()&&!DataManager['isItem'](this['_item']))return;const _0x163176=this[_0xd4ba00(0x265)]-this[_0xd4ba00(0x44f)]()-_0x10c582,_0x25dae9=this[_0xd4ba00(0x2d3)](_0xd4ba00(0x34c));this['changeTextColor'](ColorManager[_0xd4ba00(0x29d)]()),this[_0xd4ba00(0x545)](TextManager['possession'],_0x10c582+this[_0xd4ba00(0x44f)](),_0x15883d,_0x163176-_0x25dae9),this['resetTextColor'](),this['drawItemNumber'](this[_0xd4ba00(0x5a7)],_0x10c582,_0x15883d,_0x163176);},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x3ac)]=function(_0xbe7e2,_0x529020,_0x190dd9,_0x34e8da,_0xcfd750){const _0x28155b=_0x1028f8;if(VisuMZ['ItemsEquipsCore'][_0x28155b(0x1c0)][_0x28155b(0x41f)][_0x28155b(0x23f)]===![])return;_0xcfd750=Math['max'](_0xcfd750||0x1,0x1);while(_0xcfd750--){_0x34e8da=_0x34e8da||this[_0x28155b(0x327)](),this[_0x28155b(0x4cd)][_0x28155b(0x429)]=0xa0;const _0x2b9177=ColorManager['getItemsEquipsCoreBackColor1']();this[_0x28155b(0x4cd)]['fillRect'](_0xbe7e2+0x1,_0x529020+0x1,_0x190dd9-0x2,_0x34e8da-0x2,_0x2b9177),this[_0x28155b(0x4cd)][_0x28155b(0x429)]=0xff;}},ColorManager['getItemsEquipsCoreBackColor1']=function(){const _0x121362=_0x1028f8,_0x3a090e=VisuMZ[_0x121362(0x2ae)]['Settings'][_0x121362(0x41f)];let _0x48d84d=_0x3a090e['BackRectColor']!==undefined?_0x3a090e['BackRectColor']:0x13;return ColorManager[_0x121362(0x3c0)](_0x48d84d);},Window_ShopStatus[_0x1028f8(0x5db)]['drawEquipData']=function(){const _0x2b40f2=_0x1028f8,_0x11f44a=this[_0x2b40f2(0x5d8)]();if(_0x11f44a===_0x2b40f2(0x310))this['drawEquipDataCompare']();else _0x11f44a===_0x2b40f2(0x1ec)?this[_0x2b40f2(0x4d1)]():this['drawEquipDataClassic']();},Window_ShopStatus['prototype'][_0x1028f8(0x5d8)]=function(){const _0x4b2c99=_0x1028f8;let _0x210375=VisuMZ[_0x4b2c99(0x2ae)]['Settings'][_0x4b2c99(0x41f)][_0x4b2c99(0x537)]??_0x4b2c99(0x310);const _0x477aaa=/<STATUS STYLE:[ ](.*)>/i;return this[_0x4b2c99(0x5a7)]&&this[_0x4b2c99(0x5a7)]['note']&&this['_item']['note'][_0x4b2c99(0x3ce)](_0x477aaa)&&(_0x210375=String(RegExp['$1'])[_0x4b2c99(0x3b3)]()[_0x4b2c99(0x2de)]()),_0x210375;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x1ba)]=function(){const _0x39877d=_0x1028f8;this['_tempActor']=null;if(VisuMZ[_0x39877d(0x2ae)][_0x39877d(0x1c0)][_0x39877d(0x41f)]['DrawEquipData']){VisuMZ['ItemsEquipsCore'][_0x39877d(0x1c0)][_0x39877d(0x41f)][_0x39877d(0x297)][_0x39877d(0x43c)](this);return;}const _0x44286c=this[_0x39877d(0x327)](),_0x20cc28=this[_0x39877d(0x364)]()+0x8;let _0x5bb99d=0x0,_0x17248f=0x0,_0x4b32ee=this[_0x39877d(0x265)],_0x41f41f=this[_0x39877d(0x31a)],_0x503bb5=Math['floor'](_0x4b32ee/0x2),_0x1bda34=_0x5bb99d+_0x4b32ee-_0x503bb5;this[_0x39877d(0x1ea)](this['_item'],_0x5bb99d+this['itemPadding'](),_0x17248f,_0x4b32ee-this[_0x39877d(0x44f)]()*0x2),this[_0x39877d(0x3ac)](_0x5bb99d,_0x17248f,_0x4b32ee),_0x17248f+=_0x44286c;if(this[_0x39877d(0x22d)](_0x5bb99d,_0x17248f,_0x503bb5))_0x17248f+=0x0;if(this[_0x39877d(0x4f9)](_0x1bda34,_0x17248f,_0x503bb5))_0x17248f+=_0x44286c;const _0x3f4a72=this[_0x39877d(0x54b)](),_0x4e6274=_0x17248f;_0x17248f=_0x41f41f-_0x3f4a72[_0x39877d(0x2fd)]*_0x20cc28-0x4;let _0x28faaa=_0x5bb99d,_0x15de5d=0x0,_0x2a5a0a=_0x17248f;for(const _0x2bd9e0 of _0x3f4a72){_0x15de5d=Math[_0x39877d(0x35d)](this[_0x39877d(0x1e7)](_0x2bd9e0,_0x5bb99d+0x4,_0x17248f+0x4,_0x4b32ee),_0x15de5d),_0x17248f+=_0x20cc28;}const _0x515ae9=$gameParty[_0x39877d(0x4ce)](),_0x203aba=Math['floor']((_0x4b32ee-_0x15de5d)/_0x515ae9);_0x15de5d=_0x4b32ee-_0x203aba*_0x515ae9;for(const _0x16154c of $gameParty[_0x39877d(0x25e)]()){const _0x1efd35=$gameParty['battleMembers']()[_0x39877d(0x54d)](_0x16154c),_0x5908bd=_0x28faaa+_0x15de5d+_0x1efd35*_0x203aba;this['changePaintOpacity'](_0x16154c[_0x39877d(0x5e7)](this[_0x39877d(0x5a7)])),this['drawActorCharacter'](_0x16154c,_0x5908bd+_0x203aba/0x2,_0x2a5a0a);let _0x814adc=_0x2a5a0a;for(const _0x50aa23 of _0x3f4a72){const _0x496849=_0x814adc-(_0x44286c-_0x20cc28)/0x2;this['drawActorParamDifference'](_0x16154c,_0x50aa23,_0x5908bd,_0x496849,_0x203aba),_0x814adc+=_0x20cc28;}}this[_0x39877d(0x3ac)](_0x28faaa,_0x4e6274,_0x15de5d,_0x2a5a0a-_0x4e6274);for(let _0x46e8a7=0x0;_0x46e8a7<_0x515ae9;_0x46e8a7++){const _0x252ffc=_0x28faaa+_0x15de5d+_0x46e8a7*_0x203aba;this[_0x39877d(0x3ac)](_0x252ffc,_0x4e6274,_0x203aba,_0x2a5a0a-_0x4e6274);}for(const _0x252a76 of _0x3f4a72){this[_0x39877d(0x3ac)](_0x28faaa,_0x2a5a0a,_0x15de5d,_0x20cc28);for(let _0x1cea15=0x0;_0x1cea15<_0x515ae9;_0x1cea15++){const _0x11c221=_0x28faaa+_0x15de5d+_0x1cea15*_0x203aba;this[_0x39877d(0x3ac)](_0x11c221,_0x2a5a0a,_0x203aba,_0x20cc28);}_0x2a5a0a+=_0x20cc28;}},Window_ShopStatus['prototype'][_0x1028f8(0x1e9)]=function(){const _0x521b0e=_0x1028f8;this[_0x521b0e(0x249)]=null;if(VisuMZ[_0x521b0e(0x2ae)][_0x521b0e(0x1c0)]['StatusWindow']['DrawEquipClassicData']){VisuMZ[_0x521b0e(0x2ae)][_0x521b0e(0x1c0)]['StatusWindow']['DrawEquipClassicData'][_0x521b0e(0x43c)](this);return;}const _0x33fccd=this[_0x521b0e(0x327)]();let _0x23e244=0x0,_0x26419c=0x0,_0x323553=this[_0x521b0e(0x265)],_0x5cf4fb=this[_0x521b0e(0x31a)],_0x545a02=Math[_0x521b0e(0x44c)](_0x323553/0x2),_0x4dbdde=_0x23e244+_0x323553-_0x545a02;this['drawItemName'](this[_0x521b0e(0x5a7)],_0x23e244+this[_0x521b0e(0x44f)](),_0x26419c,_0x323553-this[_0x521b0e(0x44f)]()*0x2),this['drawItemDarkRect'](_0x23e244,_0x26419c,_0x323553),_0x26419c+=_0x33fccd;if(this['drawItemEquipType'](_0x23e244,_0x26419c,_0x545a02))_0x26419c+=0x0;if(this[_0x521b0e(0x4f9)](_0x4dbdde,_0x26419c,_0x545a02))_0x26419c+=_0x33fccd;if(this[_0x521b0e(0x3f6)](_0x23e244,_0x26419c,_0x323553))_0x26419c+=_0x33fccd;const _0x3d61cb=this[_0x521b0e(0x54b)]();for(const _0x1870cc of _0x3d61cb){if(this[_0x521b0e(0x401)](_0x1870cc))continue;this['drawActorParamClassic'](_0x1870cc,_0x23e244,_0x26419c,_0x323553),_0x26419c+=_0x33fccd;}_0x26419c=this['drawItemCustomEntries'](_0x23e244,_0x26419c,_0x323553),this[_0x521b0e(0x3ac)](_0x23e244,_0x26419c,_0x323553,_0x5cf4fb-_0x26419c);},Window_ShopStatus['prototype'][_0x1028f8(0x4d1)]=function(){const _0x33ea25=_0x1028f8;this[_0x33ea25(0x249)]=null;if(VisuMZ[_0x33ea25(0x2ae)][_0x33ea25(0x1c0)][_0x33ea25(0x41f)][_0x33ea25(0x421)]){VisuMZ[_0x33ea25(0x2ae)][_0x33ea25(0x1c0)][_0x33ea25(0x41f)][_0x33ea25(0x421)][_0x33ea25(0x43c)](this);return;}const _0x524252=this[_0x33ea25(0x327)]();let _0x1e757b=0x0,_0x2429cc=0x0,_0x181466=this[_0x33ea25(0x265)],_0x281071=this[_0x33ea25(0x31a)],_0x5074d7=Math[_0x33ea25(0x44c)](_0x181466/0x2),_0x91a02a=_0x1e757b+_0x181466-_0x5074d7;this[_0x33ea25(0x1ea)](this[_0x33ea25(0x5a7)],_0x1e757b+this[_0x33ea25(0x44f)](),_0x2429cc,_0x181466-this[_0x33ea25(0x44f)]()*0x2),this['drawItemDarkRect'](_0x1e757b,_0x2429cc,_0x181466),_0x2429cc+=_0x524252;if(this[_0x33ea25(0x22d)](_0x1e757b,_0x2429cc,_0x5074d7))_0x2429cc+=0x0;if(this[_0x33ea25(0x4f9)](_0x91a02a,_0x2429cc,_0x5074d7))_0x2429cc+=_0x524252;if(this[_0x33ea25(0x3f6)](_0x1e757b,_0x2429cc,_0x181466))_0x2429cc+=_0x524252;const _0x27dd02=this[_0x33ea25(0x54b)]();for(const _0x493830 of _0x27dd02){if(this[_0x33ea25(0x401)](_0x493830))continue;this['drawActorParamClassic'](_0x493830,_0x1e757b,_0x2429cc,_0x5074d7),_0x1e757b===_0x5074d7?(_0x2429cc+=_0x524252,_0x1e757b=0x0):_0x1e757b=_0x5074d7;}_0x1e757b===_0x5074d7&&(this[_0x33ea25(0x3ac)](_0x5074d7,_0x2429cc,_0x5074d7,_0x524252),_0x2429cc+=_0x524252,_0x1e757b=0x0),_0x2429cc=this[_0x33ea25(0x4ec)](_0x1e757b,_0x2429cc,_0x181466),this[_0x33ea25(0x3ac)](_0x1e757b,_0x2429cc,_0x181466,_0x281071-_0x2429cc);},Window_ShopStatus['prototype'][_0x1028f8(0x22d)]=function(_0x4d5243,_0x352ff7,_0xaba53d){const _0x4c936f=_0x1028f8;if(!this['isEquipItem']())return![];const _0x331234=$dataSystem[_0x4c936f(0x4a7)][this[_0x4c936f(0x5a7)]['etypeId']];return this['drawItemKeyData'](_0x331234,_0x4d5243,_0x352ff7,_0xaba53d,!![]),this['drawItemDarkRect'](_0x4d5243,_0x352ff7,_0xaba53d),this[_0x4c936f(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['drawItemEquipSubType']=function(_0x5c1ce9,_0x32c157,_0x51ec29){const _0x15a93e=_0x1028f8;if(!this[_0x15a93e(0x528)]())return![];let _0xc9e8bd='',_0x48487d='';const _0xc9aa49=VisuMZ[_0x15a93e(0x2ae)][_0x15a93e(0x1c0)][_0x15a93e(0x41f)];return DataManager[_0x15a93e(0x1c6)](this[_0x15a93e(0x5a7)])?(_0xc9e8bd=_0xc9aa49[_0x15a93e(0x52c)]??_0x15a93e(0x218),_0x48487d=$dataSystem[_0x15a93e(0x473)][this[_0x15a93e(0x5a7)][_0x15a93e(0x2c0)]]||_0xc9aa49[_0x15a93e(0x1d6)]||'-'):(_0xc9e8bd=_0xc9aa49['ArmorType']??_0x15a93e(0x435),_0x48487d=$dataSystem[_0x15a93e(0x20d)][this['_item'][_0x15a93e(0x38c)]]||_0xc9aa49['NoEquipTypeResult']||'-'),this[_0x15a93e(0x46c)](_0xc9e8bd,_0x5c1ce9,_0x32c157,_0x51ec29,!![]),this['drawItemKeyData'](_0x48487d,_0x5c1ce9,_0x32c157,_0x51ec29,![],'right'),this[_0x15a93e(0x3ac)](_0x5c1ce9,_0x32c157,_0x51ec29),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x1028f8(0x462)]=function(){const _0x512b01=_0x1028f8,_0x277bf6=VisuMZ[_0x512b01(0x2ae)][_0x512b01(0x1c0)][_0x512b01(0x583)][_0x512b01(0x261)];return _0x277bf6[_0x512b01(0x413)]($gameParty[_0x512b01(0x5c4)](this['_item']));},Window_ShopStatus['prototype']['actorParams']=function(){const _0x4e07d3=_0x1028f8;let _0x35aeb5=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];if(Imported[_0x4e07d3(0x236)]){_0x35aeb5=VisuMZ[_0x4e07d3(0x1f3)][_0x4e07d3(0x1c0)]['Param'][_0x4e07d3(0x3e7)];if(this[_0x4e07d3(0x4b2)]())return this[_0x4e07d3(0x19f)]();const _0x123504=VisuMZ[_0x4e07d3(0x2ae)][_0x4e07d3(0x1c0)][_0x4e07d3(0x41f)];if(this[_0x4e07d3(0x5d8)]()===_0x4e07d3(0x48f)){if(DataManager[_0x4e07d3(0x1c6)](this[_0x4e07d3(0x5a7)]))_0x35aeb5=_0x35aeb5[_0x4e07d3(0x285)](_0x123504[_0x4e07d3(0x315)]||[]);if(DataManager[_0x4e07d3(0x387)](this[_0x4e07d3(0x5a7)]))_0x35aeb5=_0x35aeb5['concat'](_0x123504['ClassicArmorParameters']||[]);}else{if(this[_0x4e07d3(0x5d8)]()==='double'){if(DataManager['isWeapon'](this[_0x4e07d3(0x5a7)]))_0x35aeb5=_0x35aeb5[_0x4e07d3(0x285)](_0x123504[_0x4e07d3(0x5c8)]||[]);if(DataManager['isArmor'](this[_0x4e07d3(0x5a7)]))_0x35aeb5=_0x35aeb5[_0x4e07d3(0x285)](_0x123504[_0x4e07d3(0x4e4)]||[]);}}}return _0x35aeb5=_0x35aeb5['map'](_0x3a83d7=>typeof _0x3a83d7==='number'?_0x3a83d7:_0x3a83d7['toUpperCase']()[_0x4e07d3(0x2de)]()),_0x35aeb5;},Window_ShopStatus[_0x1028f8(0x5db)]['smallParamFontSize']=function(){const _0x3de203=_0x1028f8;return VisuMZ[_0x3de203(0x2ae)]['Settings'][_0x3de203(0x41f)][_0x3de203(0x2b1)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x1e7)]=function(_0xd524ed,_0x3486b6,_0x1e03fc,_0x490568){const _0xb5e8d7=_0x1028f8;this[_0xb5e8d7(0x1b9)](),this[_0xb5e8d7(0x587)][_0xb5e8d7(0x1ee)]=this[_0xb5e8d7(0x275)]();let _0x598a2f=this['textWidth'](TextManager[_0xb5e8d7(0x240)](_0xd524ed))+0x4+_0x3486b6;return Imported[_0xb5e8d7(0x236)]?(this[_0xb5e8d7(0x270)](_0x3486b6,_0x1e03fc,_0x490568,_0xd524ed,!![]),VisuMZ[_0xb5e8d7(0x1f3)][_0xb5e8d7(0x1c0)][_0xb5e8d7(0x250)]['DrawIcons']&&(_0x598a2f+=ImageManager[_0xb5e8d7(0x565)]+0x4)):(this[_0xb5e8d7(0x5ba)](ColorManager[_0xb5e8d7(0x29d)]()),this[_0xb5e8d7(0x545)](TextManager[_0xb5e8d7(0x240)](_0xd524ed),_0x3486b6,_0x1e03fc,_0x490568)),this[_0xb5e8d7(0x1b9)](),_0x598a2f;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x46f)]=function(_0x360ccf,_0x3f73a7,_0x2b178a,_0x2d0c2f,_0x10e206){const _0xa697d2=_0x1028f8;_0x2b178a+=this[_0xa697d2(0x44f)](),_0x10e206-=this[_0xa697d2(0x44f)]()*0x2;const _0x18a364=VisuMZ['ItemsEquipsCore'][_0xa697d2(0x1c0)][_0xa697d2(0x41f)];this[_0xa697d2(0x587)][_0xa697d2(0x1ee)]=_0x18a364[_0xa697d2(0x2b1)],this['changePaintOpacity'](_0x360ccf[_0xa697d2(0x5e7)](this[_0xa697d2(0x5a7)]));if(_0x360ccf[_0xa697d2(0x4ed)](this[_0xa697d2(0x5a7)])&&!_0x360ccf[_0xa697d2(0x476)](this[_0xa697d2(0x5a7)])){const _0x4070f5=_0x18a364[_0xa697d2(0x4a5)];this[_0xa697d2(0x545)](_0x4070f5,_0x2b178a,_0x2d0c2f,_0x10e206,_0xa697d2(0x378));}else{if(_0x360ccf[_0xa697d2(0x5e7)](this['_item'])){const _0x1cc210=this[_0xa697d2(0x2ce)](_0x360ccf);let _0x49a564=0x0,_0x543d55=0x0,_0x17e3b8=0x0;Imported['VisuMZ_0_CoreEngine']?(_0x49a564=_0x1cc210[_0xa697d2(0x251)](_0x3f73a7),_0x543d55=_0x49a564-_0x360ccf[_0xa697d2(0x251)](_0x3f73a7),this['changeTextColor'](ColorManager[_0xa697d2(0x1ac)](_0x543d55)),_0x17e3b8=(_0x543d55>=0x0?'+':'')+VisuMZ['ConvertNumberToString'](_0x543d55,0x0,_0x3f73a7)):(_0x49a564=_0x1cc210[_0xa697d2(0x240)](_0x3f73a7),_0x543d55=_0x49a564-_0x360ccf[_0xa697d2(0x240)](_0x3f73a7),this[_0xa697d2(0x5ba)](ColorManager['paramchangeTextColor'](_0x543d55)),_0x17e3b8=(_0x543d55>=0x0?'+':'')+_0x543d55),_0x17e3b8==='+0'&&(_0x17e3b8=_0x18a364[_0xa697d2(0x3f1)]),this['drawText'](_0x17e3b8,_0x2b178a,_0x2d0c2f,_0x10e206,_0xa697d2(0x378));}else{const _0x417302=_0x18a364['CannotEquipMarker'];this[_0xa697d2(0x545)](_0x417302,_0x2b178a,_0x2d0c2f,_0x10e206,_0xa697d2(0x378));}}this[_0xa697d2(0x1b9)](),this[_0xa697d2(0x484)](!![]);},Window_ShopStatus[_0x1028f8(0x5db)]['createTempActorEquips']=function(_0x261990){const _0x141b03=_0x1028f8;if(this[_0x141b03(0x280)](_0x261990)){const _0x415bb1=JsonEx[_0x141b03(0x4cc)](_0x261990);_0x415bb1[_0x141b03(0x249)]=!![];const _0x3563c0=_0x415bb1[_0x141b03(0x2e1)](this[_0x141b03(0x5a7)]);_0x3563c0>=0x0&&_0x415bb1[_0x141b03(0x3da)](_0x3563c0,this[_0x141b03(0x5a7)]),this[_0x141b03(0x249)]=_0x415bb1;}return this['_tempActor'];},Window_ShopStatus['prototype']['needsNewTempActor']=function(_0x3cd366){const _0x100f2c=_0x1028f8;if(!this[_0x100f2c(0x249)])return!![];return this[_0x100f2c(0x249)][_0x100f2c(0x5d3)]()!==_0x3cd366[_0x100f2c(0x5d3)]();},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x476)]=function(_0x2fe0de){const _0x4419b5=_0x1028f8;if(!_0x2fe0de)return![];const _0x551eee=_0x2fe0de['etypeId'],_0x38105e=this[_0x4419b5(0x405)]();for(let _0x1cf813=0x0;_0x1cf813<_0x38105e[_0x4419b5(0x2fd)];_0x1cf813++){const _0x1fc959=_0x38105e[_0x1cf813];if(_0x1fc959!==_0x551eee)continue;if(!this[_0x4419b5(0x1cb)]()[_0x1cf813])return!![];}return![];},Game_Actor[_0x1028f8(0x5db)][_0x1028f8(0x2e1)]=function(_0x32fcda){const _0x147ab9=_0x1028f8;if(!_0x32fcda)return-0x1;const _0xca9118=_0x32fcda[_0x147ab9(0x4c3)],_0x5d1aba=this[_0x147ab9(0x405)]();let _0x4f7a78=-0x1;for(let _0x189ffa=0x0;_0x189ffa<_0x5d1aba[_0x147ab9(0x2fd)];_0x189ffa++){const _0x4ef8d9=_0x5d1aba[_0x189ffa];if(_0x4ef8d9!==_0xca9118)continue;if(!this[_0x147ab9(0x1cb)]()[_0x189ffa])return _0x189ffa;if(_0x4f7a78<0x0)_0x4f7a78=_0x189ffa;}return _0x4f7a78;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x383)]=function(_0x32bcd3,_0x1bd580,_0x1814b3,_0x3f2662){const _0x4f8ea6=_0x1028f8,_0x27506f=TextManager[_0x4f8ea6(0x240)](_0x32bcd3);this[_0x4f8ea6(0x46c)](_0x27506f,_0x1bd580,_0x1814b3,_0x3f2662,!![]);let _0x1315a8='+0';Imported[_0x4f8ea6(0x236)]?_0x1315a8=this[_0x4f8ea6(0x247)](_0x32bcd3):_0x1315a8=this[_0x4f8ea6(0x4a2)](_0x32bcd3),this['drawItemKeyData'](_0x1315a8,_0x1bd580,_0x1814b3,_0x3f2662,![],_0x4f8ea6(0x5b2)),this['drawItemDarkRect'](_0x1bd580,_0x1814b3,_0x3f2662);},Window_ShopStatus[_0x1028f8(0x5db)]['isCustomParameter']=function(_0x2d2088){const _0x3f4093=_0x1028f8;return Imported[_0x3f4093(0x236)]?!!VisuMZ[_0x3f4093(0x1f3)]['CustomParamNames'][_0x2d2088]:![];},Window_ShopStatus['prototype'][_0x1028f8(0x247)]=function(_0x47a317){const _0x5dbb1c=_0x1028f8;if(this[_0x5dbb1c(0x467)][_0x47a317])return this[_0x5dbb1c(0x467)][_0x47a317];const _0x4871f5=[_0x5dbb1c(0x2fa),_0x5dbb1c(0x388),'ATK',_0x5dbb1c(0x2a1),'MAT',_0x5dbb1c(0x2f9),_0x5dbb1c(0x308),_0x5dbb1c(0x48e)],_0x7e73ab=[_0x5dbb1c(0x311),_0x5dbb1c(0x499),_0x5dbb1c(0x2cf),_0x5dbb1c(0x380),_0x5dbb1c(0x45c),_0x5dbb1c(0x386),_0x5dbb1c(0x3ae),'HRG',_0x5dbb1c(0x4c2),_0x5dbb1c(0x2c3)],_0x4d715a=['TGR',_0x5dbb1c(0x1b4),_0x5dbb1c(0x26f),_0x5dbb1c(0x403),_0x5dbb1c(0x481),_0x5dbb1c(0x292),'PDR',_0x5dbb1c(0x552),'FDR',_0x5dbb1c(0x3d2)];if(_0x4871f5['includes'](_0x47a317)){const _0xf35e4d=_0x4871f5['indexOf'](_0x47a317),_0x5d1a25=this[_0x5dbb1c(0x5a7)][_0x5dbb1c(0x4b3)][_0xf35e4d]||0x0;return this[_0x5dbb1c(0x5ba)](ColorManager[_0x5dbb1c(0x1ac)](_0x5d1a25)),(_0x5d1a25>=0x0?'+':'')+String(_0x5d1a25);}else{if(_0x7e73ab['includes'](_0x47a317)){const _0x1efc60=_0x7e73ab[_0x5dbb1c(0x54d)](_0x47a317);let _0x9725fc=0x0;for(const _0x5e4724 of this['_item']['traits']){if(_0x5e4724['code']!==0x16)continue;_0x5e4724[_0x5dbb1c(0x3e8)]===_0x1efc60&&(_0x9725fc+=_0x5e4724[_0x5dbb1c(0x278)]||0x0);}return this[_0x5dbb1c(0x5ba)](ColorManager[_0x5dbb1c(0x1ac)](_0x9725fc)),_0x9725fc*=0x64,(_0x9725fc>=0x0?'+':'')+String(_0x9725fc)+'%';}else{if(_0x4d715a[_0x5dbb1c(0x36e)](_0x47a317)){const _0x553772=_0x4d715a[_0x5dbb1c(0x54d)](_0x47a317);let _0x5a3374=0x1;for(const _0x157cdc of this[_0x5dbb1c(0x5a7)][_0x5dbb1c(0x2f3)]){if(_0x157cdc['code']!==0x17)continue;_0x157cdc['dataId']===_0x553772&&(_0x5a3374*=_0x157cdc[_0x5dbb1c(0x278)]||0x0);}let _0x175930=0x1;if(['TGR','MCR',_0x5dbb1c(0x40b),_0x5dbb1c(0x552),_0x5dbb1c(0x3e2)][_0x5dbb1c(0x36e)](_0x47a317))_0x175930=-0x1;return this['changeTextColor'](ColorManager[_0x5dbb1c(0x1ac)]((_0x5a3374-0x1)*_0x175930)),_0x5a3374*=0x64,String(_0x5a3374)+'%';}}}return'';},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x4a2)]=function(_0x4975a2){const _0x116221=_0x1028f8,_0x19809a=[_0x116221(0x2fa),_0x116221(0x388),_0x116221(0x390),_0x116221(0x2a1),_0x116221(0x34f),'MDF',_0x116221(0x308),_0x116221(0x48e)],_0x88ae0d=_0x19809a[_0x4975a2]||_0x116221(0x36d);if(this[_0x116221(0x467)][_0x88ae0d])return this[_0x116221(0x467)][_0x88ae0d];const _0x4cf8fa=Number(this[_0x116221(0x5a7)][_0x116221(0x4b3)][_0x4975a2]||0x0);return this['changeTextColor'](ColorManager[_0x116221(0x1ac)](_0x4cf8fa)),(_0x4cf8fa>=0x0?'+':'')+String(_0x4cf8fa);},Window_ShopStatus[_0x1028f8(0x5db)]['equipHasCustomParams']=function(){const _0x5a0ad7=_0x1028f8,_0x2c88e1=/<CUSTOM STATUS PARAM(?:|S|ETERS):[ ](.*)>/i;return this[_0x5a0ad7(0x5a7)]&&this[_0x5a0ad7(0x5a7)]['note']&&this[_0x5a0ad7(0x5a7)][_0x5a0ad7(0x358)][_0x5a0ad7(0x3ce)](_0x2c88e1);},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x19f)]=function(){const _0x44c00d=_0x1028f8,_0x5c0ab2=/<CUSTOM STATUS PARAM(?:|S|ETERS):[ ](.*)>/i;this[_0x44c00d(0x5a7)]['note']['match'](_0x5c0ab2);const _0xda9398=String(RegExp['$1'])[_0x44c00d(0x424)](',')[_0x44c00d(0x47a)](_0x3ae6b9=>_0x3ae6b9[_0x44c00d(0x339)]()[_0x44c00d(0x2de)]()),_0x59f9c2=[_0x44c00d(0x2fa),_0x44c00d(0x388),'ATK',_0x44c00d(0x2a1),'MAT',_0x44c00d(0x2f9),_0x44c00d(0x308),_0x44c00d(0x48e)],_0x8078d6=[_0x44c00d(0x311),_0x44c00d(0x499),_0x44c00d(0x2cf),_0x44c00d(0x380),_0x44c00d(0x45c),_0x44c00d(0x386),_0x44c00d(0x3ae),_0x44c00d(0x35e),_0x44c00d(0x4c2),_0x44c00d(0x2c3)],_0xb69013=[_0x44c00d(0x5a0),_0x44c00d(0x1b4),_0x44c00d(0x26f),_0x44c00d(0x403),_0x44c00d(0x481),_0x44c00d(0x292),'PDR',_0x44c00d(0x552),'FDR','EXR'];let _0x5db299=[];for(const _0xb2e5f8 of _0xda9398){if(_0x59f9c2['includes'](_0xb2e5f8))_0x5db299[_0x44c00d(0x45e)](_0xb2e5f8);if(_0x8078d6[_0x44c00d(0x36e)](_0xb2e5f8))_0x5db299[_0x44c00d(0x45e)](_0xb2e5f8);if(_0xb69013[_0x44c00d(0x36e)](_0xb2e5f8))_0x5db299[_0x44c00d(0x45e)](_0xb2e5f8);}return _0x5db299;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x535)]=function(){const _0x2fd65a=_0x1028f8;VisuMZ['ItemsEquipsCore'][_0x2fd65a(0x1c0)]['StatusWindow'][_0x2fd65a(0x243)][_0x2fd65a(0x43c)](this);},Window_ShopStatus['prototype']['drawItemName']=function(_0x23f320,_0xb0ca57,_0x23ae3f,_0x2bfbfc){const _0x117839=_0x1028f8,_0x43a4c1=DataManager['isSkill'](_0x23f320,_0xb0ca57,_0x23ae3f,_0x2bfbfc)&&Imported[_0x117839(0x209)],_0x251f17=_0x23f320?_0x23f320[_0x117839(0x2c8)]:'';if(_0x43a4c1)Window_SkillList[_0x117839(0x5db)]['alterSkillName']['call'](this,_0x23f320);Window_Base[_0x117839(0x5db)][_0x117839(0x1ea)]['call'](this,_0x23f320,_0xb0ca57,_0x23ae3f,_0x2bfbfc);if(_0x43a4c1)_0x23f320['name']=_0x251f17;},Window_ShopStatus['prototype'][_0x1028f8(0x2e2)]=function(){const _0x1a37db=_0x1028f8;this[_0x1a37db(0x467)]={};if(!this[_0x1a37db(0x5a7)])return;const _0x646f22=this['_item'][_0x1a37db(0x358)];if(_0x646f22[_0x1a37db(0x3ce)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x197250=String(RegExp['$1'])[_0x1a37db(0x424)](/[\r\n]+/);for(const _0x142848 of _0x197250){if(_0x142848[_0x1a37db(0x3ce)](/(.*):[ ](.*)/i)){const _0x34be14=String(RegExp['$1'])['toUpperCase']()[_0x1a37db(0x2de)](),_0x10f37d=String(RegExp['$2'])[_0x1a37db(0x2de)]();this[_0x1a37db(0x467)][_0x34be14]=_0x10f37d;}}}},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x5e3)]=function(){const _0x52f996=_0x1028f8;return Math['max'](0x1,$gameSystem[_0x52f996(0x2e9)]()-0x4);},Window_ShopStatus['prototype'][_0x1028f8(0x1b9)]=function(){const _0x4fb85a=_0x1028f8;Window_StatusBase[_0x4fb85a(0x5db)][_0x4fb85a(0x1b9)][_0x4fb85a(0x43c)](this),this[_0x4fb85a(0x587)][_0x4fb85a(0x1ee)]=this[_0x4fb85a(0x43a)]||this[_0x4fb85a(0x587)][_0x4fb85a(0x1ee)],this[_0x4fb85a(0x587)][_0x4fb85a(0x524)]=this[_0x4fb85a(0x32a)]||this[_0x4fb85a(0x587)][_0x4fb85a(0x524)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x5e6)]=function(){const _0x580ef8=_0x1028f8;return this[_0x580ef8(0x587)]['fontSize']/$gameSystem[_0x580ef8(0x2e9)]();},Window_ShopStatus[_0x1028f8(0x5db)]['drawIcon']=function(_0x1d1317,_0x2443a6,_0x40c033){const _0x46d1cc=_0x1028f8,_0xdf6d00=ImageManager[_0x46d1cc(0x29f)](_0x46d1cc(0x3a2)),_0x8d501b=ImageManager['iconWidth'],_0x396797=ImageManager[_0x46d1cc(0x41a)],_0x3d4eea=_0x1d1317%0x10*_0x8d501b,_0x5d3679=Math[_0x46d1cc(0x44c)](_0x1d1317/0x10)*_0x396797,_0x4cbf05=Math[_0x46d1cc(0x3c1)](_0x8d501b*this[_0x46d1cc(0x5e6)]()),_0x24a059=Math[_0x46d1cc(0x3c1)](_0x396797*this[_0x46d1cc(0x5e6)]());this[_0x46d1cc(0x587)][_0x46d1cc(0x361)](_0xdf6d00,_0x3d4eea,_0x5d3679,_0x8d501b,_0x396797,_0x2443a6,_0x40c033,_0x4cbf05,_0x24a059);},Window_ShopStatus['prototype'][_0x1028f8(0x41d)]=function(_0x472fef,_0x3d5fb9){const _0x210590=_0x1028f8,_0x37fab4=ImageManager[_0x210590(0x579)]||0x20,_0x64498a=ImageManager[_0x210590(0x5d5)]||0x20;if(_0x3d5fb9['drawing']){const _0x4f45e5=_0x37fab4-ImageManager[_0x210590(0x565)],_0x4f0ac7=_0x64498a-ImageManager['iconHeight'];let _0x123711=0x2,_0xfb6e70=0x2;this[_0x210590(0x327)]()!==0x24&&(_0xfb6e70=Math[_0x210590(0x44c)]((this[_0x210590(0x327)]()-_0x64498a)/0x2));const _0x5d8f7f=_0x3d5fb9['x']+Math[_0x210590(0x3c1)](Math[_0x210590(0x44c)](_0x4f45e5/0x2)*this[_0x210590(0x5e6)]())+_0x123711,_0x49144b=_0x3d5fb9['y']+Math['ceil'](Math['floor'](_0x4f0ac7/0x2)*this['fontSizeRatio']())+_0xfb6e70;this[_0x210590(0x27b)](_0x472fef,_0x5d8f7f,_0x49144b);}_0x3d5fb9['x']+=Math['ceil'](_0x37fab4*this[_0x210590(0x5e6)]()),_0x3d5fb9['x']+=Math[_0x210590(0x3c1)](0x4*this[_0x210590(0x5e6)]());},Window_ShopStatus['prototype'][_0x1028f8(0x46c)]=function(_0xa26189,_0x4582da,_0x1c54b4,_0x53dc1d,_0x22d1de,_0x277327){const _0x1425d1=_0x1028f8;_0xa26189=_0xa26189||'',_0x277327=_0x277327||'left',this['_resetFontSize']=this[_0x1425d1(0x5e3)](),this['_resetFontColor']=_0x22d1de?ColorManager['systemColor']():this['contents'][_0x1425d1(0x524)],_0x4582da+=this[_0x1425d1(0x44f)](),_0x53dc1d-=this[_0x1425d1(0x44f)]()*0x2;const _0xca035e=this[_0x1425d1(0x284)](_0xa26189);if(_0x277327===_0x1425d1(0x378))_0x4582da=_0x4582da+Math['floor']((_0x53dc1d-_0xca035e[_0x1425d1(0x371)])/0x2);else _0x277327==='right'&&(_0x4582da=_0x4582da+_0x53dc1d-_0xca035e[_0x1425d1(0x371)]);_0x1c54b4+=(this[_0x1425d1(0x327)]()-_0xca035e['height'])/0x2,this[_0x1425d1(0x30f)](_0xa26189,_0x4582da,_0x1c54b4,_0x53dc1d),this['_resetFontSize']=undefined,this[_0x1425d1(0x32a)]=undefined,this[_0x1425d1(0x1b9)]();},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x36c)]=function(_0x16ffb4,_0x530c5b,_0x438b24){const _0xce903f=_0x1028f8;if(!DataManager[_0xce903f(0x56d)](this[_0xce903f(0x5a7)]))return![];const _0x3b9e1d=this[_0xce903f(0x5d1)]();this[_0xce903f(0x46c)](_0x3b9e1d,_0x16ffb4,_0x530c5b,_0x438b24,!![]);const _0x37a50f=this['getItemConsumableText']();return this[_0xce903f(0x46c)](_0x37a50f,_0x16ffb4,_0x530c5b,_0x438b24,![],_0xce903f(0x5b2)),this[_0xce903f(0x3ac)](_0x16ffb4,_0x530c5b,_0x438b24),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x5d1)]=function(){const _0x3fb053=_0x1028f8;return VisuMZ['ItemsEquipsCore']['Settings'][_0x3fb053(0x41f)][_0x3fb053(0x333)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x48d)]=function(){const _0x16a4b1=_0x1028f8,_0x54238f='CONSUMABLE';if(this[_0x16a4b1(0x467)][_0x54238f])return this['_customItemInfo'][_0x54238f];return this['canConsumeItem']()?VisuMZ[_0x16a4b1(0x2ae)]['Settings'][_0x16a4b1(0x41f)][_0x16a4b1(0x26b)]:VisuMZ[_0x16a4b1(0x2ae)]['Settings']['StatusWindow'][_0x16a4b1(0x348)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x2b3)]=function(){const _0x1273d8=_0x1028f8;return VisuMZ['CoreEngine']&&VisuMZ[_0x1273d8(0x1f3)][_0x1273d8(0x1c0)][_0x1273d8(0x372)][_0x1273d8(0x237)]&&DataManager[_0x1273d8(0x486)](this[_0x1273d8(0x5a7)])?![]:this['_item'][_0x1273d8(0x2dc)];},Window_ShopStatus['prototype'][_0x1028f8(0x4f9)]=function(_0x4c97b0,_0x3cd661,_0x4b8bb2){const _0x402ca0=_0x1028f8;if(!this[_0x402ca0(0x528)]()&&!DataManager[_0x402ca0(0x56d)](this[_0x402ca0(0x5a7)]))return![];if(DataManager[_0x402ca0(0x486)](this[_0x402ca0(0x5a7)])&&!$dataSystem['optKeyItemsNumber']){const _0x3b4f0f=TextManager[_0x402ca0(0x522)];this[_0x402ca0(0x46c)](_0x3b4f0f,_0x4c97b0,_0x3cd661,_0x4b8bb2,!![],'center');}else{const _0x3cbfae=TextManager[_0x402ca0(0x1f8)];this[_0x402ca0(0x46c)](_0x3cbfae,_0x4c97b0,_0x3cd661,_0x4b8bb2,!![]);const _0x4ab133=this[_0x402ca0(0x462)]();this['drawItemKeyData'](_0x4ab133,_0x4c97b0,_0x3cd661,_0x4b8bb2,![],'right');}return this[_0x402ca0(0x3ac)](_0x4c97b0,_0x3cd661,_0x4b8bb2),this[_0x402ca0(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x462)]=function(){const _0x473f1a=_0x1028f8,_0x53f617=_0x473f1a(0x1b6);if(this['_customItemInfo'][_0x53f617])return this[_0x473f1a(0x467)][_0x53f617];const _0x534470=VisuMZ[_0x473f1a(0x2ae)][_0x473f1a(0x1c0)][_0x473f1a(0x583)]['ItemQuantityFmt'];return _0x534470[_0x473f1a(0x413)]($gameParty[_0x473f1a(0x5c4)](this[_0x473f1a(0x5a7)]));},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x279)]=function(_0x16611d,_0x2cd7f3,_0x5c0104){const _0x16ff92=_0x1028f8,_0x48d202=this[_0x16ff92(0x5ed)]();return this[_0x16ff92(0x46c)](_0x48d202,_0x16611d,_0x2cd7f3,_0x5c0104,![],_0x16ff92(0x378)),this[_0x16ff92(0x3ac)](_0x16611d,_0x2cd7f3,_0x5c0104),this[_0x16ff92(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x5ed)]=function(){const _0x47b6ff=_0x1028f8,_0x17a827=_0x47b6ff(0x2d1);if(this[_0x47b6ff(0x467)][_0x17a827])return this[_0x47b6ff(0x467)][_0x17a827];const _0x5c9ec0=VisuMZ[_0x47b6ff(0x2ae)][_0x47b6ff(0x1c0)][_0x47b6ff(0x41f)],_0x175e16=_0x47b6ff(0x2ec)[_0x47b6ff(0x413)](this['_item'][_0x47b6ff(0x55d)]);return _0x5c9ec0[_0x175e16];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x29b)]=function(_0x242ba7,_0x2c3c4a,_0x35e766){const _0x4575c4=_0x1028f8,_0xa12c9d=this[_0x4575c4(0x1c1)]();return this[_0x4575c4(0x46c)](_0xa12c9d,_0x242ba7,_0x2c3c4a,_0x35e766,![],_0x4575c4(0x378)),this[_0x4575c4(0x3ac)](_0x242ba7,_0x2c3c4a,_0x35e766),this[_0x4575c4(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x1c1)]=function(){const _0x4cdb9d=_0x1028f8,_0x225b6c='SCOPE';if(this['_customItemInfo'][_0x225b6c])return this[_0x4cdb9d(0x467)][_0x225b6c];const _0x32f2ba=VisuMZ[_0x4cdb9d(0x2ae)][_0x4cdb9d(0x1c0)][_0x4cdb9d(0x41f)];if(Imported[_0x4cdb9d(0x41e)]){const _0x503480=this[_0x4cdb9d(0x5a7)][_0x4cdb9d(0x358)];if(_0x503480['match'](/<TARGET:[ ](.*)>/i)){const _0x457306=String(RegExp['$1']);if(_0x457306[_0x4cdb9d(0x3ce)](/(\d+) RANDOM ANY/i))return _0x32f2ba[_0x4cdb9d(0x26a)]['format'](Number(RegExp['$1']));else{if(_0x457306[_0x4cdb9d(0x3ce)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x32f2ba[_0x4cdb9d(0x370)][_0x4cdb9d(0x413)](Number(RegExp['$1']));else{if(_0x457306[_0x4cdb9d(0x3ce)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x32f2ba[_0x4cdb9d(0x480)][_0x4cdb9d(0x413)](Number(RegExp['$1']));else{if(_0x457306[_0x4cdb9d(0x3ce)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x32f2ba[_0x4cdb9d(0x322)];else{if(_0x457306['match'](/ALLY OR ENEMY/i))return _0x32f2ba[_0x4cdb9d(0x51d)]||_0x32f2ba['Scope7'];else{if(_0x457306[_0x4cdb9d(0x3ce)](/ENEMY OR ALLY/i))return _0x32f2ba[_0x4cdb9d(0x575)]||_0x32f2ba[_0x4cdb9d(0x33d)];}}}}}}}const _0x367a24=_0x4cdb9d(0x26e)['format'](this[_0x4cdb9d(0x5a7)]['scope']);return _0x32f2ba[_0x367a24];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x3c2)]=function(_0x26c661,_0x36925f,_0x559c65){const _0xa63fee=_0x1028f8,_0x159024=this[_0xa63fee(0x398)]();this[_0xa63fee(0x46c)](_0x159024,_0x26c661,_0x36925f,_0x559c65,!![]);const _0x5050c3=this[_0xa63fee(0x254)]();return this[_0xa63fee(0x46c)](_0x5050c3,_0x26c661,_0x36925f,_0x559c65,![],_0xa63fee(0x5b2)),this['drawItemDarkRect'](_0x26c661,_0x36925f,_0x559c65),this[_0xa63fee(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemSpeedLabel']=function(){const _0x321d21=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x321d21(0x1c0)][_0x321d21(0x41f)]['LabelSpeed'];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemSpeedText']=function(){const _0x22ea25=_0x1028f8,_0x9e557='SPEED';if(this[_0x22ea25(0x467)][_0x9e557])return this['_customItemInfo'][_0x9e557];const _0xdaede=this[_0x22ea25(0x5a7)][_0x22ea25(0x4ae)];if(_0xdaede>=0x7d0)return VisuMZ[_0x22ea25(0x2ae)][_0x22ea25(0x1c0)]['StatusWindow'][_0x22ea25(0x466)];else{if(_0xdaede>=0x3e8)return VisuMZ[_0x22ea25(0x2ae)][_0x22ea25(0x1c0)]['StatusWindow'][_0x22ea25(0x55e)];else{if(_0xdaede>0x0)return VisuMZ[_0x22ea25(0x2ae)]['Settings'][_0x22ea25(0x41f)][_0x22ea25(0x3bc)];else{if(_0xdaede===0x0)return VisuMZ[_0x22ea25(0x2ae)][_0x22ea25(0x1c0)][_0x22ea25(0x41f)]['Speed0'];else{if(_0xdaede>-0x3e8)return VisuMZ[_0x22ea25(0x2ae)]['Settings'][_0x22ea25(0x41f)][_0x22ea25(0x471)];else{if(_0xdaede>-0x7d0)return VisuMZ[_0x22ea25(0x2ae)][_0x22ea25(0x1c0)][_0x22ea25(0x41f)][_0x22ea25(0x2c1)];else return _0xdaede<=-0x7d0?VisuMZ[_0x22ea25(0x2ae)][_0x22ea25(0x1c0)][_0x22ea25(0x41f)]['SpeedNeg2000']:_0x22ea25(0x1f5);}}}}}},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x510)]=function(_0x1ce26f,_0x2cd162,_0x222abf){const _0xa16c6=_0x1028f8,_0x5e4dc7=this[_0xa16c6(0x3bd)]();this[_0xa16c6(0x46c)](_0x5e4dc7,_0x1ce26f,_0x2cd162,_0x222abf,!![]);const _0x391bfa=this[_0xa16c6(0x52f)]();return this['drawItemKeyData'](_0x391bfa,_0x1ce26f,_0x2cd162,_0x222abf,![],_0xa16c6(0x5b2)),this[_0xa16c6(0x3ac)](_0x1ce26f,_0x2cd162,_0x222abf),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemSuccessRateLabel']=function(){const _0x391589=_0x1028f8;return VisuMZ[_0x391589(0x2ae)][_0x391589(0x1c0)][_0x391589(0x41f)][_0x391589(0x3d8)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x52f)]=function(){const _0x208828=_0x1028f8,_0x474d14=_0x208828(0x4ab);if(this[_0x208828(0x467)][_0x474d14])return this[_0x208828(0x467)][_0x474d14];if(Imported[_0x208828(0x41e)]){const _0x16fb7d=this[_0x208828(0x5a7)][_0x208828(0x358)];if(_0x16fb7d[_0x208828(0x3ce)](/<ALWAYS HIT>/i))return _0x208828(0x393);else{if(_0x16fb7d['match'](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x208828(0x515)[_0x208828(0x413)](Number(RegExp['$1']));}}return _0x208828(0x515)[_0x208828(0x413)](this['_item'][_0x208828(0x1ef)]);},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x3df)]=function(_0x4a06c6,_0x1133a0,_0x3c47f4){const _0x371e88=_0x1028f8,_0x45ace6=this[_0x371e88(0x1e6)]();this[_0x371e88(0x46c)](_0x45ace6,_0x4a06c6,_0x1133a0,_0x3c47f4,!![]);const _0x1152b7=this[_0x371e88(0x32c)]();return this[_0x371e88(0x46c)](_0x1152b7,_0x4a06c6,_0x1133a0,_0x3c47f4,![],_0x371e88(0x5b2)),this[_0x371e88(0x3ac)](_0x4a06c6,_0x1133a0,_0x3c47f4),this[_0x371e88(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemRepeatsLabel']=function(){const _0x170f02=_0x1028f8;return VisuMZ[_0x170f02(0x2ae)][_0x170f02(0x1c0)][_0x170f02(0x41f)][_0x170f02(0x4fc)];},Window_ShopStatus['prototype'][_0x1028f8(0x32c)]=function(){const _0x77d26b=_0x1028f8,_0x5955de=_0x77d26b(0x5a2);if(this[_0x77d26b(0x467)][_0x5955de])return this[_0x77d26b(0x467)][_0x5955de];const _0x530c46='×%1';return _0x530c46[_0x77d26b(0x413)](this[_0x77d26b(0x5a7)][_0x77d26b(0x2cd)]);},Window_ShopStatus['prototype'][_0x1028f8(0x217)]=function(_0x6857ea,_0x3b55e8,_0xe9de44){const _0x1770d2=_0x1028f8,_0x353d9d=this[_0x1770d2(0x1a6)]();this[_0x1770d2(0x46c)](_0x353d9d,_0x6857ea,_0x3b55e8,_0xe9de44,!![]);const _0x5b2f24=this[_0x1770d2(0x2ed)]();return this['drawItemKeyData'](_0x5b2f24,_0x6857ea,_0x3b55e8,_0xe9de44,![],_0x1770d2(0x5b2)),this[_0x1770d2(0x3ac)](_0x6857ea,_0x3b55e8,_0xe9de44),this[_0x1770d2(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemHitTypeLabel']=function(){const _0x25540b=_0x1028f8;return VisuMZ[_0x25540b(0x2ae)][_0x25540b(0x1c0)][_0x25540b(0x41f)][_0x25540b(0x19e)];},Window_ShopStatus['prototype']['getItemHitTypeText']=function(){const _0x1536eb=_0x1028f8,_0x2dab16=_0x1536eb(0x520);if(this[_0x1536eb(0x467)][_0x2dab16])return this['_customItemInfo'][_0x2dab16];if(DataManager[_0x1536eb(0x5a4)]&&DataManager[_0x1536eb(0x5a4)](this['_item']))return TextManager[_0x1536eb(0x404)];const _0x32924c=VisuMZ[_0x1536eb(0x2ae)][_0x1536eb(0x1c0)]['StatusWindow'],_0x220886=_0x1536eb(0x50c)[_0x1536eb(0x413)](this['_item'][_0x1536eb(0x4fe)]);return _0x32924c[_0x220886];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x20f)]=function(_0x533524,_0x5dd2f1,_0x1f2c87){const _0x2de57c=_0x1028f8;if(this[_0x2de57c(0x5a7)][_0x2de57c(0x2f7)]['type']<=0x0)return _0x5dd2f1;if(this[_0x2de57c(0x362)](_0x533524,_0x5dd2f1,_0x1f2c87))_0x5dd2f1+=this['lineHeight']();if(this[_0x2de57c(0x21a)](_0x533524,_0x5dd2f1,_0x1f2c87))_0x5dd2f1+=this[_0x2de57c(0x327)]();return this[_0x2de57c(0x1b9)](),_0x5dd2f1;},Window_ShopStatus[_0x1028f8(0x5db)]['drawItemDamageElement']=function(_0x5375aa,_0x41ab8a,_0x5708c3){const _0x561d54=_0x1028f8,_0x5e5b33=this[_0x561d54(0x3a8)]();this['drawItemKeyData'](_0x5e5b33,_0x5375aa,_0x41ab8a,_0x5708c3,!![]);const _0x53b579=this[_0x561d54(0x2da)]();return this[_0x561d54(0x46c)](_0x53b579,_0x5375aa,_0x41ab8a,_0x5708c3,![],_0x561d54(0x5b2)),this[_0x561d54(0x3ac)](_0x5375aa,_0x41ab8a,_0x5708c3),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x3a8)]=function(){const _0x5caa30=_0x1028f8;return VisuMZ[_0x5caa30(0x2ae)][_0x5caa30(0x1c0)][_0x5caa30(0x41f)][_0x5caa30(0x4d6)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x2da)]=function(){const _0x341505=_0x1028f8,_0x11e850=_0x341505(0x49e);if(this[_0x341505(0x467)][_0x11e850])return this[_0x341505(0x467)][_0x11e850];if(this['_item']['damage'][_0x341505(0x2cb)]<=-0x1)return VisuMZ[_0x341505(0x2ae)]['Settings']['StatusWindow'][_0x341505(0x1d3)];else return this['_item'][_0x341505(0x2f7)]['elementId']===0x0?VisuMZ[_0x341505(0x2ae)][_0x341505(0x1c0)][_0x341505(0x41f)][_0x341505(0x483)]:$dataSystem[_0x341505(0x3a0)][this[_0x341505(0x5a7)]['damage'][_0x341505(0x2cb)]];},Window_ShopStatus['prototype'][_0x1028f8(0x21a)]=function(_0x5db7bb,_0x447e04,_0x3945dd){const _0xd33a72=_0x1028f8,_0x7ca46d=this[_0xd33a72(0x330)]();this['drawItemKeyData'](_0x7ca46d,_0x5db7bb,_0x447e04,_0x3945dd,!![]),this[_0xd33a72(0x47c)]();const _0x415748=this[_0xd33a72(0x3d3)](),_0x56fd91=ColorManager[_0xd33a72(0x2e8)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0xd33a72(0x5a7)][_0xd33a72(0x2f7)][_0xd33a72(0x321)]]);return this[_0xd33a72(0x5ba)](_0x56fd91),this[_0xd33a72(0x46c)](_0x415748,_0x5db7bb,_0x447e04,_0x3945dd,![],_0xd33a72(0x5b2)),this[_0xd33a72(0x3ac)](_0x5db7bb,_0x447e04,_0x3945dd),this[_0xd33a72(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x330)]=function(){const _0x2e62d1=_0x1028f8;return Imported[_0x2e62d1(0x41e)]&&DataManager['getDamageStyle'](this['_item'])!==_0x2e62d1(0x1e0)?this[_0x2e62d1(0x350)]():this[_0x2e62d1(0x2ca)]();},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x2ca)]=function(){const _0x60701d=_0x1028f8,_0x5cce40=VisuMZ[_0x60701d(0x2ae)][_0x60701d(0x1c0)][_0x60701d(0x41f)],_0x1a894f=_0x60701d(0x225)[_0x60701d(0x413)](this['_item']['damage'][_0x60701d(0x321)]),_0x156fc8=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this['_item'][_0x60701d(0x2f7)][_0x60701d(0x321)]];return _0x5cce40[_0x1a894f][_0x60701d(0x413)](_0x156fc8);},Window_ShopStatus['prototype'][_0x1028f8(0x47c)]=function(){const _0x5d7717=_0x1028f8,_0xe030a5=$gameActors[_0x5d7717(0x245)](0x1);this[_0x5d7717(0x36b)]=JsonEx[_0x5d7717(0x4cc)](_0xe030a5),this['_tempActorB']=JsonEx[_0x5d7717(0x4cc)](_0xe030a5);},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x3d3)]=function(){const _0x2f522c=_0x1028f8,_0x171e18=_0x2f522c(0x4ee);if(this[_0x2f522c(0x467)][_0x171e18])return this[_0x2f522c(0x467)][_0x171e18];return Imported[_0x2f522c(0x41e)]&&DataManager[_0x2f522c(0x224)](this[_0x2f522c(0x5a7)])!==_0x2f522c(0x1e0)?this['getItemDamageAmountTextBattleCore']():this['getItemDamageAmountTextOriginal']();},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x2d9)]=function(){const _0x902543=_0x1028f8;window['a']=this[_0x902543(0x36b)],window['b']=this[_0x902543(0x2d7)],this[_0x902543(0x36b)][_0x902543(0x46b)](!![]),this[_0x902543(0x2d7)]['setShopStatusWindowMode']([0x3,0x4][_0x902543(0x36e)](this[_0x902543(0x5a7)][_0x902543(0x2f7)][_0x902543(0x321)]));let _0x50e431=this['_item'][_0x902543(0x2f7)][_0x902543(0x2d2)];try{const _0x1db587=Math[_0x902543(0x35d)](eval(_0x50e431),0x0)/window['a'][_0x902543(0x570)];return this[_0x902543(0x5b7)](),isNaN(_0x1db587)?_0x902543(0x1f5):_0x902543(0x515)[_0x902543(0x413)](Math[_0x902543(0x49a)](_0x1db587*0x64));}catch(_0x56884a){return $gameTemp['isPlaytest']()&&(console[_0x902543(0x211)](_0x902543(0x33f)[_0x902543(0x413)](this['_item'][_0x902543(0x2c8)])),console[_0x902543(0x211)](_0x56884a)),this[_0x902543(0x5b7)](),'?????';}},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x5b7)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x567)]=function(_0x50156f,_0x4765e7,_0x1323e0){const _0x167bd2=_0x1028f8;if(!this['makeItemData']())return _0x4765e7;if(this[_0x167bd2(0x554)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x3ad)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x19d)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x454)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x1c8)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x38d)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x288)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this['drawItemEffectsAddedStatesBuffs'](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();if(this[_0x167bd2(0x2a4)](_0x50156f,_0x4765e7,_0x1323e0))_0x4765e7+=this[_0x167bd2(0x327)]();return this[_0x167bd2(0x1b9)](),_0x4765e7;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x2fe)]=function(){const _0x5c8c23=_0x1028f8;return this['_item'][_0x5c8c23(0x356)];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x451)]=function(){const _0x2824f6=_0x1028f8;let _0x92833e=![];this['_itemData']={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x460b31=this[_0x2824f6(0x2fe)]();for(const _0x4f70f5 of _0x460b31){switch(_0x4f70f5['code']){case Game_Action[_0x2824f6(0x437)]:this[_0x2824f6(0x4da)]['rateHP']+=_0x4f70f5[_0x2824f6(0x574)],this[_0x2824f6(0x4da)][_0x2824f6(0x3e4)]+=_0x4f70f5[_0x2824f6(0x592)],_0x92833e=!![];break;case Game_Action['EFFECT_RECOVER_MP']:this['_itemData']['rateMP']+=_0x4f70f5['value1'],this[_0x2824f6(0x4da)]['flatMP']+=_0x4f70f5[_0x2824f6(0x592)],_0x92833e=!![];break;case Game_Action[_0x2824f6(0x5ee)]:this[_0x2824f6(0x4da)]['gainTP']+=_0x4f70f5[_0x2824f6(0x574)],_0x92833e=!![];break;case Game_Action['EFFECT_ADD_STATE']:this[_0x2824f6(0x4da)][_0x2824f6(0x27e)][_0x2824f6(0x45e)](_0x4f70f5['dataId']),_0x92833e=!![];break;case Game_Action['EFFECT_REMOVE_STATE']:this[_0x2824f6(0x4da)][_0x2824f6(0x294)][_0x2824f6(0x45e)](_0x4f70f5[_0x2824f6(0x3e8)]),this[_0x2824f6(0x4da)]['removeStateBuffChanges']=!![],_0x92833e=!![];break;case Game_Action[_0x2824f6(0x573)]:this['_itemData'][_0x2824f6(0x549)][_0x4f70f5[_0x2824f6(0x3e8)]]+=0x1,_0x92833e=!![];break;case Game_Action['EFFECT_ADD_DEBUFF']:this[_0x2824f6(0x4da)][_0x2824f6(0x549)][_0x4f70f5[_0x2824f6(0x3e8)]]-=0x1,_0x92833e=!![];break;case Game_Action[_0x2824f6(0x23e)]:this['_itemData'][_0x2824f6(0x46a)][_0x2824f6(0x45e)](_0x4f70f5[_0x2824f6(0x3e8)]),this['_itemData']['removeStateBuffChanges']=!![],_0x92833e=!![];break;case Game_Action[_0x2824f6(0x30e)]:this['_itemData']['removeDebuff'][_0x2824f6(0x45e)](_0x4f70f5['dataId']),this[_0x2824f6(0x4da)]['removeStateBuffChanges']=!![],_0x92833e=!![];break;}}if(this['_itemData'][_0x2824f6(0x27e)][_0x2824f6(0x2fd)]>0x0)this[_0x2824f6(0x4da)]['addStateBuffChanges']=!![];for(let _0x2630af=0x0;_0x2630af<this[_0x2824f6(0x4da)][_0x2824f6(0x549)][_0x2824f6(0x2fd)];_0x2630af++){if(this[_0x2824f6(0x4da)][_0x2824f6(0x549)][_0x2630af]!==0x0)this[_0x2824f6(0x4da)][_0x2824f6(0x4a4)]=!![];}this['_item'][_0x2824f6(0x41b)]!==0x0&&(this['_itemData'][_0x2824f6(0x1cc)]=this[_0x2824f6(0x5a7)][_0x2824f6(0x41b)],_0x92833e=!![]);const _0x4d3515=[_0x2824f6(0x210),_0x2824f6(0x56c),_0x2824f6(0x399),_0x2824f6(0x375),_0x2824f6(0x296),_0x2824f6(0x397),'USER\x20TP\x20GAIN','ADDED\x20EFFECTS',_0x2824f6(0x572)];for(const _0x2932a0 of _0x4d3515){if(this[_0x2824f6(0x467)][_0x2932a0]){_0x92833e=!![];break;}}return _0x92833e;},Window_ShopStatus['prototype'][_0x1028f8(0x554)]=function(_0x23ee62,_0x3e14fb,_0x48d78c){const _0x3228e2=_0x1028f8,_0x2b588c=_0x3228e2(0x210);if(this[_0x3228e2(0x4da)][_0x3228e2(0x491)]<=0x0&&this[_0x3228e2(0x4da)]['flatHP']<=0x0&&!this[_0x3228e2(0x467)][_0x2b588c])return![];const _0x2fa939=this[_0x3228e2(0x4ef)]();this[_0x3228e2(0x46c)](_0x2fa939,_0x23ee62,_0x3e14fb,_0x48d78c,!![]);const _0x126a12=this[_0x3228e2(0x3d6)]();return this[_0x3228e2(0x5ba)](ColorManager['damageColor'](0x1)),this[_0x3228e2(0x46c)](_0x126a12,_0x23ee62,_0x3e14fb,_0x48d78c,![],_0x3228e2(0x5b2)),this[_0x3228e2(0x3ac)](_0x23ee62,_0x3e14fb,_0x48d78c),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemEffectsHpRecoveryLabel']=function(){const _0x32db92=_0x1028f8,_0x4ad565=VisuMZ[_0x32db92(0x2ae)][_0x32db92(0x1c0)][_0x32db92(0x41f)][_0x32db92(0x57a)];return _0x4ad565[_0x32db92(0x413)](TextManager['hp']);},Window_ShopStatus['prototype']['getItemEffectsHpRecoveryText']=function(){const _0x4095ed=_0x1028f8,_0x28ba06=_0x4095ed(0x210);if(this[_0x4095ed(0x467)][_0x28ba06])return this[_0x4095ed(0x467)][_0x28ba06];let _0x1fac29='';if(this[_0x4095ed(0x4da)][_0x4095ed(0x491)]>0x0)_0x1fac29+=_0x4095ed(0x3b1)['format'](Math[_0x4095ed(0x44c)](this[_0x4095ed(0x4da)][_0x4095ed(0x491)]*0x64));if(this[_0x4095ed(0x4da)][_0x4095ed(0x491)]>0x0&&this[_0x4095ed(0x4da)][_0x4095ed(0x3e4)]>0x0)_0x1fac29+='\x20';if(this[_0x4095ed(0x4da)][_0x4095ed(0x3e4)]>0x0)_0x1fac29+='+%1'[_0x4095ed(0x413)](this[_0x4095ed(0x4da)][_0x4095ed(0x3e4)]);return _0x1fac29;},Window_ShopStatus[_0x1028f8(0x5db)]['drawItemEffectsMpRecovery']=function(_0xe6df40,_0x4f0693,_0x58883d){const _0x1a23b6=_0x1028f8,_0x2aaa36=_0x1a23b6(0x56c);if(this['_itemData'][_0x1a23b6(0x4fa)]<=0x0&&this['_itemData'][_0x1a23b6(0x306)]<=0x0&&!this[_0x1a23b6(0x467)][_0x2aaa36])return![];const _0x5966de=this[_0x1a23b6(0x428)]();this[_0x1a23b6(0x46c)](_0x5966de,_0xe6df40,_0x4f0693,_0x58883d,!![]);const _0x1b0b92=this[_0x1a23b6(0x5b3)]();return this[_0x1a23b6(0x5ba)](ColorManager[_0x1a23b6(0x2e8)](0x3)),this[_0x1a23b6(0x46c)](_0x1b0b92,_0xe6df40,_0x4f0693,_0x58883d,![],'right'),this['drawItemDarkRect'](_0xe6df40,_0x4f0693,_0x58883d),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x428)]=function(){const _0x1db021=_0x1028f8,_0x4583b7=VisuMZ[_0x1db021(0x2ae)]['Settings'][_0x1db021(0x41f)][_0x1db021(0x4ca)];return _0x4583b7[_0x1db021(0x413)](TextManager['mp']);},Window_ShopStatus['prototype'][_0x1028f8(0x5b3)]=function(){const _0x272d05=_0x1028f8,_0x935673=_0x272d05(0x56c);if(this['_customItemInfo'][_0x935673])return this[_0x272d05(0x467)][_0x935673];let _0x590e7a='';if(this[_0x272d05(0x4da)][_0x272d05(0x4fa)]>0x0)_0x590e7a+=_0x272d05(0x3b1)[_0x272d05(0x413)](Math['floor'](this['_itemData'][_0x272d05(0x4fa)]*0x64));if(this[_0x272d05(0x4da)][_0x272d05(0x4fa)]>0x0&&this['_itemData'][_0x272d05(0x306)]>0x0)_0x590e7a+='\x20';if(this[_0x272d05(0x4da)]['flatMP']>0x0)_0x590e7a+=_0x272d05(0x222)['format'](this[_0x272d05(0x4da)][_0x272d05(0x306)]);return _0x590e7a;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x19d)]=function(_0x32b79f,_0x27e276,_0x364213){const _0x24643b=_0x1028f8,_0x38f4fb=_0x24643b(0x399);if(this[_0x24643b(0x4da)][_0x24643b(0x4d2)]<=0x0&&!this[_0x24643b(0x467)][_0x38f4fb])return![];const _0x1247a9=this[_0x24643b(0x55c)]();this['drawItemKeyData'](_0x1247a9,_0x32b79f,_0x27e276,_0x364213,!![]);const _0x42f0cb=this[_0x24643b(0x550)]();return this[_0x24643b(0x5ba)](ColorManager[_0x24643b(0x470)]()),this[_0x24643b(0x46c)](_0x42f0cb,_0x32b79f,_0x27e276,_0x364213,![],_0x24643b(0x5b2)),this[_0x24643b(0x3ac)](_0x32b79f,_0x27e276,_0x364213),this[_0x24643b(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x55c)]=function(){const _0x4c2427=_0x1028f8,_0x67d379=VisuMZ['ItemsEquipsCore'][_0x4c2427(0x1c0)]['StatusWindow'][_0x4c2427(0x531)];return _0x67d379[_0x4c2427(0x413)](TextManager['tp']);},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x550)]=function(){const _0x60427=_0x1028f8,_0x42fcf9=_0x60427(0x399);if(this[_0x60427(0x467)][_0x42fcf9])return this[_0x60427(0x467)][_0x42fcf9];let _0x15747d='';return _0x15747d+=_0x60427(0x222)[_0x60427(0x413)](this[_0x60427(0x4da)][_0x60427(0x4d2)]),_0x15747d;},Window_ShopStatus[_0x1028f8(0x5db)]['drawItemEffectsSelfTpGain']=function(_0x1ccaa4,_0x17926b,_0x24c238){const _0x2bdf47=_0x1028f8,_0x125718=_0x2bdf47(0x517);if(this[_0x2bdf47(0x4da)][_0x2bdf47(0x1cc)]===0x0&&!this[_0x2bdf47(0x467)][_0x125718])return![];const _0x4b8ea9=this['getItemEffectsSelfTpGainLabel']();this['drawItemKeyData'](_0x4b8ea9,_0x1ccaa4,_0x17926b,_0x24c238,!![]);const _0x470a67=this[_0x2bdf47(0x45a)]();return this[_0x2bdf47(0x4da)][_0x2bdf47(0x1cc)]>0x0?this[_0x2bdf47(0x5ba)](ColorManager[_0x2bdf47(0x470)]()):this[_0x2bdf47(0x5ba)](ColorManager[_0x2bdf47(0x299)]()),this[_0x2bdf47(0x46c)](_0x470a67,_0x1ccaa4,_0x17926b,_0x24c238,![],_0x2bdf47(0x5b2)),this[_0x2bdf47(0x3ac)](_0x1ccaa4,_0x17926b,_0x24c238),this[_0x2bdf47(0x1b9)](),!![];},Window_ShopStatus['prototype']['getItemEffectsSelfTpGainLabel']=function(){const _0x118b20=_0x1028f8,_0x12d5c9=VisuMZ['ItemsEquipsCore'][_0x118b20(0x1c0)][_0x118b20(0x41f)][_0x118b20(0x255)];return _0x12d5c9[_0x118b20(0x413)](TextManager['tp']);},Window_ShopStatus[_0x1028f8(0x5db)]['getItemEffectsSelfTpGainText']=function(){const _0x5cd023=_0x1028f8,_0x51ee04='USER\x20TP\x20GAIN';if(this[_0x5cd023(0x467)][_0x51ee04])return this[_0x5cd023(0x467)][_0x51ee04];let _0x5014c7='';return this[_0x5cd023(0x4da)][_0x5cd023(0x1cc)]>0x0?_0x5014c7+=_0x5cd023(0x222)[_0x5cd023(0x413)](this[_0x5cd023(0x4da)][_0x5cd023(0x1cc)]):_0x5014c7+='%1'[_0x5cd023(0x413)](this[_0x5cd023(0x4da)][_0x5cd023(0x1cc)]),_0x5014c7;},Window_ShopStatus['prototype'][_0x1028f8(0x454)]=function(_0x952d84,_0x212116,_0x2bb494){const _0xf3a9f1=_0x1028f8,_0x5e6989=_0xf3a9f1(0x375);if(this[_0xf3a9f1(0x4da)]['rateHP']>=0x0&&this[_0xf3a9f1(0x4da)][_0xf3a9f1(0x3e4)]>=0x0&&!this[_0xf3a9f1(0x467)][_0x5e6989])return![];const _0x49b39e=this[_0xf3a9f1(0x23a)]();this[_0xf3a9f1(0x46c)](_0x49b39e,_0x952d84,_0x212116,_0x2bb494,!![]);const _0x10d53b=this[_0xf3a9f1(0x1f4)]();return this['changeTextColor'](ColorManager[_0xf3a9f1(0x2e8)](0x0)),this[_0xf3a9f1(0x46c)](_0x10d53b,_0x952d84,_0x212116,_0x2bb494,![],_0xf3a9f1(0x5b2)),this[_0xf3a9f1(0x3ac)](_0x952d84,_0x212116,_0x2bb494),this[_0xf3a9f1(0x1b9)](),!![];},Window_ShopStatus['prototype'][_0x1028f8(0x23a)]=function(){const _0x100e58=_0x1028f8,_0x415c7d=VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow'][_0x100e58(0x5f1)];return _0x415c7d[_0x100e58(0x413)](TextManager['hp']);},Window_ShopStatus[_0x1028f8(0x5db)]['getItemEffectsHpDamageText']=function(){const _0x25e2fa=_0x1028f8,_0x5b146d=_0x25e2fa(0x375);if(this[_0x25e2fa(0x467)][_0x5b146d])return this[_0x25e2fa(0x467)][_0x5b146d];let _0x39c060='';if(this[_0x25e2fa(0x4da)][_0x25e2fa(0x491)]<0x0)_0x39c060+=_0x25e2fa(0x515)[_0x25e2fa(0x413)](Math['floor'](this[_0x25e2fa(0x4da)][_0x25e2fa(0x491)]*0x64));if(this[_0x25e2fa(0x4da)][_0x25e2fa(0x491)]<0x0&&this[_0x25e2fa(0x4da)][_0x25e2fa(0x3e4)]<0x0)_0x39c060+='\x20';if(this[_0x25e2fa(0x4da)][_0x25e2fa(0x3e4)]<0x0)_0x39c060+='%1'[_0x25e2fa(0x413)](this[_0x25e2fa(0x4da)][_0x25e2fa(0x3e4)]);return _0x39c060;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x1c8)]=function(_0x1e4e17,_0x54fc05,_0x1d5ff2){const _0x3699e5=_0x1028f8,_0x398545=_0x3699e5(0x296);if(this['_itemData'][_0x3699e5(0x4fa)]>=0x0&&this['_itemData'][_0x3699e5(0x306)]>=0x0&&!this[_0x3699e5(0x467)][_0x398545])return![];const _0x273641=this['getItemEffectsMpDamageLabel']();this[_0x3699e5(0x46c)](_0x273641,_0x1e4e17,_0x54fc05,_0x1d5ff2,!![]);const _0x5cdd30=this['getItemEffectsMpDamageText']();return this['changeTextColor'](ColorManager['damageColor'](0x2)),this[_0x3699e5(0x46c)](_0x5cdd30,_0x1e4e17,_0x54fc05,_0x1d5ff2,![],'right'),this[_0x3699e5(0x3ac)](_0x1e4e17,_0x54fc05,_0x1d5ff2),this[_0x3699e5(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x578)]=function(){const _0xfea2ba=_0x1028f8,_0x5c6477=VisuMZ[_0xfea2ba(0x2ae)][_0xfea2ba(0x1c0)][_0xfea2ba(0x41f)]['LabelDamageMP'];return _0x5c6477['format'](TextManager['mp']);},Window_ShopStatus['prototype'][_0x1028f8(0x21f)]=function(){const _0x1946dd=_0x1028f8,_0x4fb275='MP\x20DAMAGE';if(this['_customItemInfo'][_0x4fb275])return this[_0x1946dd(0x467)][_0x4fb275];let _0x254b6c='';if(this['_itemData']['rateMP']<0x0)_0x254b6c+='%1%'[_0x1946dd(0x413)](Math[_0x1946dd(0x44c)](this['_itemData'][_0x1946dd(0x4fa)]*0x64));if(this['_itemData'][_0x1946dd(0x4fa)]<0x0&&this[_0x1946dd(0x4da)]['flatMP']<0x0)_0x254b6c+='\x20';if(this[_0x1946dd(0x4da)][_0x1946dd(0x306)]<0x0)_0x254b6c+='%1'[_0x1946dd(0x413)](this['_itemData']['flatMP']);return _0x254b6c;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x38d)]=function(_0x2595d8,_0x4e405e,_0x8e1706){const _0xa8a3da=_0x1028f8,_0x53987e=_0xa8a3da(0x397);if(this['_itemData'][_0xa8a3da(0x4d2)]>=0x0&&!this[_0xa8a3da(0x467)][_0x53987e])return![];const _0x43f86c=this[_0xa8a3da(0x546)]();this[_0xa8a3da(0x46c)](_0x43f86c,_0x2595d8,_0x4e405e,_0x8e1706,!![]);const _0x381f2f=this[_0xa8a3da(0x272)]();return this['changeTextColor'](ColorManager['powerDownColor']()),this[_0xa8a3da(0x46c)](_0x381f2f,_0x2595d8,_0x4e405e,_0x8e1706,![],_0xa8a3da(0x5b2)),this['drawItemDarkRect'](_0x2595d8,_0x4e405e,_0x8e1706),this[_0xa8a3da(0x1b9)](),!![];},Window_ShopStatus['prototype']['getItemEffectsTpDamageLabel']=function(){const _0x51c45c=_0x1028f8,_0x4a3bd7=VisuMZ['ItemsEquipsCore'][_0x51c45c(0x1c0)][_0x51c45c(0x41f)]['LabelDamageTP'];return _0x4a3bd7[_0x51c45c(0x413)](TextManager['tp']);},Window_ShopStatus['prototype']['getItemEffectsTpDamageText']=function(){const _0x1ad33b=_0x1028f8,_0x3e5fce=_0x1ad33b(0x397);if(this[_0x1ad33b(0x467)][_0x3e5fce])return this[_0x1ad33b(0x467)][_0x3e5fce];let _0xbf33d6='';return _0xbf33d6+='%1'['format'](this[_0x1ad33b(0x4da)][_0x1ad33b(0x4d2)]),_0xbf33d6;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x1e3)]=function(_0x702cb3,_0x13f806,_0xe1b94e){const _0x481438=_0x1028f8,_0x4a6790=_0x481438(0x57c);if(!this['_itemData'][_0x481438(0x4a4)]&&!this['_customItemInfo'][_0x4a6790])return![];const _0x4d4fd1=this[_0x481438(0x417)]();if(_0x4d4fd1[_0x481438(0x2fd)]<=0x0)return![];const _0x3f3397=this[_0x481438(0x57b)]();return this[_0x481438(0x46c)](_0x3f3397,_0x702cb3,_0x13f806,_0xe1b94e,!![]),this[_0x481438(0x46c)](_0x4d4fd1,_0x702cb3,_0x13f806,_0xe1b94e,![],_0x481438(0x5b2)),this[_0x481438(0x3ac)](_0x702cb3,_0x13f806,_0xe1b94e),this[_0x481438(0x1b9)](),!![];},Window_ShopStatus[_0x1028f8(0x5db)]['getItemEffectsAddedStatesBuffsLabel']=function(){const _0x1baa6b=_0x1028f8;return VisuMZ['ItemsEquipsCore'][_0x1baa6b(0x1c0)]['StatusWindow']['LabelApply'];},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x417)]=function(){const _0x335f0a=_0x1028f8,_0xd452b6=_0x335f0a(0x57c);if(this[_0x335f0a(0x467)][_0xd452b6])return this[_0x335f0a(0x467)][_0xd452b6];let _0x22cd20='',_0x2c6b36=0x0;const _0x430f0f=0x8;for(const _0x5ad230 of this[_0x335f0a(0x4da)][_0x335f0a(0x27e)]){const _0x2c2122=$dataStates[_0x5ad230];if(_0x2c2122&&_0x2c2122[_0x335f0a(0x3cf)]>0x0){_0x22cd20+=_0x335f0a(0x354)[_0x335f0a(0x413)](_0x2c2122[_0x335f0a(0x3cf)]),_0x2c6b36++;if(_0x2c6b36>=_0x430f0f)return _0x22cd20;}}for(let _0x3018cd=0x0;_0x3018cd<this[_0x335f0a(0x4da)][_0x335f0a(0x549)][_0x335f0a(0x2fd)];_0x3018cd++){const _0x23d4bc=this[_0x335f0a(0x4da)]['changeBuff'][_0x3018cd],_0x3bf6e1=Game_BattlerBase[_0x335f0a(0x5db)][_0x335f0a(0x5dd)](_0x23d4bc,_0x3018cd);if(_0x3bf6e1>0x0){_0x22cd20+=_0x335f0a(0x354)[_0x335f0a(0x413)](_0x3bf6e1),_0x2c6b36++;if(_0x2c6b36>=_0x430f0f)return _0x22cd20;}}return _0x22cd20;},Window_ShopStatus['prototype'][_0x1028f8(0x2a4)]=function(_0x2176e4,_0x25b9be,_0x5b3bbc){const _0x460d24=_0x1028f8,_0x487427=_0x460d24(0x572);if(!this[_0x460d24(0x4da)][_0x460d24(0x376)]&&!this[_0x460d24(0x467)][_0x487427])return![];const _0x2f35a9=this[_0x460d24(0x221)]();this['drawItemKeyData'](_0x2f35a9,_0x2176e4,_0x25b9be,_0x5b3bbc,!![]);const _0x1abd36=this[_0x460d24(0x4d5)]();return this[_0x460d24(0x46c)](_0x1abd36,_0x2176e4,_0x25b9be,_0x5b3bbc,![],'right'),this[_0x460d24(0x3ac)](_0x2176e4,_0x25b9be,_0x5b3bbc),this[_0x460d24(0x1b9)](),!![];},Window_ShopStatus['prototype'][_0x1028f8(0x221)]=function(){const _0x44838e=_0x1028f8;return VisuMZ[_0x44838e(0x2ae)][_0x44838e(0x1c0)][_0x44838e(0x41f)]['LabelRemove'];},Window_ShopStatus['prototype']['getItemEffectsRemovedStatesBuffsText']=function(){const _0xef199b=_0x1028f8,_0x4bc3de='REMOVED\x20EFFECTS';if(this[_0xef199b(0x467)][_0x4bc3de])return this[_0xef199b(0x467)][_0x4bc3de];let _0x402d05='',_0x351334=0x0;const _0x1f5fa6=VisuMZ[_0xef199b(0x2ae)]['Settings'][_0xef199b(0x41f)][_0xef199b(0x402)];for(const _0x4b0442 of this[_0xef199b(0x4da)][_0xef199b(0x294)]){const _0x459e5a=$dataStates[_0x4b0442];if(_0x459e5a&&_0x459e5a['iconIndex']>0x0){_0x402d05+='\x5cI[%1]'[_0xef199b(0x413)](_0x459e5a[_0xef199b(0x3cf)]),_0x351334++;if(_0x351334>=_0x1f5fa6)return _0x402d05;}}for(let _0x4df170=0x0;_0x4df170<this[_0xef199b(0x4da)]['removeBuff'][_0xef199b(0x2fd)];_0x4df170++){const _0x10f0ab=this['_itemData'][_0xef199b(0x46a)][_0x4df170],_0x13acfb=Game_BattlerBase['prototype'][_0xef199b(0x5dd)](0x1,_0x10f0ab);if(_0x13acfb>0x0){_0x402d05+=_0xef199b(0x354)[_0xef199b(0x413)](_0x13acfb),_0x351334++;if(_0x351334>=_0x1f5fa6)return _0x402d05;}}for(let _0x5545b3=0x0;_0x5545b3<this[_0xef199b(0x4da)][_0xef199b(0x432)][_0xef199b(0x2fd)];_0x5545b3++){const _0x1382e7=this[_0xef199b(0x4da)]['removeDebuff'][_0x5545b3],_0x5d16df=Game_BattlerBase[_0xef199b(0x5db)][_0xef199b(0x5dd)](-0x1,_0x1382e7);if(_0x5d16df>0x0){_0x402d05+=_0xef199b(0x354)['format'](_0x5d16df),_0x351334++;if(_0x351334>=_0x1f5fa6)return _0x402d05;}}return _0x402d05;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x4ec)]=function(_0x187083,_0x4e96d0,_0x5c0dbf){const _0x195f5c=_0x1028f8;if(this[_0x195f5c(0x5a7)][_0x195f5c(0x358)]['match'](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x509546=String(RegExp['$1'])[_0x195f5c(0x424)](/[\r\n]+/);for(const _0x4d16ea of _0x509546){if(_0x4d16ea[_0x195f5c(0x3ce)](/(.*):[ ](.*)/i)){const _0x2dbb5e=String(RegExp['$1'])[_0x195f5c(0x2de)](),_0x1221c1=String(RegExp['$2'])[_0x195f5c(0x2de)]();this[_0x195f5c(0x5d2)](_0x2dbb5e,_0x1221c1,_0x187083,_0x4e96d0,_0x5c0dbf),_0x4e96d0+=this['lineHeight']();}}}return this['resetFontSettings'](),_0x4e96d0;},Window_ShopStatus[_0x1028f8(0x5db)][_0x1028f8(0x5d2)]=function(_0x30e8e9,_0x5571b5,_0x4e031d,_0x1f7e93,_0xa29348){const _0x17270e=_0x1028f8;this[_0x17270e(0x46c)](_0x30e8e9,_0x4e031d,_0x1f7e93,_0xa29348,!![]),this[_0x17270e(0x46c)](_0x5571b5,_0x4e031d,_0x1f7e93,_0xa29348,![],_0x17270e(0x5b2)),this['drawItemDarkRect'](_0x4e031d,_0x1f7e93,_0xa29348),this[_0x17270e(0x1b9)]();},Window_ShopStatus[_0x1028f8(0x5db)]['drawCustomShopGraphic']=function(){const _0x27e7c6=_0x1028f8;if(!this[_0x27e7c6(0x5a7)])return;const _0x4369c9=this['_item'][_0x27e7c6(0x358)],_0x4acabc=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x3400c0=_0x4369c9['match'](_0x4acabc);if(_0x3400c0)for(const _0x29c64d of _0x3400c0){_0x29c64d[_0x27e7c6(0x3ce)](_0x4acabc);const _0x1b0ffc=String(RegExp['$1'])[_0x27e7c6(0x2de)]()||'';if(_0x1b0ffc==='')continue;const _0xae6b9b=ImageManager[_0x27e7c6(0x3ea)](_0x1b0ffc);_0xae6b9b[_0x27e7c6(0x1da)](this[_0x27e7c6(0x30d)][_0x27e7c6(0x24b)](this,_0xae6b9b,this[_0x27e7c6(0x5a7)]));}},Window_ShopStatus[_0x1028f8(0x5db)]['drawCustomShopGraphicLoad']=function(_0x14b565,_0x4af58d){const _0x584007=_0x1028f8;if(this[_0x584007(0x5a7)]!==_0x4af58d)return;if(!_0x14b565)return;if(_0x14b565[_0x584007(0x371)]<=0x0||_0x14b565[_0x584007(0x56e)]<=0x0)return;const _0x276013=_0x4af58d[_0x584007(0x358)];let _0xc76d3c=_0x584007(0x43e);_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0xc76d3c=_0x584007(0x268));const _0x3a1f44=_0xc76d3c===_0x584007(0x43e)?this[_0x584007(0x4cd)]:this[_0x584007(0x587)];let _0xfe71e1=this['innerWidth'],_0x295c2e=this['innerHeight'];_0x276013['match'](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0xfe71e1=Number(RegExp['$1']));_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x295c2e=Number(RegExp['$1']));_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0xfe71e1=Number(RegExp['$1']),_0x295c2e=Number(RegExp['$2']));const _0x292238=Math[_0x584007(0x5bf)](0x1,_0xfe71e1/_0x14b565[_0x584007(0x371)],_0x295c2e/_0x14b565[_0x584007(0x56e)]);let _0x1dd2d4=0x0,_0x1e7ec0=0x0,_0x185b71=Math[_0x584007(0x44c)](_0x14b565[_0x584007(0x371)]*_0x292238),_0x3cd1fd=Math[_0x584007(0x44c)](_0x14b565[_0x584007(0x56e)]*_0x292238),_0x1bb98a=_0x584007(0x378);_0x276013['match'](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x1bb98a=String(RegExp['$1'])['toLowerCase']()[_0x584007(0x2de)]());if(_0x1bb98a==='left')_0x1dd2d4=0x0;else _0x1bb98a==='center'?_0x1dd2d4=Math[_0x584007(0x49a)]((this['innerWidth']-_0x185b71)/0x2):_0x1dd2d4=this[_0x584007(0x265)]-_0x185b71;let _0xd51e0a='middle';_0x276013['match'](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0xd51e0a=String(RegExp['$1'])[_0x584007(0x3b3)]()['trim']());if(_0xd51e0a===_0x584007(0x4f0))_0x1e7ec0=0x0;else _0xd51e0a===_0x584007(0x560)?_0x1e7ec0=Math[_0x584007(0x49a)]((this[_0x584007(0x31a)]-_0x3cd1fd)/0x2):_0x1e7ec0=this[_0x584007(0x31a)]-_0x3cd1fd;_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x1dd2d4+=Number(RegExp['$1']));_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x1e7ec0+=Number(RegExp['$1']));_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x1dd2d4+=Number(RegExp['$1']),_0x1e7ec0+=Number(RegExp['$2']));let _0x1cc738=0xff;if(_0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x1cc738=Number(RegExp['$1']);else _0x276013[_0x584007(0x3ce)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x1cc738=Math['round'](Number(RegExp['$1'])*0.01*0xff)[_0x584007(0x2a9)](0x0,0xff));_0x3a1f44[_0x584007(0x429)]=_0x1cc738,_0x3a1f44[_0x584007(0x361)](_0x14b565,0x0,0x0,_0x14b565[_0x584007(0x371)],_0x14b565['height'],_0x1dd2d4,_0x1e7ec0,_0x185b71,_0x3cd1fd),_0x3a1f44[_0x584007(0x429)]=0xff;},VisuMZ[_0x1028f8(0x2ae)][_0x1028f8(0x449)]=function(_0xc16fcb){const _0x180726=_0x1028f8;if(_0xc16fcb===null||typeof _0xc16fcb!=='object')return _0xc16fcb;const _0xeb725d=Array[_0x180726(0x21d)](_0xc16fcb)?[]:Object['create'](Object[_0x180726(0x3ed)](_0xc16fcb));for(const _0x1a514f in _0xc16fcb){Object[_0x180726(0x5db)][_0x180726(0x2df)]['call'](_0xc16fcb,_0x1a514f)&&(_0xeb725d[_0x1a514f]=typeof _0xc16fcb[_0x1a514f]===_0x180726(0x29a)&&_0xc16fcb[_0x1a514f]!==null?VisuMZ[_0x180726(0x2ae)]['deepCopy'](_0xc16fcb[_0x1a514f]):_0xc16fcb[_0x1a514f]);}return _0xeb725d;};