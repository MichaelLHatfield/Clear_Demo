//=============================================================================
// VisuStella MZ - Frontview Battle UI
// VisuMZ_3_FrontviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_FrontviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FrontviewBattleUI = VisuMZ.FrontviewBattleUI || {};
VisuMZ.FrontviewBattleUI.version = 1.16;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.16] [FrontviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Frontview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The plugin creates a more dedicated frontview Battle UI for RPG Maker MZ.
 * Design elements are made to be more visible and elegant at the same time,
 * while utilizing various effects like minor flashes and shaking to depict
 * changes like damage, recovery, and more. The in-battle command windows are
 * slightly altered to give a better feel while also providing enough room for
 * battle portraits to be used.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Frontview Battle UI" or "frontview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * The status UI elements appear at the bottom of the screen while providing
 *   portrait support from the side.
 * * Different portraits can be used for different types of skills or items.
 * * Lots of customization options to the adjust the status UI.
 * * The frontview UI can also be used on the map as a HUD.
 * * Despite this plugin being called "Frontview UI", it can also be used with
 *   sideview if the user decides to.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Face Dimensions
 * 
 * With the updated release of RPG Maker MZ 1.9.0, you can now change face
 * sizes within the database's system settings. However, this plugin's default
 * settings are geared towards the default face sizes of 144 x 144 pixels. If
 * you do wish to change their sizes, you will need to adjust this plugin's
 * Plugin Parameters accordingly to make the object offsets look correct. The
 * plugin will not automatically adjust them for you.
 * 
 * ---
 * 
 * Window Properties
 * 
 * With how the battle layout works, many of the command windows used in the
 * battle system will have preset and hardcoded properties to them in order to
 * maintain a specific aesthetic. These include columns, padding, and scaling
 * types to name a few.
 * 
 * Therefore, any plugins that may alter these effects may not have any effect
 * at all provided that this plugin is in a higher tier than those modifying
 * it. This is an intended change to maintain the aesthetic and is not a bug.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_ItemsEquipsCore
 *
 * Those using the Items and Equips Core plugin can have the Shop Status Window
 * be displayed during battle to show information regarding the skills/items
 * selected during input.
 *
 * ---
 *
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
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
 * === Portrait-Related Notetags ===
 * 
 * ---
 * 
 * <Battle Portrait: filename>
 *
 * - Used for: Actor Notetag
 * - Sets the battle portrait image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - This will override any menu images used for battle only.
 * 
 * ---
 *
 * <Frontview UI Portraits>
 *  key: filename
 *  key: filename
 *  key: filename
 * </Frontview UI Portraits>
 *
 * - Used for: Actor Notetags
 * - Allows varying portraits to be displayed when certain 'key' elements are
 *   selected or used.
 * - Replace 'key' with a setting from the following (without the quotes):
 *   - When performing actions (priority from top to bottom):
 *     - The exact name of the skill or item being used.
 *     - "Item" - When actor uses an item.
 *     - "Friendly" - When actor performs an action that targets allies.
 *     - "Certain Hit" - When actor uses an action that is Certain Hit type.
 *     - "Physical" - When actor uses an action that is Physical hit type.
 *     - "Magical" - When actor uses an action that is Magical hit type.
 *     - "Opponent" - When actor performs an action that targets enemies.
 *     - "Magic" - When actor performs a magic-type skill.
 *     - "Skill" - When actor performs a general skill.
 *     - "Normal" - Everything else.
 *     - "Default" - Everything else.
 *   - When choosing during input (priority from top to bottom):
 *     - The exact name of the skill or item being used.
 *     - The 'symbol' used for the command item.
 *       - "Attack", "Guard", "Skill", "Item", "Escape", "AutoBattle"
 *       - "Brave" - From VisuMZ_2_BattleSystemBTB
 *       - "Formation" - From VisuMZ_2_PartySystem
 *       - "WeaponSwap" - From VisuMZ_2_WeaponSwapSystem
 *       - "Boost" - From VisuMZ_3_BoostAction
 *       - "CombatLog" - From VisuMZ_4_CombatLog
 *     - "Normal" - Everything else.
 *     - "Default" - Everything else.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Show Frontview UI>
 * <Hide Frontview UI>
 *
 * - Used for: Map Notetags
 * - Show or hide the Frontview Battle UI when entering this specific map.
 * - The visibility can be changed via Plugin Command.
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
 * === Map UI Plugin Commands ===
 * 
 * ---
 *
 * Map UI: Text Popup (Actor)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets specific actors.
 *
 *   Actor ID(s):
 *   - Select the ID(s) of the actor(s) you want to target.
 *
 *   Text:
 *   - What text do you wish to display?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Text Popup (Party)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets party index. Index values start at 0.
 *
 *   Party Index(es):
 *   - Which party index to target?
 *   - Index values start at 0.
 *
 *   Text:
 *   - What text do you wish to display?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Variable Popup (Actor)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets specific actors.
 *
 *   Actor ID(s):
 *   - Select the ID(s) of the actor(s) you want to target.
 *
 *   Variable ID:
 *   - Get data from which variable to display as a popup?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Variable Popup (Party)
 * - Creates a variable data popup on the Frontview UI on map scene.
 * - Targets party index. Index values start at 0.
 *
 *   Party Index(es):
 *   - Which party index to target?
 *   - Index values start at 0.
 *
 *   Variable ID:
 *   - Get data from which variable to display as a popup?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Map Frontview UI Visibility
 * - Sets the visibility of the Frontview UI on the map scene.
 * - Requires the battle layout to be Frontview UI.
 *
 *   Visible?:
 *   - Sets visibility of the Frontview UI on current map scene.
 *   - Requires the battle layout to be Frontview UI.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status UI Settings Settings
 * ============================================================================
 *
 * Settings that alter the Status UI elements.
 *
 * ---
 *
 * Position
 * 
 *   Distance Buffer:
 *   - How many pixels of buffer range is there between status UI elements?
 * 
 *   Graphics Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   UI Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 *
 * Graphics > Background
 * 
 *   Show?:
 *   - This is the back image displayed for the graphics set.
 * 
 *   Filename:
 *   - If you don't want to use the pre-rendered background, pick a graphic
 *     from the /img/system/ folder.
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 * ---
 * 
 * Graphics > Face Graphic
 * 
 *   Show?:
 *   - This is the face image displayed for the graphics set.
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 * ---
 * 
 * Graphics > Face Mask
 * 
 *   Use?:
 *   - Use a mask for the face graphic?
 * 
 *   Filename:
 *   - If you don't want to use the pre-rendered face mask, pick a mask from
 *     the /img/system/ folder.
 * 
 *   Render:
 * 
 *     Distance Shift:
 *     - Determines the distance shift for the pre-rendered triangle.
 * 
 *     Color 1:
 *     Color 2:
 *     - Use #rrggbb for custom color.
 *     - Check your color here: https://htmlcolorcodes.com/
 * 
 *     Vertical Gradient:
 *     - Use a vertical gradient or a horizontal gradient?
 * 
 * ---
 * 
 * UI > Name
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > HP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > MP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > TP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > TPG Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > State Icon
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > State Overlay
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > Brave Points
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > Break Shields
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > Boost Points
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 *
 * Effects > Active Shift
 * 
 *   X Distance:
 *   - If an actor is the active battler, shift x value.
 *   - Negative: left. Positive: right.
 * 
 *     Shift Speed:
 *     - How many pixels should be shifted each frame?
 *     - 60 frames = 1 second.
 * 
 *   Y Distance:
 *   - If an actor is the active battler, shift y value.
 *   - Negative: up. Positive: down.
 * 
 *     Shift Speed:
 *     - How many pixels should be shifted each frame?
 *     - 60 frames = 1 second.
 * 
 * ---
 * 
 * Effects > Damage Shake
 * 
 *   Enable?:
 *   - Enable shake effects when taking HP damage?
 * 
 *   Duration:
 *   - How many frames should this effect last?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Effects > Misc
 * 
 *   Opacity Speed:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 * 
 *   Move Duration:
 *   - How many frames does it take to move?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Tint Colors
 * 
 *   Tint Duration:
 *   - How many frames do damage tints last?
 *   - 60 frames = 1 second.
 * 
 *   Selected:
 *   Inputting:
 *   HP Damage:
 *   HP Healing:
 *   MP Damage:
 *   MP Healing:
 *   TP Damage:
 *   TP Healing:
 *   - Tint color used for specific conditions.
 *   - Format: [Red, Green, Blue, Alpha]
 * 
 * ---
 * 
 * Tone Colors
 * 
 *   Dead Tone:
 *   Dying Tone:
 *   - Tone color used for dead/dying actors.
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Portrait Settings
 * ============================================================================
 *
 * Settings for in-battle portraits.
 *
 * ---
 *
 * Properties
 * 
 *   Flip Horizontally?:
 *   - Flip portraits horizontally?
 * 
 *   Horizontal Rate:
 *   - At what percentage of the screen should portraits show up?
 *   - 0.0 = Left, 0.5 = Center, 1.0 = Right.
 * 
 *   Portrait Scale:
 *   - At what scale are the portraits displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 *
 * Entrance Settings
 * 
 *   Enter Offset X:
 *   - How many pixels to offset the entrance point?
 *   - Negative: left. Positive: right.
 * 
 *   Enter Duration:
 *   - How many frames does it take to enter?
 *   - 60 frames = 1 second.
 *
 * ---
 *
 * Opacity Settings
 * 
 *   Action Fade Out:
 *   - How many frames to fade out portraits on action portraits?
 *   - 60 frames = 1 second. Use 0 to disable.
 * 
 *   Targeting Opacity:
 *   - What opacity should be used when targeting actors/enemies?
 *   - Use numbers from 0 to 255.
 * 
 *   Targeting Opacity:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 *
 * ---
 *
 * Frontview Settings
 * 
 *   Show During Input?:
 *   - Show portraits during input phase?
 * 
 *   Show During Action?:
 *   - Show portraits during actions?
 * 
 *   Target Actor Fade?:
 *   - Fade when targeting actors?
 * 
 *   Target Enemy Fade?:
 *   - Fade when targeting enemies?
 *
 * ---
 *
 * Sideview Settings
 * 
 *   Show During Input?:
 *   - Show portraits during input phase?
 * 
 *   Show During Action?:
 *   - Show portraits during actions?
 * 
 *   Target Actor Fade?:
 *   - Fade when targeting actors?
 * 
 *   Target Enemy Fade?:
 *   - Fade when targeting enemies?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Scene Settings
 * ============================================================================
 *
 * Settings for the battle scene.
 *
 * ---
 *
 * General
 * 
 *   Compact Width?:
 *   - Make the status area more compact or have it extend the full width of
 *     the screen?
 * 
 *   Command Help Window?:
 *   - Show the Help Window for Actor Command Window and Party Command Window?
 * 
 *   Edge Buffer:
 *   - How many pixels of buffer room should there be from the screen edge?
 * 
 *   Max Rows:
 *   - What is the maximum number of displayed rows for battle windows?
 * 
 *   Window Scale:
 *   - What scale should windows appear at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *   Show Cancel Button?:
 *   - Show/hide the cancel button in battle?
 * 
 *   Show Shop Status?:
 *   - Show/hide the shop status window in battle?
 *   - Requires VisuMZ_1_ItemsEquipsCore!
 *
 * ---
 *
 * Position
 * 
 *   Initial UI Position:
 *   - Determines the initial position of the status UI.
 * 
 *     Move Center?:
 *     - Move the status UI from the initial position to the center?
 * 
 *   Actor Command Window:
 *   Party Command Window:
 *   Item Window:
 *   Skill Window:
 *   - Determines the location of the specified window in battle.
 *
 * ---
 *
 * Animation Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the animation x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the animation y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Damage Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the damage popup x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the damage popup y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Base Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Stack Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Offsets the battler sprite positions when using Frontview Battle UI with
 * frontview ONLY. Does NOT apply to Sideview.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Frontview Battle UI with
 *     frontview ONLY.
 *   - NOT applied for Sideview.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Window Settings
 * ============================================================================
 *
 * Settings that alter the window settings in-battle.
 *
 * ---
 *
 * Window Widths
 * 
 *   Command Windows:
 *   Action Windows:
 *   - Type in the numeric value you want this width to be.
 *   - Otherwise, type "auto" to let the plugin adjust them.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Scene Settings
 * ============================================================================
 *
 * Settings for the map scene.
 *
 * ---
 *
 * General
 * 
 *   Show UI on Map?:
 *   - Show the frontview UI on the map by default?
 *   - Does NOT work with other battle layouts.
 * 
 *   Compact Width?:
 *   - Make the status area more compact or have it extend the full width of
 *     the screen?
 *
 * ---
 *
 * Position
 * 
 *   Initial UI Position:
 *   - Determines the initial position of the status UI.
 *
 * ---
 *
 * Fading
 * 
 *   Close Minimum Opacity:
 *   - Minimum opacity when the player is too close to the status window on the
 *     map screen.
 *
 * ---
 * 
 * Scaling
 * 
 *   Scale Ratio:
 *   - What is the scaling for this UI on the map scene?
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
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.16: May 15, 2025
 * * Compatibility Update!
 * ** Better compatibility with Visual Item Inventory. Update made by Arisu.
 * 
 * Version 1.15: April 17, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if an actor does not have Preserve TP and their TP
 *    changes on the map scene, the TP gauge does not reflect the new changes.
 *    Fix made by Arisu.
 * 
 * Version 1.14: February 20, 2025
 * * Documentation Update!
 * ** Help file updated "Major Changes" section:
 * *** Face Dimensions
 * **** With the updated release of RPG Maker MZ 1.9.0, you can now change face
 *      sizes within the database's system settings. However, this plugin's
 *      default settings are geared towards the default face sizes of 144 x 144
 *      pixels. If you do wish to change their sizes, you will need to adjust
 *      this plugin's Plugin Parameters accordingly to make the object offsets
 *      look correct. The plugin will not automatically adjust them for you.
 * 
 * Version 1.13: January 16, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Bug Fixes!
 * ** Fixed a bug where graphical updates did not update properly for FTB/ETB
 *    battle systems. Fix made by Olivia.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Battle Settings > Damage Offset
 * *** Parameters > Battle Settings > Damage Offset > Offset X
 * *** Parameters > Battle Settings > Damage Offset > Offset Y
 * **** How many pixels to offset the damage popup x/y position?
 * 
 * Version 1.12: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Window Settings > Window Widths > Command Windows
 * *** Parameters > Window Settings > Window Widths > Action Windows
 * **** Type in the numeric value you want this width to be.
 * **** Otherwise, type "auto" to let the plugin adjust them.
 * 
 * Version 1.11: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where on the map scene so that State Tooltips no longer
 *    appear if the Frontview Battle UI is not visible. Fix made by Olivia.
 * ** Fixed a bug where after turning off map visibility, State Tooltips didn't
 *    work properly in battle. Fix made by Olivia.
 * 
 * Version 1.10: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where in frontview, actor sprites temporarily appear
 *    when being damaged with certain plugin combinations.
 * * Feature Update!
 * ** The process of entering battle from the map will no longer cause the
 *    Frontview UI on the map to enter and exit out of transparency. Update
 *    made by Arisu.
 * 
 * Version 1.09: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a crash that would occur if no face graphics are used. Fix made
 *    by Irina.
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_AutoSkillTriggers.
 * ** Added better compatibility with VisuMZ_3_StateTooltips.
 * 
 * Version 1.08: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Break Shield icon is not showing. Fix by Olivia.
 * ** Fixed a bug where the touch hit box did not take into account the
 *    graphical offsets. Fix made by Olivia.
 * 
 * Version 1.07: July 13, 2023
 * * Feature Update!
 * ** When used together with VisuMZ_4_MultiLayerHpGauge, any visible enemy HP
 *    gauges will push down windows on a higher stack like item windows, skill
 *    windows, etc. in order to not obscure each other. Update by Olivia.
 * 
 * Version 1.06: June 15, 2023
 * * Bug Fixes!
 * ** If enemies are to go before an actor in battle, the animation will not
 *    play in the correct position. This should now be fixed. Fix by Olivia.
 * 
 * Version 1.05: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a visual issue with long actor names being cut off on the last
 *    letter. Fix made by Arisu.
 * 
 * Version 1.04: January 19, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would crash if you only have VisuMZ_1_ItemsEquipsCore
 *    installed but not the VisuMZ_1_SkillsStatesCore.
 * ** Fade Out event command will now hide the Frontview Battle UI on the map
 *    scene. This will not happen during battle. Fix made by Irina.
 * ** Fixed a bug that prevented the face sprites from being clickable when it
 *    came to selecting an actor as a target for items and skills in frontview.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** "Extra Features" section updated for "VisuMZ_1_ItemsEquipsCore"
 * *** Changed to the following:
 * **** Those using the Items and Equips Core plugin can have the Shop Status
 *      Window be displayed during battle to show information regarding the
 *      items selected during input. If you want this to appear for skills,
 *      too, make sure you also have VisuMZ_1_SkillsStatesCore installed.
 * 
 * Version 1.03: December 15, 2022
 * * Bug Fixes!
 * ** TPB battle systems with less than max characters should no longer crash
 *    the game. Fix made by Irina.
 * * Compatibility Update!
 * ** Now works properly with Combat Log and doesn't cause an extra window to
 *    appear suddenly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL.
 * *** Plugin Parameters > Battler Offset Settings
 * **** Offsets the battler sprite positions when using Frontview Battle UI
 *      with frontview ONLY. Does NOT apply for Sideview.
 * *** Plugin Parameters > Map Scene Settings > Scale Ratio
 * **** What is the scaling for this UI on the map scene?
 * 
 * Version 1.02: November 24, 2022
 * * Bug Fixes!
 * ** During the map phase, active up shift no longer occurs. Fix by Irina.
 * 
 * Version 1.01: November 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Battle Scene Settings > Command Help Window?
 * **** Show the Help Window for Actor Command Window and Party Command Window?
 *
 * Version 1.00 Official Release Date: December 5, 2022
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
 * @command MapUICustomTextActor
 * @text Map UI: Text Popup (Actor)
 * @desc Creates a custom text popup on the Frontview UI on map scene.
 * Targets specific actors.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select the ID(s) of the actor(s) you want to target.
 * @default ["1"]
 * 
 * @arg Text:str
 * @text Text
 * @desc What text do you wish to display?
 * @default Text
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomTextParty
 * @text Map UI: Text Popup (Party)
 * @desc Creates a custom text popup on the Frontview UI on map scene.
 * Targets party index. Index values start at 0.
 *
 * @arg Index:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Which party index to target?
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Text:str
 * @text Text
 * @desc What text do you wish to display?
 * @default Text
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomVariableActor
 * @text Map UI: Variable Popup (Actor)
 * @desc Creates a variable data popup on the Frontview UI on map scene.
 * Targets specific actors.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select the ID(s) of the actor(s) you want to target.
 * @default ["1"]
 * 
 * @arg Variable:num
 * @text Variable ID
 * @type variable
 * @desc Get data from which variable to display as a popup?
 * @default 1
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomVariableParty
 * @text Map UI: Variable Popup (Party)
 * @desc Creates a variable data popup on the Frontview UI on map scene.
 * Targets party index. Index values start at 0.
 *
 * @arg Index:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Which party index to target?
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Variable:num
 * @text Variable ID
 * @type variable
 * @desc Get data from which variable to display as a popup?
 * @default 1
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemMapUiVisibility
 * @text System: Map Frontview UI Visibility
 * @desc Sets the visibility of the Frontview UI on current map scene.
 * Requires the battle layout to be Frontview UI.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Sets visibility of the Frontview UI on current map scene.
 * Requires the battle layout to be Frontview UI.
 * @default true
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
 * @param FrontviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusUI:struct
 * @text Status UI Settings
 * @type struct<StatusUI>
 * @desc Settings that alter the Status UI elements.
 * @default {"Position":"","DistanceBuffer:num":"32","GraphicsOffset":"","GraphicsOffsetX:num":"+0","GraphicsOffsetY:num":"-128","UiOffset":"","UiOffsetX:num":"+0","UiOffsetY:num":"-128","Graphics":"","GraphicsBackground":"","GraphicsBackgroundShow:eval":"true","GraphicsBackgroundFilename:str":"","GraphicsBackgroundOffset":"","GraphicsBackgroundOffsetX:num":"+0","GraphicsBackgroundOffsetY:num":"+0","GraphicsFaceMaskFilename:str":"","GraphicsFace":"","GraphicsFaceShow:eval":"true","GraphicsFaceOffset":"","GraphicsFaceOffsetX:num":"+0","GraphicsFaceOffsetY:num":"+0","GraphicsFaceMask":"","GraphicsFaceMaskUse:eval":"true","GraphicsFaceMaskRender":"","GraphicsFaceMaskShift:num":"48","GraphicsFaceMaskColor1:str":"#00aeef","GraphicsFaceMaskColor2:str":"#000000","GraphicsFaceMaskVertGradient:eval":"true","UI":"","UI_Name":"","UI_Name_Show:eval":"true","UI_Name_Angle:num":"18","UI_Name_Offset":"","UI_Name_OffsetX:num":"-8","UI_Name_OffsetY:num":"-60","UI_Name_Scale:num":"0.80","UI_HpGauge":"","UI_HpGauge_Show:eval":"true","UI_HpGauge_Angle:num":"18","UI_HpGauge_Offset":"","UI_HpGauge_OffsetX:num":"-8","UI_HpGauge_OffsetY:num":"+48","UI_HpGauge_Scale:num":"0.80","UI_MpGauge":"","UI_MpGauge_Show:eval":"true","UI_MpGauge_Angle:num":"18","UI_MpGauge_Offset":"","UI_MpGauge_OffsetX:num":"-20","UI_MpGauge_OffsetY:num":"72","UI_MpGauge_Scale:num":"0.80","UI_TpGauge":"","UI_TpGauge_Show:eval":"true","UI_TpGauge_Angle:num":"18","UI_TpGauge_Offset":"","UI_TpGauge_OffsetX:num":"-32","UI_TpGauge_OffsetY:num":"+96","UI_TpGauge_Scale:num":"0.80","UI_TpbGauge":"","UI_TpbGauge_Show:eval":"true","UI_TpbGauge_Angle:num":"18","UI_TpbGauge_Offset":"","UI_TpbGauge_OffsetX:num":"-61","UI_TpbGauge_OffsetY:num":"-36","UI_TpbGauge_Scale:num":"0.80","UI_StatesIcon":"","UI_StatesIcon_Show:eval":"true","UI_StatesIcon_Offset":"","UI_StatesIcon_OffsetX:num":"-52","UI_StatesIcon_OffsetY:num":"92","UI_StatesOverlay":"","UI_StatesOverlay_Show:eval":"true","UI_StatesOverlay_Offset":"","UI_StatesOverlay_OffsetX:num":"+0","UI_StatesOverlay_OffsetY:num":"+0","UI_AggroGauge":"","UI_AggroGauge_Show:eval":"true","UI_AggroGauge_Angle:num":"72","UI_AggroGauge_Offset":"","UI_AggroGauge_OffsetX:num":"-88","UI_AggroGauge_OffsetY:num":"+60","UI_AggroGauge_Scale:num":"0.6","UI_BravePoints":"","UI_BravePoints_Show:eval":"true","UI_BravePoints_Offset":"","UI_BravePoints_OffsetX:num":"+72","UI_BravePoints_OffsetY:num":"-36","UI_BravePoints_Scale:num":"1.0","UI_BreakShields":"","UI_BreakShields_Show:eval":"true","UI_BreakShields_Offset":"","UI_BreakShields_OffsetX:num":"-52","UI_BreakShields_OffsetY:num":"+60","UI_BoostPoints":"","UI_BoostPoints_Show:eval":"true","UI_BoostPoints_Angle:num":"-45","UI_BoostPoints_Offset":"","UI_BoostPoints_OffsetX:num":"+24","UI_BoostPoints_OffsetY:num":"-45","UI_BoostPoints_Scale:num":"0.80","Effects":"","ActiveShift":"","ActiveShiftX:num":"+0","ActiveShiftXSpeed:num":"2","ActiveShiftY:num":"-24","ActiveShiftYSpeed:num":"2","DamageShake":"","DamageShakeEnabled:eval":"true","DamageShakeDuration:num":"24","OpacitySpeed:num":"16","MoveDuration:num":"24","TintColors":"","DamageDuration:num":"60","Selected:eval":"[255, 255, 255, 64]","Inputting:eval":"[0, 255, 255, 64]","HpDamage:eval":"[255, 0, 0, 128]","HpHealing:eval":"[0, 255, 128, 128]","MpDamage:eval":"[128, 0, 255, 128]","MpHealing:eval":"[0, 128, 255, 128]","TpDamage:eval":"[128, 255, 0, 32]","TpHealing:eval":"[0, 255, 0, 32]","ToneColors":"","DeadTone:eval":"[0, 0, 0, 255]","DyingTone:eval":"[0, -64, -64, 64]"}
 *
 * @param Portrait:struct
 * @text Portrait Settings
 * @type struct<Portrait>
 * @desc Settings for in-battle portraits.
 * @default {"Properties":"","HorzRate:num":"0.85","Scale:num":"1.0","Entrance":"","EnterOffset:num":"+64","EnterDuration:num":"20","Fade":"","ActionFadeOut:num":"20","TargetOpacity:num":"64","OpacitySpeed:num":"16","Frontview":"","HorzFlip:eval":"false","FrontviewInput:eval":"true","FrontviewSubject:eval":"true","FrontviewTargetActor:eval":"false","FrontviewTargetEnemy:eval":"true","Sideview":"","SideviewInput:eval":"true","SideviewSubject:eval":"false","SideviewTargetActor:eval":"true","SideviewTargetEnemy:eval":"false"}
 *
 * @param Battle:struct
 * @text Battle Scene Settings
 * @type struct<Battle>
 * @desc Settings for the battle scene.
 * @default {"General":"","CompactWidth:eval":"true","EdgeBuffer:num":"60","MaxRows:num":"8","WindowScale:num":"0.75","ShowCancelButton:eval":"false","ShowShopStatus:eval":"true","Position":"","InitialUiPosition:str":"right","MoveCenter:eval":"true","Window_ActorCommand:str":"left","Window_PartyCommand:str":"left","Window_ItemList_Pos:str":"left","Window_SkillList_Pos:str":"left","AniOffset":"","AniOffsetX:num":"+0","AniOffsetY:num":"+32","BaseOffset":"","BaseOffsetX:num":"+0","BaseOffsetY:num":"+18","StackOffset":"","StackOffsetX:num":"+16","StackOffsetY:num":"+16"}
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @parent Battle:struct
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Frontview Battle UI with frontview ONLY. NOT Sideview.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"-96"}
 *
 * @param Window:struct
 * @text Battle Window Settings
 * @parent Battle:struct
 * @type struct<Window>
 * @desc Settings that alter the window settings in-battle.
 * @default {"WindowWidth":"","CommandWindows:str":"auto","ItemWindows:str":"auto"}
 *
 * @param Map:struct
 * @text Map Scene Settings
 * @type struct<Map>
 * @desc Settings for the map scene.
 * @default {"General":"","ShowUiOnMap:eval":"true","CompactWidth:eval":"true","Position":"","InitialUiPosition:str":"left","Fading":"","MinProxOpacity:num":"128","Scaling":"","Scale:num":"1.0"}
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
 * Status UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusUI:
 *
 * @param Position
 *
 * @param DistanceBuffer:num
 * @text Distance Buffer
 * @parent Position
 * @type number
 * @min 0
 * @desc How many pixels of buffer range is there between status UI elements?
 * @default 32
 *
 * @param GraphicsOffset
 * @text Graphics Offset
 * @parent Position
 *
 * @param GraphicsOffsetX:num
 * @text Offset X
 * @parent GraphicsOffset
 * @desc How many pixels to offset the graphics x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsOffsetY:num
 * @text Offset Y
 * @parent GraphicsOffset
 * @desc How many pixels to offset the graphics y position?
 * Negative: up. Positive: down.
 * @default -128
 *
 * @param UiOffset
 * @text UI Offset
 * @parent Position
 *
 * @param UiOffsetX:num
 * @text Offset X
 * @parent UiOffset
 * @desc How many pixels to offset the UI x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UiOffsetY:num
 * @text Offset Y
 * @parent UiOffset
 * @desc How many pixels to offset the UI y position?
 * Negative: up. Positive: down.
 * @default -128
 *
 * @param Graphics
 * @text Graphics
 *
 * @param GraphicsBackground
 * @text Background
 * @parent Graphics
 *
 * @param GraphicsBackgroundShow:eval
 * @text Show?
 * @parent GraphicsBackground
 * @type boolean
 * @on Show
 * @off Hide
 * @desc This is the back image displayed for the graphics set.
 * @default true
 *
 * @param GraphicsBackgroundFilename:str
 * @text Filename
 * @parent GraphicsBackground
 * @type file
 * @dir img/system/
 * @require 1
 * @desc If you don't want to use the pre-rendered background,
 * pick a graphic from the /img/system/ folder.
 * @default 
 *
 * @param GraphicsBackgroundOffset
 * @text Offset
 * @parent GraphicsBackground
 *
 * @param GraphicsBackgroundOffsetX:num
 * @text Offset X
 * @parent GraphicsBackgroundOffset
 * @desc How many pixels to offset the background x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsBackgroundOffsetY:num
 * @text Offset Y
 * @parent GraphicsBackgroundOffset
 * @desc How many pixels to offset the background y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GraphicsFace
 * @text Face Graphic
 * @parent Graphics
 *
 * @param GraphicsFaceShow:eval
 * @text Show?
 * @parent GraphicsFace
 * @type boolean
 * @on Show
 * @off Hide
 * @desc This is the face image displayed for the graphics set.
 * @default true
 *
 * @param GraphicsFaceOffset
 * @text Offset
 * @parent GraphicsFace
 *
 * @param GraphicsFaceOffsetX:num
 * @text Offset X
 * @parent GraphicsFaceOffset
 * @desc How many pixels to offset the face x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsFaceOffsetY:num
 * @text Offset Y
 * @parent GraphicsFaceOffset
 * @desc How many pixels to offset the face y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GraphicsFaceMask
 * @text Face Mask
 * @parent Graphics
 *
 * @param GraphicsFaceMaskUse:eval
 * @text Use?
 * @parent GraphicsFaceMask
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use a mask for the face graphic?
 * @default true
 *
 * @param GraphicsFaceMaskFilename:str
 * @text Filename
 * @parent GraphicsBackground
 * @type file
 * @dir img/system/
 * @require 1
 * @desc If you don't want to use the pre-rendered face mask,
 * pick a mask from the /img/system/ folder.
 * @default 
 *
 * @param GraphicsFaceMaskRender
 * @text Render
 * @parent GraphicsFaceMask
 *
 * @param GraphicsFaceMaskShift:num
 * @text Distance Shift
 * @parent GraphicsFaceMaskRender
 * @desc Determines the distance shift for the pre-rendered triangle.
 * @default 48
 *
 * @param GraphicsFaceMaskColor1:str
 * @text Color 1
 * @parent GraphicsFaceMaskRender
 * @desc Use #rrggbb for custom color.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00aeef
 *
 * @param GraphicsFaceMaskColor2:str
 * @text Color 2
 * @parent GraphicsFaceMaskRender
 * @desc Use #rrggbb for custom color.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param GraphicsFaceMaskVertGradient:eval
 * @text Vertical Gradient
 * @parent GraphicsFaceMaskRender
 * @type boolean
 * @on Vertical Gradient
 * @off Horizontal Gradient
 * @desc Use a vertical gradient or a horizontal gradient?
 * @default true
 *
 * @param UI
 * @text UI
 *
 * @param UI_Name
 * @text Name
 * @parent UI
 *
 * @param UI_Name_Show:eval
 * @text Show?
 * @parent UI_Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_Name_Angle:num
 * @text Angle
 * @parent UI_Name
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_Name_Offset
 * @text Offset
 * @parent UI_Name
 *
 * @param UI_Name_OffsetX:num
 * @text Offset X
 * @parent UI_Name_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -8
 *
 * @param UI_Name_OffsetY:num
 * @text Offset Y
 * @parent UI_Name_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -60
 *
 * @param UI_Name_Scale:num
 * @text Scale
 * @parent UI_Name
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_HpGauge
 * @text HP Gauge
 * @parent UI
 *
 * @param UI_HpGauge_Show:eval
 * @text Show?
 * @parent UI_HpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_HpGauge_Angle:num
 * @text Angle
 * @parent UI_HpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_HpGauge_Offset
 * @text Offset
 * @parent UI_HpGauge
 *
 * @param UI_HpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_HpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -8
 *
 * @param UI_HpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_HpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +48
 *
 * @param UI_HpGauge_Scale:num
 * @text Scale
 * @parent UI_HpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_MpGauge
 * @text MP Gauge
 * @parent UI
 *
 * @param UI_MpGauge_Show:eval
 * @text Show?
 * @parent UI_MpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_MpGauge_Angle:num
 * @text Angle
 * @parent UI_MpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_MpGauge_Offset
 * @text Offset
 * @parent UI_MpGauge
 *
 * @param UI_MpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_MpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -20
 *
 * @param UI_MpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_MpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default 72
 *
 * @param UI_MpGauge_Scale:num
 * @text Scale
 * @parent UI_MpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_TpGauge
 * @text TP Gauge
 * @parent UI
 *
 * @param UI_TpGauge_Show:eval
 * @text Show?
 * @parent UI_TpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_TpGauge_Angle:num
 * @text Angle
 * @parent UI_TpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_TpGauge_Offset
 * @text Offset
 * @parent UI_TpGauge
 *
 * @param UI_TpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_TpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -32
 *
 * @param UI_TpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_TpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +96
 *
 * @param UI_TpGauge_Scale:num
 * @text Scale
 * @parent UI_TpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_TpbGauge
 * @text TPB/ATB Gauge
 * @parent UI
 *
 * @param UI_TpbGauge_Show:eval
 * @text Show?
 * @parent UI_TpbGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_TpbGauge_Angle:num
 * @text Angle
 * @parent UI_TpbGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_TpbGauge_Offset
 * @text Offset
 * @parent UI_TpbGauge
 *
 * @param UI_TpbGauge_OffsetX:num
 * @text Offset X
 * @parent UI_TpbGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -61
 *
 * @param UI_TpbGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_TpbGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -36
 *
 * @param UI_TpbGauge_Scale:num
 * @text Scale
 * @parent UI_TpbGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_StatesIcon
 * @text State Icon
 * @parent UI
 *
 * @param UI_StatesIcon_Show:eval
 * @text Show?
 * @parent UI_StatesIcon
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_StatesIcon_Offset
 * @text Offset
 * @parent UI_StatesIcon
 *
 * @param UI_StatesIcon_OffsetX:num
 * @text Offset X
 * @parent UI_StatesIcon_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -52
 *
 * @param UI_StatesIcon_OffsetY:num
 * @text Offset Y
 * @parent UI_StatesIcon_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default 92
 *
 * @param UI_StatesOverlay
 * @text State Overlay
 * @parent UI
 *
 * @param UI_StatesOverlay_Show:eval
 * @text Show?
 * @parent UI_StatesOverlay
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_StatesOverlay_Offset
 * @text Offset
 * @parent UI_StatesOverlay
 *
 * @param UI_StatesOverlay_OffsetX:num
 * @text Offset X
 * @parent UI_StatesOverlay_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UI_StatesOverlay_OffsetY:num
 * @text Offset Y
 * @parent UI_StatesOverlay_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param UI_AggroGauge
 * @text Aggro Gauge
 * @parent UI
 *
 * @param UI_AggroGauge_Show:eval
 * @text Show?
 * @parent UI_AggroGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_AggroGauge_Angle:num
 * @text Angle
 * @parent UI_AggroGauge
 * @desc What angle should this element be displayed at?
 * @default 72
 *
 * @param UI_AggroGauge_Offset
 * @text Offset
 * @parent UI_AggroGauge
 *
 * @param UI_AggroGauge_OffsetX:num
 * @text Offset X
 * @parent UI_AggroGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -88
 *
 * @param UI_AggroGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_AggroGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param UI_AggroGauge_Scale:num
 * @text Scale
 * @parent UI_AggroGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.6
 *
 * @param UI_BravePoints
 * @text Brave Points
 * @parent UI
 *
 * @param UI_BravePoints_Show:eval
 * @text Show?
 * @parent UI_BravePoints
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BravePoints_Offset
 * @text Offset
 * @parent UI_BravePoints
 *
 * @param UI_BravePoints_OffsetX:num
 * @text Offset X
 * @parent UI_BravePoints_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +72
 *
 * @param UI_BravePoints_OffsetY:num
 * @text Offset Y
 * @parent UI_BravePoints_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -36
 *
 * @param UI_BravePoints_Scale:num
 * @text Scale
 * @parent UI_BravePoints
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 1.0
 *
 * @param UI_BreakShields
 * @text Break Shields
 * @parent UI
 *
 * @param UI_BreakShields_Show:eval
 * @text Show?
 * @parent UI_BreakShields
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BreakShields_Offset
 * @text Offset
 * @parent UI_BreakShields
 *
 * @param UI_BreakShields_OffsetX:num
 * @text Offset X
 * @parent UI_BreakShields_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -52
 *
 * @param UI_BreakShields_OffsetY:num
 * @text Offset Y
 * @parent UI_BreakShields_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param UI_BoostPoints
 * @text Boost Points
 * @parent UI
 *
 * @param UI_BoostPoints_Show:eval
 * @text Show?
 * @parent UI_BoostPoints
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BoostPoints_Angle:num
 * @text Angle
 * @parent UI_BoostPoints
 * @desc What angle should this element be displayed at?
 * @default -45
 *
 * @param UI_BoostPoints_Offset
 * @text Offset
 * @parent UI_BoostPoints
 *
 * @param UI_BoostPoints_OffsetX:num
 * @text Offset X
 * @parent UI_BoostPoints_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +24
 *
 * @param UI_BoostPoints_OffsetY:num
 * @text Offset Y
 * @parent UI_BoostPoints_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -45
 *
 * @param UI_BoostPoints_Scale:num
 * @text Scale
 * @parent UI_Scale
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 * 
 * @param Effects
 *
 * @param ActiveShift
 * @text Active Shift
 * @parent Effects
 *
 * @param ActiveShiftX:num
 * @text X Distance
 * @parent ActiveShift
 * @desc If an actor is the active battler, shift x value.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ActiveShiftXSpeed:num
 * @text Shift Speed
 * @parent ActiveShiftX:num
 * @type number
 * @min 1
 * @desc How many pixels should be shifted each frame?
 * 60 frames = 1 second.
 * @default 2
 *
 * @param ActiveShiftY:num
 * @text Y Distance
 * @parent ActiveShift
 * @desc If an actor is the active battler, shift y value.
 * Negative: up. Positive: down.
 * @default -24
 *
 * @param ActiveShiftYSpeed:num
 * @text Shift Speed
 * @parent ActiveShiftY:num
 * @type number
 * @min 1
 * @desc How many pixels should be shifted each frame?
 * 60 frames = 1 second.
 * @default 2
 *
 * @param DamageShake
 * @text Damage Shake
 * @parent Effects
 *
 * @param DamageShakeEnabled:eval
 * @text Enable?
 * @parent DamageShake
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable shake effects when taking HP damage?
 * @default true
 *
 * @param DamageShakeDuration:num
 * @text Duration
 * @parent DamageShake
 * @type number
 * @min 1
 * @desc How many frames should this effect last?
 * 60 frames = 1 second.
 * @default 24
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Effects
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param MoveDuration:num
 * @text Move Duration
 * @parent Effects
 * @desc How many frames does it take to move?
 * 60 frames = 1 second.
 * @default 24
 * 
 * @param TintColors
 * @text Tint Colors
 *
 * @param DamageDuration:num
 * @text Tint Duration
 * @parent TintColors
 * @desc How many frames do damage tints last?
 * 60 frames = 1 second.
 * @default 60
 *
 * @param Selected:eval
 * @text Selected
 * @parent TintColors
 * @desc Tint color used for selected actors.
 * Format: [Red, Green, Blue, Alpha]
 * @default [255, 255, 255, 64]
 *
 * @param Inputting:eval
 * @text Inputting
 * @parent TintColors
 * @desc Tint color used for inputting actors.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 255, 64]
 *
 * @param HpDamage:eval
 * @text HP Damage
 * @parent TintColors
 * @desc Tint color used for HP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [255, 0, 0, 128]
 *
 * @param HpHealing:eval
 * @text HP Healing
 * @parent TintColors
 * @desc Tint color used for HP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 128, 128]
 *
 * @param MpDamage:eval
 * @text MP Damage
 * @parent TintColors
 * @desc Tint color used for MP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [128, 0, 255, 128]
 *
 * @param MpHealing:eval
 * @text MP Healing
 * @parent TintColors
 * @desc Tint color used for MP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 128, 255, 128]
 *
 * @param TpDamage:eval
 * @text TP Damage
 * @parent TintColors
 * @desc Tint color used for TP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [128, 255, 0, 32]
 *
 * @param TpHealing:eval
 * @text TP Healing
 * @parent TintColors
 * @desc Tint color used for TP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 0, 32]
 * 
 * @param ToneColors
 * @text Tone Colors
 *
 * @param DeadTone:eval
 * @text Dead Tone
 * @parent ToneColors
 * @desc Tone color used for dead actors.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @param DyingTone:eval
 * @text Dying Tone
 * @parent ToneColors
 * @desc Tone color used for dying actors.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, -64, -64, 64]
 *
 */
/* ----------------------------------------------------------------------------
 * Portrait Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Portrait:
 *
 * @param Properties
 *
 * @param HorzFlip:eval
 * @text Flip Horizontally?
 * @parent Frontview
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip portraits horizontally?
 * @default false
 *
 * @param HorzRate:num
 * @text Horizontal Rate
 * @parent Properties
 * @desc At what percentage of the screen should portraits show up?
 * 0.0 = Left, 0.5 = Center, 1.0 = Right.
 * @default 0.85
 *
 * @param Scale:num
 * @text Portrait Scale
 * @parent Properties
 * @desc At what scale are the portraits displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 1.0
 *
 * @param Entrance
 * @text Entrance Settings
 *
 * @param EnterOffset:num
 * @text Enter Offset X
 * @parent Entrance
 * @desc How many pixels to offset the entrance point?
 * Negative: left. Positive: right.
 * @default +64
 *
 * @param EnterDuration:num
 * @text Enter Duration
 * @parent Entrance
 * @desc How many frames does it take to enter?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param Fade
 * @text Opacity Settings
 *
 * @param ActionFadeOut:num
 * @text Action Fade Out
 * @parent Fade
 * @desc How many frames to fade out portraits on action portraits?
 * 60 frames = 1 second. Use 0 to disable.
 * @default 20
 *
 * @param TargetOpacity:num
 * @text Targeting Opacity
 * @parent Fade
 * @desc What opacity should be used when targeting actors/enemies?
 * Use numbers from 0 to 255.
 * @default 64
 *
 * @param OpacitySpeed:num
 * @text Targeting Opacity
 * @parent Fade
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param Frontview
 * @text Frontview Settings
 *
 * @param FrontviewInput:eval
 * @text Show During Input?
 * @parent Frontview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during input phase?
 * @default true
 *
 * @param FrontviewSubject:eval
 * @text Show During Action?
 * @parent Frontview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during actions?
 * @default true
 *
 * @param FrontviewTargetActor:eval
 * @text Target Actor Fade?
 * @parent Frontview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting actors?
 * @default false
 *
 * @param FrontviewTargetEnemy:eval
 * @text Target Enemy Fade?
 * @parent Frontview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting enemies?
 * @default true
 *
 * @param Sideview
 * @text Sideview Settings
 *
 * @param SideviewInput:eval
 * @text Show During Input?
 * @parent Sideview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during input phase?
 * @default true
 *
 * @param SideviewSubject:eval
 * @text Show During Action?
 * @parent Sideview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during actions?
 * @default false
 *
 * @param SideviewTargetActor:eval
 * @text Target Actor Fade?
 * @parent Sideview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting actors?
 * @default true
 *
 * @param SideviewTargetEnemy:eval
 * @text Target Enemy Fade?
 * @parent Sideview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting enemies?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 *
 * @param General
 *
 * @param CompactWidth:eval
 * @text Compact Width?
 * @parent General
 * @type boolean
 * @on Compact
 * @off Full Width
 * @desc Make the status area more compact or have it extend the full width of the screen?
 * @default true
 *
 * @param CommandHelpWindow:eval
 * @text Command Help Window?
 * @parent General
 * @type boolean
 * @on Show Help Window
 * @off Hide Help Window
 * @desc Show the Help Window for Actor Command Window and Party Command Window?
 * @default false
 *
 * @param EdgeBuffer:num
 * @text Edge Buffer
 * @parent General
 * @type number
 * @desc How many pixels of buffer room should there be from the screen edge?
 * @default 60
 *
 * @param MaxRows:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of displayed rows for battle windows?
 * @default 8
 *
 * @param WindowScale:num
 * @text Window Scale
 * @parent General
 * @desc What scale should windows appear at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.75
 *
 * @param ShowCancelButton:eval
 * @text Show Cancel Button?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide the cancel button in battle?
 * @default false
 *
 * @param ShowShopStatus:eval
 * @text Show Shop Status?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide the shop status window in battle?
 * Requires VisuMZ_1_ItemsEquipsCore!
 * @default true
 *
 * @param Position
 *
 * @param InitialUiPosition:str
 * @text Initial UI Position
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Determines the initial position of the status UI.
 * @default right
 *
 * @param MoveCenter:eval
 * @text Move Center?
 * @parent InitialUiPosition:str
 * @type boolean
 * @on Move
 * @off Stay
 * @desc Move the status UI from the initial position to the center?
 * @default true
 *
 * @param Window_ActorCommand:str
 * @text Actor Command Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the actor command window in battle.
 * @default left
 *
 * @param Window_PartyCommand:str
 * @text Party Command Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the party command window in battle.
 * @default left
 *
 * @param Window_ItemList_Pos:str
 * @text Item Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the item window in battle.
 * @default left
 *
 * @param Window_SkillList_Pos:str
 * @text Skill Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the skill window in battle.
 * @default left
 *
 * @param AniOffset
 * @text Animation Offset
 *
 * @param AniOffsetX:num
 * @text Offset X
 * @parent AniOffset
 * @desc How many pixels to offset the animation x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param AniOffsetY:num
 * @text Offset Y
 * @parent AniOffset
 * @desc How many pixels to offset the animation y position?
 * Negative: up. Positive: down.
 * @default +32
 *
 * @param DamageOffset
 * @text Damage Offset
 *
 * @param DmgOffsetX:num
 * @text Offset X
 * @parent DamageOffset
 * @desc How many pixels to offset the damage popup x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param DmgOffsetY:num
 * @text Offset Y
 * @parent DamageOffset
 * @desc How many pixels to offset the damage popup y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param BaseOffset
 * @text Base Offset
 *
 * @param BaseOffsetX:num
 * @text Offset X
 * @parent BaseOffset
 * @desc How many pixels to offset the base x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BaseOffsetY:num
 * @text Offset Y
 * @parent BaseOffset
 * @desc How many pixels to offset the base y position?
 * Negative: up. Positive: down.
 * @default +18
 *
 * @param StackOffset
 * @text Stack Offset
 *
 * @param StackOffsetX:num
 * @text Offset X
 * @parent StackOffset
 * @desc How many pixels to offset the stack x position?
 * Negative: left. Positive: right.
 * @default +16
 *
 * @param StackOffsetY:num
 * @text Offset Y
 * @parent StackOffset
 * @desc How many pixels to offset the stack y position?
 * Negative: up. Positive: down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Frontview Battle UI with frontview ONLY. NOT applied for Sideview.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default -96
 *
 */
/* ----------------------------------------------------------------------------
 * Map Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 *
 * @param General
 *
 * @param ShowUiOnMap:eval
 * @text Show UI on Map?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the frontview UI on the map by default?
 * Does NOT work with other battle layouts.
 * @default true
 *
 * @param CompactWidth:eval
 * @text Compact Width?
 * @parent General
 * @type boolean
 * @on Compact
 * @off Full Width
 * @desc Make the status area more compact or have it extend the full width of the screen?
 * @default true
 * 
 * @param Position
 *
 * @param InitialUiPosition:str
 * @text Initial UI Position
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Determines the initial position of the status UI.
 * @default left
 *
 * @param Fading
 *
 * @param MinProxOpacity:num
 * @text Close Minimum Opacity
 * @parent Fading
 * @type number
 * @min 0
 * @desc Minimum opacity when the player is too close to the
 * status window on the map screen.
 * @default 128
 *
 * @param Scaling
 *
 * @param Scale:num
 * @text Scale Ratio
 * @parent Scaling
 * @desc What is the scaling for this UI on the map scene?
 * @default 1.0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowWidth
 * @text Window Widths
 *
 * @param CommandWindows:str
 * @text Command Windows
 * @parent WindowWidth
 * @desc Type in the numeric value you want this width to be.
 * Otherwise, type "auto" to let the plugin adjust them.
 * @default auto
 *
 * @param ItemWindows:str
 * @text Action Windows
 * @parent WindowWidth
 * @desc Type in the numeric value you want this width to be.
 * Otherwise, type "auto" to let the plugin adjust them.
 * @default auto
 *
 */
//=============================================================================

const _0x1e125b=_0x404a;(function(_0x503b27,_0x2182ae){const _0x1aca6c=_0x404a,_0x509f3f=_0x503b27();while(!![]){try{const _0x2a41bc=-parseInt(_0x1aca6c(0xb5))/0x1*(parseInt(_0x1aca6c(0x2eb))/0x2)+-parseInt(_0x1aca6c(0x2dd))/0x3*(-parseInt(_0x1aca6c(0xd9))/0x4)+-parseInt(_0x1aca6c(0x2e5))/0x5*(parseInt(_0x1aca6c(0x28c))/0x6)+parseInt(_0x1aca6c(0x33d))/0x7+parseInt(_0x1aca6c(0x10b))/0x8*(parseInt(_0x1aca6c(0x376))/0x9)+parseInt(_0x1aca6c(0x2b1))/0xa*(-parseInt(_0x1aca6c(0x2df))/0xb)+-parseInt(_0x1aca6c(0x168))/0xc*(-parseInt(_0x1aca6c(0x30b))/0xd);if(_0x2a41bc===_0x2182ae)break;else _0x509f3f['push'](_0x509f3f['shift']());}catch(_0x4dcbc0){_0x509f3f['push'](_0x509f3f['shift']());}}}(_0x5c47,0xd5427));function _0x404a(_0x1d7bd3,_0x48a80c){const _0x5c477d=_0x5c47();return _0x404a=function(_0x404afc,_0x3c3fcb){_0x404afc=_0x404afc-0x89;let _0x5f03e3=_0x5c477d[_0x404afc];return _0x5f03e3;},_0x404a(_0x1d7bd3,_0x48a80c);}var label='FrontviewBattleUI',tier=tier||0x0,dependencies=[_0x1e125b(0x1ee),_0x1e125b(0x1e1)],pluginData=$plugins[_0x1e125b(0x14b)](function(_0x3f69d7){const _0x2e5bc7=_0x1e125b;return _0x3f69d7[_0x2e5bc7(0xe4)]&&_0x3f69d7[_0x2e5bc7(0x1e9)][_0x2e5bc7(0x261)]('['+label+']');})[0x0];VisuMZ[label][_0x1e125b(0x1bc)]=VisuMZ[label][_0x1e125b(0x1bc)]||{},VisuMZ[_0x1e125b(0x30c)]=function(_0xe12ae6,_0x5720fd){const _0x264326=_0x1e125b;for(const _0x4b4c6b in _0x5720fd){if(_0x4b4c6b[_0x264326(0x364)](/(.*):(.*)/i)){const _0x1bf601=String(RegExp['$1']),_0x4a6b0a=String(RegExp['$2'])['toUpperCase']()[_0x264326(0x1c0)]();let _0x4e05ab,_0x2b22f9,_0x5c11af;switch(_0x4a6b0a){case'NUM':_0x4e05ab=_0x5720fd[_0x4b4c6b]!==''?Number(_0x5720fd[_0x4b4c6b]):0x0;break;case'ARRAYNUM':_0x2b22f9=_0x5720fd[_0x4b4c6b]!==''?JSON['parse'](_0x5720fd[_0x4b4c6b]):[],_0x4e05ab=_0x2b22f9[_0x264326(0x303)](_0x1cebb9=>Number(_0x1cebb9));break;case'EVAL':_0x4e05ab=_0x5720fd[_0x4b4c6b]!==''?eval(_0x5720fd[_0x4b4c6b]):null;break;case'ARRAYEVAL':_0x2b22f9=_0x5720fd[_0x4b4c6b]!==''?JSON[_0x264326(0x116)](_0x5720fd[_0x4b4c6b]):[],_0x4e05ab=_0x2b22f9['map'](_0x4d45a6=>eval(_0x4d45a6));break;case'JSON':_0x4e05ab=_0x5720fd[_0x4b4c6b]!==''?JSON['parse'](_0x5720fd[_0x4b4c6b]):'';break;case _0x264326(0x226):_0x2b22f9=_0x5720fd[_0x4b4c6b]!==''?JSON['parse'](_0x5720fd[_0x4b4c6b]):[],_0x4e05ab=_0x2b22f9['map'](_0xd5d9f3=>JSON[_0x264326(0x116)](_0xd5d9f3));break;case'FUNC':_0x4e05ab=_0x5720fd[_0x4b4c6b]!==''?new Function(JSON[_0x264326(0x116)](_0x5720fd[_0x4b4c6b])):new Function(_0x264326(0x291));break;case _0x264326(0x18d):_0x2b22f9=_0x5720fd[_0x4b4c6b]!==''?JSON['parse'](_0x5720fd[_0x4b4c6b]):[],_0x4e05ab=_0x2b22f9['map'](_0x27f6b2=>new Function(JSON['parse'](_0x27f6b2)));break;case _0x264326(0x1e3):_0x4e05ab=_0x5720fd[_0x4b4c6b]!==''?String(_0x5720fd[_0x4b4c6b]):'';break;case _0x264326(0x1cc):_0x2b22f9=_0x5720fd[_0x4b4c6b]!==''?JSON['parse'](_0x5720fd[_0x4b4c6b]):[],_0x4e05ab=_0x2b22f9[_0x264326(0x303)](_0x3dbf5c=>String(_0x3dbf5c));break;case'STRUCT':_0x5c11af=_0x5720fd[_0x4b4c6b]!==''?JSON[_0x264326(0x116)](_0x5720fd[_0x4b4c6b]):{},_0x4e05ab=VisuMZ[_0x264326(0x30c)]({},_0x5c11af);break;case _0x264326(0x16e):_0x2b22f9=_0x5720fd[_0x4b4c6b]!==''?JSON[_0x264326(0x116)](_0x5720fd[_0x4b4c6b]):[],_0x4e05ab=_0x2b22f9[_0x264326(0x303)](_0x2e1a75=>VisuMZ['ConvertParams']({},JSON[_0x264326(0x116)](_0x2e1a75)));break;default:continue;}_0xe12ae6[_0x1bf601]=_0x4e05ab;}}return _0xe12ae6;},(_0x965158=>{const _0x349adf=_0x1e125b,_0x20353b=_0x965158[_0x349adf(0x2f9)];for(const _0x4f1115 of dependencies){if(!Imported[_0x4f1115]){alert(_0x349adf(0x2c3)[_0x349adf(0x20f)](_0x20353b,_0x4f1115)),SceneManager[_0x349adf(0x367)]();break;}}const _0x50ceea=_0x965158[_0x349adf(0x1e9)];if(_0x50ceea['match'](/\[Version[ ](.*?)\]/i)){const _0x595b1d=Number(RegExp['$1']);_0x595b1d!==VisuMZ[label][_0x349adf(0x146)]&&(alert(_0x349adf(0x126)['format'](_0x20353b,_0x595b1d)),SceneManager[_0x349adf(0x367)]());}if(_0x50ceea[_0x349adf(0x364)](/\[Tier[ ](\d+)\]/i)){const _0x9af25=Number(RegExp['$1']);_0x9af25<tier?(alert(_0x349adf(0xe1)[_0x349adf(0x20f)](_0x20353b,_0x9af25,tier)),SceneManager[_0x349adf(0x367)]()):tier=Math[_0x349adf(0x9a)](_0x9af25,tier);}VisuMZ[_0x349adf(0x30c)](VisuMZ[label][_0x349adf(0x1bc)],_0x965158['parameters']);})(pluginData);if(VisuMZ[_0x1e125b(0x24b)]['version']<1.7){let text='';text+=_0x1e125b(0x1a5),text+='in\x20order\x20for\x20VisuMZ_3_FrontviewBattleUI\x20to\x20work.',alert(text),SceneManager[_0x1e125b(0x367)]();}if(VisuMZ[_0x1e125b(0x1dd)]['version']<1.7){let text='';text+=_0x1e125b(0x2c2),text+=_0x1e125b(0x304),alert(text),SceneManager[_0x1e125b(0x367)]();}PluginManager[_0x1e125b(0x319)](pluginData[_0x1e125b(0x2f9)],_0x1e125b(0x2ee),_0x294dd4=>{const _0x40143c=_0x1e125b;if(!SceneManager[_0x40143c(0x1bf)]())return;VisuMZ['ConvertParams'](_0x294dd4,_0x294dd4);const _0x2bc045=_0x294dd4[_0x40143c(0xa8)][_0x40143c(0x303)](_0x2db63b=>$gameActors[_0x40143c(0x2f2)](Number(_0x2db63b))),_0x3d35b5=_0x294dd4[_0x40143c(0x1ca)],_0x1ff796={'textColor':ColorManager[_0x40143c(0x23a)](_0x294dd4['TextColor']),'flashColor':_0x294dd4[_0x40143c(0x337)],'flashDuration':_0x294dd4[_0x40143c(0x11e)]};for(const _0x109801 of _0x2bc045){if(!_0x109801)continue;VisuMZ[_0x40143c(0x1a6)][_0x40143c(0x34b)](_0x109801,_0x3d35b5,_0x1ff796);}}),PluginManager[_0x1e125b(0x319)](pluginData[_0x1e125b(0x2f9)],'MapUICustomTextParty',_0x52c5d7=>{const _0x561b17=_0x1e125b;if(!SceneManager['isUsingFrontviewUiLayout']())return;VisuMZ[_0x561b17(0x30c)](_0x52c5d7,_0x52c5d7);const _0x237f29=_0x52c5d7[_0x561b17(0x292)][_0x561b17(0x303)](_0x405b46=>$gameParty[_0x561b17(0xaf)]()[_0x405b46]),_0x36551f=_0x52c5d7[_0x561b17(0x1ca)],_0x43a744={'textColor':ColorManager[_0x561b17(0x23a)](_0x52c5d7['TextColor']),'flashColor':_0x52c5d7[_0x561b17(0x337)],'flashDuration':_0x52c5d7[_0x561b17(0x11e)]};for(const _0x988c0b of _0x237f29){if(!_0x988c0b)continue;VisuMZ[_0x561b17(0x1a6)][_0x561b17(0x34b)](_0x988c0b,_0x36551f,_0x43a744);}}),PluginManager['registerCommand'](pluginData[_0x1e125b(0x2f9)],_0x1e125b(0x375),_0x393423=>{const _0x17d4ae=_0x1e125b;if(!SceneManager[_0x17d4ae(0x1bf)]())return;VisuMZ[_0x17d4ae(0x30c)](_0x393423,_0x393423);const _0x144f97=_0x393423[_0x17d4ae(0xa8)]['map'](_0x36a640=>$gameActors[_0x17d4ae(0x2f2)](Number(_0x36a640))),_0x5bd31b=String($gameVariables[_0x17d4ae(0x17a)](_0x393423['Variable'])),_0x39b65a={'textColor':ColorManager[_0x17d4ae(0x23a)](_0x393423[_0x17d4ae(0x173)]),'flashColor':_0x393423[_0x17d4ae(0x337)],'flashDuration':_0x393423[_0x17d4ae(0x11e)]};for(const _0x16f685 of _0x144f97){if(!_0x16f685)continue;VisuMZ[_0x17d4ae(0x1a6)][_0x17d4ae(0x34b)](_0x16f685,_0x5bd31b,_0x39b65a);}}),PluginManager[_0x1e125b(0x319)](pluginData['name'],'MapUICustomVariableParty',_0xa97008=>{const _0x13ae56=_0x1e125b;if(!SceneManager[_0x13ae56(0x1bf)]())return;VisuMZ[_0x13ae56(0x30c)](_0xa97008,_0xa97008);const _0x478768=_0xa97008['Index']['map'](_0x355d3d=>$gameParty[_0x13ae56(0xaf)]()[_0x355d3d]),_0x2ea5d8=String($gameVariables['value'](_0xa97008['Variable'])),_0x44a682={'textColor':ColorManager[_0x13ae56(0x23a)](_0xa97008[_0x13ae56(0x173)]),'flashColor':_0xa97008[_0x13ae56(0x337)],'flashDuration':_0xa97008[_0x13ae56(0x11e)]};for(const _0x5198cf of _0x478768){if(!_0x5198cf)continue;VisuMZ['FrontviewBattleUI']['setupTextPopup'](_0x5198cf,_0x2ea5d8,_0x44a682);}}),PluginManager['registerCommand'](pluginData[_0x1e125b(0x2f9)],_0x1e125b(0x140),_0x3852b9=>{const _0x49cd35=_0x1e125b;VisuMZ[_0x49cd35(0x30c)](_0x3852b9,_0x3852b9);const _0x1bf954=_0x3852b9['Visible'];$gameSystem[_0x49cd35(0x1b6)](_0x1bf954);}),VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1db)]={'PortraitData':/<(?:FV|FRONTVIEW) UI (?:PORTRAIT|PORTRAITS|BUST|BUSTS)>\s*([\s\S]*)\s*<\/(?:FV|FRONTVIEW) UI (?:PORTRAIT|PORTRAITS|BUST|BUSTS)>/i,'PortraitLine':/(.*):[ ](.*)/i,'ShowMapBattleStatus':/<SHOW (?:FV|FRONTVIEW) UI>/i,'HideMapBattleStatus':/<HIDE (?:FV|FRONTVIEW) UI>/i},Bitmap[_0x1e125b(0x371)][_0x1e125b(0x213)]=function(_0x11aa5e,_0x3b92ba,_0xe63552,_0x19c4a7,_0x293331,_0x455dea){const _0x1688f2=_0x1e125b,_0x5c4634=this[_0x1688f2(0x1e6)];_0x5c4634[_0x1688f2(0x191)](),_0x5c4634['beginPath'](),_0x5c4634['moveTo'](_0x11aa5e[0x0],_0x11aa5e[0x1]);for(var _0x3d9432=0x2;_0x3d9432<_0x11aa5e['length'];_0x3d9432+=0x2){_0x5c4634[_0x1688f2(0xee)](_0x11aa5e[_0x3d9432],_0x11aa5e[_0x3d9432+0x1]);}_0x5c4634[_0x1688f2(0xee)](_0x11aa5e[0x0],_0x11aa5e[0x1]),_0x5c4634[_0x1688f2(0xb2)]=_0x3b92ba,_0x5c4634['lineWidth']=_0x19c4a7,_0x455dea&&_0x5c4634[_0x1688f2(0x354)](),_0x5c4634[_0x1688f2(0x335)]=_0x293331,_0x5c4634[_0x1688f2(0x1fa)]=_0xe63552,_0x5c4634[_0x1688f2(0x1f7)](),_0x5c4634[_0x1688f2(0x335)]=0x1,_0x5c4634[_0x1688f2(0xf8)](),this[_0x1688f2(0x163)]['update']();},DataManager[_0x1e125b(0x26e)]=function(_0x3e95b1,_0x627405){const _0x4c4972=_0x1e125b;if(!_0x3e95b1)return'';if(!_0x3e95b1[_0x4c4972(0xb1)]())return'';if(!_0x627405)return'';const _0x25d41b=this[_0x4c4972(0x368)](_0x3e95b1);for(const _0x4c4a4d of _0x627405){const _0x1528a6=_0x4c4a4d['toUpperCase']()[_0x4c4972(0x1c0)]();if(_0x25d41b[_0x1528a6])return _0x25d41b[_0x1528a6];}return _0x3e95b1['getBattlePortraitFilename']()||'';},DataManager[_0x1e125b(0x368)]=function(_0xbb9a3b){const _0x5f0396=_0x1e125b;if(!_0xbb9a3b)return{};const _0x36b827=_0xbb9a3b[_0x5f0396(0xe7)]();this['_frontviewUiPortraitData']=this[_0x5f0396(0x343)]||{};if(this[_0x5f0396(0x343)][_0x36b827]!==undefined)return this[_0x5f0396(0x343)][_0x36b827];const _0x2a81c=_0xbb9a3b[_0x5f0396(0x2f2)]()[_0x5f0396(0x289)]||'',_0x826646=VisuMZ[_0x5f0396(0x1a6)]['RegExp'],_0x248963=_0x826646[_0x5f0396(0x356)],_0x2f1b6c=_0x826646[_0x5f0396(0x27c)],_0x196f0e={};if(_0x2a81c[_0x5f0396(0x364)](_0x248963)){const _0x5a2c6b=String(RegExp['$1'])[_0x5f0396(0x1c0)]()['split'](/[\r\n]+/);for(const _0x2c4eb0 of _0x5a2c6b){if(_0x2c4eb0[_0x5f0396(0x364)](_0x2f1b6c)){const _0x3b1e9d=String(RegExp['$1'])[_0x5f0396(0x102)]()[_0x5f0396(0x1c0)](),_0x4d201f=String(RegExp['$2'])['trim']();_0x196f0e[_0x3b1e9d]=_0x4d201f;}}}return this['_frontviewUiPortraitData'][_0x36b827]=_0x196f0e,this[_0x5f0396(0x343)][_0x36b827];},ImageManager['frontviewBattleUiBackgroundRender']=function(){const _0x31ded7=_0x1e125b;if(this[_0x31ded7(0x2b2)])return this[_0x31ded7(0x2b2)];const _0x59b739=ImageManager[_0x31ded7(0x2f0)],_0x2489e5=ImageManager['faceHeight'],_0x551517=0x1,_0x38592d=new Bitmap(_0x59b739,_0x2489e5),_0x597836=[_0x59b739/0x2,_0x551517,_0x551517,_0x2489e5/0x2,_0x59b739/0x2,_0x2489e5-_0x551517,_0x59b739+_0x551517,_0x2489e5/0x2],_0x55a510=_0x31ded7(0x321),_0x71ac06=ColorManager[_0x31ded7(0x1bb)]();return _0x38592d[_0x31ded7(0x213)](_0x597836,_0x55a510,_0x71ac06,_0x551517,0x1,!![]),_0x38592d[_0x31ded7(0x23d)]=![],this[_0x31ded7(0x2b2)]=_0x38592d,this[_0x31ded7(0x2b2)];},ImageManager[_0x1e125b(0x2b6)]=function(){const _0x26a82c=_0x1e125b;if(this[_0x26a82c(0x2bf)])return this[_0x26a82c(0x2bf)];const _0x2ac67e=ImageManager['faceWidth'],_0xce70d8=ImageManager[_0x26a82c(0xd4)],_0x2b63a3=0x0,_0x225ca9=Sprite_FvUiStatus[_0x26a82c(0x11c)]['offset'],_0x281b36=new Bitmap(_0x2ac67e,_0xce70d8),_0x506f80=[_0x225ca9,_0x2b63a3,_0x2b63a3,_0xce70d8-_0x2b63a3,_0x2ac67e-_0x2b63a3,_0xce70d8-_0x225ca9],_0x378ad2='#ffffff',_0x6773b2=_0x26a82c(0x321);return _0x281b36['drawOutlinePolygon'](_0x506f80,_0x378ad2,_0x6773b2,_0x2b63a3,0x1,!![]),_0x281b36['_customModified']=![],this[_0x26a82c(0x2bf)]=_0x281b36,this[_0x26a82c(0x2bf)];},SceneManager[_0x1e125b(0x33b)]=function(){const _0x244809=_0x1e125b;return this[_0x244809(0xfb)]&&this['_scene']['constructor']===Scene_Battle;},SceneManager[_0x1e125b(0xbd)]=function(){const _0x3f54bc=_0x1e125b;return this['_scene']&&this['_scene'][_0x3f54bc(0x11b)]===Scene_Map;},SceneManager[_0x1e125b(0x1bf)]=function(){const _0x33de01=_0x1e125b;return SceneManager[_0x33de01(0xbd)]()&&VisuMZ[_0x33de01(0x1dd)][_0x33de01(0x1bc)]['BattleLayout']['Style'][_0x33de01(0x1d0)]()['trim']()===VisuMZ['FrontviewBattleUI'][_0x33de01(0x23f)];},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x23f)]=_0x1e125b(0x10a),BattleManager[_0x1e125b(0x1bf)]=function(){const _0x183d3e=_0x1e125b;return SceneManager[_0x183d3e(0x33b)]()&&SceneManager[_0x183d3e(0xfb)][_0x183d3e(0x277)]()===VisuMZ[_0x183d3e(0x1a6)]['BATTLE_LAYOUT'];},VisuMZ[_0x1e125b(0x1a6)]['Game_System_initialize']=Game_System[_0x1e125b(0x371)][_0x1e125b(0x100)],Game_System[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(){const _0x42966b=_0x1e125b;VisuMZ[_0x42966b(0x1a6)][_0x42966b(0xbf)][_0x42966b(0x198)](this),this[_0x42966b(0x2cf)]();},Game_System[_0x1e125b(0x371)]['initFrontviewBattleUiMapSettings']=function(){const _0x722532=_0x1e125b;this[_0x722532(0xf2)]=Window_FrontviewUiMapBattleStatus[_0x722532(0x2fe)][_0x722532(0x251)];},Game_System[_0x1e125b(0x371)][_0x1e125b(0x1ef)]=function(){const _0xb5bc16=_0x1e125b;if(this[_0xb5bc16(0xf2)]===undefined)this[_0xb5bc16(0x2cf)]();return this[_0xb5bc16(0xf2)];},Game_System[_0x1e125b(0x371)][_0x1e125b(0x1b6)]=function(_0x5e584a){const _0x59ba87=_0x1e125b;if(this[_0x59ba87(0xf2)]===undefined)this[_0x59ba87(0x2cf)]();this[_0x59ba87(0xf2)]=_0x5e584a;},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x316)]=Game_Map['prototype'][_0x1e125b(0x260)],Game_Map[_0x1e125b(0x371)][_0x1e125b(0x260)]=function(_0x56176f){const _0x3c49d1=_0x1e125b;VisuMZ[_0x3c49d1(0x1a6)][_0x3c49d1(0x316)]['call'](this,_0x56176f),this[_0x3c49d1(0x2ac)]();},Game_Map[_0x1e125b(0x371)][_0x1e125b(0x2ac)]=function(){const _0x3029ad=_0x1e125b,_0x2618ba=VisuMZ[_0x3029ad(0x1a6)][_0x3029ad(0x1db)],_0xde06d2=$dataMap?$dataMap[_0x3029ad(0x289)]||'':'';if(_0xde06d2['match'](_0x2618ba['ShowMapBattleStatus']))$gameSystem[_0x3029ad(0x1b6)](!![]);else{if(_0xde06d2[_0x3029ad(0x364)](_0x2618ba[_0x3029ad(0x2d2)]))$gameSystem[_0x3029ad(0x1b6)](![]);else{const _0x2b862e=Window_FrontviewUiMapBattleStatus[_0x3029ad(0x2fe)]['show'];$gameSystem[_0x3029ad(0x1b6)](_0x2b862e);}}},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x36c)]=Game_Battler['prototype'][_0x1e125b(0x1da)],Game_Battler[_0x1e125b(0x371)][_0x1e125b(0x1da)]=function(_0x46f849){const _0x2045ac=_0x1e125b;VisuMZ[_0x2045ac(0x1a6)][_0x2045ac(0x36c)][_0x2045ac(0x198)](this,_0x46f849),this[_0x2045ac(0xb1)]()&&SceneManager[_0x2045ac(0x1bf)]()&&VisuMZ[_0x2045ac(0x1a6)][_0x2045ac(0xf5)](this);},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x117)]=Game_Battler[_0x1e125b(0x371)][_0x1e125b(0x2ca)],Game_Battler[_0x1e125b(0x371)][_0x1e125b(0x2ca)]=function(_0x3636c7){const _0x589b84=_0x1e125b;VisuMZ['FrontviewBattleUI'][_0x589b84(0x117)][_0x589b84(0x198)](this,_0x3636c7),this[_0x589b84(0xb1)]()&&SceneManager[_0x589b84(0x1bf)]()&&VisuMZ[_0x589b84(0x1a6)]['StartDamagePopup'](this);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x12b)]=Game_Battler['prototype'][_0x1e125b(0xe3)],Game_Battler[_0x1e125b(0x371)][_0x1e125b(0xe3)]=function(_0x3c978e){const _0x16d232=_0x1e125b;VisuMZ[_0x16d232(0x1a6)][_0x16d232(0x12b)]['call'](this,_0x3c978e),VisuMZ[_0x16d232(0x1a6)][_0x16d232(0x298)](this,_0x3c978e,!![]);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x208)]=Game_Battler[_0x1e125b(0x371)][_0x1e125b(0x2fd)],Game_Battler['prototype'][_0x1e125b(0x2fd)]=function(_0x343a04){const _0x39d5d0=_0x1e125b;if(!this[_0x39d5d0(0xef)])VisuMZ[_0x39d5d0(0x1a6)]['StartStatePopup'](this,_0x343a04,![]);VisuMZ['FrontviewBattleUI'][_0x39d5d0(0x208)][_0x39d5d0(0x198)](this,_0x343a04);},Game_Player[_0x1e125b(0x371)][_0x1e125b(0x14d)]=function(){const _0x33525d=_0x1e125b;if(SceneManager[_0x33525d(0xbd)]()&&SceneManager['isNextScene'](Scene_Battle))return![];const _0x119dfd=this[_0x33525d(0x276)]()*$gameScreen[_0x33525d(0x27e)](),_0x58901d=SceneManager['_scene'];if(_0x58901d){const _0x4b54b7=_0x58901d[_0x33525d(0x1c4)];if(_0x4b54b7&&_0x119dfd>=_0x4b54b7['y'])return!![];}return![];},VisuMZ['FrontviewBattleUI']['Scene_Map_createAllWindows']=Scene_Map['prototype'][_0x1e125b(0x13d)],Scene_Map[_0x1e125b(0x371)][_0x1e125b(0x13d)]=function(){const _0x219739=_0x1e125b;this[_0x219739(0x2b5)](),VisuMZ[_0x219739(0x1a6)]['Scene_Map_createAllWindows'][_0x219739(0x198)](this);},Scene_Map[_0x1e125b(0x371)][_0x1e125b(0x2b5)]=function(){const _0x426afa=_0x1e125b;if(!Window_FrontviewUiMapBattleStatus[_0x426afa(0x371)][_0x426afa(0x2cd)]())return;const _0x41795f=this['getFrontviewUiBattleStatusWindow']();this[_0x426afa(0x1c4)]=new Window_FrontviewUiMapBattleStatus(_0x41795f),this[_0x426afa(0x2e6)](this[_0x426afa(0x1c4)]);},Scene_Map[_0x1e125b(0x371)][_0x1e125b(0x158)]=function(){const _0x55bb52=_0x1e125b;let _0x504732=Graphics[_0x55bb52(0x345)];Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI']['compactWidth']&&(_0x504732-=0x60*0x2,_0x504732<(ImageManager[_0x55bb52(0x2f0)]+0x40)*$gameParty[_0x55bb52(0xdc)]()&&(_0x504732=(ImageManager['faceWidth']+0x40)*$gameParty[_0x55bb52(0xdc)]()));const _0x2a6435=ImageManager[_0x55bb52(0xd4)]+Window_Base['prototype'][_0x55bb52(0x1c9)]()*0x2,_0x3d77d6=Window_FrontviewUiMapBattleStatus[_0x55bb52(0x2fe)][_0x55bb52(0x104)],_0x5c9e24=Math['ceil'](_0x504732*0x1),_0x25a5ac=Math['ceil'](_0x2a6435*_0x3d77d6),_0x398582=(Graphics[_0x55bb52(0x175)]-_0x5c9e24)/0x2,_0x2820e1=Graphics[_0x55bb52(0x205)]-_0x25a5ac;return new Rectangle(_0x398582,_0x2820e1,_0x504732,_0x2a6435);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0xa6)]=Scene_Base[_0x1e125b(0x371)][_0x1e125b(0x2fb)],Scene_Base['prototype'][_0x1e125b(0x2fb)]=function(){const _0x40f129=_0x1e125b;return BattleManager[_0x40f129(0x1bf)]()?![]:VisuMZ['FrontviewBattleUI'][_0x40f129(0xa6)][_0x40f129(0x198)](this);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1a2)]=Scene_Battle[_0x1e125b(0x371)]['buttonAreaTop'],Scene_Battle['prototype']['buttonAreaTop']=function(){const _0x161a63=_0x1e125b;return BattleManager['isUsingFrontviewUiLayout']()?Window_Base[_0x161a63(0x2fe)]['showCancelButton']?Graphics['boxHeight']-this[_0x161a63(0x13f)][_0x161a63(0x205)]:Graphics[_0x161a63(0x101)]*0xa:VisuMZ[_0x161a63(0x1a6)]['Scene_Battle_buttonAreaTop'][_0x161a63(0x198)](this);},VisuMZ[_0x1e125b(0x1a6)]['Scene_Battle_statusWindowRect']=Scene_Battle[_0x1e125b(0x371)]['statusWindowRect'],Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x2ce)]=function(){const _0x110504=_0x1e125b;return BattleManager[_0x110504(0x1bf)]()?this[_0x110504(0x233)]():VisuMZ[_0x110504(0x1a6)][_0x110504(0x2e4)][_0x110504(0x198)](this);},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1cb)]=Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x22c)],Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x22c)]=function(){const _0x3393e3=_0x1e125b,_0x468b8e=VisuMZ[_0x3393e3(0x1a6)][_0x3393e3(0x1cb)][_0x3393e3(0x198)](this);return BattleManager[_0x3393e3(0x1bf)]()&&(_0x468b8e['y']=Graphics[_0x3393e3(0x205)]*0xa,_0x468b8e['height']=0x0),_0x468b8e;},Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x233)]=function(){const _0x4690f1=_0x1e125b;let _0x2133c1=Graphics[_0x4690f1(0x345)];Window_BattleStatus['FRONTVIEW_BATTLE_UI'][_0x4690f1(0x22d)]&&(_0x2133c1-=0x60*0x2,_0x2133c1<(ImageManager[_0x4690f1(0x2f0)]+0x40)*$gameParty[_0x4690f1(0xdc)]()&&(_0x2133c1=(ImageManager[_0x4690f1(0x2f0)]+0x40)*$gameParty[_0x4690f1(0xdc)]()));const _0x2797a5=ImageManager[_0x4690f1(0xd4)]+Window_Base[_0x4690f1(0x371)]['lineHeight']()*0x2,_0x268c62=(Graphics[_0x4690f1(0x175)]-_0x2133c1)/0x2,_0xb5417f=Graphics['height']-_0x2797a5-this[_0x4690f1(0x1d7)]['y'];return new Rectangle(_0x268c62,_0xb5417f,_0x2133c1,_0x2797a5);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x204)]=Scene_Battle[_0x1e125b(0x371)]['updateStatusWindowPosition'],Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x194)]=function(){const _0x190e1d=_0x1e125b;BattleManager[_0x190e1d(0x1bf)]()?this[_0x190e1d(0x95)]():VisuMZ[_0x190e1d(0x1a6)][_0x190e1d(0x204)]['call'](this);},Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x95)]=function(){const _0x4176f1=_0x1e125b;this[_0x4176f1(0x28a)][_0x4176f1(0x369)]&&(this[_0x4176f1(0x25f)][_0x4176f1(0x176)](),this[_0x4176f1(0x1a0)][_0x4176f1(0x176)](),this['_itemWindow'][_0x4176f1(0x176)]());this['_enemyWindow'][_0x4176f1(0x369)]&&(this['_actorCommandWindow'][_0x4176f1(0x176)](),this[_0x4176f1(0x1a0)]['close'](),this['_itemWindow']['close']());if(this[_0x4176f1(0x119)]['active'])this[_0x4176f1(0x119)]['open']();else this[_0x4176f1(0x25f)][_0x4176f1(0x369)]&&(this[_0x4176f1(0x25f)][_0x4176f1(0x30f)]&&this[_0x4176f1(0x25f)][_0x4176f1(0x10f)]());this[_0x4176f1(0x1a0)][_0x4176f1(0x369)]&&(this[_0x4176f1(0x25f)][_0x4176f1(0x10f)](),this[_0x4176f1(0x1a0)]['open']()),this['_itemWindow'][_0x4176f1(0x369)]&&(this[_0x4176f1(0x25f)][_0x4176f1(0x10f)](),this[_0x4176f1(0xce)][_0x4176f1(0x10f)]());},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1dc)]=Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x20b)],Scene_Battle['prototype'][_0x1e125b(0x20b)]=function(){const _0x4e09b9=_0x1e125b;VisuMZ[_0x4e09b9(0x1a6)][_0x4e09b9(0x1dc)]['call'](this),this[_0x4e09b9(0x147)]();},Scene_Battle['prototype'][_0x1e125b(0x147)]=function(){const _0x4b23ec=_0x1e125b;if(!this['canCreateFrontviewUiShopStatusWindow']())return;const _0x227da3=this[_0x4b23ec(0x336)]();this[_0x4b23ec(0x32b)]=new Window_ShopStatus(_0x227da3),this[_0x4b23ec(0x32b)][_0x4b23ec(0x167)](),this['addWindow'](this[_0x4b23ec(0x32b)]),this[_0x4b23ec(0x32b)][_0x4b23ec(0x327)](),Imported[_0x4b23ec(0x238)]&&this[_0x4b23ec(0x1a0)][_0x4b23ec(0x8a)](this[_0x4b23ec(0x32b)]),this[_0x4b23ec(0xce)][_0x4b23ec(0x8a)](this[_0x4b23ec(0x32b)]);},Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x96)]=function(){const _0x198466=_0x1e125b;if(!BattleManager[_0x198466(0x1bf)]())return![];if(!Imported['VisuMZ_1_ItemsEquipsCore'])return![];return Window_Base[_0x198466(0x2fe)][_0x198466(0x231)];},Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x336)]=function(){const _0x1fe1d4=_0x1e125b,_0x288f81=Window_Base[_0x1fe1d4(0x2fe)][_0x1fe1d4(0x114)],_0x45013e=VisuMZ[_0x1fe1d4(0x348)]['Settings'][_0x1fe1d4(0x1b5)][_0x1fe1d4(0x34c)],_0x3e1b69=this['calcWindowHeight'](_0x288f81,!![]),_0x179df9=0x0,_0x2cb146=0x0;return new Rectangle(_0x179df9,_0x2cb146,_0x45013e,_0x3e1b69);},VisuMZ[_0x1e125b(0x1a6)]['Scene_Battle_createSpriteset']=Scene_Battle['prototype'][_0x1e125b(0x300)],Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0x300)]=function(){const _0xaa289b=_0x1e125b;VisuMZ[_0xaa289b(0x1a6)][_0xaa289b(0x344)][_0xaa289b(0x198)](this),this[_0xaa289b(0xa7)]();},Scene_Battle[_0x1e125b(0x371)][_0x1e125b(0xa7)]=function(){const _0x2d99e3=_0x1e125b;if(!BattleManager[_0x2d99e3(0x1bf)]())return;this[_0x2d99e3(0x32f)]=new Sprite_FvUiController(),this[_0x2d99e3(0x220)](this[_0x2d99e3(0x32f)]);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x23e)]=Sprite_Name[_0x1e125b(0x371)]['outlineColor'],Sprite_Name[_0x1e125b(0x371)][_0x1e125b(0xb4)]=function(){const _0x3e90eb=_0x1e125b;return VisuMZ[_0x3e90eb(0x1a6)][_0x3e90eb(0x23e)][_0x3e90eb(0x198)](this);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x224)]=Sprite_Name[_0x1e125b(0x371)][_0x1e125b(0x1cd)],Sprite_Name[_0x1e125b(0x371)][_0x1e125b(0x1cd)]=function(){const _0x39b313=_0x1e125b;if(BattleManager['isUsingFrontviewUiLayout']())return 0x4;return VisuMZ[_0x39b313(0x1a6)][_0x39b313(0x224)][_0x39b313(0x198)](this);},Sprite_Name[_0x1e125b(0x371)][_0x1e125b(0x108)]=function(){const _0x58367a=_0x1e125b,_0x1adc93=this[_0x58367a(0x2f9)](),_0x5a029f=this[_0x58367a(0x17f)](),_0x4e0e20=this[_0x58367a(0x1af)]();this[_0x58367a(0x1ea)](),this['bitmap'][_0x58367a(0x105)](),this[_0x58367a(0x271)]['drawTextTopAligned'](_0x1adc93,0x4,0x0,_0x5a029f-0xa,_0x4e0e20,_0x58367a(0x362));},Sprite_Battler[_0x1e125b(0x228)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x283)][_0x1e125b(0x342)]??!![],Sprite_Battler[_0x1e125b(0x103)]=VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x283)][_0x1e125b(0x29e)]??0x0,Sprite_Battler[_0x1e125b(0x308)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x283)][_0x1e125b(0x16c)]??-0x80,VisuMZ[_0x1e125b(0x1a6)]['Sprite_Battler_setHome']=Sprite_Battler[_0x1e125b(0x371)][_0x1e125b(0xa0)],Sprite_Battler[_0x1e125b(0x371)][_0x1e125b(0xa0)]=function(_0x3c9903,_0x2f234e){const _0x1f6315=_0x1e125b;this['shouldAdjustForFrontviewUiLayout']()&&(_0x3c9903+=Sprite_Battler[_0x1f6315(0x103)],_0x2f234e+=Sprite_Battler[_0x1f6315(0x308)]),VisuMZ[_0x1f6315(0x1a6)][_0x1f6315(0xe9)]['call'](this,_0x3c9903,_0x2f234e);},Sprite_Battler['prototype'][_0x1e125b(0x1d4)]=function(){const _0x290412=_0x1e125b;if(!BattleManager['isUsingFrontviewUiLayout']())return![];if($gameSystem[_0x290412(0x32d)]())return![];return Sprite_Battler[_0x290412(0x228)];},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1ae)]=Sprite_Battler[_0x1e125b(0x371)][_0x1e125b(0x97)],Sprite_Battler[_0x1e125b(0x371)][_0x1e125b(0x97)]=function(){const _0x1a861b=_0x1e125b;VisuMZ[_0x1a861b(0x1a6)][_0x1a861b(0x1ae)][_0x1a861b(0x198)](this),this[_0x1a861b(0x1d4)]()&&this['_battler']&&this[_0x1a861b(0x1c8)][_0x1a861b(0xb1)]()&&(this[_0x1a861b(0xfc)]=0x0);};function Sprite_FvUiStatus(){const _0x4f5f11=_0x1e125b;this[_0x4f5f11(0x100)](...arguments);}Sprite_FvUiStatus['prototype']=Object[_0x1e125b(0x216)](Sprite_Clickable['prototype']),Sprite_FvUiStatus['prototype'][_0x1e125b(0x11b)]=Sprite_FvUiStatus,Sprite_FvUiStatus[_0x1e125b(0x1ff)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0xcf)]??0x20,Sprite_FvUiStatus[_0x1e125b(0x15d)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['Map'][_0x1e125b(0x306)]??0x80,Sprite_FvUiStatus[_0x1e125b(0x239)]={'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x178)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI'][_0x1e125b(0x32a)]??-0x18,'rateX':VisuMZ['FrontviewBattleUI']['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0xdb)]??0x2,'rateY':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x141)]??0x2},Sprite_FvUiStatus[_0x1e125b(0x156)]={'enabled':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)]['DamageShakeEnabled']??!![],'duration':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x188)]??0x18},Sprite_FvUiStatus['GRAPHICS_OFFSET']={'x':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x36f)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['GraphicsOffsetY']??-0x80},Sprite_FvUiStatus['UI_OFFSET']={'x':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0xeb)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI']['UiOffsetY']??-0x80},Sprite_FvUiStatus[_0x1e125b(0x169)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x2f8)]??!![],(Sprite_FvUiStatus['BACKGROUND_FILENAME']=VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI'][_0x1e125b(0x2e3)]??'',Sprite_FvUiStatus[_0x1e125b(0x2b9)]={'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0xb0)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0xd5)]??0x0}),Sprite_FvUiStatus[_0x1e125b(0x360)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x1ba)]??!![],Sprite_FvUiStatus[_0x1e125b(0x347)]={'x':VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI'][_0x1e125b(0x26a)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0xc7)]??0x0},Sprite_FvUiStatus['FACE_MASK_USE']=VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['GraphicsFaceMaskUse']??!![],Sprite_FvUiStatus[_0x1e125b(0x31c)]=VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['GraphicsFaceMaskFilename']??'',Sprite_FvUiStatus['FACE_MASK_RENDER']={'offset':VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI'][_0x1e125b(0x258)]??0x30,'color1':VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI'][_0x1e125b(0x2f4)]??'#00aeef','color2':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x1d5)]??_0x1e125b(0xf4),'vertical':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['GraphicsFaceMaskVertGradient']??!![]},Sprite_FvUiStatus[_0x1e125b(0x227)]={'show':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x10d)]??!![],'angle':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x246)]??0x12,'offset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x2d9)]??-0x8,'y':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x1eb)]??-0x3c},'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_Name_Scale']??0.8},Sprite_FvUiStatus[_0x1e125b(0x2e7)]={'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0xd3)]??!![],'angle':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x13c)]??0x12,'offset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0xfa)]??-0x8,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x8f)]??0x30},'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x1a4)]??0.8},Sprite_FvUiStatus[_0x1e125b(0x2bc)]={'show':VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI']['UI_MpGauge_Show']??!![],'angle':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_MpGauge_Angle']??0x12,'offset':{'x':VisuMZ[_0x1e125b(0x1a6)]['Settings']['StatusUI']['UI_MpGauge_OffsetX']??-0x14,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_MpGauge_OffsetY']??0x48},'scale':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x24a)]??0.8},Sprite_FvUiStatus[_0x1e125b(0x170)]={'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI']['UI_TpGauge_Show']??!![],'angle':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_TpGauge_Angle']??0x12,'offset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x1bd)]??-0x20,'y':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x2a9)]??0x60},'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0xda)]??0.8},Sprite_FvUiStatus[_0x1e125b(0x123)]={'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_TpbGauge_Show']??!![],'angle':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x151)]??0x12,'offset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x35a)]??-0x3d,'y':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0xf1)]??-0x24},'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_TpbGauge_Scale']??0.8},Sprite_FvUiStatus[_0x1e125b(0xae)]={'overlay':{'show':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x25c)]??!![],'offset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI']['UI_StatesOverlay_OffsetX']??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x288)]??0x0}},'icon':{'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_StatesIcon_Show']??!![],'offset':{'x':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x162)]??-0x34,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_StatesIcon_OffsetY']??0x5c}}},Sprite_FvUiStatus[_0x1e125b(0x1fd)]={'show':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_AggroGauge_Show']??!![],'angle':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x91)]??0x48,'offset':{'x':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x253)]??-0x58,'y':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x19e)]??0x3c},'scale':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x230)]??0.6},Sprite_FvUiStatus[_0x1e125b(0xc5)]={'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x11d)]??!![],'offset':{'x':VisuMZ['FrontviewBattleUI']['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x2cb)]??0x48,'y':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x15c)]??-0x24},'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['UI_BravePoints_Scale']??0x1},Sprite_FvUiStatus[_0x1e125b(0x1d1)]={'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x13e)]??!![],'offset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x152)]??-0x34,'y':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x264)]??0x3c}},Sprite_FvUiStatus['BOOST_POINTS']={'show':VisuMZ['FrontviewBattleUI']['Settings']['StatusUI'][_0x1e125b(0x2f1)]??!![],'angle':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x2b8)]??-0x2d,'offset':{'x':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x296)]??0x18,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x143)]??-0x2d},'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x287)]??0.8},Sprite_FvUiStatus['OPACITY_RATE']=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x1e0)]??0x10,Sprite_FvUiStatus[_0x1e125b(0x1be)]=VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['MoveDuration']??0x18,Sprite_FvUiStatus[_0x1e125b(0x12f)]={'selected':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x190)]??[0xff,0xff,0xff,0x40],'inputting':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)]['Inputting']??[0x0,0xff,0xff,0x40],'damageDuration':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)]['DamageDuration']??0x3c,'hpDamage':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x27b)]??[0xff,0x0,0x0,0x80],'hpHealing':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x248)]??[0x0,0xff,0x80,0x80],'mpDamage':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)][_0x1e125b(0x164)]??[0x80,0x0,0xff,0x80],'mpHealing':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x1b3)]??[0x0,0x80,0xff,0x80],'tpDamage':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x1d8)]['TpDamage']??[0x80,0xff,0x0,0x20],'tpHealing':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x166)]??[0x0,0xff,0x0,0x20]},Sprite_FvUiStatus[_0x1e125b(0x33f)]={'dead':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x1d8)][_0x1e125b(0x1cf)]??[0x0,0x0,0x0,0xff],'dying':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['StatusUI'][_0x1e125b(0x243)]??[0x0,-0x40,-0x40,0x40]},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(_0x1d5de3,_0x557077,_0x5701d3){const _0x452f1e=_0x1e125b;this[_0x452f1e(0x121)]=_0x1d5de3,this[_0x452f1e(0x252)]=_0x557077,this[_0x452f1e(0x148)]=_0x5701d3,Sprite_Clickable[_0x452f1e(0x371)][_0x452f1e(0x100)][_0x452f1e(0x198)](this),this[_0x452f1e(0x207)](),this[_0x452f1e(0xa3)](),this[_0x452f1e(0x2c1)](),this[_0x452f1e(0x27a)](!![]),SceneManager[_0x452f1e(0x33b)]()&&SceneManager[_0x452f1e(0xb8)]()&&this[_0x452f1e(0x221)](!![]),this[_0x452f1e(0x269)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x207)]=function(){const _0x1833ac=_0x1e125b;this['x']=this[_0x1833ac(0x1aa)](),this['y']=this[_0x1833ac(0x148)][_0x1833ac(0x205)],this[_0x1833ac(0x2d8)]['x']=0.5,this[_0x1833ac(0x2d8)]['y']=0x1,this[_0x1833ac(0x358)]=0x0,this[_0x1833ac(0x1ac)]=[0x0,0x0,0x0,0x0],this[_0x1833ac(0x29a)]=this[_0x1833ac(0x2f2)](),this[_0x1833ac(0x2d0)]=this[_0x1833ac(0x2f2)]()?this[_0x1833ac(0x2f2)]()['hp']:0x0,this[_0x1833ac(0x16d)]=this['actor']()?this[_0x1833ac(0x2f2)]()['mp']:0x0,this[_0x1833ac(0x206)]=this[_0x1833ac(0x2f2)]()?this[_0x1833ac(0x2f2)]()['tp']:0x0,this['_shakeDuration']=0x0,this[_0x1833ac(0x1f6)]=0x0;},Sprite_FvUiStatus[_0x1e125b(0x371)]['startingPositionX']=function(){const _0x1b40b0=_0x1e125b,_0x4b8a8f=Sprite_FvUiStatus['START_BUFFER_X'],_0x263830=_0x4b8a8f+ImageManager[_0x1b40b0(0x2f0)];switch(this[_0x1b40b0(0x252)]){case _0x1b40b0(0x362):return ImageManager[_0x1b40b0(0x2f0)]/0x2+_0x263830*this[_0x1b40b0(0x121)]+_0x4b8a8f;break;case _0x1b40b0(0x26b):return this[_0x1b40b0(0x148)][_0x1b40b0(0x345)]-ImageManager[_0x1b40b0(0x2f0)]/0x2-_0x263830*($gameParty['battleMembers']()[_0x1b40b0(0x1f2)]-this[_0x1b40b0(0x121)]-0x1)-_0x4b8a8f;break;case _0x1b40b0(0xf0):const _0x8c1b70=this[_0x1b40b0(0x121)]+0x1,_0x338969=$gameParty[_0x1b40b0(0xaf)]()['length']+0x1;return this['_parentWindow'][_0x1b40b0(0x345)]*_0x8c1b70/_0x338969;break;}return 0x0;},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2f2)]=function(){const _0x9c82ec=_0x1e125b;return $gameParty[_0x9c82ec(0xaf)]()[this['_partyIndex']];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x350)]=function(){const _0x2056b4=_0x1e125b;if(!this[_0x2056b4(0x2f2)]())return![];if(!$gameParty[_0x2056b4(0x154)]())return![];return this[_0x2056b4(0x2f2)]()===BattleManager[_0x2056b4(0x21b)]||this['actor']()===BattleManager[_0x2056b4(0x20e)];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xa3)]=function(){const _0x456ffc=_0x1e125b;this[_0x456ffc(0x223)](),this[_0x456ffc(0x324)](),this[_0x456ffc(0xa9)]();},Sprite_FvUiStatus['prototype']['createContainers']=function(){const _0x46a6dc=_0x1e125b;this['createShakeContainer'](),this[_0x46a6dc(0x290)](),this[_0x46a6dc(0xc8)](),this[_0x46a6dc(0x286)]();},Sprite_FvUiStatus['prototype'][_0x1e125b(0x324)]=function(){const _0x2bca93=_0x1e125b;this[_0x2bca93(0x111)](),this[_0x2bca93(0x142)](),this[_0x2bca93(0x9f)]();},Sprite_FvUiStatus['prototype'][_0x1e125b(0xa9)]=function(){const _0x17f2f9=_0x1e125b;this[_0x17f2f9(0x182)](),this[_0x17f2f9(0x20d)](),this[_0x17f2f9(0x2a4)](),this[_0x17f2f9(0x12c)](),this[_0x17f2f9(0x1c2)](),this[_0x17f2f9(0x35b)](),this[_0x17f2f9(0x149)](),this[_0x17f2f9(0x184)](),this['createMpGauge'](),this[_0x17f2f9(0x10e)]();},Sprite_FvUiStatus[_0x1e125b(0x371)]['createFilters']=function(){},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x269)]=function(){const _0x4feea1=_0x1e125b;Sprite_Clickable[_0x4feea1(0x371)][_0x4feea1(0x269)][_0x4feea1(0x198)](this),this['updateContainers'](),this['updateGraphics'](),this['updateUi'](),this[_0x4feea1(0x2e1)](),this['updateFilters']();},Sprite_FvUiStatus[_0x1e125b(0x371)]['updateContainers']=function(){const _0x433079=_0x1e125b;this[_0x433079(0xc1)](),this[_0x433079(0x150)](),this['updateActiveContainer']();},Sprite_FvUiStatus['prototype'][_0x1e125b(0x245)]=function(){this['updateFaceGraphic'](),this['updateStateOverlaySprite']();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xa1)]=function(){const _0x64526=_0x1e125b;this['updateBreakShieldIcon'](),this[_0x64526(0x2ae)](),this[_0x64526(0xd6)](),this[_0x64526(0x237)](),this[_0x64526(0x351)](),this[_0x64526(0x172)](),this[_0x64526(0x195)](),this[_0x64526(0x174)](),this[_0x64526(0x357)](),this['updateHpGauge']();},Sprite_FvUiStatus['prototype'][_0x1e125b(0x2e1)]=function(){const _0x526f55=_0x1e125b;this['updateOpacity'](),this['checkPosition'](),this[_0x526f55(0x17b)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x1fc)]=function(){const _0x4f4ab3=_0x1e125b;this[_0x4f4ab3(0x1e7)](),this[_0x4f4ab3(0x2f5)]();},Sprite_FvUiStatus[_0x1e125b(0x371)]['createShakeContainer']=function(){const _0x173e7c=_0x1e125b;this[_0x173e7c(0x2f6)]=new Sprite(),this['addChild'](this[_0x173e7c(0x2f6)]);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xc1)]=function(){const _0x199e01=_0x1e125b;if(!Sprite_FvUiStatus[_0x199e01(0x156)][_0x199e01(0x325)])return;if(this[_0x199e01(0x2f2)]()){this[_0x199e01(0x206)]!==this['actor']()['tp']&&(this[_0x199e01(0x29a)]===this[_0x199e01(0x2f2)]()&&this['startBlendFlash']('tp',this[_0x199e01(0x2f2)]()['tp']<this[_0x199e01(0x206)]),this[_0x199e01(0x206)]=this['actor']()['tp']);this[_0x199e01(0x16d)]!==this[_0x199e01(0x2f2)]()['mp']&&(this[_0x199e01(0x29a)]===this['actor']()&&this[_0x199e01(0xcc)]('mp',this['actor']()['mp']<this[_0x199e01(0x16d)]),this[_0x199e01(0x16d)]=this['actor']()['mp']);if(this[_0x199e01(0x2d0)]!==this[_0x199e01(0x2f2)]()['hp']){const _0x596e76=this[_0x199e01(0x2f2)]()['hp']<this[_0x199e01(0x2d0)]&&this[_0x199e01(0x29a)]===this[_0x199e01(0x2f2)]();this[_0x199e01(0x29a)]===this[_0x199e01(0x2f2)]()&&this[_0x199e01(0xcc)]('hp',_0x596e76),this[_0x199e01(0x2d0)]=this['actor']()['hp'],_0x596e76&&(this[_0x199e01(0x1f9)]=Sprite_FvUiStatus[_0x199e01(0x156)][_0x199e01(0x2a5)]);}this[_0x199e01(0x29a)]=this[_0x199e01(0x2f2)]();}else this[_0x199e01(0x2d0)]=0x0,this[_0x199e01(0x16d)]=0x0,this['_lastTpValue']=0x0,this[_0x199e01(0x29a)]=null;},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x150)]=function(){const _0x2142c2=_0x1e125b;if(!Sprite_FvUiStatus[_0x2142c2(0x156)]['enabled'])return;if(this['_shakeDuration']<=0x0)return;this[_0x2142c2(0x2f6)]['x']=Math[_0x2142c2(0x1fb)](this[_0x2142c2(0x1f9)])*(Math[_0x2142c2(0x29f)]()<0.5?-0x1:0x1),this[_0x2142c2(0x2f6)]['y']=Math[_0x2142c2(0x1fb)](this[_0x2142c2(0x1f9)])*(Math['random']()<0.5?-0x1:0x1),this[_0x2142c2(0x1f9)]--;},Sprite_FvUiStatus[_0x1e125b(0x371)]['createActiveContainer']=function(){const _0x432628=_0x1e125b;this[_0x432628(0x2d4)]=new Sprite(),this[_0x432628(0x2f6)][_0x432628(0x220)](this[_0x432628(0x2d4)]);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x284)]=function(){const _0x23db02=_0x1e125b;if(!this[_0x23db02(0x2d4)])return;const _0x1f8607=this[_0x23db02(0x350)](),_0x4dcae5=_0x1f8607?Sprite_FvUiStatus[_0x23db02(0x239)]['x']:0x0,_0x4d8871=_0x1f8607?Sprite_FvUiStatus['ACTIVE_SHIFT']['y']:0x0,_0x9aef77=Sprite_FvUiStatus[_0x23db02(0x239)][_0x23db02(0xc6)],_0x11ef8a=Sprite_FvUiStatus['ACTIVE_SHIFT'][_0x23db02(0x218)];this[_0x23db02(0x2d4)]['x']<_0x4dcae5&&(this[_0x23db02(0x2d4)]['x']=Math[_0x23db02(0x197)](this[_0x23db02(0x2d4)]['x']+_0x9aef77,_0x4dcae5)),this[_0x23db02(0x2d4)]['x']>_0x4dcae5&&(this[_0x23db02(0x2d4)]['x']=Math['max'](this[_0x23db02(0x2d4)]['x']-_0x9aef77,_0x4dcae5)),this[_0x23db02(0x2d4)]['y']<_0x4d8871&&(this[_0x23db02(0x2d4)]['y']=Math['min'](this[_0x23db02(0x2d4)]['y']+_0x11ef8a,_0x4d8871)),this[_0x23db02(0x2d4)]['y']>_0x4d8871&&(this[_0x23db02(0x2d4)]['y']=Math['max'](this[_0x23db02(0x2d4)]['y']-_0x11ef8a,_0x4d8871));},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xc8)]=function(){const _0x4bbc7b=_0x1e125b;this[_0x4bbc7b(0x265)]=new Sprite(),this[_0x4bbc7b(0x2d4)][_0x4bbc7b(0x220)](this[_0x4bbc7b(0x265)]),this[_0x4bbc7b(0x265)]['x']=Sprite_FvUiStatus[_0x4bbc7b(0x25b)]['x'],this[_0x4bbc7b(0x265)]['y']=Sprite_FvUiStatus['GRAPHICS_OFFSET']['y'];},Sprite_FvUiStatus['prototype'][_0x1e125b(0x286)]=function(){const _0x4ec0f5=_0x1e125b;this[_0x4ec0f5(0xe8)]=new Sprite(),this['_activeContainer']['addChild'](this[_0x4ec0f5(0xe8)]),this[_0x4ec0f5(0xe8)]['x']=Sprite_FvUiStatus[_0x4ec0f5(0x225)]['x'],this[_0x4ec0f5(0xe8)]['y']=Sprite_FvUiStatus[_0x4ec0f5(0x225)]['y'];},Sprite_FvUiStatus[_0x1e125b(0x371)]['createBackgroundSprite']=function(){const _0x681e37=_0x1e125b;this[_0x681e37(0x110)](),this['loadBackgroundSpriteBitmap']();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x110)]=function(){const _0x13a79d=_0x1e125b,_0x12bd3f=new Sprite();this[_0x13a79d(0xbe)]=_0x12bd3f,this[_0x13a79d(0x265)]['addChild'](_0x12bd3f),_0x12bd3f[_0x13a79d(0x2d8)]['x']=0.5,_0x12bd3f[_0x13a79d(0x2d8)]['y']=0.5,_0x12bd3f['x']=Sprite_FvUiStatus[_0x13a79d(0x2b9)]['x'],_0x12bd3f['y']=Sprite_FvUiStatus[_0x13a79d(0x2b9)]['y'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xab)]=function(){const _0x13d2cb=_0x1e125b;if(!Sprite_FvUiStatus[_0x13d2cb(0x169)])return;const _0x44b39d=Sprite_FvUiStatus[_0x13d2cb(0x315)];_0x44b39d!==''?this[_0x13d2cb(0xbe)][_0x13d2cb(0x271)]=ImageManager[_0x13d2cb(0x297)](_0x44b39d):this[_0x13d2cb(0xbe)][_0x13d2cb(0x271)]=ImageManager[_0x13d2cb(0x21c)]();},Sprite_FvUiStatus[_0x1e125b(0x371)]['createFaceSprite']=function(){const _0x109830=_0x1e125b;if(!Sprite_FvUiStatus['FACE_SHOW'])return;this[_0x109830(0x2a7)]=new Sprite_Clickable(),this['_graphicsContainer'][_0x109830(0x220)](this[_0x109830(0x2a7)]),this[_0x109830(0x2ff)](),this[_0x109830(0xba)](),this[_0x109830(0x21f)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2ff)]=function(){const _0x41623b=_0x1e125b,_0x56ebc1=new Sprite();this['_faceSprite']=_0x56ebc1,_0x56ebc1[_0x41623b(0x127)]=_0x56ebc1[_0x41623b(0x127)]||[],this['_faceContainer'][_0x41623b(0x220)](_0x56ebc1),_0x56ebc1['anchor']['x']=0.5,_0x56ebc1['anchor']['y']=0.5,_0x56ebc1['x']=Sprite_FvUiStatus['FACE_OFFSET']['x'],_0x56ebc1['y']=Sprite_FvUiStatus['FACE_OFFSET']['y'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xba)]=function(){const _0x1cfd01=_0x1e125b;if(!Sprite_FvUiStatus[_0x1cfd01(0xec)])return;this['addFaceMaskBackground'](),this[_0x1cfd01(0x2a3)](),this[_0x1cfd01(0x2c5)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x31a)]=function(){const _0x1c624d=_0x1e125b,_0x59947f=new Sprite();this[_0x1c624d(0x192)]=_0x59947f,_0x59947f['filters']=_0x59947f[_0x1c624d(0x127)]||[],this[_0x1c624d(0x2a7)][_0x1c624d(0x220)](_0x59947f),this['_faceContainer']['addChild'](this[_0x1c624d(0x22b)]),_0x59947f[_0x1c624d(0x2d8)]['x']=0.5,_0x59947f[_0x1c624d(0x2d8)]['y']=0.5,_0x59947f['x']=Sprite_FvUiStatus[_0x1c624d(0x347)]['x'],_0x59947f['y']=Sprite_FvUiStatus[_0x1c624d(0x347)]['y'];const _0x4284a9=ImageManager[_0x1c624d(0x2f0)],_0x462ad3=ImageManager[_0x1c624d(0xd4)],_0x2d06b7=Sprite_FvUiStatus[_0x1c624d(0x11c)][_0x1c624d(0x17e)],_0x4c433a=Sprite_FvUiStatus[_0x1c624d(0x11c)][_0x1c624d(0x29c)],_0x21a987=Sprite_FvUiStatus[_0x1c624d(0x11c)][_0x1c624d(0x2ef)],_0x3e8ab8=new Bitmap(_0x4284a9,_0x462ad3);_0x3e8ab8[_0x1c624d(0x282)](0x0,0x0,_0x4284a9,_0x462ad3,_0x2d06b7,_0x4c433a,_0x21a987),_0x59947f['bitmap']=_0x3e8ab8;},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2a3)]=function(){const _0x144458=_0x1e125b,_0x34aa76=new Sprite();this[_0x144458(0x370)]=_0x34aa76,this[_0x144458(0x22b)][_0x144458(0x220)](_0x34aa76),_0x34aa76[_0x144458(0x2d8)]['x']=0.5,_0x34aa76[_0x144458(0x2d8)]['y']=0.5;const _0x29d53f=Sprite_FvUiStatus[_0x144458(0x31c)];_0x29d53f!==''?this['_faceMaskSprite'][_0x144458(0x271)]=ImageManager['loadSystem'](Sprite_FvUiStatus[_0x144458(0x31c)]):this[_0x144458(0x370)]['bitmap']=ImageManager[_0x144458(0x2b6)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2c5)]=function(){const _0x2757f2=_0x1e125b;this[_0x2757f2(0x1f5)]=new PIXI[(_0x2757f2(0x311))](this[_0x2757f2(0x370)]),this[_0x2757f2(0x22b)]['filters'][_0x2757f2(0x352)](this[_0x2757f2(0x1f5)]),this['_maskBackground'][_0x2757f2(0x127)][_0x2757f2(0x352)](this[_0x2757f2(0x1f5)]);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x21f)]=function(){const _0x336417=_0x1e125b;if(!Sprite_FvUiStatus[_0x336417(0x360)])return;const _0x3f9ff2=this[_0x336417(0x359)](),_0x5a7acb=this[_0x336417(0x2e8)]();this['_faceGraphicName']=_0x3f9ff2,this[_0x336417(0x270)]=_0x5a7acb,this[_0x336417(0xf6)]!==''?(this[_0x336417(0x22b)][_0x336417(0x271)]=ImageManager[_0x336417(0x307)](_0x3f9ff2),this[_0x336417(0x1ec)]()):(this[_0x336417(0x22b)][_0x336417(0x271)]=new Bitmap(0x1,0x1),this[_0x336417(0x22b)][_0x336417(0xa5)](0x0,0x0,0x0,0x0));},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x359)]=function(){const _0x25f212=_0x1e125b;if(!this['actor']())return'';return this[_0x25f212(0x2f2)]()['faceName']();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2e8)]=function(){const _0x33d511=_0x1e125b;if(!this['actor']())return 0x0;return this['actor']()[_0x33d511(0x2de)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x1ec)]=function(){const _0x307cc6=_0x1e125b,_0x3b48fe=this[_0x307cc6(0x270)],_0x57433a=ImageManager['faceWidth'],_0x2f5ab2=ImageManager[_0x307cc6(0xd4)],_0xfc3180=ImageManager[_0x307cc6(0x2f0)],_0xaac275=ImageManager[_0x307cc6(0xd4)],_0x10502e=Math[_0x307cc6(0x332)](_0x3b48fe%0x4*_0xfc3180+(_0x57433a-_0xfc3180)/0x2),_0x5e1dbe=Math['floor'](Math['floor'](_0x3b48fe/0x4)*_0x2f5ab2+(_0x2f5ab2-_0xaac275)/0x2);this[_0x307cc6(0x22b)][_0x307cc6(0xa5)](_0x10502e,_0x5e1dbe,_0x57433a,_0x2f5ab2);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2d3)]=function(){const _0x395509=_0x1e125b;if(!this[_0x395509(0x22b)])return;if(!Sprite_FvUiStatus[_0x395509(0x360)])return;(this['_faceGraphicName']!==this[_0x395509(0x359)]()||this[_0x395509(0x270)]!==this[_0x395509(0x2e8)]())&&this[_0x395509(0x21f)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x9f)]=function(){const _0x4e3e95=_0x1e125b;if(!Sprite_FvUiStatus[_0x4e3e95(0xae)]['overlay'][_0x4e3e95(0x251)])return;const _0x1ba92a=new Sprite_StateOverlay();this[_0x4e3e95(0x1b8)]=_0x1ba92a,this[_0x4e3e95(0x265)][_0x4e3e95(0x220)](_0x1ba92a),_0x1ba92a['x']=Sprite_FvUiStatus[_0x4e3e95(0xae)]['overlay'][_0x4e3e95(0x2a8)]['x'],_0x1ba92a['y']=Sprite_FvUiStatus[_0x4e3e95(0xae)]['overlay'][_0x4e3e95(0x2a8)]['y'];},Sprite_FvUiStatus['prototype']['updateStateOverlaySprite']=function(){const _0x11cbb8=_0x1e125b;if(!this['_stateOverlaySprite'])return;if(this[_0x11cbb8(0x1b8)][_0x11cbb8(0x1c8)]===this['actor']())return;this[_0x11cbb8(0x1b8)][_0x11cbb8(0x260)](this['actor']());},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x182)]=function(){const _0x1dbd42=_0x1e125b;if(!this[_0x1dbd42(0x257)]())return;const _0x46399a=new Sprite_BreakShieldIcon();this['_breakShieldSprite']=_0x46399a,this[_0x1dbd42(0xe8)][_0x1dbd42(0x220)](_0x46399a),_0x46399a['x']=Sprite_FvUiStatus['BREAK_SHIELDS'][_0x1dbd42(0x2a8)]['x'],_0x46399a['y']=Sprite_FvUiStatus[_0x1dbd42(0x1d1)][_0x1dbd42(0x2a8)]['y'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x257)]=function(){const _0x16b1d6=_0x1e125b;if(!Sprite_FvUiStatus['BREAK_SHIELDS'][_0x16b1d6(0x251)])return![];if(!SceneManager[_0x16b1d6(0x33b)]())return![];if(!Imported[_0x16b1d6(0x11a)])return![];return!![];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x124)]=function(){const _0x32b46b=_0x1e125b;if(!this[_0x32b46b(0x23b)])return;if(this[_0x32b46b(0x23b)]['_battler']===this[_0x32b46b(0x2f2)]())return;this[_0x32b46b(0x23b)][_0x32b46b(0x260)](this[_0x32b46b(0x2f2)](),![]);},Sprite_FvUiStatus['prototype'][_0x1e125b(0x20d)]=function(){const _0x9b48ae=_0x1e125b;if(!Sprite_FvUiStatus[_0x9b48ae(0xae)][_0x9b48ae(0xc3)][_0x9b48ae(0x251)])return;const _0x5f4e3a=new Sprite_StateIcon();this[_0x9b48ae(0x186)]=_0x5f4e3a,this['_uiContainer'][_0x9b48ae(0x220)](_0x5f4e3a),_0x5f4e3a['x']=Sprite_FvUiStatus[_0x9b48ae(0xae)]['icon'][_0x9b48ae(0x2a8)]['x'],_0x5f4e3a['y']=Sprite_FvUiStatus[_0x9b48ae(0xae)][_0x9b48ae(0xc3)][_0x9b48ae(0x2a8)]['y'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2ae)]=function(){const _0x519b7c=_0x1e125b;if(!this[_0x519b7c(0x186)])return;if(this[_0x519b7c(0x186)][_0x519b7c(0x1c8)]===this[_0x519b7c(0x2f2)]())return;this[_0x519b7c(0x186)]['setup'](this[_0x519b7c(0x2f2)]());},Sprite_FvUiStatus['prototype'][_0x1e125b(0x2a4)]=function(){const _0x11e50d=_0x1e125b;if(!this[_0x11e50d(0xe0)]())return;const _0x3fe07d=new Sprite_Gauge();this[_0x11e50d(0x302)]=_0x3fe07d,this[_0x11e50d(0xe8)][_0x11e50d(0x220)](_0x3fe07d),_0x3fe07d[_0x11e50d(0x256)]=-Sprite_FvUiStatus[_0x11e50d(0x1fd)]['angle'],_0x3fe07d['x']=Sprite_FvUiStatus[_0x11e50d(0x1fd)][_0x11e50d(0x2a8)]['x'],_0x3fe07d['y']=Sprite_FvUiStatus['AGGRO_GAUGE'][_0x11e50d(0x2a8)]['y'],_0x3fe07d[_0x11e50d(0x104)]['x']=Sprite_FvUiStatus[_0x11e50d(0x1fd)][_0x11e50d(0x104)],_0x3fe07d[_0x11e50d(0x104)]['y']=Sprite_FvUiStatus[_0x11e50d(0x1fd)]['scale'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xe0)]=function(){const _0x167f84=_0x1e125b;if(!Sprite_FvUiStatus[_0x167f84(0x1fd)][_0x167f84(0x251)])return![];if(!SceneManager[_0x167f84(0x33b)]())return![];if(!Imported[_0x167f84(0x1b7)])return![];return ConfigManager[_0x167f84(0x122)]&&VisuMZ[_0x167f84(0x255)]['Settings']['Aggro'][_0x167f84(0x19d)];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xd6)]=function(){const _0xb961b5=_0x1e125b;if(!this[_0xb961b5(0x302)])return;if(this[_0xb961b5(0x302)][_0xb961b5(0x1c8)]===this['actor']())return;this['_aggroGauge'][_0xb961b5(0x12d)]=!![],this['_aggroGauge'][_0xb961b5(0x260)](this['actor'](),_0xb961b5(0x17d));},Sprite_FvUiStatus[_0x1e125b(0x371)]['createTpbGauge']=function(){const _0x79c535=_0x1e125b;if(!this[_0x79c535(0x1fe)]())return;const _0x59f49e=new Sprite_Gauge();this[_0x79c535(0x232)]=_0x59f49e,this[_0x79c535(0xe8)][_0x79c535(0x220)](_0x59f49e),_0x59f49e[_0x79c535(0x256)]=-Sprite_FvUiStatus[_0x79c535(0x123)][_0x79c535(0x256)],_0x59f49e['x']=Sprite_FvUiStatus[_0x79c535(0x123)]['offset']['x'],_0x59f49e['y']=Sprite_FvUiStatus[_0x79c535(0x123)][_0x79c535(0x2a8)]['y'],_0x59f49e[_0x79c535(0x104)]['x']=Sprite_FvUiStatus[_0x79c535(0x123)][_0x79c535(0x104)],_0x59f49e[_0x79c535(0x104)]['y']=Sprite_FvUiStatus[_0x79c535(0x123)][_0x79c535(0x104)];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x1fe)]=function(){const _0x1a0dbc=_0x1e125b;if(!Sprite_FvUiStatus[_0x1a0dbc(0x123)][_0x1a0dbc(0x251)])return![];if(!SceneManager[_0x1a0dbc(0x33b)]())return![];if(!BattleManager[_0x1a0dbc(0x16a)]())return![];if(Imported[_0x1a0dbc(0x346)]){if(!VisuMZ[_0x1a0dbc(0x340)][_0x1a0dbc(0x1bc)][_0x1a0dbc(0x179)][_0x1a0dbc(0x305)])return![];if(!ConfigManager[_0x1a0dbc(0x1f1)])return![];}if(Imported['VisuMZ_2_BattleSystemCTB']&&BattleManager[_0x1a0dbc(0x1a8)]())return![];return!![];},Sprite_FvUiStatus['prototype']['updateTpbGauge']=function(){const _0x46dec6=_0x1e125b;if(!this[_0x46dec6(0x232)])return;if(this[_0x46dec6(0x232)][_0x46dec6(0x1c8)]===this[_0x46dec6(0x2f2)]())return;if(!this['actor']())return;this[_0x46dec6(0x232)][_0x46dec6(0x260)](this[_0x46dec6(0x2f2)](),_0x46dec6(0x1a9));},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x1c2)]=function(){const _0x122ecc=_0x1e125b;if(!Sprite_FvUiStatus['NAME']['show'])return;const _0x21b8b2=new Sprite_Name();this[_0x122ecc(0x330)]=_0x21b8b2,this['_uiContainer'][_0x122ecc(0x220)](_0x21b8b2),_0x21b8b2[_0x122ecc(0x2d8)]['x']=0.5,_0x21b8b2[_0x122ecc(0x256)]=-Sprite_FvUiStatus[_0x122ecc(0x227)]['angle'],_0x21b8b2['x']=Sprite_FvUiStatus[_0x122ecc(0x227)]['offset']['x'],_0x21b8b2['y']=Sprite_FvUiStatus[_0x122ecc(0x227)]['offset']['y'],_0x21b8b2[_0x122ecc(0x104)]['x']=Sprite_FvUiStatus[_0x122ecc(0x227)][_0x122ecc(0x104)],_0x21b8b2[_0x122ecc(0x104)]['y']=Sprite_FvUiStatus['NAME'][_0x122ecc(0x104)];},Sprite_FvUiStatus[_0x1e125b(0x371)]['updateNameSprite']=function(){const _0x5f3c75=_0x1e125b;if(!this[_0x5f3c75(0x330)])return;if(this['_nameSprite']['_battler']===this['actor']())return;this[_0x5f3c75(0x330)][_0x5f3c75(0x260)](this[_0x5f3c75(0x2f2)]());},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x35b)]=function(){const _0x24ae88=_0x1e125b;if(!this[_0x24ae88(0x171)]())return;const _0x27161d=new Sprite_BoostContainer();this['_boostPointsSprite']=_0x27161d,this[_0x24ae88(0xe8)][_0x24ae88(0x220)](_0x27161d),_0x27161d[_0x24ae88(0x256)]=-Sprite_FvUiStatus[_0x24ae88(0x1e2)]['angle'],_0x27161d['x']=Sprite_FvUiStatus[_0x24ae88(0x1e2)][_0x24ae88(0x2a8)]['x'],_0x27161d['y']=Sprite_FvUiStatus[_0x24ae88(0x1e2)][_0x24ae88(0x2a8)]['y'],_0x27161d[_0x24ae88(0x104)]['x']*=Sprite_FvUiStatus[_0x24ae88(0x1e2)]['scale'],_0x27161d[_0x24ae88(0x104)]['y']*=Sprite_FvUiStatus[_0x24ae88(0x1e2)][_0x24ae88(0x104)];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x171)]=function(){const _0x24f09e=_0x1e125b;if(!Sprite_FvUiStatus['BOOST_POINTS']['show'])return![];if(!SceneManager[_0x24f09e(0x33b)]())return![];if(!Imported['VisuMZ_3_BoostAction'])return![];return BattleManager['allowBoostAction']();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x172)]=function(){const _0x28795f=_0x1e125b;if(!this[_0x28795f(0x159)])return;if(this[_0x28795f(0x159)]['_battler']===this[_0x28795f(0x2f2)]())return;this[_0x28795f(0x159)][_0x28795f(0x260)](this[_0x28795f(0x2f2)]()),this[_0x28795f(0x1de)]=this[_0x28795f(0x2f2)]();},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x149)]=function(){const _0x3e8f18=_0x1e125b;if(!this[_0x3e8f18(0x329)]())return;this[_0x3e8f18(0xfe)](),this[_0x3e8f18(0x293)]();},Sprite_FvUiStatus['prototype'][_0x1e125b(0xfe)]=function(){const _0xeec60d=_0x1e125b,_0x28601c=new Sprite();this['_bravePointsSprite']=_0x28601c,this[_0xeec60d(0xe8)][_0xeec60d(0x220)](_0x28601c),_0x28601c['anchor']['x']=0.5,_0x28601c[_0xeec60d(0x2d8)]['y']=0.5,_0x28601c['x']=Sprite_FvUiStatus[_0xeec60d(0xc5)]['offset']['x'],_0x28601c['y']=Sprite_FvUiStatus[_0xeec60d(0xc5)][_0xeec60d(0x2a8)]['y'],_0x28601c['scale']['x']*=Sprite_FvUiStatus[_0xeec60d(0xc5)]['scale'],_0x28601c[_0xeec60d(0x104)]['y']*=Sprite_FvUiStatus[_0xeec60d(0xc5)][_0xeec60d(0x104)],_0x28601c[_0xeec60d(0x27d)]=![];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x293)]=function(){const _0x57202a=_0x1e125b,_0x37eac1=new Rectangle(0x0,0x0,ImageManager[_0x57202a(0x2f0)],Window_Base['prototype'][_0x57202a(0xf3)](0x1));this[_0x57202a(0x9e)]=new Window_Base(_0x37eac1),this[_0x57202a(0x262)]=undefined,this['_lastBravePoints']=-0x64,this['_lastPredictedBrave']=-0x64;},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x329)]=function(){const _0x4747ad=_0x1e125b;if(!Sprite_FvUiStatus[_0x4747ad(0xc5)][_0x4747ad(0x251)])return![];if(!SceneManager[_0x4747ad(0x33b)]())return![];if(!Imported['VisuMZ_2_BattleSystemBTB'])return![];return BattleManager[_0x4747ad(0x235)]();},Sprite_FvUiStatus['prototype'][_0x1e125b(0x195)]=function(){const _0x4e5e2f=_0x1e125b;if(!this[_0x4e5e2f(0x249)])return;if(this[_0x4e5e2f(0x2f2)]())this[_0x4e5e2f(0x109)]()&&this[_0x4e5e2f(0xdd)](),this['_bravePointsSprite'][_0x4e5e2f(0x27d)]=!![];else this[_0x4e5e2f(0x217)]!==0x0&&(this[_0x4e5e2f(0x249)][_0x4e5e2f(0x27d)]=![],this[_0x4e5e2f(0x217)]=0x0);},Sprite_FvUiStatus['prototype']['needsBravePointsUpdate']=function(){const _0x5dee13=_0x1e125b;if(this[_0x5dee13(0x217)]!==this['actor']()[_0x5dee13(0x295)]())return!![];if(this['_lastPredictedBrave']!==this[_0x5dee13(0x2f2)]()[_0x5dee13(0x25e)]())return!![];if(this[_0x5dee13(0x262)]!==BattleManager[_0x5dee13(0xea)]())return!![];return![];},Sprite_FvUiStatus['prototype'][_0x1e125b(0xdd)]=function(){const _0x56d6d6=_0x1e125b;if(!this['_bravePointsWindow'])return;this['_lastBravePoints']=this['actor']()['bravePoints'](),this[_0x56d6d6(0x1b9)]=this[_0x56d6d6(0x2f2)]()[_0x56d6d6(0x25e)](),this[_0x56d6d6(0x262)]=BattleManager['isInputting']();const _0x5d6bce=ImageManager[_0x56d6d6(0x2f0)],_0x32c62d=this[_0x56d6d6(0x9e)][_0x56d6d6(0x1c9)]();this[_0x56d6d6(0x9e)][_0x56d6d6(0x309)][_0x56d6d6(0x105)](),this[_0x56d6d6(0x9e)][_0x56d6d6(0x30e)](this['actor'](),0x0,0x0,_0x5d6bce,_0x32c62d,_0x56d6d6(0x362)),this[_0x56d6d6(0x249)][_0x56d6d6(0x271)]=this[_0x56d6d6(0x9e)][_0x56d6d6(0x309)];},Sprite_FvUiStatus['prototype'][_0x1e125b(0x10e)]=function(){const _0x14b12f=_0x1e125b;if(!Sprite_FvUiStatus[_0x14b12f(0x2e7)]['show'])return;const _0x1b65d4=new Sprite_Gauge();this[_0x14b12f(0x1f0)]=_0x1b65d4,this[_0x14b12f(0xe8)]['addChild'](_0x1b65d4),_0x1b65d4[_0x14b12f(0x256)]=-Sprite_FvUiStatus['HP_GAUGE'][_0x14b12f(0x256)],_0x1b65d4['x']=Sprite_FvUiStatus[_0x14b12f(0x2e7)]['offset']['x'],_0x1b65d4['y']=Sprite_FvUiStatus[_0x14b12f(0x2e7)]['offset']['y'],_0x1b65d4[_0x14b12f(0x104)]['x']=Sprite_FvUiStatus[_0x14b12f(0x2e7)]['scale'],_0x1b65d4['scale']['y']=Sprite_FvUiStatus[_0x14b12f(0x2e7)][_0x14b12f(0x104)];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x98)]=function(){const _0x1d294e=_0x1e125b;if(!this['_hpGauge'])return;if(this[_0x1d294e(0x1f0)][_0x1d294e(0x1c8)]===this[_0x1d294e(0x2f2)]())return;let _0x8eb125='hp';Imported['VisuMZ_1_SkillsStatesCore']&&this[_0x1d294e(0x2f2)]()&&(_0x8eb125=Window_StatusBase['prototype'][_0x1d294e(0x36d)](this[_0x1d294e(0x2f2)](),_0x8eb125)),this[_0x1d294e(0x1f0)][_0x1d294e(0x260)](this[_0x1d294e(0x2f2)](),_0x8eb125);},Sprite_FvUiStatus['prototype'][_0x1e125b(0xad)]=function(){const _0x522e22=_0x1e125b;if(!Sprite_FvUiStatus['MP_GAUGE'][_0x522e22(0x251)])return;const _0x1fea9=new Sprite_Gauge();this[_0x522e22(0x333)]=_0x1fea9,this[_0x522e22(0xe8)][_0x522e22(0x220)](_0x1fea9),_0x1fea9['angle']=-Sprite_FvUiStatus[_0x522e22(0x2bc)]['angle'],_0x1fea9['x']=Sprite_FvUiStatus[_0x522e22(0x2bc)]['offset']['x'],_0x1fea9['y']=Sprite_FvUiStatus['MP_GAUGE'][_0x522e22(0x2a8)]['y'],_0x1fea9['scale']['x']=Sprite_FvUiStatus[_0x522e22(0x2bc)]['scale'],_0x1fea9[_0x522e22(0x104)]['y']=Sprite_FvUiStatus['MP_GAUGE'][_0x522e22(0x104)];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x357)]=function(){const _0x20df13=_0x1e125b;if(!this[_0x20df13(0x333)])return;if(this[_0x20df13(0x333)]['_battler']===this[_0x20df13(0x2f2)]())return;let _0x254f60='mp';Imported[_0x20df13(0x238)]&&this['actor']()&&(_0x254f60=Window_StatusBase[_0x20df13(0x371)]['convertGaugeTypeSkillsStatesCore'](this['actor'](),_0x254f60)),this[_0x20df13(0x333)][_0x20df13(0x260)](this[_0x20df13(0x2f2)](),_0x254f60);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x184)]=function(){const _0x43c423=_0x1e125b;if(!Sprite_FvUiStatus['TP_GAUGE']['show'])return;if(!$dataSystem[_0x43c423(0xc2)])return;const _0x246eaf=new Sprite_Gauge();this['_tpGauge']=_0x246eaf,this[_0x43c423(0xe8)]['addChild'](_0x246eaf),_0x246eaf['angle']=-Sprite_FvUiStatus[_0x43c423(0x170)][_0x43c423(0x256)],_0x246eaf['x']=Sprite_FvUiStatus[_0x43c423(0x170)][_0x43c423(0x2a8)]['x'],_0x246eaf['y']=Sprite_FvUiStatus[_0x43c423(0x170)][_0x43c423(0x2a8)]['y'],_0x246eaf['scale']['x']=Sprite_FvUiStatus[_0x43c423(0x170)]['scale'],_0x246eaf[_0x43c423(0x104)]['y']=Sprite_FvUiStatus['TP_GAUGE']['scale'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x174)]=function(){const _0x25e1d3=_0x1e125b;if(!this[_0x25e1d3(0x157)])return;if(this[_0x25e1d3(0x157)][_0x25e1d3(0x1c8)]===this['actor']())return;let _0x22db9b='tp';Imported['VisuMZ_1_SkillsStatesCore']&&this[_0x25e1d3(0x2f2)]()&&(_0x22db9b=Window_StatusBase[_0x25e1d3(0x371)][_0x25e1d3(0x36d)](this[_0x25e1d3(0x2f2)](),_0x22db9b)),this[_0x25e1d3(0x157)][_0x25e1d3(0x260)](this['actor'](),_0x22db9b);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x263)]=Sprite_Gauge[_0x1e125b(0x371)][_0x1e125b(0x160)],Sprite_Gauge[_0x1e125b(0x371)][_0x1e125b(0x160)]=function(){const _0x16e37e=_0x1e125b;if(this['_battler']&&this[_0x16e37e(0x372)]==='tp')return!![];return VisuMZ[_0x16e37e(0x1a6)][_0x16e37e(0x263)][_0x16e37e(0x198)](this);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x27a)]=function(_0x31cffe){const _0x439a31=_0x1e125b,_0x856a24=this[_0x439a31(0x19f)]();if(_0x31cffe){this[_0x439a31(0xfc)]=_0x856a24;return;}else{const _0x121acf=Sprite_FvUiStatus[_0x439a31(0xf7)];if(this['opacity']>_0x856a24)this[_0x439a31(0xfc)]=Math['max'](this[_0x439a31(0xfc)]-_0x121acf,_0x856a24);else this[_0x439a31(0xfc)]<_0x856a24&&(this[_0x439a31(0xfc)]=Math['min'](this[_0x439a31(0xfc)]+_0x121acf,_0x856a24));}},Sprite_FvUiStatus['prototype'][_0x1e125b(0x19f)]=function(){const _0xfceedc=_0x1e125b;if(!this[_0xfceedc(0x2f2)]())return 0x0;if(SceneManager[_0xfceedc(0xbd)]()){if($gameScreen[_0xfceedc(0x24f)]()<0xff)return 0x0;if(!$gameSystem['isFrontviewBattleUiMapVisible']())return 0x0;if($gamePlayer[_0xfceedc(0x14d)]())return Sprite_FvUiStatus[_0xfceedc(0x15d)];}if(this[_0xfceedc(0x2f2)]()[_0xfceedc(0x363)]())return 0xff;return 0xff;},Sprite_FvUiStatus['prototype'][_0x1e125b(0x221)]=function(_0x41792c){const _0x114350=_0x1e125b;if(this['_cache_battleMembersSize']===$gameParty[_0x114350(0xaf)]()[_0x114350(0x1f2)])return;if(SceneManager[_0x114350(0xbd)]())_0x41792c=!![];this[_0x114350(0x112)]=$gameParty['battleMembers']()['length'],this[_0x114350(0x1f6)]=_0x41792c?0x1:Sprite_FvUiStatus[_0x114350(0x1be)];if(_0x41792c)this[_0x114350(0x17b)]();},Sprite_FvUiStatus['prototype'][_0x1e125b(0x17b)]=function(){const _0x7f37ff=_0x1e125b;if(this[_0x7f37ff(0x1f6)]<=0x0)return;const _0x32eed3=this[_0x7f37ff(0x1f6)],_0x4d1786=this['targetPositionX']();this['x']=(this['x']*(_0x32eed3-0x1)+_0x4d1786)/_0x32eed3,this[_0x7f37ff(0x1f6)]--,this[_0x7f37ff(0x1f6)]<=0x0&&(this['x']=_0x4d1786);},Sprite_FvUiStatus['prototype'][_0x1e125b(0x2b7)]=function(){const _0x79718e=_0x1e125b;let _0x53ef88=0x0;const _0x121321=SceneManager['isSceneBattle']()?Window_BattleStatus[_0x79718e(0x2fe)][_0x79718e(0x22e)]:Window_FrontviewUiMapBattleStatus[_0x79718e(0x2fe)][_0x79718e(0x22e)];if(_0x121321){const _0x55d68a=this[_0x79718e(0x121)]+0x1,_0x26a6be=$gameParty[_0x79718e(0xaf)]()['length']+0x1;_0x53ef88=this[_0x79718e(0x148)][_0x79718e(0x345)]*_0x55d68a/_0x26a6be;}else _0x53ef88=this[_0x79718e(0x1aa)]();return Math['ceil'](_0x53ef88);},Sprite_FvUiStatus[_0x1e125b(0x371)]['updateBlendColor']=function(){const _0x2a0c67=_0x1e125b;if(!this[_0x2a0c67(0x2f2)]())return;const _0x3e38c3=Sprite_FvUiStatus[_0x2a0c67(0x12f)],_0x1d0ad6=this[_0x2a0c67(0x2a7)];if(!_0x1d0ad6)return;const _0x5a1981=Graphics[_0x2a0c67(0x15a)]%0x1e<0xf,_0x2728d3=SceneManager['_scene'][_0x2a0c67(0x28a)]&&SceneManager[_0x2a0c67(0xfb)]['_actorWindow'][_0x2a0c67(0x369)]||SceneManager['_scene'][_0x2a0c67(0x1df)]&&SceneManager['_scene'][_0x2a0c67(0x1df)][_0x2a0c67(0x369)]||_0x5a1981;if(SceneManager[_0x2a0c67(0x33b)]()&&this[_0x2a0c67(0x2f2)]()[_0x2a0c67(0x2c9)]()&&_0x5a1981)_0x1d0ad6[_0x2a0c67(0x202)](_0x3e38c3[_0x2a0c67(0x36e)]);else{if(SceneManager[_0x2a0c67(0x33b)]()&&this[_0x2a0c67(0x2f2)]()===BattleManager[_0x2a0c67(0x20e)]&&_0x2728d3)_0x1d0ad6[_0x2a0c67(0x202)](_0x3e38c3[_0x2a0c67(0x35f)]);else{if(this['_flashDuration']>0x0){const _0x3f810e=this[_0x2a0c67(0x358)];this[_0x2a0c67(0x1ac)][0x3]*=(_0x3f810e-0x1)/_0x3f810e,_0x1d0ad6['setBlendColor'](this[_0x2a0c67(0x1ac)]);}else _0x1d0ad6[_0x2a0c67(0x202)]([0x0,0x0,0x0,0x0]);}}this['_flashDuration']--;},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0xcc)]=function(_0x6c6b82,_0x37b2b6){const _0xe7a323=_0x1e125b,_0x1917d8=Sprite_FvUiStatus[_0xe7a323(0x12f)],_0x5d8dd4=_0xe7a323(0x209)[_0xe7a323(0x20f)](_0x6c6b82,_0x37b2b6?_0xe7a323(0x312):_0xe7a323(0x2dc)),_0xab4ba1=_0x1917d8[_0x5d8dd4];if(_0xab4ba1[0x3]===0x0)return;this[_0xe7a323(0x1ac)]=JSON[_0xe7a323(0x116)](JSON[_0xe7a323(0x266)](_0xab4ba1)),this[_0xe7a323(0x358)]=_0x1917d8[_0xe7a323(0x31f)];},Sprite_FvUiStatus['prototype'][_0x1e125b(0x2f5)]=function(){const _0x5341e7=_0x1e125b;if(!this[_0x5341e7(0x2f2)]())return;const _0x5b3ede=Sprite_FvUiStatus[_0x5341e7(0x33f)],_0x97c3cf=this[_0x5341e7(0x2a7)];if(!_0x97c3cf)return;const _0x208e57=Graphics['frameCount']%0x1e<0xf,_0x32c8c2=SceneManager[_0x5341e7(0xfb)][_0x5341e7(0x28a)]&&SceneManager[_0x5341e7(0xfb)][_0x5341e7(0x28a)][_0x5341e7(0x369)]||SceneManager['_scene'][_0x5341e7(0x1df)]&&SceneManager[_0x5341e7(0xfb)][_0x5341e7(0x1df)]['active']||_0x208e57;if(SceneManager[_0x5341e7(0x33b)]()&&this[_0x5341e7(0x2f2)]()===BattleManager[_0x5341e7(0x20e)]&&_0x32c8c2)_0x97c3cf[_0x5341e7(0x214)]([0x0,0x0,0x0,0x0]);else{if(this[_0x5341e7(0x2f2)]()[_0x5341e7(0x363)]())_0x97c3cf['setColorTone'](_0x5b3ede[_0x5341e7(0x247)]);else this[_0x5341e7(0x2f2)]()['isDying']()?_0x97c3cf[_0x5341e7(0x214)](_0x5b3ede[_0x5341e7(0x17c)]):_0x97c3cf[_0x5341e7(0x214)]([0x0,0x0,0x0,0x0]);}},Sprite_FvUiStatus[_0x1e125b(0x371)]['isClickEnabled']=function(){return this['worldVisible'];},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2aa)]=function(_0x1256a3,_0x3b4934){const _0x1643d8=_0x1e125b,_0x62942c=Sprite_FvUiStatus[_0x1643d8(0x25b)],_0x5b5aa5=new Rectangle(-this[_0x1643d8(0x2d8)]['x']*ImageManager[_0x1643d8(0x2f0)]+_0x62942c['x'],-this[_0x1643d8(0x2d8)]['y']*ImageManager[_0x1643d8(0xd4)]+_0x62942c['y']/0x2,ImageManager['faceWidth'],ImageManager[_0x1643d8(0xd4)]);return _0x5b5aa5[_0x1643d8(0x11f)](_0x1256a3,_0x3b4934);},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2e9)]=function(){const _0x5b6a60=_0x1e125b;$gameTemp[_0x5b6a60(0x2a1)](this[_0x5b6a60(0x2f2)](),_0x5b6a60(0x242));if(Imported[_0x5b6a60(0x25d)]){if(SceneManager[_0x5b6a60(0xbd)]()&&!$gameSystem[_0x5b6a60(0x1ef)]())return;if(VisuMZ[_0x5b6a60(0x20a)][_0x5b6a60(0x146)]<1.06){let _0x8edb0a='';_0x8edb0a+=_0x5b6a60(0x1c6),_0x8edb0a+=_0x5b6a60(0x304),alert(_0x8edb0a),SceneManager['exit']();}this['onMouseEnterStateTooltips']();}},Sprite_FvUiStatus[_0x1e125b(0x371)][_0x1e125b(0x2ba)]=function(){const _0x2d3a69=_0x1e125b;$gameTemp[_0x2d3a69(0x2a1)](this['actor'](),_0x2d3a69(0x242));},Sprite_FvUiStatus[_0x1e125b(0x371)]['onClick']=function(){const _0x4b443f=_0x1e125b;$gameTemp['setTouchState'](this['actor'](),_0x4b443f(0x1b4));},Sprite_FvUiStatus[_0x1e125b(0x371)]['getStateTooltipBattler']=function(){const _0x137c8b=_0x1e125b;return this[_0x137c8b(0x2f2)]();};function Sprite_FvUiController(){const _0x4f19e8=_0x1e125b;this[_0x4f19e8(0x100)](...arguments);}Sprite_FvUiController[_0x1e125b(0x371)]=Object[_0x1e125b(0x216)](Sprite['prototype']),Sprite_FvUiController[_0x1e125b(0x371)]['constructor']=Sprite_FvUiController,Sprite_FvUiController[_0x1e125b(0x12a)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)]['HorzRate']??0.85,Sprite_FvUiController[_0x1e125b(0x294)]=VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x199)]['TargetOpacity']??0x40,Sprite_FvUiController['FV_OPACITY_RATE']=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0x1e0)]??0x10,Sprite_FvUiController[_0x1e125b(0x212)]={'input':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x199)]['FrontviewInput']??!![],'subject':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)]['FrontviewSubject']??!![]},Sprite_FvUiController[_0x1e125b(0x8e)]={'actor':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0xbb)]??![],'enemy':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0x268)]??!![]},Sprite_FvUiController[_0x1e125b(0x1b0)]={'input':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)]['SideviewInput']??!![],'subject':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0x334)]??![]},Sprite_FvUiController['SV_FADE_SELECT']={'actor':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0x1f4)]??!![],'enemy':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0xa4)]??![]},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(){const _0x1136f2=_0x1e125b;Sprite[_0x1136f2(0x371)][_0x1136f2(0x100)][_0x1136f2(0x198)](this),this[_0x1136f2(0x207)](),this[_0x1136f2(0x223)]();},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x207)]=function(){const _0x55ec9f=_0x1e125b;this['x']=Math[_0x55ec9f(0x1ad)](Graphics[_0x55ec9f(0x345)]*Sprite_FvUiController['LOCATION_X']),this['y']=Graphics[_0x55ec9f(0x205)],this[_0x55ec9f(0x125)]='',this[_0x55ec9f(0x1d9)]='',this['_lastInputFilenameCache']='';},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x223)]=function(){const _0x16a54b=_0x1e125b;this[_0x16a54b(0x2af)]=new Sprite(),this[_0x16a54b(0x220)](this[_0x16a54b(0x2af)]),this[_0x16a54b(0x32e)]=new Sprite(),this[_0x16a54b(0x220)](this['_inputContainer']);},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x18e)]=function(_0x314f60){const _0x369569=_0x1e125b;this[_0x369569(0x33c)](_0x314f60),this['addNewSprite'](_0x314f60);},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x33c)]=function(_0x2e9d54){const _0x1f0ffd=_0x1e125b,_0xeba8db=_0x2e9d54?this[_0x1f0ffd(0x2af)]:this[_0x1f0ffd(0x32e)];if(!_0xeba8db)return;const _0x512277=[];for(const _0x575baf of _0xeba8db['children']){if(!_0x575baf)continue;if(_0x575baf['_fadingOut']&&_0x575baf['opacity']<=0x0)_0x512277['push'](_0x575baf);if(_0x575baf[_0x1f0ffd(0x353)])_0x575baf[_0x1f0ffd(0x353)]();}while(_0x512277['length']>0x0){const _0x4dafe8=_0x512277[_0x1f0ffd(0x135)]();_0xeba8db[_0x1f0ffd(0x2b3)](_0x4dafe8);}},Sprite_FvUiController['prototype'][_0x1e125b(0x18f)]=function(_0x130f2d){const _0x395c2c=_0x1e125b,_0x1e91f3=$gameSystem[_0x395c2c(0x32d)]()?Sprite_FvUiController[_0x395c2c(0x1b0)]:Sprite_FvUiController[_0x395c2c(0x212)];if(_0x130f2d&&!_0x1e91f3['subject'])return;if(!_0x130f2d&&!_0x1e91f3['input'])return;const _0x3b4fe1=_0x130f2d?this[_0x395c2c(0x2af)]:this[_0x395c2c(0x32e)];if(!_0x3b4fe1)return;const _0x475eea=_0x130f2d?this[_0x395c2c(0x222)]():this['currentInputFilename']();if(_0x475eea==='')return;const _0x1aae23=new Sprite_FvUiPortrait(_0x475eea);_0x3b4fe1[_0x395c2c(0x220)](_0x1aae23),_0x130f2d&&(_0x1aae23['setActiveAutoFadeOut'](),this[_0x395c2c(0x222)]()===this[_0x395c2c(0x15f)]&&this[_0x395c2c(0xcd)](_0x1aae23));},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0xcd)]=function(_0x2843bb){const _0x3198bc=_0x1e125b;_0x2843bb['x']=0x0;const _0x1bf342=this[_0x3198bc(0x32e)][_0x3198bc(0x1d2)][0x0],_0x43b5f=_0x1bf342?_0x1bf342[_0x3198bc(0xfc)]:0x0;_0x2843bb[_0x3198bc(0xfc)]=_0x43b5f,_0x1bf342&&(_0x1bf342[_0x3198bc(0x2ec)](0x0,0x1),_0x1bf342[_0x3198bc(0xfc)]=0x0);},Sprite_FvUiController['prototype'][_0x1e125b(0x269)]=function(){const _0x4ab9a0=_0x1e125b;Sprite[_0x4ab9a0(0x371)][_0x4ab9a0(0x269)][_0x4ab9a0(0x198)](this),this[_0x4ab9a0(0x34a)](),this['updateInputs'](),this[_0x4ab9a0(0x27a)]();},Sprite_FvUiController['prototype'][_0x1e125b(0x34a)]=function(){const _0x1cc2f7=_0x1e125b;this[_0x1cc2f7(0x125)]!==this[_0x1cc2f7(0x222)]()&&(this[_0x1cc2f7(0x125)]=this[_0x1cc2f7(0x222)](),this[_0x1cc2f7(0x18e)](!![]));},Sprite_FvUiController['prototype'][_0x1e125b(0x374)]=function(){const _0x596f63=_0x1e125b;if(BattleManager[_0x596f63(0xea)]()){if(!BattleManager['isTpb']())return null;if(Imported[_0x596f63(0x1e5)]&&BattleManager['isCTB']())return null;}return BattleManager[_0x596f63(0x21b)];},Sprite_FvUiController['prototype']['currentSubjectFilename']=function(){const _0xacf3cb=_0x1e125b,_0x31dd44=this[_0xacf3cb(0x374)](),_0x43bc6e=this[_0xacf3cb(0xe6)]();return DataManager['getActorFrontviewUiPortrait'](_0x31dd44,_0x43bc6e);},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0xe6)]=function(){const _0x5c347d=_0x1e125b,_0x21d525=[],_0x2fca19=this['currentSubjectActor']();if(_0x2fca19&&BattleManager[_0x5c347d(0x31d)]){const _0x15d025=BattleManager[_0x5c347d(0x31d)];if(_0x15d025){if(_0x15d025[_0x5c347d(0x89)]())_0x21d525[_0x5c347d(0x352)](_0x15d025['item']()[_0x5c347d(0x2f9)]);if(_0x15d025[_0x5c347d(0x196)]())_0x21d525[_0x5c347d(0x352)](_0x5c347d(0x120));if(_0x15d025[_0x5c347d(0x21d)]())_0x21d525[_0x5c347d(0x352)]('FRIENDLY');if(_0x15d025[_0x5c347d(0x12e)]())_0x21d525[_0x5c347d(0x352)](_0x5c347d(0x115));if(_0x15d025['isPhysical']())_0x21d525[_0x5c347d(0x352)](_0x5c347d(0x19b));if(_0x15d025[_0x5c347d(0x338)]())_0x21d525[_0x5c347d(0x352)](_0x5c347d(0x1d3));if(_0x15d025[_0x5c347d(0xe5)]())_0x21d525[_0x5c347d(0x352)]('OPPONENT');if(!_0x15d025['isAttack']()&&!_0x15d025['isGuard']()){if(_0x15d025[_0x5c347d(0x22a)]())_0x21d525['push']('MAGIC');if(_0x15d025[_0x5c347d(0x2cc)]())_0x21d525[_0x5c347d(0x352)](_0x5c347d(0x8b));}}}return _0x21d525[_0x5c347d(0x352)](_0x5c347d(0x32c)),_0x21d525[_0x5c347d(0x352)](_0x5c347d(0x31e)),_0x21d525;},Sprite_FvUiController[_0x1e125b(0x371)]['updateInputs']=function(){const _0x5c1d2f=_0x1e125b;this['_lastInputFilename']!==this['currentInputFilename']()&&(this['_lastInputFilename']=this[_0x5c1d2f(0x2c7)](),this[_0x5c1d2f(0x1d9)]!==''&&(this[_0x5c1d2f(0x15f)]=this['_lastInputFilename']),this[_0x5c1d2f(0x18e)](![]));},Sprite_FvUiController['prototype'][_0x1e125b(0x14c)]=function(){const _0x51591a=_0x1e125b;return BattleManager[_0x51591a(0x20e)];},Sprite_FvUiController[_0x1e125b(0x371)]['currentInputFilename']=function(){const _0x29dfc1=_0x1e125b,_0x267f31=this[_0x29dfc1(0x14c)](),_0x276c14=this[_0x29dfc1(0x2c0)]();return DataManager[_0x29dfc1(0x26e)](_0x267f31,_0x276c14);},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x2c0)]=function(){const _0x131bdc=_0x1e125b,_0x30f51c=[],_0x5478d1=this[_0x131bdc(0x14c)]();if(_0x5478d1){const _0x45334c=SceneManager['_scene'];if(_0x45334c){const _0x3e9751=_0x45334c[_0x131bdc(0x25f)][_0x131bdc(0x8d)]();if(_0x3e9751!==''){if(_0x3e9751===_0x131bdc(0xfd)){const _0x446fd9=_0x45334c[_0x131bdc(0x25f)]['currentExt'](),_0x40d998=$dataSkills[_0x446fd9]['name'];if(_0x40d998)_0x30f51c[_0x131bdc(0x352)](_0x40d998);}else _0x3e9751&&_0x30f51c['push'](_0x3e9751);}}}return _0x30f51c[_0x131bdc(0x352)](_0x131bdc(0x32c)),_0x30f51c[_0x131bdc(0x352)](_0x131bdc(0x31e)),_0x30f51c;},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x27a)]=function(){const _0x519edb=_0x1e125b,_0x4373cb=this['targetOpacity'](),_0x1b8811=Sprite_FvUiController[_0x519edb(0x278)],_0x4b5959=[this[_0x519edb(0x32e)],this[_0x519edb(0x2af)]];for(const _0x41c688 of _0x4b5959){if(_0x41c688[_0x519edb(0xfc)]>_0x4373cb)_0x41c688['opacity']=Math[_0x519edb(0x9a)](_0x41c688[_0x519edb(0xfc)]-_0x1b8811,_0x4373cb);else _0x41c688['opacity']<_0x4373cb&&(_0x41c688[_0x519edb(0xfc)]=Math[_0x519edb(0x197)](_0x41c688[_0x519edb(0xfc)]+_0x1b8811,_0x4373cb));}},Sprite_FvUiController[_0x1e125b(0x371)][_0x1e125b(0x19f)]=function(){const _0x1fcb3c=_0x1e125b,_0x38812f=$gameSystem[_0x1fcb3c(0x32d)]()?Sprite_FvUiController[_0x1fcb3c(0x8e)]:Sprite_FvUiController[_0x1fcb3c(0x10c)],_0xfad5fd=SceneManager[_0x1fcb3c(0xfb)];if(!_0xfad5fd)return;const _0x1bd399=Sprite_FvUiController[_0x1fcb3c(0x294)];if(_0xfad5fd['isGridWindowActive']&&_0xfad5fd['isAnyGridWindowActive']())return 0x0;if(_0xfad5fd[_0x1fcb3c(0x28a)]&&_0xfad5fd['_actorWindow'][_0x1fcb3c(0x369)])return _0x38812f[_0x1fcb3c(0x2f2)]?0xff:_0x1bd399;else{if(_0xfad5fd[_0x1fcb3c(0x1df)]&&_0xfad5fd['_enemyWindow'][_0x1fcb3c(0x369)])return _0x38812f[_0x1fcb3c(0x320)]?0xff:_0x1bd399;}return 0xff;};function Sprite_FvUiPortrait(){const _0x2148a6=_0x1e125b;this[_0x2148a6(0x100)](...arguments);}Sprite_FvUiPortrait[_0x1e125b(0x371)]=Object['create'](Sprite[_0x1e125b(0x371)]),Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x11b)]=Sprite_FvUiPortrait,Sprite_FvUiPortrait['ENTER_FROM_OFFSET']=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0x28f)]??0x40,Sprite_FvUiPortrait[_0x1e125b(0x187)]=VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x199)][_0x1e125b(0x1b1)]??0x14,Sprite_FvUiPortrait[_0x1e125b(0xaa)]=VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)]['Portrait'][_0x1e125b(0x26d)]??0x1,Sprite_FvUiPortrait[_0x1e125b(0x9c)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0xdf)]??![],Sprite_FvUiPortrait[_0x1e125b(0x1ab)]=VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x199)][_0x1e125b(0xc0)]??0x3c,Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(_0x392d8a){const _0x1ea07e=_0x1e125b;this['_filename']=_0x392d8a,Sprite[_0x1ea07e(0x371)][_0x1ea07e(0x100)][_0x1ea07e(0x198)](this),this[_0x1ea07e(0x207)](),this[_0x1ea07e(0x180)]();},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x207)]=function(){const _0x17f3d4=_0x1e125b;this[_0x17f3d4(0x153)]=!![],this['x']=Sprite_FvUiPortrait[_0x17f3d4(0x313)],this['y']=0x0,this[_0x17f3d4(0xfc)]=0x0,this[_0x17f3d4(0x2d8)]['x']=0.5,this[_0x17f3d4(0x2d8)]['y']=0x1,this[_0x17f3d4(0x104)]['x']=Sprite_FvUiPortrait['SPRITE_SCALE'],this[_0x17f3d4(0x104)]['y']=Sprite_FvUiPortrait[_0x17f3d4(0xaa)],Sprite_FvUiPortrait[_0x17f3d4(0x9c)]&&(this[_0x17f3d4(0x104)]['x']*=-0x1),this[_0x17f3d4(0x18c)]=![],this['_activeAutoFadeOutDuration']=0x0;},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x180)]=function(){const _0x464610=_0x1e125b;this[_0x464610(0x271)]=ImageManager[_0x464610(0x137)](this['_filename']),this['bitmap'][_0x464610(0x92)](this[_0x464610(0x2bb)]['bind'](this));},Sprite_FvUiPortrait['prototype'][_0x1e125b(0x2bb)]=function(){const _0x4174a5=_0x1e125b;if(this[_0x4174a5(0x2d5)])return;this[_0x4174a5(0x2d5)]=!![];const _0x410c10=Sprite_FvUiPortrait['ENTER_DURATION'];this['startMove'](0x0,_0x410c10),this[_0x4174a5(0x2ec)](0xff,_0x410c10);},Sprite_FvUiPortrait['prototype'][_0x1e125b(0x353)]=function(){const _0x59d233=_0x1e125b;if(this['_fadingOut'])return;this[_0x59d233(0x131)]=!![];const _0x4d3530=Sprite_FvUiPortrait[_0x59d233(0x187)];this['startMove'](0x0,_0x4d3530),this['startOpacity'](0x0,_0x4d3530);},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x1a7)]=function(_0x43396d,_0x2e4c88){this['_moveTargetX']=_0x43396d,this['_moveDuration']=_0x2e4c88;},Sprite_FvUiPortrait['prototype'][_0x1e125b(0x2ec)]=function(_0x5c82c3,_0x1bac0c){const _0x12bddb=_0x1e125b;this[_0x12bddb(0x281)]=_0x5c82c3,this[_0x12bddb(0x113)]=_0x1bac0c;},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x273)]=function(){const _0x1b2692=_0x1e125b;if(Sprite_FvUiPortrait[_0x1b2692(0x1ab)]<=0x0)return;this['_activeAutoFadeOut']=!![];},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x2fc)]=function(_0x7bc0c9){const _0x4f5f48=_0x1e125b;this['x']=0x0,this[_0x4f5f48(0xfc)]=_0x7bc0c9;},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x269)]=function(){const _0x1df689=_0x1e125b;Sprite[_0x1df689(0x371)][_0x1df689(0x269)][_0x1df689(0x198)](this);if(!this['_finishInitMembers'])return;this['updatePosition'](),this[_0x1df689(0x27a)](),this[_0x1df689(0x31b)]();},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x17b)]=function(){const _0xd15b1d=_0x1e125b;if(!this[_0xd15b1d(0x1f6)])return;if(this['_moveDuration']<=0x0)return;const _0xf6e060=this[_0xd15b1d(0x1f6)];this['x']=(this['x']*(_0xf6e060-0x1)+this['_moveTargetX'])/_0xf6e060,this[_0xd15b1d(0x1f6)]--,this[_0xd15b1d(0x1f6)]<=0x0&&(this['x']=this[_0xd15b1d(0xcb)],this[_0xd15b1d(0x18c)]&&(this[_0xd15b1d(0x18a)]=Sprite_FvUiPortrait[_0xd15b1d(0x1ab)]));},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x27a)]=function(){const _0x283036=_0x1e125b;if(!this['_opacityDuration'])return;if(this[_0x283036(0x113)]<=0x0)return;const _0x2a0ac4=this[_0x283036(0x113)];this[_0x283036(0xfc)]=(this['opacity']*(_0x2a0ac4-0x1)+this[_0x283036(0x281)])/_0x2a0ac4,this['_opacityDuration']--,this['_opacityDuration']<=0x0&&(this[_0x283036(0xfc)]=this[_0x283036(0x281)]);},Sprite_FvUiPortrait[_0x1e125b(0x371)][_0x1e125b(0x31b)]=function(){const _0x240af3=_0x1e125b;if(!this[_0x240af3(0x18a)])return;if(this[_0x240af3(0x18a)]<=0x0)return;this[_0x240af3(0x18a)]--,this[_0x240af3(0x18a)]<=0x0&&this[_0x240af3(0x353)]();},Window_Base[_0x1e125b(0x2fe)]={'maxRows':VisuMZ['FrontviewBattleUI']['Settings']['Battle']['MaxRows']??0x8,'edgeBuffer':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x22f)]??0x3c,'scale':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)]['WindowScale']??0.75,'baseOffset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x35c)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x236)]??0x12},'stackOffset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x2f7)]??0x10,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x373)]??0x10},'showCancelButton':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)]['Battle']['ShowCancelButton']??![],'showShopStatus':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x14f)]??!![]},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x167)]=function(){const _0x1e956d=_0x1e125b;if(!this[_0x1e956d(0x1bf)]())return;this['scale']['x']=Window_Base[_0x1e956d(0x2fe)]['scale'],this[_0x1e956d(0x104)]['y']=Window_Base[_0x1e956d(0x2fe)][_0x1e956d(0x104)];},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x1bf)]=function(){const _0x10890f=_0x1e125b;return BattleManager[_0x10890f(0x1bf)]();},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x310)]=function(){const _0x3f88be=_0x1e125b;this[_0x3f88be(0x280)](),this['adjustFrontviewUiHeight'](),this[_0x3f88be(0x165)]();},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x280)]=function(){const _0x47372d=_0x1e125b;if(!this['isUsingFrontviewUiLayout']())return;const _0x52687e=this[_0x47372d(0x345)];this['width']=this[_0x47372d(0x250)](),_0x52687e!==this[_0x47372d(0x345)]&&this[_0x47372d(0x133)]();},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x250)]=function(){const _0x53cf92=_0x1e125b;return Math[_0x53cf92(0x9a)](Math[_0x53cf92(0x1c5)](Graphics[_0x53cf92(0x345)]/0x3),0xf0);},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x2ab)]=function(){const _0x1d4b06=_0x1e125b;if(!this[_0x1d4b06(0x1bf)]())return;const _0x44209e=this['height'];let _0x4982af=Math[_0x1d4b06(0x9a)](this[_0x1d4b06(0x15b)](),0x1);if(Imported['VisuMZ_4_VisualItemInv']){const _0x3e6070=this[_0x1d4b06(0x30d)]();_0x4982af=Math[_0x1d4b06(0x1c5)](_0x4982af/(_0x3e6070||0x1));}const _0xe6ad4a=this[_0x1d4b06(0xf3)](_0x4982af),_0x4c65be=this[_0x1d4b06(0xf3)](this[_0x1d4b06(0xac)]());this['height']=Math['min'](_0xe6ad4a,_0x4c65be),_0x44209e!==this[_0x1d4b06(0x205)]&&this['createContents']();},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x15b)]=function(){const _0xfc70ec=_0x1e125b;if(this[_0xfc70ec(0x2ea)])return this['_data'][_0xfc70ec(0x1f2)];if(this[_0xfc70ec(0x366)])return this['_list'][_0xfc70ec(0x1f2)];return 0x4;},Window_Base['prototype']['maxFrontviewUiRows']=function(){const _0x427bb8=_0x1e125b;return Window_Base['FRONTVIEW_BATTLE_UI'][_0x427bb8(0x114)];},Window_Base['prototype'][_0x1e125b(0x165)]=function(){const _0xf5221=_0x1e125b;if(!this['isUsingFrontviewUiLayout']())return;this['x']=Math[_0xf5221(0x1c5)](this[_0xf5221(0x2a6)]()),this['y']=Math['floor'](this[_0xf5221(0x2c8)]());},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x1c1)]=function(){return 0x0;},Window_Base['prototype'][_0x1e125b(0x35d)]=function(){return'center';},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x2a6)]=function(){const _0x101dcd=_0x1e125b,_0x1094c6=this['frontviewUiLocation'](),_0x2efd8e=this[_0x101dcd(0x345)]*this[_0x101dcd(0x104)]['x'],_0x1da4dd=Window_Base['FRONTVIEW_BATTLE_UI'][_0x101dcd(0x14e)];let _0x3c5b9a=0x0;if(_0x1094c6===_0x101dcd(0xf0))_0x3c5b9a=(Graphics[_0x101dcd(0x175)]-_0x2efd8e)/0x2,this['_statusWindow']&&(_0x3c5b9a-=Math[_0x101dcd(0x332)](this[_0x101dcd(0x2f3)][_0x101dcd(0x345)]*this[_0x101dcd(0x104)]['x']*0.5));else{if(_0x1094c6===_0x101dcd(0x26b))_0x3c5b9a=Graphics[_0x101dcd(0x175)]-_0x2efd8e-_0x1da4dd,_0x3c5b9a-=this[_0x101dcd(0x1c1)]()*Window_Base[_0x101dcd(0x2fe)][_0x101dcd(0x201)]['x'],this['_statusWindow']&&(_0x3c5b9a-=Math[_0x101dcd(0x332)](this[_0x101dcd(0x2f3)][_0x101dcd(0x345)]*this[_0x101dcd(0x104)]['x']));else _0x1094c6===_0x101dcd(0x362)&&(_0x3c5b9a=_0x1da4dd,_0x3c5b9a+=this[_0x101dcd(0x1c1)]()*Window_Base[_0x101dcd(0x2fe)]['stackOffset']['x']);}return _0x3c5b9a+=Window_Base['FRONTVIEW_BATTLE_UI']['baseOffset']['x'],_0x3c5b9a;},Window_Base['prototype'][_0x1e125b(0x2c8)]=function(){const _0x205ec1=_0x1e125b;let _0x17f836=[];Imported[_0x205ec1(0x229)]&&(_0x17f836=Window_ItemList[_0x205ec1(0x2c6)][_0x205ec1(0x20c)](),Window_ItemList[_0x205ec1(0x2c6)]=[]);let _0x499c34=Graphics[_0x205ec1(0x205)]-SceneManager['_scene'][_0x205ec1(0x2f3)][_0x205ec1(0x205)];const _0x40386c=this[_0x205ec1(0xf3)](this[_0x205ec1(0xac)]());return _0x499c34-=_0x40386c*this[_0x205ec1(0x104)]['y'],_0x499c34/=0x2,_0x499c34+=this[_0x205ec1(0x1c1)]()*Window_Base[_0x205ec1(0x2fe)][_0x205ec1(0x201)]['y'],_0x499c34+=Window_Base[_0x205ec1(0x2fe)][_0x205ec1(0x27f)]['y'],Imported['VisuMZ_4_MultiLayerHpGauge']&&$gameTroop[_0x205ec1(0x1a3)]()>0x0&&(this['frontviewUiStack']()>0x0&&(_0x499c34+=Math[_0x205ec1(0x1ad)](Sprite_MultiLayerHpContainer[_0x205ec1(0x2bd)]['faceSize']*0x2/0x3))),Imported['VisuMZ_4_VisualItemInv']&&(Window_ItemList[_0x205ec1(0x2c6)]=_0x17f836),_0x499c34;},Window_Base[_0x1e125b(0x371)][_0x1e125b(0x13b)]=function(){const _0x459e24=_0x1e125b;if(!this[_0x459e24(0x2f3)])return;this[_0x459e24(0x2f3)]['show'](),this[_0x459e24(0x2f3)]['x']=Math[_0x459e24(0x1c5)](this['x']+this[_0x459e24(0x345)]*this[_0x459e24(0x104)]['x']),this[_0x459e24(0x2f3)]['y']=this['y'],this[_0x459e24(0x2f3)]['x']+this[_0x459e24(0x2f3)][_0x459e24(0x345)]*this[_0x459e24(0x104)]['x']>Graphics[_0x459e24(0x175)]&&(this['_statusWindow']['x']=Graphics[_0x459e24(0x175)]-this[_0x459e24(0x2f3)][_0x459e24(0x345)]*this[_0x459e24(0x104)]['x'],this[_0x459e24(0x2f3)]['y']+=Window_Base[_0x459e24(0x2fe)][_0x459e24(0x201)]['y']);},Window_Base[_0x1e125b(0x371)]['hideFrontviewUiShopStatusWindow']=function(){const _0x32b699=_0x1e125b;if(!this['_statusWindow'])return;this[_0x32b699(0x2f3)]['hide']();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x275)]=Window_Base[_0x1e125b(0x371)][_0x1e125b(0x10f)],Window_Base[_0x1e125b(0x371)][_0x1e125b(0x10f)]=function(){const _0x578284=_0x1e125b;VisuMZ[_0x578284(0x1a6)][_0x578284(0x275)][_0x578284(0x198)](this),this[_0x578284(0xd2)]&&BattleManager['isUsingFrontviewUiLayout']()&&this[_0x578284(0x2f3)]&&(this[_0x578284(0x2f3)]['openness']=this['openness'],this['_statusWindow'][_0x578284(0x10f)]());},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x19a)]=Window_Base[_0x1e125b(0x371)][_0x1e125b(0x176)],Window_Base['prototype']['close']=function(){const _0x1c600d=_0x1e125b;VisuMZ[_0x1c600d(0x1a6)]['Window_Base_close'][_0x1c600d(0x198)](this),this[_0x1c600d(0x326)]&&BattleManager[_0x1c600d(0x1bf)]()&&this[_0x1c600d(0x2f3)]&&(this['_statusWindow']['openness']=this['openness'],this[_0x1c600d(0x2f3)][_0x1c600d(0x176)]());},Window_ItemList[_0x1e125b(0x2fe)]={'location':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x240)]??_0x1e125b(0x362)},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x317)]=Window_ItemList['prototype'][_0x1e125b(0x100)],Window_ItemList[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(_0x29fee5){const _0x1b651a=_0x1e125b;VisuMZ['FrontviewBattleUI'][_0x1b651a(0x317)][_0x1b651a(0x198)](this,_0x29fee5),this[_0x1b651a(0x167)]();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x328)]=Window_ItemList[_0x1e125b(0x371)][_0x1e125b(0x30d)],Window_ItemList[_0x1e125b(0x371)][_0x1e125b(0x30d)]=function(){const _0x50bdfe=_0x1e125b;return this[_0x50bdfe(0x1bf)]()?0x1:VisuMZ[_0x50bdfe(0x1a6)][_0x50bdfe(0x328)]['call'](this);},VisuMZ[_0x1e125b(0x1a6)]['Window_ItemList_colSpacing']=Window_ItemList[_0x1e125b(0x371)]['colSpacing'],Window_ItemList[_0x1e125b(0x371)][_0x1e125b(0x128)]=function(){const _0x4a620a=_0x1e125b;return this[_0x4a620a(0x1bf)]()?0x0:VisuMZ['FrontviewBattleUI'][_0x4a620a(0x254)][_0x4a620a(0x198)](this);},Window_ItemList[_0x1e125b(0x371)]['frontviewUiWidth']=function(){const _0xd8ec1c=_0x1e125b;return Math[_0xd8ec1c(0x1c5)](Graphics[_0xd8ec1c(0x345)]/0x2);},VisuMZ[_0x1e125b(0x1a6)]['Window_ItemList_makeItemList']=Window_ItemList['prototype'][_0x1e125b(0x90)],Window_ItemList[_0x1e125b(0x371)][_0x1e125b(0x90)]=function(){const _0xedaa48=_0x1e125b;VisuMZ['FrontviewBattleUI']['Window_ItemList_makeItemList'][_0xedaa48(0x198)](this),this[_0xedaa48(0x310)]();},Window_ItemList[_0x1e125b(0x371)]['frontviewUiLocation']=function(){const _0x128251=_0x1e125b;return Window_ItemList[_0x128251(0x2fe)]['location'];},Window_ItemList[_0x1e125b(0x371)]['frontviewUiStack']=function(){return 0x1;},Window_ItemList[_0x1e125b(0x371)][_0x1e125b(0x250)]=function(){const _0x21c00d=_0x1e125b,_0x16a969=VisuMZ[_0x21c00d(0x1a6)][_0x21c00d(0x1bc)][_0x21c00d(0x181)],_0x1d1134=_0x16a969[_0x21c00d(0x136)];return _0x1d1134===_0x21c00d(0x30a)||_0x1d1134===undefined?Window_Base[_0x21c00d(0x371)][_0x21c00d(0x250)][_0x21c00d(0x198)](this):Math[_0x21c00d(0x1c5)](Number(_0x16a969[_0x21c00d(0x136)])/this[_0x21c00d(0x104)]['x']);},Window_SkillList[_0x1e125b(0x2fe)]={'location':VisuMZ['FrontviewBattleUI']['Settings']['Battle'][_0x1e125b(0x2be)]??'left'},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x285)]=Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x100)],Window_SkillList[_0x1e125b(0x371)]['initialize']=function(_0x336847){const _0x3f78c7=_0x1e125b;VisuMZ[_0x3f78c7(0x1a6)][_0x3f78c7(0x285)][_0x3f78c7(0x198)](this,_0x336847),this[_0x3f78c7(0x167)]();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x2db)]=Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x30d)],Window_SkillList['prototype'][_0x1e125b(0x30d)]=function(){const _0x4ffeb0=_0x1e125b;return this[_0x4ffeb0(0x1bf)]()?0x1:VisuMZ[_0x4ffeb0(0x1a6)][_0x4ffeb0(0x2db)]['call'](this);},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x16f)]=Window_SkillList[_0x1e125b(0x371)]['colSpacing'],Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x128)]=function(){const _0x28320b=_0x1e125b;return this[_0x28320b(0x1bf)]()?0x0:VisuMZ[_0x28320b(0x1a6)][_0x28320b(0x16f)][_0x28320b(0x198)](this);},Window_SkillList['prototype'][_0x1e125b(0x250)]=function(){const _0x47e4a1=_0x1e125b;return Math[_0x47e4a1(0x1c5)](Graphics['width']/0x2);},VisuMZ['FrontviewBattleUI']['Window_SkillList_makeItemList']=Window_SkillList[_0x1e125b(0x371)]['makeItemList'],Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x90)]=function(){const _0x419036=_0x1e125b;VisuMZ[_0x419036(0x1a6)]['Window_SkillList_makeItemList'][_0x419036(0x198)](this),this[_0x419036(0x310)]();},Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x35d)]=function(){const _0x3698c3=_0x1e125b;return Window_SkillList[_0x3698c3(0x2fe)][_0x3698c3(0x378)];},Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x1c1)]=function(){return 0x1;},Window_SkillList[_0x1e125b(0x371)][_0x1e125b(0x250)]=function(){const _0x34b7fd=_0x1e125b,_0x27f0d0=VisuMZ[_0x34b7fd(0x1a6)]['Settings'][_0x34b7fd(0x181)],_0x129d1c=_0x27f0d0[_0x34b7fd(0x136)];return _0x129d1c===_0x34b7fd(0x30a)||_0x129d1c===undefined?Window_Base[_0x34b7fd(0x371)][_0x34b7fd(0x250)]['call'](this):Math[_0x34b7fd(0x1c5)](Number(_0x27f0d0['ItemWindows'])/this['scale']['x']);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0xd7)]=Window_BattleSkill[_0x1e125b(0x371)][_0x1e125b(0x251)],Window_BattleSkill[_0x1e125b(0x371)][_0x1e125b(0x251)]=function(){const _0x51a2b6=_0x1e125b;VisuMZ[_0x51a2b6(0x1a6)][_0x51a2b6(0xd7)]['call'](this),this[_0x51a2b6(0x13b)]();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x215)]=Window_BattleSkill[_0x1e125b(0x371)][_0x1e125b(0x327)],Window_BattleSkill[_0x1e125b(0x371)][_0x1e125b(0x327)]=function(){const _0x4ee26e=_0x1e125b;VisuMZ[_0x4ee26e(0x1a6)][_0x4ee26e(0x215)][_0x4ee26e(0x198)](this),this[_0x4ee26e(0x272)]();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x129)]=Window_BattleItem[_0x1e125b(0x371)]['show'],Window_BattleItem[_0x1e125b(0x371)]['show']=function(){const _0x1fe2b8=_0x1e125b;VisuMZ[_0x1fe2b8(0x1a6)]['Window_BattleItem_show'][_0x1fe2b8(0x198)](this),this['showFrontviewUiShopStatusWindow']();},VisuMZ[_0x1e125b(0x1a6)]['Window_BattleItem_hide']=Window_BattleItem[_0x1e125b(0x371)][_0x1e125b(0x327)],Window_BattleItem[_0x1e125b(0x371)][_0x1e125b(0x327)]=function(){const _0x4da762=_0x1e125b;VisuMZ['FrontviewBattleUI'][_0x4da762(0x299)][_0x4da762(0x198)](this),this[_0x4da762(0x272)]();},Window_PartyCommand[_0x1e125b(0x2fe)]={'location':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x25a)]??_0x1e125b(0x362)},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x323)]=Window_PartyCommand[_0x1e125b(0x371)][_0x1e125b(0x100)],Window_PartyCommand[_0x1e125b(0x371)]['initialize']=function(_0x38d763){const _0x14f2ef=_0x1e125b;VisuMZ['FrontviewBattleUI'][_0x14f2ef(0x323)][_0x14f2ef(0x198)](this,_0x38d763),this[_0x14f2ef(0x167)]();},VisuMZ['FrontviewBattleUI']['Window_PartyCommand_makeCommandList']=Window_PartyCommand[_0x1e125b(0x371)][_0x1e125b(0x1f3)],Window_PartyCommand[_0x1e125b(0x371)][_0x1e125b(0x1f3)]=function(){const _0x345de3=_0x1e125b;VisuMZ[_0x345de3(0x1a6)][_0x345de3(0x2d6)][_0x345de3(0x198)](this),this[_0x345de3(0x310)]();},Window_PartyCommand[_0x1e125b(0x371)][_0x1e125b(0x35d)]=function(){const _0x1e2970=_0x1e125b;return Window_PartyCommand[_0x1e2970(0x2fe)][_0x1e2970(0x378)];},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x29d)]=Window_PartyCommand['prototype'][_0x1e125b(0x8c)],Window_PartyCommand[_0x1e125b(0x371)]['activate']=function(){const _0x10d86c=_0x1e125b;VisuMZ[_0x10d86c(0x1a6)][_0x10d86c(0x29d)]['call'](this),BattleManager[_0x10d86c(0x1bf)]()&&Window_BattleStatus[_0x10d86c(0x2fe)][_0x10d86c(0x318)]&&this[_0x10d86c(0x161)]();},Window_PartyCommand['prototype'][_0x1e125b(0x250)]=function(){const _0x253e84=_0x1e125b,_0x133f9e=VisuMZ[_0x253e84(0x1a6)]['Settings'][_0x253e84(0x181)],_0x1bac82=_0x133f9e[_0x253e84(0x2da)];return _0x1bac82===_0x253e84(0x30a)||_0x1bac82===undefined?Window_Base[_0x253e84(0x371)][_0x253e84(0x250)][_0x253e84(0x198)](this):Math[_0x253e84(0x1c5)](Number(_0x133f9e['CommandWindows'])/this[_0x253e84(0x104)]['x']);},Window_ActorCommand[_0x1e125b(0x2fe)]={'location':VisuMZ['FrontviewBattleUI']['Settings'][_0x1e125b(0x2a2)][_0x1e125b(0x2b0)]??_0x1e125b(0x362)},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1a1)]=Window_ActorCommand[_0x1e125b(0x371)][_0x1e125b(0x100)],Window_ActorCommand[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(_0xa304e0){const _0x431b0a=_0x1e125b;VisuMZ[_0x431b0a(0x1a6)][_0x431b0a(0x1a1)]['call'](this,_0xa304e0),this['initMembersFrontviewUi']();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x19c)]=Window_ActorCommand[_0x1e125b(0x371)][_0x1e125b(0x1f3)],Window_ActorCommand['prototype'][_0x1e125b(0x1f3)]=function(){const _0x2e37fd=_0x1e125b;VisuMZ[_0x2e37fd(0x1a6)][_0x2e37fd(0x19c)][_0x2e37fd(0x198)](this),this[_0x2e37fd(0x310)]();},Window_ActorCommand[_0x1e125b(0x371)][_0x1e125b(0x35d)]=function(){const _0x307d20=_0x1e125b;return Window_ActorCommand[_0x307d20(0x2fe)][_0x307d20(0x378)];},VisuMZ[_0x1e125b(0x1a6)]['Window_ActorCommand_activate']=Window_ActorCommand['prototype'][_0x1e125b(0x8c)],Window_ActorCommand[_0x1e125b(0x371)]['activate']=function(){const _0x106ec9=_0x1e125b;VisuMZ['FrontviewBattleUI'][_0x106ec9(0x118)][_0x106ec9(0x198)](this),BattleManager[_0x106ec9(0x1bf)]()&&Window_BattleStatus[_0x106ec9(0x2fe)]['commandHelpWindow']&&this[_0x106ec9(0x161)]();},Window_ActorCommand[_0x1e125b(0x371)][_0x1e125b(0x250)]=function(){const _0x52e0e7=_0x1e125b,_0x1ecc8f=VisuMZ[_0x52e0e7(0x1a6)][_0x52e0e7(0x1bc)]['Window'],_0x1bef2d=_0x1ecc8f['CommandWindows'];return _0x1bef2d===_0x52e0e7(0x30a)||_0x1bef2d===undefined?Window_Base[_0x52e0e7(0x371)][_0x52e0e7(0x250)][_0x52e0e7(0x198)](this):Math[_0x52e0e7(0x1c5)](Number(_0x1ecc8f[_0x52e0e7(0x2da)])/this[_0x52e0e7(0x104)]['x']);},Window_BattleStatus['FRONTVIEW_BATTLE_UI']={'animationOffset':{'x':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['Battle']['AniOffsetX']??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x189)]??0x20},'damageOffset':{'x':VisuMZ['FrontviewBattleUI'][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x106)]??0x0,'y':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x155)]??0x0},'compactWidth':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x2a2)][_0x1e125b(0x200)]??!![],'commandHelpWindow':VisuMZ[_0x1e125b(0x1a6)]['Settings'][_0x1e125b(0x2a2)][_0x1e125b(0xed)]??![],'initialPosition':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)]['Battle'][_0x1e125b(0x13a)]??'right','moveCenter':VisuMZ[_0x1e125b(0x1a6)]['Settings']['Battle'][_0x1e125b(0x1c7)]??!![]},$debugReveal=![],VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x28d)]=Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x100)],Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(_0x5af4aa){const _0x58ee28=_0x1e125b;VisuMZ[_0x58ee28(0x1a6)]['Window_BattleStatus_initialize']['call'](this,_0x5af4aa),this[_0x58ee28(0x2cd)]()&&(this[_0x58ee28(0x21a)](),this['createFrontviewBattleUiSprites'](),this['centerAllFrontViewBattleUiSprites']());},Window_BattleStatus['prototype'][_0x1e125b(0x2cd)]=function(){const _0xd1def=_0x1e125b;return BattleManager[_0xd1def(0x1bf)]();},Window_BattleStatus['prototype'][_0x1e125b(0x21a)]=function(){const _0x168f04=_0x1e125b;this[_0x168f04(0x219)](0x2);if($debugReveal)this[_0x168f04(0x219)](0x0);this[_0x168f04(0x241)]=![];},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x2fa)]=Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x30d)],Window_BattleStatus[_0x1e125b(0x371)]['maxCols']=function(){const _0x29ad28=_0x1e125b;return BattleManager['isUsingFrontviewUiLayout']()?$gameParty[_0x29ad28(0xaf)]()[_0x29ad28(0x1f2)]:VisuMZ[_0x29ad28(0x1a6)][_0x29ad28(0x2fa)][_0x29ad28(0x198)](this);},VisuMZ['FrontviewBattleUI']['Window_BattleStatus_maxItems']=Window_BattleStatus[_0x1e125b(0x371)]['maxItems'],Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x132)]=function(){const _0x15b45a=_0x1e125b;return BattleManager[_0x15b45a(0x1bf)]()?$gameParty[_0x15b45a(0xaf)]()[_0x15b45a(0x1f2)]:VisuMZ[_0x15b45a(0x1a6)][_0x15b45a(0x1ce)]['call'](this);},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x9b)]=Window_BattleStatus['prototype']['updatePadding'],Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x14a)]=function(){const _0x57ab54=_0x1e125b;BattleManager[_0x57ab54(0x1bf)]()?this[_0x57ab54(0x34e)]=0x0:VisuMZ[_0x57ab54(0x1a6)][_0x57ab54(0x9b)][_0x57ab54(0x198)](this);},VisuMZ['FrontviewBattleUI']['Window_BattleStatus_refreshCursor']=Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0xc9)],Window_BattleStatus[_0x1e125b(0x371)]['refreshCursor']=function(){const _0x309e42=_0x1e125b;VisuMZ['FrontviewBattleUI'][_0x309e42(0x24d)]['call'](this);if($debugReveal)return;BattleManager[_0x309e42(0x1bf)]()&&this[_0x309e42(0x355)](0x0,0x0,0x0,0x0);},VisuMZ[_0x1e125b(0x1a6)]['Window_Selectable_itemRect']=Window_Selectable[_0x1e125b(0x371)][_0x1e125b(0x274)],Window_Selectable['prototype']['itemRect']=function(_0x179e37){const _0x5565d1=_0x1e125b;return this[_0x5565d1(0x11b)]===Window_BattleStatus&&BattleManager[_0x5565d1(0x1bf)]()?this['frontviewBattleUiItemRect'](_0x179e37):VisuMZ[_0x5565d1(0x1a6)]['Window_Selectable_itemRect'][_0x5565d1(0x198)](this,_0x179e37);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0xca)]=Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x2aa)],Window_BattleStatus['prototype'][_0x1e125b(0x2aa)]=function(_0x181e5f,_0x260c3c){const _0x54c2e5=_0x1e125b;return BattleManager['isUsingFrontviewUiLayout']()?this[_0x54c2e5(0x177)](_0x181e5f,_0x260c3c):VisuMZ[_0x54c2e5(0x1a6)][_0x54c2e5(0xca)]['call'](this,_0x181e5f,_0x260c3c);},Window_Selectable[_0x1e125b(0x371)][_0x1e125b(0x177)]=function(_0x1c4a26,_0x59ffc9){const _0x53c78d=_0x1e125b,_0x114f07=this[_0x53c78d(0x185)],_0x3d0e36=new Rectangle(_0x114f07['x'],_0x114f07['y'],_0x114f07[_0x53c78d(0x345)],_0x114f07[_0x53c78d(0x205)]),_0xc08c6b=Sprite_FvUiStatus[_0x53c78d(0x25b)];_0x3d0e36['x']+=_0xc08c6b['x'];if(_0x3d0e36['contains'](_0x1c4a26,_0x59ffc9)){const _0x14281a=this[_0x53c78d(0x183)]['x']+_0x1c4a26-this['padding'],_0x576f79=this[_0x53c78d(0x183)]['y']+_0x59ffc9-this[_0x53c78d(0x34e)],_0x65fa5d=this[_0x53c78d(0x2e2)]();for(let _0x27c4ed=0x0;_0x27c4ed<this[_0x53c78d(0x2c4)]();_0x27c4ed++){const _0x184ca2=_0x65fa5d+_0x27c4ed;if(_0x184ca2<this[_0x53c78d(0x132)]()){const _0xc24af1=this[_0x53c78d(0x274)](_0x184ca2);if(_0xc24af1[_0x53c78d(0x11f)](_0x14281a,_0x576f79))return _0x184ca2;}}}return-0x1;},Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0xd1)]=function(_0x271383){const _0x217b30=_0x1e125b;if(!this[_0x217b30(0x361)])return VisuMZ[_0x217b30(0x1a6)][_0x217b30(0x138)][_0x217b30(0x198)](this,_0x271383);let _0x10d5dd=Math[_0x217b30(0x197)](this['width']/this[_0x217b30(0x30d)](),ImageManager[_0x217b30(0x2f0)]),_0x2486cb=this['height'];const _0x548cdd=$gameParty[_0x217b30(0xdc)]()-_0x271383-0x1;let _0x4afba9=Math[_0x217b30(0x1ad)](this[_0x217b30(0x361)][_0x548cdd]['x']-_0x10d5dd/0x2),_0x3e529a=0x0;const _0x3f83fd=Sprite_FvUiStatus[_0x217b30(0x25b)];return _0x4afba9+=_0x3f83fd['x'],new Rectangle(_0x4afba9,_0x3e529a,_0x10d5dd,_0x2486cb);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x2ed)]=Window_BattleStatus[_0x1e125b(0x371)]['drawItemBackground'],Window_BattleStatus[_0x1e125b(0x371)]['drawItemBackground']=function(_0x524c03){const _0x437cf6=_0x1e125b;if(BattleManager[_0x437cf6(0x1bf)]())return;VisuMZ[_0x437cf6(0x1a6)][_0x437cf6(0x2ed)][_0x437cf6(0x198)](this,_0x524c03);},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x2a0)]=Window_BattleStatus['prototype']['drawItem'],Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x26f)]=function(_0x14e395){const _0x1824e5=_0x1e125b;BattleManager[_0x1824e5(0x1bf)]()?this['drawItemFrontviewBattleUi'](_0x14e395):VisuMZ[_0x1824e5(0x1a6)]['Window_BattleStatus_drawItem'][_0x1824e5(0x198)](this,_0x14e395);},Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x33e)]=function(_0x19789f){this['centerFrontviewUiSprite'](_0x19789f);},Window_BattleStatus[_0x1e125b(0x371)]['centerFrontviewUiSprite']=function(_0x4866cb){const _0x5b61ed=_0x1e125b;if(!SceneManager[_0x5b61ed(0x33b)]())return;if($gameSystem['isSideView']())return;const _0x20665f=this[_0x5b61ed(0x2f2)](_0x4866cb);if(!_0x20665f)return;const _0xf5d1e7=_0x20665f[_0x5b61ed(0xe2)]();if(!_0xf5d1e7)return;const _0x5b1d89=this[_0x5b61ed(0x1ed)](_0x4866cb);if(!_0x5b1d89)return;let _0xfd94a7=_0x5b1d89['x'],_0x5a32fa=this['height']/0x2;_0xfd94a7+=Window_BattleStatus[_0x5b61ed(0x2fe)][_0x5b61ed(0x1f8)]['x'],_0x5a32fa+=Window_BattleStatus['FRONTVIEW_BATTLE_UI'][_0x5b61ed(0x1f8)]['y'],_0xf5d1e7['setHome'](_0xfd94a7,_0x5a32fa),this[_0x5b61ed(0x144)](_0xf5d1e7,0x1);if($gameSystem[_0x5b61ed(0x32d)]())_0xf5d1e7[_0x5b61ed(0x251)]();if(!$gameSystem[_0x5b61ed(0x32d)]())_0xf5d1e7['hide']();if(this[_0x5b61ed(0xa2)])this[_0x5b61ed(0x220)](this['_damageContainer']);this[_0x5b61ed(0xd0)](),this[_0x5b61ed(0x24e)]();},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x2ad)]=Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x1e8)],Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x1e8)]=function(_0x107604,_0x1883f5){const _0x38a946=_0x1e125b;BattleManager[_0x38a946(0x1bf)]()&&!$gameSystem['isSideView']()?this[_0x38a946(0xb3)](_0x107604,_0x1883f5):VisuMZ['FrontviewBattleUI']['Window_BattleStatus_addDamageSprite'][_0x38a946(0x198)](this,_0x107604,_0x1883f5);},Window_BattleStatus['prototype'][_0x1e125b(0xb3)]=function(_0xd0fca4,_0x362691){const _0x85cdea=_0x1e125b;if(!this[_0x85cdea(0xa2)])return;if(!_0xd0fca4)return;if(!_0x362691)return;const _0x3a51db=this[_0x85cdea(0x274)](_0x362691[_0x85cdea(0x1e4)]()),_0x5971f2=this[_0x85cdea(0x1ed)](_0x362691['index']());_0x3a51db['x']+=_0x3a51db['width']/0x2+this[_0x85cdea(0x34e)],_0xd0fca4['x']=_0x5971f2['x'],_0xd0fca4['y']=_0x3a51db['y']+_0x3a51db[_0x85cdea(0x205)]/0x2,_0xd0fca4['x']+=Window_BattleStatus[_0x85cdea(0x2fe)][_0x85cdea(0x134)]['x'],_0xd0fca4['y']+=Window_BattleStatus[_0x85cdea(0x2fe)][_0x85cdea(0x134)]['y'],this[_0x85cdea(0xa2)][_0x85cdea(0x220)](_0xd0fca4);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1b2)]=Game_Actor[_0x1e125b(0x371)][_0x1e125b(0x377)],Game_Actor[_0x1e125b(0x371)]['battleUIOffsetY']=function(){const _0x36e455=_0x1e125b;if(BattleManager[_0x36e455(0x1bf)]()&&!$gameSystem[_0x36e455(0x32d)]())return Graphics[_0x36e455(0x205)]*0xa;return VisuMZ[_0x36e455(0x1a6)][_0x36e455(0x1b2)][_0x36e455(0x198)](this);},VisuMZ['FrontviewBattleUI'][_0x1e125b(0x23c)]=Sprite_Battler['prototype'][_0x1e125b(0x9d)],Sprite_Battler[_0x1e125b(0x371)][_0x1e125b(0x9d)]=function(){const _0x2bf0a8=_0x1e125b;if(this[_0x2bf0a8(0x1c8)]&&this[_0x2bf0a8(0x1c8)][_0x2bf0a8(0xb1)]()&&BattleManager['isUsingFrontviewUiLayout']()&&!$gameSystem[_0x2bf0a8(0x32d)]())return![];return VisuMZ[_0x2bf0a8(0x1a6)]['Sprite_Battler_isVisualHpGaugeDisplayed']['call'](this);},Window_BattleStatus['prototype']['createFrontviewBattleUiSprites']=function(){const _0x574b3a=_0x1e125b;if(!this[_0x574b3a(0x1c3)]())return;this['_frontviewUiSprites']=[];let _0x5410e7=$gameParty[_0x574b3a(0xdc)]();const _0x44ef7a=this['initialFrontviewUiStatusPosition']();while(_0x5410e7-->0x0){const _0x3b9881=new Sprite_FvUiStatus(_0x5410e7,_0x44ef7a,this);this[_0x574b3a(0x220)](_0x3b9881),this[_0x574b3a(0x361)][_0x574b3a(0x352)](_0x3b9881);}},Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x1c3)]=function(){const _0x446795=_0x1e125b;return this[_0x446795(0x11b)]===Window_BattleStatus;},Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x28b)]=function(){const _0x5c0fdc=_0x1e125b;return Window_BattleStatus[_0x5c0fdc(0x2fe)]['initialPosition'];},Window_BattleStatus['prototype'][_0x1e125b(0x1ed)]=function(_0x451b3e){const _0x551dcc=_0x1e125b;if(!this[_0x551dcc(0x361)])return null;return this['_frontviewUiSprites'][_0x551dcc(0x279)](_0x37ba7a=>_0x37ba7a['_partyIndex']===_0x451b3e);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x331)]=BattleManager['startTurn'],BattleManager[_0x1e125b(0x314)]=function(){const _0x4253ff=_0x1e125b;VisuMZ[_0x4253ff(0x1a6)][_0x4253ff(0x331)]['call'](this);if(BattleManager[_0x4253ff(0x1bf)]()){const _0x45c211=SceneManager[_0x4253ff(0xfb)][_0x4253ff(0x2f3)];if(!_0x45c211)return;_0x45c211[_0x4253ff(0x16b)]();}},Window_BattleStatus[_0x1e125b(0x371)][_0x1e125b(0x16b)]=function(){const _0x5eaa2a=_0x1e125b;if(!this['_frontviewUiSprites'])return null;const _0x280967=this['_frontviewUiSprites'][_0x5eaa2a(0x1f2)];for(let _0x277856=0x0;_0x277856<_0x280967;_0x277856++){this[_0x5eaa2a(0x2e0)](_0x277856);}},VisuMZ['FrontviewBattleUI']['BattleManager_startAction']=BattleManager[_0x1e125b(0x36a)],BattleManager[_0x1e125b(0x36a)]=function(){const _0x53fec9=_0x1e125b;if(this[_0x53fec9(0x1bf)]()){const _0x5ccf47=SceneManager[_0x53fec9(0xfb)]['_statusWindow'];_0x5ccf47&&_0x5ccf47[_0x53fec9(0x16b)]();}VisuMZ[_0x53fec9(0x1a6)][_0x53fec9(0x34d)][_0x53fec9(0x198)](this);};function Window_FrontviewUiMapBattleStatus(){const _0x23397d=_0x1e125b;this[_0x23397d(0x100)](...arguments);}Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)]=Object[_0x1e125b(0x216)](Window_BattleStatus[_0x1e125b(0x371)]),Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x11b)]=Window_FrontviewUiMapBattleStatus,Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI']={'show':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x34f)][_0x1e125b(0xf9)]??!![],'compactWidth':VisuMZ['FrontviewBattleUI']['Settings'][_0x1e125b(0x34f)][_0x1e125b(0x200)]??!![],'initialPosition':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x34f)][_0x1e125b(0x13a)]??_0x1e125b(0x362),'scale':VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x1bc)][_0x1e125b(0x34f)][_0x1e125b(0x26d)]??0x1,'moveCenter':![]},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x100)]=function(_0x1604db){const _0x5ba49b=_0x1e125b,_0x34c2d9=Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI'][_0x5ba49b(0x104)];_0x1604db[_0x5ba49b(0x345)]=Math[_0x5ba49b(0x1c5)](_0x1604db[_0x5ba49b(0x345)]/_0x34c2d9),Window_BattleStatus[_0x5ba49b(0x371)][_0x5ba49b(0x100)][_0x5ba49b(0x198)](this,_0x1604db),this[_0x5ba49b(0xb9)](),this['scale']['x']=this[_0x5ba49b(0x104)]['y']=Window_FrontviewUiMapBattleStatus[_0x5ba49b(0x2fe)]['scale'];},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0xb9)]=function(){const _0xf1a6c7=_0x1e125b;if(!this[_0xf1a6c7(0x2cd)]())return;this[_0xf1a6c7(0x349)]=0xff,this[_0xf1a6c7(0xff)]={};},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x2cd)]=function(){const _0x28f33f=_0x1e125b;return SceneManager[_0x28f33f(0x1bf)]();},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x277)]=function(){const _0x36f41b=_0x1e125b;if(this[_0x36f41b(0x203)])return this[_0x36f41b(0x203)];return this[_0x36f41b(0x203)]=VisuMZ[_0x36f41b(0x1dd)][_0x36f41b(0x1bc)][_0x36f41b(0x130)][_0x36f41b(0xd8)][_0x36f41b(0x1d0)]()[_0x36f41b(0x1c0)](),this[_0x36f41b(0x203)];},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)]['createFrontviewBattleUiSprites']=function(){const _0xd196db=_0x1e125b;Window_BattleStatus['prototype'][_0xd196db(0x339)][_0xd196db(0x198)](this),this['addChild'](this[_0xd196db(0xa2)]);},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)]['canCreateFrontviewBattleUiSprites']=function(){return this['canCreateFrontviewBattleUi']();},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x26f)]=function(_0x518f32){},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x26c)]=function(_0x41f416){},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x28b)]=function(){const _0x1e44c5=_0x1e125b;return Window_FrontviewUiMapBattleStatus[_0x1e44c5(0x2fe)][_0x1e44c5(0x36b)];},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)]['update']=function(){const _0x21aeff=_0x1e125b;Window_BattleStatus[_0x21aeff(0x371)][_0x21aeff(0x269)]['call'](this),this['updateDamageSprites'](),this[_0x21aeff(0x267)]();},Window_FrontviewUiMapBattleStatus['prototype'][_0x1e125b(0x259)]=function(){const _0x31e07b=_0x1e125b;if(!SceneManager[_0x31e07b(0x1bf)]())return;if(!this[_0x31e07b(0xff)])return;const _0x48df20=[];for(const _0x15dda8 in this[_0x31e07b(0xff)]){const _0x308750=this['_damageSprites'][_0x15dda8];if(_0x308750)for(const _0x5da77f of _0x308750){if(!_0x5da77f)continue;!_0x5da77f[_0x31e07b(0x24c)]()&&(_0x48df20[_0x31e07b(0x352)](_0x5da77f),_0x308750[_0x31e07b(0x15e)](_0x5da77f));}}while(_0x48df20[_0x31e07b(0x1f2)]>0x0){const _0x9bf3a1=_0x48df20[_0x31e07b(0x135)]();this[_0x31e07b(0x28e)](_0x9bf3a1);}},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x267)]=function(){const _0x596411=_0x1e125b;this[_0x596411(0xa2)]&&(this[_0x596411(0xa2)][_0x596411(0xfc)]=this[_0x596411(0x29b)]());},Window_FrontviewUiMapBattleStatus['prototype'][_0x1e125b(0x29b)]=function(){const _0x3bf942=_0x1e125b;if(!$gameSystem[_0x3bf942(0x1ef)]())return 0x0;if($gamePlayer[_0x3bf942(0x14d)]())return Sprite_FvUiStatus[_0x3bf942(0x15d)];return 0xff;},VisuMZ[_0x1e125b(0x1a6)]['StartDamagePopup']=function(_0x5a8d6f){const _0x505dc1=_0x1e125b;if(!SceneManager[_0x505dc1(0x1bf)]())return;if(!_0x5a8d6f)return;const _0xf5d5a0=SceneManager[_0x505dc1(0xfb)];if(!_0xf5d5a0)return;if(!_0xf5d5a0[_0x505dc1(0x1c4)])return;if(SceneManager[_0x505dc1(0xbd)]()&&!$gameSystem[_0x505dc1(0x1ef)]())return;_0xf5d5a0['_frontviewUiBattleStatusWindow'][_0x505dc1(0x234)](_0x5a8d6f),_0x5a8d6f['clearResult'](),_0x5a8d6f[_0x505dc1(0x107)]();},Window_FrontviewUiMapBattleStatus['prototype'][_0x1e125b(0x94)]=function(_0x3e4ec0,_0x1b9c5d){const _0x1dd5b2=_0x1e125b,_0x4700d3=VisuMZ[_0x1dd5b2(0x1dd)][_0x1dd5b2(0x1bc)][_0x1dd5b2(0x312)];this[_0x1dd5b2(0xff)]=this[_0x1dd5b2(0xff)]||{},this[_0x1dd5b2(0xff)][_0x1b9c5d[_0x1dd5b2(0x1e4)]()]=this[_0x1dd5b2(0xff)][_0x1b9c5d[_0x1dd5b2(0x1e4)]()]||[];const _0x58850f=this[_0x1dd5b2(0xff)][_0x1b9c5d[_0x1dd5b2(0x1e4)]()];if(_0x4700d3[_0x1dd5b2(0xb6)])for(const _0x2766d0 of _0x58850f){_0x2766d0['x']+=_0x4700d3[_0x1dd5b2(0x21e)],_0x2766d0['y']+=_0x4700d3[_0x1dd5b2(0xc4)];}else{const _0x5eced1=_0x58850f[_0x58850f['length']-0x1];_0x5eced1&&(_0x3e4ec0['x']=_0x5eced1['x']+_0x4700d3['PopupShiftX'],_0x3e4ec0['y']=_0x5eced1['y']+_0x4700d3['PopupShiftY']);}_0x58850f['push'](_0x3e4ec0);},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)][_0x1e125b(0x234)]=function(_0x2bf3b1){const _0x1b031e=_0x1e125b;if(!this[_0x1b031e(0x2cd)]())return;if(!_0x2bf3b1)return;if(!$gameParty[_0x1b031e(0xaf)]()['includes'](_0x2bf3b1))return;const _0x5a52e7=VisuMZ['BattleCore']['Settings'][_0x1b031e(0x312)],_0x355ea9=new Sprite_Damage();_0x355ea9[_0x1b031e(0xbc)]=_0x5a52e7[_0x1b031e(0x99)],this[_0x1b031e(0x94)](_0x355ea9,_0x2bf3b1),_0x355ea9[_0x1b031e(0x260)](_0x2bf3b1),_0x355ea9[_0x1b031e(0x2d7)](_0x2bf3b1),this[_0x1b031e(0xb3)](_0x355ea9,_0x2bf3b1);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x298)]=function(_0x5d5dc3,_0x631016,_0x276055){const _0x4167e2=_0x1e125b;if(!Imported[_0x4167e2(0x93)])return;if(!SceneManager[_0x4167e2(0x1bf)]())return;if(!_0x5d5dc3)return;if(_0x631016===_0x5d5dc3['deathStateId']())return;if(_0x276055&&!_0x5d5dc3[_0x4167e2(0xb7)](_0x631016))return;if(!_0x276055&&_0x5d5dc3[_0x4167e2(0xb7)](_0x631016))return;const _0x5e1bf6=VisuMZ[_0x4167e2(0x18b)][_0x4167e2(0x1bc)]['State'],_0x1fac55=$dataStates[_0x631016];if(!_0x1fac55)return;_0x5e1bf6[_0x4167e2(0x145)]&&!_0x1fac55[_0x4167e2(0x289)][_0x4167e2(0x364)](/<HIDE STATE POPUP>/i)&&this[_0x4167e2(0x33a)](_0x5d5dc3,_0x631016,_0x276055);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x33a)]=function(_0x244f7c,_0x57eb8f,_0x2a6c6f){const _0x9007db=_0x1e125b,_0x4ca6f9=VisuMZ[_0x9007db(0x18b)][_0x9007db(0x1bc)]['State'],_0x4bb372=$dataStates[_0x57eb8f];if(!_0x4bb372)return;const _0x3aecab=_0x2a6c6f?_0x9007db(0x322):_0x9007db(0x341),_0x462541=_0x4bb372[_0x9007db(0x244)];if(_0x462541<=0x0)return;const _0x217bac=_0x4ca6f9[_0x9007db(0x365)[_0x9007db(0x20f)](_0x3aecab)];if(_0x217bac['length']<=0x0)return;let _0x4419fd=_0x217bac['format'](_0x4bb372[_0x9007db(0x2f9)]);const _0x378a90={'textColor':_0x4ca6f9[_0x9007db(0x173)]||0x0,'flashColor':_0x4ca6f9[_0x9007db(0x337)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x4ca6f9[_0x9007db(0x11e)]||0x0};_0x4ca6f9['MatchTurnCountColor']&&(_0x378a90[_0x9007db(0x210)]=ColorManager['stateColor'](_0x4bb372));VisuMZ[_0x9007db(0x18b)][_0x9007db(0x139)](_0x4bb372,_0x378a90);const _0x3e7b02=ImageManager[_0x9007db(0x297)](_0x9007db(0x193));_0x3e7b02[_0x9007db(0x92)](this[_0x9007db(0x211)][_0x9007db(0xde)](this,_0x244f7c,_0x462541,_0x4419fd,_0x378a90));},VisuMZ['FrontviewBattleUI']['setupIconTextPopup']=function(_0x3c1a4f,_0x37ae8e,_0x34c714,_0x3f9b08){const _0x3390a0=_0x1e125b,_0x244229=SceneManager[_0x3390a0(0xfb)];if(!_0x244229)return;if(!_0x244229[_0x3390a0(0x1c4)])return;_0x244229[_0x3390a0(0x1c4)][_0x3390a0(0x301)](_0x3c1a4f,_0x37ae8e,_0x34c714,_0x3f9b08),_0x3c1a4f[_0x3390a0(0x35e)](),_0x3c1a4f['clearDamagePopup']();},Window_FrontviewUiMapBattleStatus[_0x1e125b(0x371)]['createFvUiStateSprite']=function(_0x4c5c46,_0x4c0d6d,_0x27d3d6,_0x501ac9){const _0x4fa5b8=_0x1e125b;if(!this['canCreateFrontviewBattleUi']())return;if(!_0x4c5c46)return;if(!$gameParty[_0x4fa5b8(0xaf)]()[_0x4fa5b8(0x261)](_0x4c5c46))return;const _0x4d2cf5=VisuMZ['BattleCore'][_0x4fa5b8(0x1bc)][_0x4fa5b8(0x312)],_0x451fbb=new Sprite_Damage();_0x451fbb['_duration']=_0x4d2cf5[_0x4fa5b8(0x99)],this[_0x4fa5b8(0x94)](_0x451fbb,_0x4c5c46),_0x451fbb[_0x4fa5b8(0x211)](_0x4c0d6d,_0x27d3d6,_0x501ac9),this[_0x4fa5b8(0xb3)](_0x451fbb,_0x4c5c46);},VisuMZ[_0x1e125b(0x1a6)][_0x1e125b(0x34b)]=function(_0xc0eee,_0x23da25,_0x3353c7){const _0x45a181=_0x1e125b;if(!SceneManager[_0x45a181(0x1bf)]())return;if(!_0xc0eee)return;_0x3353c7=_0x3353c7||{},_0x3353c7['textColor']=_0x3353c7[_0x45a181(0x210)]||_0x45a181(0x321),_0x3353c7[_0x45a181(0x1d6)]=_0x3353c7[_0x45a181(0x1d6)]||[0x0,0x0,0x0,0x0],_0x3353c7[_0x45a181(0x2b4)]=_0x3353c7[_0x45a181(0x2b4)]||0x0;const _0x1302c6=SceneManager['_scene'];if(!_0x1302c6)return;if(!_0x1302c6[_0x45a181(0x1c4)])return;_0x1302c6['_frontviewUiBattleStatusWindow']['createFvUiTextPopup'](_0xc0eee,_0x23da25,_0x3353c7);},Window_FrontviewUiMapBattleStatus['prototype'][_0x1e125b(0x2d1)]=function(_0x48ef51,_0x29e85b,_0x5f4e38){const _0x157d49=_0x1e125b;if(!this[_0x157d49(0x2cd)]())return;if(!_0x48ef51)return;if(!$gameParty[_0x157d49(0xaf)]()[_0x157d49(0x261)](_0x48ef51))return;const _0x5d317d=VisuMZ['BattleCore'][_0x157d49(0x1bc)][_0x157d49(0x312)],_0x2020ac=new Sprite_Damage();_0x2020ac[_0x157d49(0xbc)]=_0x5d317d[_0x157d49(0x99)],this[_0x157d49(0x94)](_0x2020ac,_0x48ef51),_0x2020ac['setupTextPopup'](_0x29e85b,_0x5f4e38),this[_0x157d49(0xb3)](_0x2020ac,_0x48ef51);};function _0x5c47(){const _0x42379e=['_stateOverlaySprite','_lastPredictedBrave','GraphicsFaceShow','dimColor1','Settings','UI_TpGauge_OffsetX','MOVE_DURATION','isUsingFrontviewUiLayout','trim','frontviewUiStack','createNameSprite','canCreateFrontviewBattleUiSprites','_frontviewUiBattleStatusWindow','ceil','VisuMZ_3_StateTooltips\x20needs\x20to\x20be\x20updated\x20','MoveCenter','_battler','lineHeight','Text','Scene_Battle_actorWindowRect','ARRAYSTR','outlineWidth','Window_BattleStatus_maxItems','DeadTone','toLowerCase','BREAK_SHIELDS','children','MAGICAL','shouldAdjustForFrontviewUiLayout','GraphicsFaceMaskColor2','flashColor','_windowLayer','StatusUI','_lastInputFilename','gainHp','RegExp','Scene_Battle_createItemWindow','BattleCore','_boostPointsSprite_battler','_enemyWindow','OpacitySpeed','VisuMZ_1_BattleCore','BOOST_POINTS','STR','index','VisuMZ_2_BattleSystemCTB','_context','updateBlendColor','addDamageSprite','description','setupFont','UI_Name_OffsetY','updateFaceSpriteFrame','getFrontviewUiSprite','VisuMZ_0_CoreEngine','isFrontviewBattleUiMapVisible','_hpGauge','visualAtbGauge','length','makeCommandList','SideviewTargetActor','_faceMaskFilter','_moveDuration','fill','animationOffset','_shakeDuration','fillStyle','randomInt','updateFilters','AGGRO_GAUGE','isTpbGaugeVisible','START_BUFFER_X','CompactWidth','stackOffset','setBlendColor','_battleLayoutStyle','Scene_Battle_updateStatusWindowPosition','height','_lastTpValue','initMembers','Game_Battler_onRemoveState','%1%2','StateTooltips','createItemWindow','clone','createStateIconSprite','_currentActor','format','textColor','setupIconTextPopup','FV_MODE_PORTRAITS','drawOutlinePolygon','setColorTone','Window_BattleSkill_hide','create','_lastBravePoints','rateY','setBackgroundType','initFrontviewBattleUi','_subject','frontviewBattleUiBackgroundRender','isForFriend','PopupShiftX','loadFaceSpriteBitmap','addChild','checkPosition','currentSubjectFilename','createContainers','Sprite_Name_outlineWidth','UI_OFFSET','ARRAYJSON','NAME','FRONTVIEW_BATTLE_UI_MOVE_BATTLERS','VisuMZ_4_VisualItemInv','isMagicSkill','_faceSprite','actorWindowRect','compactWidth','moveCenter','EdgeBuffer','UI_AggroGauge_Scale','showShopStatus','_tpbGauge','frontviewBattleUiStatusWindowRect','createFvUiDamageSprite','isBTB','BaseOffsetY','updateTpbGauge','VisuMZ_1_SkillsStatesCore','ACTIVE_SHIFT','getColor','_breakShieldSprite','Sprite_Battler_isVisualHpGaugeDisplayed','_customModified','Sprite_Name_outlineColor','BATTLE_LAYOUT','Window_ItemList_Pos','frameVisible','select','DyingTone','iconIndex','updateGraphics','UI_Name_Angle','dead','HpHealing','_bravePointsSprite','UI_MpGauge_Scale','CoreEngine','isPlaying','Window_BattleStatus_refreshCursor','updateAttachmentSprites','brightness','frontviewUiWidth','show','_startingPosition','UI_AggroGauge_OffsetX','Window_ItemList_colSpacing','AggroControlSystem','angle','isBreakShieldIconVisible','GraphicsFaceMaskShift','updateDamageSprites','Window_PartyCommand','GRAPHICS_OFFSET','UI_StatesOverlay_Show','VisuMZ_3_StateTooltips','predictedBravePoints','_actorCommandWindow','setup','includes','_lastBraveInputting','Sprite_Gauge_isValid','UI_BreakShields_OffsetY','_graphicsContainer','stringify','updateDamageOpacity','FrontviewTargetEnemy','update','GraphicsFaceOffsetX','right','drawItemBackground','Scale','getActorFrontviewUiPortrait','drawItem','_faceGraphicIndex','bitmap','hideFrontviewUiShopStatusWindow','setActiveAutoFadeOut','itemRect','Window_Base_open','screenY','battleLayoutStyle','FV_OPACITY_RATE','find','updateOpacity','HpDamage','PortraitLine','visible','zoomScale','baseOffset','adjustFrontviewUiWidth','_opacityTarget','gradientFillRect','Battler','updateActiveContainer','Window_SkillList_initialize','createUiContainer','UI_BoostPoints_Scale','UI_StatesOverlay_OffsetY','note','_actorWindow','initialFrontviewUiStatusPosition','266688RihJhS','Window_BattleStatus_initialize','removeDamageSprite','EnterOffset','createActiveContainer','return\x200','Index','addBravePointsWindow','FV_FADE_OPACITY','bravePoints','UI_BoostPoints_OffsetX','loadSystem','StartStatePopup','Window_BattleItem_hide','_lastActor','targetDamageOpacity','color2','Window_PartyCommand_activate','OffsetX','random','Window_BattleStatus_drawItem','setTouchState','Battle','addFaceMaskFilter','createAggroGauge','duration','frontviewUiPositionX','_faceContainer','offset','UI_TpGauge_OffsetY','hitTest','adjustFrontviewUiHeight','setupFrontviewUiMapNotetags','Window_BattleStatus_addDamageSprite','updateStateIconSprite','_subjectContainer','Window_ActorCommand','727390sqEHGR','_frontviewBattleUiBackgroundRender','removeChild','flashDuration','createFrontviewUiBattleStatusWindow','frontviewBattleUiFaceMaskRender','targetPositionX','UI_BoostPoints_Angle','BACKGROUND_OFFSET','onPress','fadeIn','MP_GAUGE','SETTINGS','Window_SkillList_Pos','_frontviewBattleUiFaceMaskRender','getCurrentInputKeys','createFilters','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','maxVisibleItems','applyFaceMaskFilter','VISUAL_ITEM_CONSTRUCTORS','currentInputFilename','frontviewUiPositionY','isSelected','gainMp','UI_BravePoints_OffsetX','isSkill','canCreateFrontviewBattleUi','statusWindowRect','initFrontviewBattleUiMapSettings','_lastHpValue','createFvUiTextPopup','HideMapBattleStatus','updateFaceGraphic','_activeContainer','_fadingIn','Window_PartyCommand_makeCommandList','setupBattleCore','anchor','UI_Name_OffsetX','CommandWindows','Window_SkillList_maxCols','Healing','430698ohheHg','faceIndex','22rsRonI','centerFrontviewUiSprite','updateProperties','topIndex','GraphicsBackgroundFilename','Scene_Battle_statusWindowRect','195mCHVOz','addWindow','HP_GAUGE','currentFaceGraphicIndex','onMouseEnter','_data','130JdUYUX','startOpacity','Window_BattleStatus_drawItemBackground','MapUICustomTextActor','vertical','faceWidth','UI_BoostPoints_Show','actor','_statusWindow','GraphicsFaceMaskColor1','updateToneFilter','_shakeContainer','StackOffsetX','GraphicsBackgroundShow','name','Window_BattleStatus_maxCols','isWindowMaskingEnabled','setLastInputLocation','onRemoveState','FRONTVIEW_BATTLE_UI','addFaceSpriteBase','createSpriteset','createFvUiStateSprite','_aggroGauge','map','in\x20order\x20for\x20VisuMZ_3_FrontviewBattleUI\x20to\x20work.','ShowStatusGauge','MinProxOpacity','loadFace','FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_Y','contents','auto','3913vgLXeY','ConvertParams','maxCols','drawActorBravePoints','_actor','adjustForFrontviewUi','SpriteMaskFilter','Damage','ENTER_FROM_OFFSET','startTurn','BACKGROUND_FILENAME','Game_Map_setup','Window_ItemList_initialize','commandHelpWindow','registerCommand','addFaceMaskBackground','updateActiveAutoFadeOut','FACE_MASK_FILENAME','_action','DEFAULT','damageDuration','enemy','#ffffff','Add','Window_PartyCommand_initialize','createGraphics','enabled','_closing','hide','Window_ItemList_maxCols','isBravePointsVisible','ActiveShiftY','_shopStatusWindow','NORMAL','isSideView','_inputContainer','_frontviewBattlePortraits','_nameSprite','BattleManager_startTurn','floor','_mpGauge','SideviewSubject','globalAlpha','frontviewShopStatusWindowRect','FlashColor','isMagical','createFrontviewBattleUiSprites','setupVisualStateEffectsPopup','isSceneBattle','fadeOutSprites','5423873vODVvs','drawItemFrontviewBattleUi','TONE_COLORS','BattleSystemATB','Erase','Enable','_frontviewUiPortraitData','Scene_Battle_createSpriteset','width','VisuMZ_2_BattleSystemATB','FACE_OFFSET','ItemsEquipsCore','openness','updateSubjects','setupTextPopup','Width','BattleManager_startAction','padding','Map','isActorActive','updateNameSprite','push','fadeOut','stroke','setCursorRect','PortraitData','updateMpGauge','_flashDuration','currentFaceGraphicFilename','UI_TpbGauge_OffsetX','createBoostPointsGauge','BaseOffsetX','frontviewUiLocation','clearResult','inputting','FACE_SHOW','_frontviewUiSprites','left','isDead','match','%1PopupFmt','_list','exit','getFrontviewUiPortraitData','active','startAction','initialPosition','Game_Battler_gainHp','convertGaugeTypeSkillsStatesCore','selected','GraphicsOffsetX','_faceMaskSprite','prototype','_statusType','StackOffsetY','currentSubjectActor','MapUICustomVariableActor','108xdcGbm','battleUIOffsetY','location','item','setStatusWindow','SKILL','activate','currentSymbol','FV_FADE_SELECT','UI_HpGauge_OffsetY','makeItemList','UI_AggroGauge_Angle','addLoadListener','VisuMZ_3_VisualStateEffects','sortFvUiDamageSprites','updateFrontviewBattleUiPositions','canCreateFrontviewUiShopStatusWindow','updateVisibility','updateHpGauge','PopupDuration','max','Window_BattleStatus_updatePadding','SPRITE_HORZ_FLIP','isVisualHpGaugeDisplayed','_bravePointsWindow','createStateOverlaySprite','setHome','updateUi','_damageContainer','createSpriteLayers','SideviewTargetEnemy','setFrame','Scene_Base_isWindowMaskingEnabled','createFrontviewUiBattlePortraits','ActorIDs','createUiSprites','SPRITE_SCALE','loadBackgroundSpriteBitmap','maxFrontviewUiRows','createMpGauge','STATES','battleMembers','GraphicsBackgroundOffsetX','isActor','strokeStyle','addDamageSpriteFrontviewBattleUi','outlineColor','1057klsSlD','NewPopupBottom','isStateAffected','isPreviousSceneBattleTransitionable','initFrontviewUiSettings','addFaceMaskSprite','FrontviewTargetActor','_duration','isSceneMap','_backgroundSprite','Game_System_initialize','ActionFadeOut','checkShakeContainer','optDisplayTp','icon','PopupShiftY','BRAVE_POINTS','rateX','GraphicsFaceOffsetY','createGraphicsContainer','refreshCursor','Window_BattleStatus_hitTest','_moveTargetX','startBlendFlash','setSwapLastInputSpriteMoment','_itemWindow','DistanceBuffer','updateEffectsContainer','frontviewBattleUiItemRect','_opening','UI_HpGauge_Show','faceHeight','GraphicsBackgroundOffsetY','updateAggroGauge','Window_BattleSkill_show','Style','32iNCIDl','UI_TpGauge_Scale','ActiveShiftXSpeed','maxBattleMembers','drawBravePoints','bind','HorzFlip','isAggroGaugeVisible','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','battler','onAddState','status','isForOpponent','getCurrentSubjectKeys','actorId','_uiContainer','Sprite_Battler_setHome','isInputting','UiOffsetX','FACE_MASK_USE','CommandHelpWindow','lineTo','_die_bypass_visualStateEffects','center','UI_TpbGauge_OffsetY','_frontviewUiMapVisible','fittingHeight','#000000','StartDamagePopup','_faceGraphicName','OPACITY_RATE','restore','ShowUiOnMap','UI_HpGauge_OffsetX','_scene','opacity','singleSkill','addBravePointsSprite','_damageSprites','initialize','boxHeight','toUpperCase','FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_X','scale','clear','DmgOffsetX','clearDamagePopup','redraw','needsBravePointsUpdate','frontview_ui','339472uOlNJn','SV_FADE_SELECT','UI_Name_Show','createHpGauge','open','addBackgroundSpriteBase','createBackgroundSprite','_cache_battleMembersSize','_opacityDuration','maxRows','CERTAIN\x20HIT','parse','Game_Battler_gainMp','Window_ActorCommand_activate','_partyCommandWindow','VisuMZ_4_BreakShields','constructor','FACE_MASK_RENDER','UI_BravePoints_Show','FlashDuration','contains','ITEM','_partyIndex','aggroGauge','TPB_GAUGE','updateBreakShieldIcon','_lastSubjectFilename','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','filters','colSpacing','Window_BattleItem_show','LOCATION_X','Game_Battler_onAddState','createTpbGauge','_menuAggroType','isCertainHit','BLEND_COLORS','BattleLayout','_fadingOut','maxItems','createContents','damageOffset','pop','ItemWindows','loadPicture','Window_Selectable_itemRect','customizeStatePopup','InitialUiPosition','showFrontviewUiShopStatusWindow','UI_HpGauge_Angle','createAllWindows','UI_BreakShields_Show','_cancelButton','SystemMapUiVisibility','ActiveShiftYSpeed','createFaceSprite','UI_BoostPoints_OffsetY','addChildAt','ShowPopups','version','createFrontviewUiShopStatusWindow','_parentWindow','createBravePoints','updatePadding','filter','currentInputActor','isMapPositionConflictFrontviewUi','edgeBuffer','ShowShopStatus','updateShakeContainer','UI_TpbGauge_Angle','UI_BreakShields_OffsetX','_finishInitMembers','inBattle','DmgOffsetY','DAMAGE_SHAKE','_tpGauge','getFrontviewUiBattleStatusWindow','_boostPointsSprite','frameCount','dataFrontviewUiLength','UI_BravePoints_OffsetY','MAP_CLOSE_PROXIMITY_OPACITY','remove','_lastInputFilenameCache','isValid','showHelpWindow','UI_StatesIcon_OffsetX','_baseTexture','MpDamage','adjustFrontviewUiPosition','TpHealing','initMembersFrontviewUi','15492WNszol','BACKGROUND_SHOW','isTpb','centerAllFrontViewBattleUiSprites','OffsetY','_lastMpValue','ARRAYSTRUCT','Window_SkillList_colSpacing','TP_GAUGE','isBoostPointsGaugeVisible','updateBoostPointsGauge','TextColor','updateTpGauge','boxWidth','close','frontviewUiHitTest','ActiveShiftX','Gauge','value','updatePosition','dying','aggro','color1','bitmapWidth','createBitmap','Window','createBreakShieldIcon','origin','createTpGauge','innerRect','_stateIconSprite','ENTER_DURATION','DamageShakeDuration','AniOffsetY','_activeAutoFadeOutDuration','VisualStateEffects','_activeAutoFadeOut','ARRAYFUNC','createNewSprite','addNewSprite','Selected','save','_maskBackground','IconSet','updateStatusWindowPosition','updateBravePoints','isItem','min','call','Portrait','Window_Base_close','PHYSICAL','Window_ActorCommand_makeCommandList','StatusGauge','UI_AggroGauge_OffsetY','targetOpacity','_skillWindow','Window_ActorCommand_initialize','Scene_Battle_buttonAreaTop','totalVisibleMultiLayerHpGauges','UI_HpGauge_Scale','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','FrontviewBattleUI','startMove','isCTB','time','startingPositionX','ACTIVE_AUTO_FADEOUT','_flashColor','round','Sprite_Battler_updateVisibility','bitmapHeight','SV_MODE_PORTRAITS','EnterDuration','Game_Actor_battleUIOffsetY','MpHealing','click','StatusWindow','setFrontviewBattleUiMapVisible','VisuMZ_2_AggroControlSystem'];_0x5c47=function(){return _0x42379e;};return _0x5c47();}