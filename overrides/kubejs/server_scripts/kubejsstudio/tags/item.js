// kubejsstudio item tags; re-apply merges by tag id
ServerEvents.tags('item', event => {
    event.add('kubejs:solid_soulwood_trapdoor_valid', 'malum:rustic_soulwood_planks', 'malum:rustic_soulwood_tiles', 'malum:soulwood_planks', 'malum:soulwood_tiles', 'malum:vertical_rustic_soulwood_planks', 'malum:vertical_soulwood_boards', 'malum:vertical_soulwood_planks')
    event.add('forge:ingots/aluminum', 'gtceu:aluminium_ingot')
    event.add('kubejs:slime_block_valid', 'minecraft:slime_ball', 'malum:cursed_sapball', 'malum:runic_sapball')
    event.add('kubejs:solid_runewood_trapdoor_valid', 'malum:runewood_planks', 'malum:runewood_tiles', 'malum:rustic_runewood_planks', 'malum:rustic_runewood_tiles', 'malum:vertical_runewood_boards', 'malum:vertical_runewood_planks', 'malum:vertical_rustic_runewood_planks')
    event.remove('forge:raw_materials/uraninite', 'powah:uraninite_raw')
    event.add('forge:sandstone/venus_sandstone', 'ad_astra:venus_sandstone')
    event.add('forge:dusts/quartz', 'gtceu:nether_quartz_dust')
    event.add('forge:dusts/wood', 'nuclearcraft:sawdust')
})
