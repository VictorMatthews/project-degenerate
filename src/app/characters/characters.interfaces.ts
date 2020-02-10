// export class Character {
//   isCharacterComplete: boolean;
//   characterName: string;
//   background: string;
//   race: string;
//   subRace: string;
//   className: string;
//   alignment: string;
//   classLevel: string;
//   experience: string;
//
//   strength: number;
//   dexterity: number;
//   constitution: number;
//   intelligence: number;
//   wisdom: number;
//   charisma: number;
//
//   personalityTrait: string;
//   ideals: string;
//   bonds: string;
//   flaws: string;
//
//   profSkills: Skill[];
//   increaseAttributes: CharacterAttribute[];
//   constructor() {}
// }

export class Character {
  characterName: string;
  raceId: number;
  subRaceId: number = 0;
  classId: number;
  alignmentId: number;
  backgroundId: number;

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;

  profSkillIds: number[] = [];

  constructor() {}

  // setCharacterName(name: string) {
  //   this.characterName = name;
  // }
  //
  // setRaceId(raceId: number) {
  //   this.raceId = raceId;
  // }
  //
  // setSubRaceId(subRaceId: number) {
  //   this.subRaceId = subRaceId;
  // }
  //
  // setClassId(classId: number) {
  //   this.classId = classId;
  // }
  //
  // setAlignmentId(alignmentId: number) {
  //   this.alignmentId = alignmentId;
  // }
  //
  // setBackgroundId(backgroundId: number) {
  //   this.backgroundId = backgroundId;
  // }
  //
  // setPersonalityTrait(personalityTraits: string) {
  //   this.personalityTraits = personalityTraits;
  // }
  //
  // setIdeals(ideals: string) {
  //   this.ideals = ideals;
  // }
  //
  // setBonds(bonds: string) {
  //   this.bonds = bonds;
  // }
  //
  // setFlaws(flaws: string) {
  //   this.flaws = flaws;
  // }
  //
  // setStrength(strength: number) {
  //   this.strength = strength;
  // }
  //
  // setDexterity(dexterity: number) {
  //   this.dexterity = dexterity;
  // }
  //
  // setConstitution(constitution: number) {
  //   this.constitution = constitution;
  // }
  //
  // setIntelligence(intelligence: number) {
  //   this.intelligence = intelligence;
  // }
  //
  // setWisdom(wisdom: number) {
  //   this.wisdom = wisdom;
  // }
  //
  // setCharisma(charisma: number) {
  //   this.charisma = charisma;
  // }
  //
  // setProfSkillIds(profSkillIds: number[]) {
  //   this.profSkillIds = profSkillIds;
  // }
  //
  // getCharacterName() {
  //   return this.characterName;
  // }
  //
  // getRaceId() {
  //   return this.raceId;
  // }
  //
  // getSubRaceId() {
  //   return this.subRaceId;
  // }
  //
  // getClassId() {
  //   return this.classId;
  // }
  //
  // getAlignmentId() {
  //   return this.alignmentId;
  // }
  //
  // getBackgroundId() {
  //   return this.backgroundId;
  // }
  //
  // getPersonalityTrait() {
  //   return this.personalityTraits;
  // }
  //
  // getIdeals() {
  //   return this.ideals;
  // }
  //
  // getBonds() {
  //   return this.bonds;
  // }
  //
  // getFlaws() {
  //   return this.flaws;
  // }
  //
  // getStrength() {
  //   return this.strength;
  // }
  //
  // getDexterity() {
  //   return this.dexterity;
  // }
  //
  // getConstitution() {
  //   return this.constitution;
  // }
  //
  // getIntelligence() {
  //   return this.intelligence;
  // }
  //
  // getWisdom() {
  //   return this.wisdom;
  // }
  //
  // getCharisma() {
  //   return this.charisma;
  // }
  //
  // getProfSkillIds() {
  //   return this.profSkillIds;
  // }
}

// export class CharacterConstants {
//   public static alignments = new Alignments();
//   public static attributes = new Attributes();
//   public static raceInfos = new RaceInfos();
//   public static races = new Races();
//   public static subRaces = new SubRaces();
//   public static skills = new Skills();
//   public static classInfos = new ClassInfos();
//   public static backgrounds = new Backgrounds();
//   public static bonds = new Bonds();
//   public static flaws = new Flaws();
//   public static ideals = new Ideals();
//   public static personalityTraits = new PersonalityTraits();
//   public static classes = new Classes();
// }
