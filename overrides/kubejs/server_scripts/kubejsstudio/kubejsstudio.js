// kubejsstudio custom: kubejs:electric_blast_furnace/make_cheesite
ServerEvents.highPriorityData(event => {
    event.addJson(
      'kubejs:recipes/electric_blast_furnace/make_cheesite',
      {
        "type": "gtceu:electric_blast_furnace",
        "data": {"ebf_temp":1700},
        "duration": 884,
        "category": "gtceu:electric_blast_furnace",
        "tickInputs": {"eu":[{"content":120}]},
        "inputs": {
          "item": [
            {
              "content": {
                "type": "gtceu:sized",
                "count": 1,
                "ingredient": {"item": "thermal:cheese_wedge"}
              }
            },
            {
              "content": {
                "type": "gtceu:sized",
                "count": 2,
                "ingredient": {"tag": "forge:foils/gold"}
              }
            },
            {
              "content": {
                "type": "gtceu:sized",
                "count": 3,
                "ingredient": {"tag": "forge:nuggets/gold"}
              }
            }
          ]
        },
        "outputs": {
          "item": [
            {
              "content": {
                "type": "gtceu:sized",
                "count": 1,
                "ingredient": {"item":"kubejs:cheesite_wedge"}
              }
            }
          ]
        }
      }
    )
})
