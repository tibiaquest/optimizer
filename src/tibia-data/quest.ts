import { NodeName } from 'graph';
import { Area } from './map';
import { without, intersection } from 'lodash'
// The idea of this class is that: rather than building logic for how quests are nested into each other, it is a better approach to have quests as independant parts. 
// Some things that can be achieved with this structure:
// - Items can be bought in bulk, before a quest is even started. 
// - A list of idenficators can work as a structure to keep track of what quests have been done.constructor
// - No need to write logic for how to progress through quests, just add what dependencies need to be fulfilled

export class Quests {
  public parts /*hehehe private parts*/: Map<QuestName, QuestPart>;
  constructor() {
    this.parts = new Map();
  }
  add(questPart: QuestPart) {
    this.parts.set(questPart.identificator, questPart);
  }
  availableQuestsFor(completedParts: Array<QuestName>): Array<QuestPart> {
    //this is a huge bottleneck, but if execution is still under 10 seconds, then it's fine. 
    //"premature optimization is the root of all evil" http://wiki.c2.com/?PrematureOptimization
    //index'es would fix this, either SQL, SQLITE or just pure js indexes.
    const allParts = Array.from(this.parts.keys());
    const withoutCompletedParts = without.apply(null, [allParts, ...completedParts])

    return withoutCompletedParts.filter(/*function removeOnesDependenciesAreMissing*/(questName) => {
      const dependencies = this.parts.get(questName).dependencies;
      return intersection(completedParts, dependencies).length === dependencies.length //There is probably some other method that can look if completed parts contains all the dependencies, but I couldn't find it in lodash
    }).map((questName) => {
      const questPart = this.parts.get(questName);
      return questPart;
    });
  }
}
type QuestName = String;

export class QuestPart {
  public identificator: QuestName;
  public area: Area
  public dependencies: Array<QuestName>;
  public description: String;
}
