import { TibiaData } from '../src/tibia-data';
export function populateWorldMap(data: TibiaData) { //SideEffect
  const map = data.getMap();
  map.addInfo("thais-city", { location: { x: 231, y: 121, z: 11 } })
  map.addInfo("edron-city", { location: { x: 500, y: 500, z: 11 } })

  map.addRoute("thais-city", "edron-city", { time: 10 })
}