import { TibiaData } from '../src/tibia-data';
export function populateWorldMap(data: TibiaData) { //SideEffect
  const map = data.map;
  map.addLocation("thais-city", { x: 231, y: 121, z: 11 })
  map.addLocation("edron-city", { x: 500, y: 500, z: 11 })

  map.addRoute("thais-city", "edron-city", { time: 10 })
}