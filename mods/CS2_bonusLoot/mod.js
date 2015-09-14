/*
 *  Mod:					Bonus Loot
 *  Descrição:				Loots essenciais
 *  Tipo:					Gameplay
 *  Versão:					1.7_2.1
 *  Criado:					19:32 04/01/2014
 *  Última Modificação:		01:44 28/06/2015
*/
/* ---------------------- Configs ------------------------ */
config.addIntProperty("bc-writable_book", "rarities", 1, "Book and Quill (Bonus Chest)");

config.addIntProperty("bc-map", "rarities", 3, "Empty Map (Bonus Chest)");

config.addIntProperty("bc-oak_sapling", "rarities", 3, "Oak Sapling (Bonus Chest)");
config.addIntProperty("bc-spruce_sapling", "rarities", 1, "Spruce Sapling (Bonus Chest)");
config.addIntProperty("bc-birch_sapling", "rarities", 1, "Birch Sapling (Bonus Chest)");
config.addIntProperty("bc-jungle_sapling", "rarities", 2, "Jungle Sapling (Bonus Chest)");
config.addIntProperty("bc-acacia_sapling", "rarities", 1, "Acacia Sapling (Bonus Chest)");
config.addIntProperty("bc-darkoak_sapling", "rarities", 1, "Dark Oak Sapling (Bonus Chest)");


config.addIntProperty("sl-map", "rarities", 8, "Empty Map (Stronghold Library)");

/* ------------------ Geração do Mundo ------------------- */

// Bonus Chest
// Book and Quill
mod.addChestItem("bonusChest", "minecraft:writable_book", 0, 1, config.getInt("bc-writable_book", "rarities"));
// Map
mod.addChestItem("bonusChest", "minecraft:map", 1, 4, config.getInt("bc-map", "rarities"));

// Saplings
mod.addChestItem("bonusChest", "minecraft:sapling:0", 0, 4, config.getInt("bc-oak_sapling", "rarities"));
mod.addChestItem("bonusChest", "minecraft:sapling:1", 0, 2, config.getInt("bc-spruce_sapling", "rarities"));
mod.addChestItem("bonusChest", "minecraft:sapling:2", 0, 4, config.getInt("bc-birch_sapling", "rarities"));
mod.addChestItem("bonusChest", "minecraft:sapling:3", 0, 4, config.getInt("bc-jungle_sapling", "rarities"));
mod.addChestItem("bonusChest", "minecraft:sapling:4", 0, 3, config.getInt("bc-acacia_sapling", "rarities"));
mod.addChestItem("bonusChest", "minecraft:sapling:5", 0, 3, config.getInt("bc-darkoak_sapling", "rarities"));


// Stronghold Library
// Map
mod.addChestItem("strongholdLibrary", "minecraft:map", 1, 16, config.getInt("sl-map", "rarities"));

/* -- */
