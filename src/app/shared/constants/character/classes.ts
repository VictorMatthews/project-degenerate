import {Attribute, Attributes} from "./attributes";
import {Skill, Skills} from "./skills";

export class ClassInfo {
  constructor(readonly className: string, readonly hitDie?: number, readonly armor?: string, readonly weapons?: string,
              readonly tools?: string, readonly profSkillsToChoose?: number, readonly skillChoices?: Skill[]) {
    this.className = className;
    this.hitDie = hitDie;
    this.armor = armor;
    this.weapons = weapons;
    this.tools = tools;
    this.profSkillsToChoose = profSkillsToChoose;
    this.skillChoices = skillChoices;
  }

  hasSkillChoice(skill: Skill) {
    let hasSkill = false;
    for (let s of this.skillChoices) {
      if (s.getId() === skill.getId()) {
        hasSkill = true;
        break;
      }
    }
    return hasSkill;
  }

  public getSkills(): string {
    let skills = "";
    if (this.skillChoices !== undefined && this.profSkillsToChoose !== undefined) {
      for (let i = 0; i < this.skillChoices.length; i++) {
        let comma = ", ";
        if (i + 1 == this.skillChoices.length) {
          comma = "";
        }
        skills = skills + this.skillChoices[i] + comma;
      }
      return "Choose " + this.profSkillsToChoose + " from " + skills;
    }
    return skills;
  }
}

export class ClassInfos {
  readonly skills = new Skills();
  readonly BARBARIAN = new ClassInfo('Barbarian', 12, 'Light Armor, Medium Armor, shields', 'Simple Weapons, Martial Weapons', 'None', 2, [this.skills.ANIMAL_HANDLING, this.skills.ATHLETICS, this.skills.INTIMIDATION, this.skills.NATURE, this.skills.PERCEPTION, this.skills.SURVIVAL]);
  readonly BARD = new ClassInfo('Bard', 8, 'Light Armor', 'Simple weapons, hand crossbows, longswords, rapiers, shortswords', 'three musical instruments of your choice', 3, this.skills.getSkills(),);
  readonly CLERIC = new ClassInfo("Cleric", 8, 'Light Armor, Medium Armor, shields', 'Simple Weapons', 'None', 2,[this.skills.HISTORY, this.skills.INSIGHT, this.skills.MEDICINE,this.skills.PERSUASION, this.skills.RELIGION],);
  readonly DRUID = new ClassInfo('Druid', 8, 'Light Armor, Medium Armor, shields (druids will not wear armor or use shields made of metal)', 'clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears', 'Herbalism kit', 2,[this.skills.ARCANA, this.skills.INSIGHT, this.skills.ANIMAL_HANDLING,this.skills.MEDICINE, this.skills.NATURE, this.skills.PERCEPTION,this.skills.RELIGION, this.skills.SURVIVAL],);
  readonly FIGHTER = new ClassInfo('Fighter', 10, 'Light Armor, Medium Armor, Heavy Armor, shields', 'Simple Weapons, Martial Weapons', 'None', 2,[this.skills.ACROBATICS, this.skills.ANIMAL_HANDLING, this.skills.ATHLETICS,this.skills.HISTORY, this.skills.INSIGHT, this.skills.INTIMIDATION,this.skills.PERCEPTION, this.skills.SURVIVAL]);
  readonly MONK = new ClassInfo('Monk', 8, 'None', 'Simple Weapons, shortswords', 'any one type of artisan\'s tools or any one musical instrument of your choice', 2,[this.skills.ACROBATICS, this.skills.ATHLETICS, this.skills.HISTORY,this.skills.INSIGHT, this.skills.RELIGION, this.skills.STEALTH]);
  readonly PALADIN = new ClassInfo('Paladin', 10, 'Light Armor, Medium Armor, Heavy Armor, shields', 'Simple Weapons, martial Weapons', 'None', 2,[this.skills.ATHLETICS, this.skills.INSIGHT, this.skills.INTIMIDATION,this.skills.MEDICINE, this.skills.PERSUASION, this.skills.RELIGION]);
  readonly RANGER = new ClassInfo('Ranger', 10, 'Light Armor, Medium Armor, shields', 'Simple Weapons, martial Weapons', 'None', 3,[this.skills.ANIMAL_HANDLING, this.skills.ATHLETICS, this.skills.INSIGHT,this.skills.INVESTIGATION, this.skills.NATURE, this.skills.PERCEPTION,this.skills.STEALTH, this.skills.SURVIVAL]);
  readonly ROGUE = new ClassInfo('Rogue', 8, 'Light Armor', 'Simple Weapons, hand crossbows, longswords, rapiers, shortswords', 'Thieves\' Tools', 4,[this.skills.ACROBATICS, this.skills.ATHLETICS, this.skills.DECEPTION,this.skills.INSIGHT, this.skills.INTIMIDATION, this.skills.INVESTIGATION,this.skills.PERCEPTION, this.skills.PERFORMANCE, this.skills.PERSUASION,this.skills.SLEIGHT_OF_HAND, this.skills.STEALTH]);
  readonly SORCERER = new ClassInfo('Sorcerer', 6, 'None', 'daggers, darts, slings, quarterstaffs, light crossbows', 'None', 2,[this.skills.ARCANA, this.skills.DECEPTION, this.skills.INSIGHT,this.skills.INTIMIDATION, this.skills.PERSUASION, this.skills.RELIGION]);
  readonly WARLOCK = new ClassInfo('Warlock', 8, 'Light Armor', 'Simple Weapons', 'None', 2,[this.skills.ARCANA, this.skills.DECEPTION, this.skills.HISTORY,this.skills.INTIMIDATION, this.skills.INVESTIGATION, this.skills.NATURE,this.skills.RELIGION]);
  readonly WIZARD = new ClassInfo('Wizard', 6, 'None', 'daggers, darts, slings, quarterstaffs, light crossbows', 'None', 2,[this.skills.ARCANA, this.skills.HISTORY, this.skills.INSIGHT,this.skills.INVESTIGATION, this.skills.MEDICINE, this.skills.RELIGION]);
}

export class Class {
  constructor(readonly classId: number, readonly className: string, readonly hitDie: number, readonly classInfo: ClassInfo, readonly savingThrows: Attribute[]) {
    this.classId = classId;
    this.className = className;
    this.hitDie = hitDie;
    this.classInfo = classInfo;
    this.savingThrows = savingThrows;
  }

  getClassId() {
    return this.classId;
  }
}

export class Classes {
  readonly attributes = new Attributes();
  readonly classInfos = new ClassInfos();
  readonly BARBARIAN = new Class(1, 'Barbarian', 12, this.classInfos.BARBARIAN, [this.attributes.STRENGTH, this.attributes.CONSTITUTION]);
  readonly BARD = new Class(2, 'Bard', 12, this.classInfos.BARD,[this.attributes.DEXTERITY, this.attributes.CHARISMA]);
  readonly CLERIC = new Class(3, 'Cleric', 12, this.classInfos.CLERIC,[this.attributes.WISDOM, this.attributes.CHARISMA]);
  readonly DRUID = new Class(4, 'Druid', 12, this.classInfos.DRUID,[this.attributes.INTELLIGENCE, this.attributes.WISDOM]);
  readonly FIGHTER = new Class(5, 'Fighter',12, this.classInfos.FIGHTER,[this.attributes.STRENGTH, this.attributes.CONSTITUTION]);
  readonly MONK = new Class(6, 'Monk', 12, this.classInfos.MONK,[this.attributes.STRENGTH, this.attributes.DEXTERITY]);
  readonly PALADIN = new Class(7, 'Paladin', 12, this.classInfos.PALADIN,[this.attributes.WISDOM, this.attributes.CHARISMA]);
  readonly RANGER = new Class(8, 'Ranger', 12, this.classInfos.RANGER,[this.attributes.STRENGTH, this.attributes.DEXTERITY]);
  readonly ROGUE = new Class(9, 'Rogue', 12, this.classInfos.ROGUE,[this.attributes.DEXTERITY, this.attributes.INTELLIGENCE]);
  readonly SORCERER = new Class(10, 'Sorcerer', 12, this.classInfos.SORCERER,[this.attributes.CONSTITUTION, this.attributes.CHARISMA]);
  readonly WARLOCK = new Class(11, 'Warlock', 12, this.classInfos.WARLOCK,[this.attributes.WISDOM, this.attributes.CHARISMA]);
  readonly WIZARD = new Class(12, 'Wizard', 12, this.classInfos.WIZARD,[this.attributes.INTELLIGENCE, this.attributes.WISDOM]);

  readonly classMap = new Map([
    [ this.BARBARIAN.getClassId(), this.BARBARIAN ],
    [ this.BARD.getClassId(), this.BARD ],
    [ this.CLERIC.getClassId(), this.CLERIC ],
    [ this.DRUID.getClassId(), this.DRUID ],
    [ this.FIGHTER.getClassId(), this.FIGHTER ],
    [ this.MONK.getClassId(), this.MONK ],
    [ this.PALADIN.getClassId(), this.PALADIN ],
    [ this.RANGER.getClassId(), this.RANGER ],
    [ this.ROGUE.getClassId(), this.ROGUE ],
    [ this.SORCERER.getClassId(), this.SORCERER ],
    [ this.WARLOCK.getClassId(), this.WARLOCK ],
    [ this.WIZARD.getClassId(), this.WIZARD ],
  ]);

  public getClasses(): Class[] {
    return [this.BARBARIAN, this.BARD, this.CLERIC, this.DRUID, this.FIGHTER, this.MONK,
      this.PALADIN, this.RANGER, this.ROGUE, this.SORCERER, this.WARLOCK, this.WIZARD];
  }

  getClassById(classId: number) {
    return this.classMap.get(classId);
  }
}
