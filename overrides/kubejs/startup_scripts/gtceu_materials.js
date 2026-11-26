GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('netherite_alloy')
        .ingot()
        .components('1x netherite', '1x nickel', '1x steel')
        .color(0x505050).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('conductive_alloy')
        .ingot()
        .components('1x silver', '2x redstone')
        .color(0xFFAABB).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .cableProperties(32, 4, 1, false)
})