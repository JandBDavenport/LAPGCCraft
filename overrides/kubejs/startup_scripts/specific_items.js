StartupEvents.registry('item', event => {

const COILS = ["copper", "conductive_alloy"];
COILS.forEach((coil) => {
    event.create(coil+"_coil")
    .tag('forge:coils')
});

event.create('circuit_board')
event.create('cpu')
event.create('laser_framework')
event.create('laser_logic')
event.create('gpu')
event.create('exa_tier_gpu')
event.create('resonant_gpu')
event.create('solid_state_drive')
event.create('high_end_pc')
event.create('resonant_processor')
event.create('resonant_supercomputer')

event.create('pumpkinite_ingot')
    .tag('forge:ingots')
    event.create('cheesite_wedge').food(food => {
        food
        .hunger(6)
        .saturation(1.2)
    })
})
