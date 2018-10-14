import { TibiaData } from '../../src/tibia-data';
export function populateQuest(data: TibiaData) { //SideEffect
  const quests = data.quests;
  quests.add({
    identificator: "the-explorer-society-quest-part1",
    description: "Joining the explorer society. Talk to Angus. [HI, JOIN, YES, YES]",
    area: {
      closestLocation: "port-hope-city",
      position: { x: 127.150, y: 127.250, z: 7 }
    },
    dependencies: []
  })
  quests.add({
    // @todo this one probably should not have dependency?
    identificator: "the-explorer-society-quest-part1-buypickaxeindp",
    description: "Get the Ice Pick from the Auchtion house",
    area: {
      closestLocation: "port-hope-city",
      position: { x: 127.150, y: 127.250, z: 7 }
    },
    dependencies: ["the-explorer-society-quest-part1"]
  })
  quests.add({
    identificator: "the-explorer-society-quest-part1-returntheaxe",
    description: "Turn in the axe. [HI, PICKAXE, YES]",
    area: {
      closestLocation: "port-hope-city",
      position: { x: 127.150, y: 127.250, z: 7 }
    },
    dependencies: ["the-explorer-society-quest-part1-buypickaxeindp"]
  })
  quests.add({
    identificator: "the-explorer-society-quest-part2-accepticedelivery",
    description: "Accept new missions. [HI, ICE DELIVERY, YES]",
    area: {
      closestLocation: "port-hope-city",
      position: { x: 127.150, y: 127.250, z: 7 }
    },
    dependencies: ["the-explorer-society-quest-part1-returntheaxe"]
  })
  quests.add({
    identificator: "the-explorer-society-quest-part2-acceptbutterflyhunt",
    description: "Accept new missions. [HI, BUTTERFLY HUNT, YES, BUTTERFLY HUNT]",
    area: {
      closestLocation: "port-hope-city",
      position: { x: 127.150, y: 127.250, z: 7 }
    },
    dependencies: ["the-explorer-society-quest-part1-returntheaxe"]
  })
  quests.add({
    identificator: "the-explorer-society-quest-part2-acceptplantcollection",
    description: "Accept new missions. [HI, PLANT COLLECTION, YES, PLANT COLLECTION]",
    area: {
      closestLocation: "port-hope-city",
      position: { x: 127.150, y: 127.250, z: 7 }
    },
    dependencies: ["the-explorer-society-quest-part1-returntheaxe"]
  })
};