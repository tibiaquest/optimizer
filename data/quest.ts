import { TibiaData } from '../src/tibia-data';
export function populateQuest(data: TibiaData) { //SideEffect
  const quest = data.getQuest();
  quest.addInfo("thais-city", { location: { x: 231, y: 121, z: 11 } })
  quest.addRoute("thais-city", "edron-city", { time: 10 })
}