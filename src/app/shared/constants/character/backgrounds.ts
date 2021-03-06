import {Skill, Skills} from "./skills";

export class Background {
  constructor(readonly backgroundId: number, readonly backgroundName: string, readonly profSkills: Skill[]) {
    this.backgroundId = backgroundId;
    this.backgroundName = backgroundName;
    this.profSkills = profSkills;
  }

  public getBackgroundId(): number {
    return this.backgroundId;
  }

  public getBackgroundName(): string {
    return this.backgroundName;
  }

  public getProfSkills(): Skill[] {
    return this.profSkills;
  }

  public toString(): string {
    return this.backgroundName;
  }
}

export class Backgrounds {
  readonly skills = new Skills();
  readonly ACOLYTE = new Background( 1, 'Acolyte', [this.skills.INSIGHT,this.skills.RELIGION]);
  readonly CHARLATAN = new Background( 2, 'Charlatan', [this.skills.DECEPTION,this.skills.SLEIGHT_OF_HAND]);
  readonly CRIMINAL = new Background( 3, 'Criminal', [this.skills.DECEPTION,this.skills.STEALTH]);
  readonly ENTERTAINER = new Background( 4, 'Entertainer', [this.skills.ACROBATICS,this.skills.PERFORMANCE]);
  readonly FOLK_HERO = new Background( 5, 'Folk Hero', [this.skills.ANIMAL_HANDLING,this.skills.SURVIVAL]);
  readonly GUILD_ARTISAN = new Background( 6, 'Guild Artisan', [this.skills.INSIGHT,this.skills.PERSUASION]);
  readonly HERMIT = new Background( 7, 'Hermit', [this.skills.MEDICINE,this.skills.RELIGION]);
  readonly NOBLE = new Background( 8, 'Noble', [this.skills.HISTORY,this.skills.PERSUASION]);
  readonly OUTLANDER = new Background( 9, 'Outlander', [this.skills.ATHLETICS,this.skills.SURVIVAL]);
  readonly SAGE = new Background(10, 'Sage', [this.skills.ARCANA,this.skills.HISTORY]);
  readonly SAILOR = new Background(11, 'Sailor', [this.skills.ATHLETICS,this.skills.PERCEPTION]);
  readonly SOLDIER = new Background(12, 'Soldier', [this.skills.ATHLETICS,this.skills.INTIMIDATION]);
  readonly URCHIN = new Background(13, 'Urchin', [this.skills.SLEIGHT_OF_HAND,this.skills.STEALTH]);

  readonly backgroundMap = new Map([
    [ this.ACOLYTE.getBackgroundId(), this.ACOLYTE ],
    [ this.CHARLATAN.getBackgroundId(), this.CHARLATAN ],
    [ this.CRIMINAL.getBackgroundId(), this.CRIMINAL ],
    [ this.ENTERTAINER.getBackgroundId(), this.ENTERTAINER ],
    [ this.FOLK_HERO.getBackgroundId(), this.FOLK_HERO ],
    [ this.GUILD_ARTISAN.getBackgroundId(), this.GUILD_ARTISAN ],
    [ this.HERMIT.getBackgroundId(), this.HERMIT ],
    [ this.NOBLE.getBackgroundId(), this.NOBLE ],
    [ this.OUTLANDER.getBackgroundId(), this.OUTLANDER ],
    [ this.SAGE.getBackgroundId(), this.SAGE ],
    [ this.SAILOR.getBackgroundId(), this.SAILOR ],
    [ this.SOLDIER.getBackgroundId(), this.SOLDIER ],
    [ this.URCHIN.getBackgroundId(), this.URCHIN ],
  ]);

  public getBackgrounds(): Background[] {
    return [this.ACOLYTE, this.CHARLATAN, this.CRIMINAL, this.ENTERTAINER, this.FOLK_HERO, this.GUILD_ARTISAN,
      this.HERMIT, this.NOBLE, this.OUTLANDER, this.SAGE, this.SAILOR, this.SOLDIER, this.URCHIN];
  }

  getBackgroundById(backgroundId: number) {
    return this.backgroundMap.get(backgroundId);
  }
}

export class Bond {
  constructor(readonly backgroundId: number, readonly bond: string) {
    this.backgroundId = backgroundId;
    this.bond = bond;
  }
}

export class Bonds {
  readonly backgrounds = new Backgrounds();
  readonly ACOLYTE_1			= new Bond(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I would die to recover an ancient relic of my faith that was lost long ago.');
  readonly ACOLYTE_2			= new Bond(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.');
  readonly ACOLYTE_3			= new Bond(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I owe my life to the priest who took me in when my parents died.');
  readonly ACOLYTE_4			= new Bond(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Everything I do is for the common people.');
  readonly ACOLYTE_5			= new Bond(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I will do anything to protect the temple where I served.');
  readonly ACOLYTE_6			= new Bond(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.');

  readonly CHARLATAN_1			= new Bond(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.');
  readonly CHARLATAN_2			= new Bond(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I owe everything to my mentor— a horrible person who’s probably rotting in jail somewhere.');
  readonly CHARLATAN_3			= new Bond(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Somewhere out there, I have a child who doesn\'t know me. I’m making the world better for him or her.');
  readonly CHARLATAN_4			= new Bond(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I come from a noble family, and one day I’ll reclaim my lands and title from those who stole them from me.');
  readonly CHARLATAN_5			= new Bond(this.backgrounds.CHARLATAN.getBackgroundId(), 	'A powerful person killed someone I love. Some day soon, I’ll have my revenge.');
  readonly CHARLATAN_6			= new Bond(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I swindled and ruined a person who didn’t deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.');

  readonly CRIMINAL_1 		= new Bond(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I\'m trying to pay off an old debt I owe to a generous benefactor.');
  readonly CRIMINAL_2			= new Bond(this.backgrounds.CRIMINAL.getBackgroundId(), 	'My ill-gotten gains go to support my family.');
  readonly CRIMINAL_3			= new Bond(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Something important was taken from me, and I aim to steal it back.');
  readonly CRIMINAL_4			= new Bond(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I will become the greatest thief that ever lived.');
  readonly CRIMINAL_5			= new Bond(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I\'m guilty of a terrible crime. I hope I can redeem myself for it.');
  readonly CRIMINAL_6			= new Bond(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Someone I loved died because of a mistake I made. That will never happen again.');

  readonly ENTERTAINER_1		= new Bond(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'My instrument is my most treasured possession, and it reminds me of someone I love.');
  readonly ENTERTAINER_2		= new Bond(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Someone stole my precious instrument, and someday I\'ll get it back.');
  readonly ENTERTAINER_3		= new Bond(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I want to be famous, whatever it takes.');
  readonly ENTERTAINER_4		= new Bond(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I idolize a hero of the old tales and measure my deeds against that person\'s.');
  readonly ENTERTAINER_5		= new Bond(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I will do anything to prove myself superior to me hated rival.');
  readonly ENTERTAINER_6		= new Bond(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I would do anything for the other members of my old troupe.');

  readonly FOLK_HERO_1			= new Bond(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I have a family, but I have no idea where they are. One day, I hope to see them again.');
  readonly FOLK_HERO_2			= new Bond(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I worked the land, I love the land, and I will protect the land.');
  readonly FOLK_HERO_3			= new Bond(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.');
  readonly FOLK_HERO_4			= new Bond(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'My tools are symbols of my past life, and I carry them so that I will never forget my roots.');
  readonly FOLK_HERO_5			= new Bond(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I protect those who cannot protect themselves.');
  readonly FOLK_HERO_6			= new Bond(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I wish my childhood sweetheart had come with me to pursue my destiny.');

  readonly GUILD_ARTISAN_1		= new Bond(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'The workshop where I learned my trade is the most important place in the world to me.');
  readonly GUILD_ARTISAN_2		= new Bond(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I created a great work for someone, and then found them unworthy to receive it. I\'m still looking for someone worthy.');
  readonly GUILD_ARTISAN_3		= new Bond(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I owe my guild a great debt for forging me into the person I am today.');
  readonly GUILD_ARTISAN_4		= new Bond(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I pursue wealth to secure someone\'s love.');
  readonly GUILD_ARTISAN_5		= new Bond(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'One day I will return to my guild and prove that I am the greatest artisan of them all.');
  readonly GUILD_ARTISAN_6		= new Bond(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.');

  readonly HERMIT_1			= new Bond(this.backgrounds.HERMIT.getBackgroundId(), 	'Nothing is more important than the other members of my hermitage, order, or association.');
  readonly HERMIT_2			= new Bond(this.backgrounds.HERMIT.getBackgroundId(), 	'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.');
  readonly HERMIT_3			= new Bond(this.backgrounds.HERMIT.getBackgroundId(), 	'I\'m still seeking the enlightenment I pursued in my seclusion, and it still eludes me.');
  readonly HERMIT_4			= new Bond(this.backgrounds.HERMIT.getBackgroundId(), 	'I entered seclusion because I loved someone I could not have.');
  readonly HERMIT_5			= new Bond(this.backgrounds.HERMIT.getBackgroundId(), 	'Should my discovery come to light, it could bring ruin to the world.');
  readonly HERMIT_6			= new Bond(this.backgrounds.HERMIT.getBackgroundId(), 	'My isolation gave me great insight into a great evil that only I can destroy.');

  readonly NOBLE_1				= new Bond(this.backgrounds.NOBLE.getBackgroundId(), 	'I will face any challenge to win the approval of my family.');
  readonly NOBLE_2				= new Bond(this.backgrounds.NOBLE.getBackgroundId(), 	'My house\'s alliance with another noble family must be sustained at all costs.');
  readonly NOBLE_3				= new Bond(this.backgrounds.NOBLE.getBackgroundId(), 	'Nothing is more important that the other members of my family.');
  readonly NOBLE_4				= new Bond(this.backgrounds.NOBLE.getBackgroundId(), 	'I am in love with the heir of a family that my family despises.');
  readonly NOBLE_5				= new Bond(this.backgrounds.NOBLE.getBackgroundId(), 	'My loyalty to my sovereign is unwavering.');
  readonly NOBLE_6				= new Bond(this.backgrounds.NOBLE.getBackgroundId(), 	'The common folk must see me as a hero of the people.');

  readonly OUTLANDER_1			= new Bond(this.backgrounds.OUTLANDER.getBackgroundId(), 	'My family, clan, or tribe is the most important thing in my life, even when they are far from me.');
  readonly OUTLANDER_2			= new Bond(this.backgrounds.OUTLANDER.getBackgroundId(), 	'An injury to the unspoiled wilderness of my home is an injury to me.');
  readonly OUTLANDER_3			= new Bond(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I will bring terrible wrath down on the evildoers who destroyed my homeland.');
  readonly OUTLANDER_4			= new Bond(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I am the last of my tribe, and it is up to me to ensure their names enter legend.');
  readonly OUTLANDER_5			= new Bond(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I suffer awful visions of a coming disaster and will do anything to prevent it.');
  readonly OUTLANDER_6			= new Bond(this.backgrounds.OUTLANDER.getBackgroundId(), 	'It is my duty to provide children to sustain my tribe.');

  readonly SAGE_1				= new Bond(this.backgrounds.SAGE.getBackgroundId(), 	'It is my duty to protect my students.');
  readonly SAGE_2				= new Bond(this.backgrounds.SAGE.getBackgroundId(), 	'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.');
  readonly SAGE_3				= new Bond(this.backgrounds.SAGE.getBackgroundId(), 	'I work to preserve a library, university, scriptorium, or monastery.');
  readonly SAGE_4				= new Bond(this.backgrounds.SAGE.getBackgroundId(), 	'My life\'s work is a series of tomes related to a specific field of lore.');
  readonly SAGE_5				= new Bond(this.backgrounds.SAGE.getBackgroundId(), 	'I\'ve been searching my whole life for the answer to a certain question.');
  readonly SAGE_6				= new Bond(this.backgrounds.SAGE.getBackgroundId(), 	'I sold my soul for knowledge. I hope to do great deeds and win it back.');

  readonly SAILOR_1			= new Bond(this.backgrounds.SAILOR.getBackgroundId(), 	'I\'m loyal to my captain first, everything else second.');
  readonly SAILOR_2			= new Bond(this.backgrounds.SAILOR.getBackgroundId(), 	'The ship is most important--crew mates and captains come and go.');
  readonly SAILOR_3			= new Bond(this.backgrounds.SAILOR.getBackgroundId(), 	'I\'ll always remember my first ship.');
  readonly SAILOR_4			= new Bond(this.backgrounds.SAILOR.getBackgroundId(), 	'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.');
  readonly SAILOR_5			= new Bond(this.backgrounds.SAILOR.getBackgroundId(), 	'I was cheated of my fair share of the profits, and I want to get my due.');
  readonly SAILOR_6			= new Bond(this.backgrounds.SAILOR.getBackgroundId(), 	'Ruthless pirates murdered my captain and crew mates, plundered our ship, and left me to die. Vengeance will be mine.');

  readonly SOLDIER_1			= new Bond(this.backgrounds.SOLDIER.getBackgroundId(), 	'I would lay down my life for the people I served with.');
  readonly SOLDIER_2			= new Bond(this.backgrounds.SOLDIER.getBackgroundId(), 	'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.');
  readonly SOLDIER_3			= new Bond(this.backgrounds.SOLDIER.getBackgroundId(), 	'My honor is my life.');
  readonly SOLDIER_4			= new Bond(this.backgrounds.SOLDIER.getBackgroundId(), 	'I\'ll never forget the crushing defeat my company suffered or the enemies who dealt it.');
  readonly SOLDIER_5			= new Bond(this.backgrounds.SOLDIER.getBackgroundId(), 	'Those who fight beside me are those worth dying for.');
  readonly SOLDIER_6			= new Bond(this.backgrounds.SOLDIER.getBackgroundId(), 	'I fight for those who cannot fight for themselves.');

  readonly URCHIN_1			= new Bond(this.backgrounds.URCHIN.getBackgroundId(), 	'My town or city is my home, and I\'ll fight to defend it.');
  readonly URCHIN_2			= new Bond(this.backgrounds.URCHIN.getBackgroundId(), 	'I sponsor an orphanage to keep others from enduring what I was forced to endure.');
  readonly URCHIN_3			= new Bond(this.backgrounds.URCHIN.getBackgroundId(), 	'I owe my survival to another urchin who taught me to live on the streets.');
  readonly URCHIN_4			= new Bond(this.backgrounds.URCHIN.getBackgroundId(), 	'I owe a debt I can never repay to the person who took pity on me.');
  readonly URCHIN_5			= new Bond(this.backgrounds.URCHIN.getBackgroundId(), 	'I escaped my life of poverty by robbing an important person, and I\'m wanted for it.');
  readonly URCHIN_6			= new Bond(this.backgrounds.URCHIN.getBackgroundId(), 	'No one else is going to have to endure the hardships I\'ve been through.');

  public getBonds(background: Background): Bond[] {
    if (background.getBackgroundId() === this.backgrounds.ACOLYTE.getBackgroundId()) {
      return [this.ACOLYTE_1, this.ACOLYTE_2, this.ACOLYTE_3, this.ACOLYTE_4, this.ACOLYTE_5, this.ACOLYTE_6];
    } else if (background.getBackgroundId() === this.backgrounds.CHARLATAN.getBackgroundId()) {
      return [this.CHARLATAN_1, this.CHARLATAN_2, this.CHARLATAN_3, this.CHARLATAN_4, this.CHARLATAN_5, this.CHARLATAN_6];
    } else if (background.getBackgroundId() === this.backgrounds.CRIMINAL.getBackgroundId()) {
      return [this.CRIMINAL_1, this.CRIMINAL_2, this.CRIMINAL_3, this.CRIMINAL_4, this.CRIMINAL_5, this.CRIMINAL_6];
    } else if (background.getBackgroundId() === this.backgrounds.ENTERTAINER.getBackgroundId()) {
      return [this.ENTERTAINER_1, this.ENTERTAINER_2, this.ENTERTAINER_3, this.ENTERTAINER_4, this.ENTERTAINER_5, this.ENTERTAINER_6];
    } else if (background.getBackgroundId() === this.backgrounds.FOLK_HERO.getBackgroundId()) {
      return [this.FOLK_HERO_1, this.FOLK_HERO_2, this.FOLK_HERO_3, this.FOLK_HERO_4, this.FOLK_HERO_5, this.FOLK_HERO_6];
    } else if (background.getBackgroundId() === this.backgrounds.GUILD_ARTISAN.getBackgroundId()) {
      return [this.GUILD_ARTISAN_1, this.GUILD_ARTISAN_2, this.GUILD_ARTISAN_3, this.GUILD_ARTISAN_4, this.GUILD_ARTISAN_5, this.GUILD_ARTISAN_6];
    } else if (background.getBackgroundId() === this.backgrounds.HERMIT.getBackgroundId()) {
      return [this.HERMIT_1, this.HERMIT_2, this.HERMIT_3, this.HERMIT_4, this.HERMIT_5, this.HERMIT_6];
    } else if (background.getBackgroundId() === this.backgrounds.NOBLE.getBackgroundId()) {
      return [this.NOBLE_1, this.NOBLE_2, this.NOBLE_3, this.NOBLE_4, this.NOBLE_5, this.NOBLE_6];
    } else if (background.getBackgroundId() === this.backgrounds.OUTLANDER.getBackgroundId()) {
      return [this.OUTLANDER_1, this.OUTLANDER_2, this.OUTLANDER_3, this.OUTLANDER_4, this.OUTLANDER_5, this.OUTLANDER_6];
    } else if (background.getBackgroundId() === this.backgrounds.SAGE.getBackgroundId()) {
      return [this.SAGE_1, this.SAGE_2, this.SAGE_3, this.SAGE_4, this.SAGE_5, this.SAGE_6];
    } else if (background.getBackgroundId() === this.backgrounds.SAILOR.getBackgroundId()) {
      return [this.SAILOR_1, this.SAILOR_2, this.SAILOR_3, this.SAILOR_4, this.SAILOR_5, this.SAILOR_6];
    } else if (background.getBackgroundId() === this.backgrounds.SOLDIER.getBackgroundId()) {
      return [this.SOLDIER_1, this.SOLDIER_2, this.SOLDIER_3, this.SOLDIER_4, this.SOLDIER_5, this.SOLDIER_6];
    } else if (background.getBackgroundId() === this.backgrounds.URCHIN.getBackgroundId()) {
      return [this.URCHIN_1, this.URCHIN_2, this.URCHIN_3, this.URCHIN_4, this.URCHIN_5, this.URCHIN_6];
    }
  }
}

export class Flaw {
  constructor(readonly backgroundId: number, readonly flaw: string) {
    this.backgroundId = backgroundId;
    this.flaw = flaw;
  }
}

export class Flaws {
  readonly backgrounds = new Backgrounds();
  ACOLYTE_1			= new Flaw(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I judge others harshly, and my self even more severely.');
  ACOLYTE_2			= new Flaw(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I put too much trust in those who wield power within my temple’s hierarchy.');
  ACOLYTE_3			= new Flaw(this.backgrounds.ACOLYTE.getBackgroundId(), 	'My piety sometimes leads me to blindly trust those that profess faith in my god.');
  ACOLYTE_4			= new Flaw(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I am inflexible in my thinking.');
  ACOLYTE_5			= new Flaw(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I am suspicious of strangers and expect the worst of them.');
  ACOLYTE_6			= new Flaw(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.');

  CHARLATAN_1			= new Flaw(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I can’t resist a pretty face.');
  CHARLATAN_2			= new Flaw(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I\'m always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in..');
  CHARLATAN_3			= new Flaw(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I’m convinced that no one could ever fool me the way I fool others.');
  CHARLATAN_4			= new Flaw(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I’m too greedy for my own good. I can’t resist taking a risk if there’s money involved.');
  CHARLATAN_5			= new Flaw(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I can’t resist swindling people who are more powerful than me.');
  CHARLATAN_6			= new Flaw(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I hate to admit it and will hate myself for it, but I\'ll run and preserve my own hide if the going gets tough');

  CRIMINAL_1 			= new Flaw(this.backgrounds.CRIMINAL.getBackgroundId(), 	'When I see something valuable, I can\'t think about anything but how to steal it.');
  CRIMINAL_2			= new Flaw(this.backgrounds.CRIMINAL.getBackgroundId(), 	'When faced with a choice between money and my friends, I usually choose the money.');
  CRIMINAL_3			= new Flaw(this.backgrounds.CRIMINAL.getBackgroundId(), 	'If there\'s a plan, I\'ll forget it. If I don\'t forget it, I\'ll ignore it.');
  CRIMINAL_4			= new Flaw(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I have a \'tell\' that reveals when I\'m lying.');
  CRIMINAL_5			= new Flaw(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I turn tail and run when things go bad.');
  CRIMINAL_6			= new Flaw(this.backgrounds.CRIMINAL.getBackgroundId(), 	'An innocent person is in prison for a crime that I committed. I\'m okay with that.');

  ENTERTAINER_1		= new Flaw(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I\'ll do anything to win fame and renown.');
  ENTERTAINER_2		= new Flaw(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I\'m a sucker for a pretty face.');
  ENTERTAINER_3		= new Flaw(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.');
  ENTERTAINER_4		= new Flaw(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.');
  ENTERTAINER_5		= new Flaw(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.');
  ENTERTAINER_6		= new Flaw(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Despite my best efforts, I am unreliable to my friends.');

  FOLK_HERO_1			= new Flaw(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'The tyrant who rules my land will stop at nothing to see me killed.');
  FOLK_HERO_2			= new Flaw(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I\'m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.');
  FOLK_HERO_3			= new Flaw(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'The people who knew me when I was young know my shameful secret, so I can never go home again.');
  FOLK_HERO_4			= new Flaw(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I have a weakness for the vices of the city, especially hard drink.');
  FOLK_HERO_5			= new Flaw(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Secretly, I believe that things would be better if I were a tyrant lording over the land.');
  FOLK_HERO_6			= new Flaw(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I have trouble trusting in my allies.');

  GUILD_ARTISAN_1		= new Flaw(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'ll do anything to get my hands on something rare or priceless.');
  GUILD_ARTISAN_2		= new Flaw(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m quick to assume that someone is trying to cheat me.');
  GUILD_ARTISAN_3		= new Flaw(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'No one must ever learn that I once stole money from guild coffers.');
  GUILD_ARTISAN_4		= new Flaw(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m never satisfied with what I have--I always want more.');
  GUILD_ARTISAN_5		= new Flaw(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I would kill to acquire a noble title.');
  GUILD_ARTISAN_6		= new Flaw(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m horribly jealous of anyone who outshines my handiwork. Everywhere I go, I\'m surrounded by rivals.');

  HERMIT_1			= new Flaw(this.backgrounds.HERMIT.getBackgroundId(), 	'Now that I\'ve returned to the world, I enjoy its delights a little too much.');
  HERMIT_2			= new Flaw(this.backgrounds.HERMIT.getBackgroundId(), 	'I harbor dark bloodthirsty thoughts that my isolation failed to quell.');
  HERMIT_3			= new Flaw(this.backgrounds.HERMIT.getBackgroundId(), 	'I am dogmatic in my thoughts and philosophy.');
  HERMIT_4			= new Flaw(this.backgrounds.HERMIT.getBackgroundId(), 	'I let my need to win arguments overshadow friendships and harmony.');
  HERMIT_5			= new Flaw(this.backgrounds.HERMIT.getBackgroundId(), 	'I\'d risk too much to uncover a lost bit of knowledge.');
  HERMIT_6			= new Flaw(this.backgrounds.HERMIT.getBackgroundId(), 	'I like keeping secrets and won\'t share them with anyone.');

  NOBLE_1				= new Flaw(this.backgrounds.NOBLE.getBackgroundId(), 	'I secretly believe that everyone is beneath me.');
  NOBLE_2				= new Flaw(this.backgrounds.NOBLE.getBackgroundId(), 	'I hide a truly scandalous secret that could ruin my family forever.');
  NOBLE_3				= new Flaw(this.backgrounds.NOBLE.getBackgroundId(), 	'I too often hear veiled insults and threats in every word addressed to me, and I\'m quick to anger.');
  NOBLE_4				= new Flaw(this.backgrounds.NOBLE.getBackgroundId(), 	'I have an insatiable desire for carnal pleasures.');
  NOBLE_5				= new Flaw(this.backgrounds.NOBLE.getBackgroundId(), 	'In fact, the world does revolve around me.');
  NOBLE_6				= new Flaw(this.backgrounds.NOBLE.getBackgroundId(), 	'By my words and actions, I often bring shame to my family.');

  OUTLANDER_1			= new Flaw(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I am too enamored of ale, wine, and other intoxicants.');
  OUTLANDER_2			= new Flaw(this.backgrounds.OUTLANDER.getBackgroundId(), 	'There\'s no room for caution in a life lived to the fullest.');
  OUTLANDER_3			= new Flaw(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I remember every insult I\'ve received and nurse a silent resentment toward anyone who\'s ever wronged me.');
  OUTLANDER_4			= new Flaw(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I am slow to trust members of other races');
  OUTLANDER_5			= new Flaw(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Violence is my answer to almost any challenge.');
  OUTLANDER_6			= new Flaw(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Don\'t expect me to save those who can\'t save themselves. It is nature\'s way that the strong thrive and the weak perish.');

  SAGE_1				= new Flaw(this.backgrounds.SAGE.getBackgroundId(), 	'I am easily distracted by the promise of information.');
  SAGE_2				= new Flaw(this.backgrounds.SAGE.getBackgroundId(), 	'Most people scream and run when they see a demon. I stop and take notes on its anatomy.');
  SAGE_3				= new Flaw(this.backgrounds.SAGE.getBackgroundId(), 	'Unlocking an ancient mystery is worth the price of a civilization.');
  SAGE_4				= new Flaw(this.backgrounds.SAGE.getBackgroundId(), 	'I overlook obvious solutions in favor of complicated ones.');
  SAGE_5				= new Flaw(this.backgrounds.SAGE.getBackgroundId(), 	'I speak without really thinking through my words, invariably insulting others.');
  SAGE_6				= new Flaw(this.backgrounds.SAGE.getBackgroundId(), 	'I can\'t keep a secret to save my life, or anyone else\'s.');

  SAILOR_1			= new Flaw(this.backgrounds.SAILOR.getBackgroundId(), 	'I follow orders, even if I think they\'re wrong.');
  SAILOR_2			= new Flaw(this.backgrounds.SAILOR.getBackgroundId(), 	'I\'ll say anything to avoid having to do extra work.');
  SAILOR_3			= new Flaw(this.backgrounds.SAILOR.getBackgroundId(), 	'Once someone questions my courage, I never back down no matter how dangerous the situation.');
  SAILOR_4			= new Flaw(this.backgrounds.SAILOR.getBackgroundId(), 	'Once I start drinking, it\'s hard for me to stop.');
  SAILOR_5			= new Flaw(this.backgrounds.SAILOR.getBackgroundId(), 	'I can\'t help but pocket loose coins and other trinkets I come across.');
  SAILOR_6			= new Flaw(this.backgrounds.SAILOR.getBackgroundId(), 	'My pride will probably lead to my destruction');

  SOLDIER_1			= new Flaw(this.backgrounds.SOLDIER.getBackgroundId(), 	'The monstrous enemy we faced in battle still leaves me quivering with fear.');
  SOLDIER_2			= new Flaw(this.backgrounds.SOLDIER.getBackgroundId(), 	'I have little respect for anyone who is not a proven warrior.');
  SOLDIER_3			= new Flaw(this.backgrounds.SOLDIER.getBackgroundId(), 	'I made a terrible mistake in battle that cost many lives--and I would do anything to keep that mistake secret.');
  SOLDIER_4			= new Flaw(this.backgrounds.SOLDIER.getBackgroundId(), 	'My hatred of my enemies is blind and unreasoning.');
  SOLDIER_5			= new Flaw(this.backgrounds.SOLDIER.getBackgroundId(), 	'I obey the law, even if the law causes misery.');
  SOLDIER_6			= new Flaw(this.backgrounds.SOLDIER.getBackgroundId(), 	'I\'d rather eat my armor than admit when I\'m wrong.');

  URCHIN_1			= new Flaw(this.backgrounds.URCHIN.getBackgroundId(), 	'If I\'m outnumbered, I always run away from a fight.');
  URCHIN_2			= new Flaw(this.backgrounds.URCHIN.getBackgroundId(), 	'Gold seems like a lot of money to me, and I\'ll do just about anything for more of it.');
  URCHIN_3			= new Flaw(this.backgrounds.URCHIN.getBackgroundId(), 	'I will never fully trust anyone other than myself.');
  URCHIN_4			= new Flaw(this.backgrounds.URCHIN.getBackgroundId(), 	'I\'d rather kill someone in their sleep than fight fair.');
  URCHIN_5			= new Flaw(this.backgrounds.URCHIN.getBackgroundId(), 	'It\'s not stealing if I need it more than someone else.');
  URCHIN_6			= new Flaw(this.backgrounds.URCHIN.getBackgroundId(), 	'People who don\'t take care of themselves get what they deserve.');

  public getFlaws(background: Background): Flaw[] {
    if (background.getBackgroundId() === this.backgrounds.ACOLYTE.getBackgroundId()) {
      return [this.ACOLYTE_1, this.ACOLYTE_2, this.ACOLYTE_3, this.ACOLYTE_4, this.ACOLYTE_5, this.ACOLYTE_6];
    } else if (background.getBackgroundId() === this.backgrounds.CHARLATAN.getBackgroundId()) {
      return [this.CHARLATAN_1, this.CHARLATAN_2, this.CHARLATAN_3, this.CHARLATAN_4, this.CHARLATAN_5, this.CHARLATAN_6];
    } else if (background.getBackgroundId() === this.backgrounds.CRIMINAL.getBackgroundId()) {
      return [this.CRIMINAL_1, this.CRIMINAL_2, this.CRIMINAL_3, this.CRIMINAL_4, this.CRIMINAL_5, this.CRIMINAL_6];
    } else if (background.getBackgroundId() === this.backgrounds.ENTERTAINER.getBackgroundId()) {
      return [this.ENTERTAINER_1, this.ENTERTAINER_2, this.ENTERTAINER_3, this.ENTERTAINER_4, this.ENTERTAINER_5, this.ENTERTAINER_6];
    } else if (background.getBackgroundId() === this.backgrounds.FOLK_HERO.getBackgroundId()) {
      return [this.FOLK_HERO_1, this.FOLK_HERO_2, this.FOLK_HERO_3, this.FOLK_HERO_4, this.FOLK_HERO_5, this.FOLK_HERO_6];
    } else if (background.getBackgroundId() === this.backgrounds.GUILD_ARTISAN.getBackgroundId()) {
      return [this.GUILD_ARTISAN_1, this.GUILD_ARTISAN_2, this.GUILD_ARTISAN_3, this.GUILD_ARTISAN_4, this.GUILD_ARTISAN_5, this.GUILD_ARTISAN_6];
    } else if (background.getBackgroundId() === this.backgrounds.HERMIT.getBackgroundId()) {
      return [this.HERMIT_1, this.HERMIT_2, this.HERMIT_3, this.HERMIT_4, this.HERMIT_5, this.HERMIT_6];
    } else if (background.getBackgroundId() === this.backgrounds.NOBLE.getBackgroundId()) {
      return [this.NOBLE_1, this.NOBLE_2, this.NOBLE_3, this.NOBLE_4, this.NOBLE_5, this.NOBLE_6];
    } else if (background.getBackgroundId() === this.backgrounds.OUTLANDER.getBackgroundId()) {
      return [this.OUTLANDER_1, this.OUTLANDER_2, this.OUTLANDER_3, this.OUTLANDER_4, this.OUTLANDER_5, this.OUTLANDER_6];
    } else if (background.getBackgroundId() === this.backgrounds.SAGE.getBackgroundId()) {
      return [this.SAGE_1, this.SAGE_2, this.SAGE_3, this.SAGE_4, this.SAGE_5, this.SAGE_6];
    } else if (background.getBackgroundId() === this.backgrounds.SAILOR.getBackgroundId()) {
      return [this.SAILOR_1, this.SAILOR_2, this.SAILOR_3, this.SAILOR_4, this.SAILOR_5, this.SAILOR_6];
    } else if (background.getBackgroundId() === this.backgrounds.SOLDIER.getBackgroundId()) {
      return [this.SOLDIER_1, this.SOLDIER_2, this.SOLDIER_3, this.SOLDIER_4, this.SOLDIER_5, this.SOLDIER_6];
    } else if (background.getBackgroundId() === this.backgrounds.URCHIN.getBackgroundId()) {
      return [this.URCHIN_1, this.URCHIN_2, this.URCHIN_3, this.URCHIN_4, this.URCHIN_5, this.URCHIN_6];
    }
  }
}

export class Ideal {
  constructor(readonly backgroundId: number, readonly ideal: string) {
    this.backgroundId = backgroundId;
    this.ideal = ideal;
  }
}

export class Ideals {
  readonly backgrounds = new Backgrounds();
  ACOLYTE_1			= new Ideal(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Tradition. The ancient traditions o f worship and sacrifice must be preserved and upheld. (Lawful)');
  ACOLYTE_2			= new Ideal(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Charity. I always try to help those in need, no matter what the personal cost. (Good)');
  ACOLYTE_3			= new Ideal(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)');
  ACOLYTE_4			= new Ideal(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)');
  ACOLYTE_5			= new Ideal(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)');
  ACOLYTE_6			= new Ideal(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)');

  CHARLATAN_1			= new Ideal(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Independence. I am a free spirit— no one tells me what to do. (Chaotic)');
  CHARLATAN_2			= new Ideal(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Fairness. I never target people who can’t afford to lose a few coins. (Lawful)');
  CHARLATAN_3			= new Ideal(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Charity. I distribute the money I acquire to the people who really need it. (Good)');
  CHARLATAN_4			= new Ideal(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Creativity. I never run the same con twice. (Chaotic)');
  CHARLATAN_5			= new Ideal(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Friendship. Material goods come and go. Bonds of friendship last forever. (Good)');
  CHARLATAN_6			= new Ideal(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Aspiration. I’m determined to make something of myself. (Any)');

  CRIMINAL_1 			= new Ideal(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Honor. I don\'t steal from others in the trade. (Lawful)');
  CRIMINAL_2			= new Ideal(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)');
  CRIMINAL_3			= new Ideal(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Charity. I steal from the wealthy so that I can help people in need. (Good)');
  CRIMINAL_4			= new Ideal(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Greed. I will do whatever it takes to become wealthy. (Evil)');
  CRIMINAL_5			= new Ideal(this.backgrounds.CRIMINAL.getBackgroundId(), 	'People. I\'m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)');
  CRIMINAL_6			= new Ideal(this.backgrounds.CRIMINAL.getBackgroundId(), 	'Redemption. There\'s a spark of good in everyone. (Good)');

  ENTERTAINER_1		= new Ideal(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Beauty. When I perform, I make the world better than it was. (Good)');
  ENTERTAINER_2		= new Ideal(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Tradition. The stories, legends, and songs of the past must never be forgotten. (Lawful)');
  ENTERTAINER_3		= new Ideal(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Creativity. The world is in need of new ideas and bold action. (Chaotic)');
  ENTERTAINER_4		= new Ideal(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Greed. I\'m only in it for the money and fame. (Evil)');
  ENTERTAINER_5		= new Ideal(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'People. I like seeing the smiles on people\'s faces when I perform. That\'s all that matters. (Neutral)');
  ENTERTAINER_6		= new Ideal(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)');

  FOLK_HERO_1			= new Ideal(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Respect. People deserve to be treated with dignity and respect. (Good)');
  FOLK_HERO_2			= new Ideal(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)');
  FOLK_HERO_3			= new Ideal(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)');
  FOLK_HERO_4			= new Ideal(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Might. If I become strong, I can take what I want--what I deserve. (Evil)');
  FOLK_HERO_5			= new Ideal(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Sincerity. There\'s no good pretending to be something I\'m not. (Neutral)');
  FOLK_HERO_6			= new Ideal(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Destiny. Nothing and no one can steer me away from my higher calling. (Any)');

  GUILD_ARTISAN_1		= new Ideal(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)');
  GUILD_ARTISAN_2		= new Ideal(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'Generosity. My talents were given to me so that I could use them to benefit the world. (Good)');
  GUILD_ARTISAN_3		= new Ideal(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'Freedom. Everyone should be free to pursue his or her livelihood. (Chaotic)');
  GUILD_ARTISAN_4		= new Ideal(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'Greed. I\'m only in it for the money. (Evil)');
  GUILD_ARTISAN_5		= new Ideal(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'People. I\'m committed to the people I care about, not to ideals. (Neutral)');
  GUILD_ARTISAN_6		= new Ideal(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'Aspiration. I work hard to be the best there is at my craft. (Any)');

  HERMIT_1			= new Ideal(this.backgrounds.HERMIT.getBackgroundId(), 	'Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)');
  HERMIT_2			= new Ideal(this.backgrounds.HERMIT.getBackgroundId(), 	'Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)');
  HERMIT_3			= new Ideal(this.backgrounds.HERMIT.getBackgroundId(), 	'Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)');
  HERMIT_4			= new Ideal(this.backgrounds.HERMIT.getBackgroundId(), 	'Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)');
  HERMIT_5			= new Ideal(this.backgrounds.HERMIT.getBackgroundId(), 	'Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)');
  HERMIT_6			= new Ideal(this.backgrounds.HERMIT.getBackgroundId(), 	'Self-Knowledge. If you know yourself, there\'re nothing left to know. (Any)');

  NOBLE_1				= new Ideal(this.backgrounds.NOBLE.getBackgroundId(), 	'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)');
  NOBLE_2				= new Ideal(this.backgrounds.NOBLE.getBackgroundId(), 	'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)');
  NOBLE_3				= new Ideal(this.backgrounds.NOBLE.getBackgroundId(), 	'Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)');
  NOBLE_4				= new Ideal(this.backgrounds.NOBLE.getBackgroundId(), 	'Power. If I can attain more power, no one will tell me what to do. (Evil)');
  NOBLE_5				= new Ideal(this.backgrounds.NOBLE.getBackgroundId(), 	'Family. Blood runs thicker than water. (Any)');
  NOBLE_6				= new Ideal(this.backgrounds.NOBLE.getBackgroundId(), 	'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)');

  OUTLANDER_1			= new Ideal(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)');
  OUTLANDER_2			= new Ideal(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Greater Good. It is each person\'s responsibility to make the most happiness for the whole tribe. (Good)');
  OUTLANDER_3			= new Ideal(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)');
  OUTLANDER_4			= new Ideal(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Might. The strongest are meant to rule. (Evil)');
  OUTLANDER_5			= new Ideal(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Nature. The natural world is more important than all the constructs of civilization. (Neutral)');
  OUTLANDER_6			= new Ideal(this.backgrounds.OUTLANDER.getBackgroundId(), 	'Glory. I must earn glory in battle, for myself and my clan. (Any)');

  SAGE_1				= new Ideal(this.backgrounds.SAGE.getBackgroundId(), 	'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)');
  SAGE_2				= new Ideal(this.backgrounds.SAGE.getBackgroundId(), 	'Beauty. What is beautiful points us beyond itself toward what is true. (Good)');
  SAGE_3				= new Ideal(this.backgrounds.SAGE.getBackgroundId(), 	'Logic. Emotions must not cloud our logical thinking. (Lawful)');
  SAGE_4				= new Ideal(this.backgrounds.SAGE.getBackgroundId(), 	'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)');
  SAGE_5				= new Ideal(this.backgrounds.SAGE.getBackgroundId(), 	'Power. Knowledge is the path to power and domination. (Evil)');
  SAGE_6				= new Ideal(this.backgrounds.SAGE.getBackgroundId(), 	'Self-improvement. The goal of a life of study is the betterment of oneself.');

  SAILOR_1			= new Ideal(this.backgrounds.SAILOR.getBackgroundId(), 	'Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)');
  SAILOR_2			= new Ideal(this.backgrounds.SAILOR.getBackgroundId(), 	'Fairness. We all do the work, so we all share in the rewards. (Lawful)');
  SAILOR_3			= new Ideal(this.backgrounds.SAILOR.getBackgroundId(), 	'Freedom. The sea is freedom--the freedom to go anywhere and do anything. (Chaotic)');
  SAILOR_4			= new Ideal(this.backgrounds.SAILOR.getBackgroundId(), 	'Master. I\'m a predator, and the other ships on the sea are my prey. (Evil)');
  SAILOR_5			= new Ideal(this.backgrounds.SAILOR.getBackgroundId(), 	'People. I\'m committed to my crew mates, not to ideals. (Neutral)');
  SAILOR_6			= new Ideal(this.backgrounds.SAILOR.getBackgroundId(), 	'Aspiration. Someday I\'ll own my own ship and chart my own destiny. (Any)');

  SOLDIER_1			= new Ideal(this.backgrounds.SOLDIER.getBackgroundId(), 	'Greater Good. Our lot is to lay down our lives in defense of others. (Good)');
  SOLDIER_2			= new Ideal(this.backgrounds.SOLDIER.getBackgroundId(), 	'Responsibility. I do what I must and obey just authority. (Lawful)');
  SOLDIER_3			= new Ideal(this.backgrounds.SOLDIER.getBackgroundId(), 	'Independence. When people follow orders blindly they embrace a kind of tyranny. (Chaotic)');
  SOLDIER_4			= new Ideal(this.backgrounds.SOLDIER.getBackgroundId(), 	'Might. In life as in war, the stronger force wins. (Evil)');
  SOLDIER_5			= new Ideal(this.backgrounds.SOLDIER.getBackgroundId(), 	'Ideals aren\'t worth killing for or going to war for. (Neutral)');
  SOLDIER_6			= new Ideal(this.backgrounds.SOLDIER.getBackgroundId(), 	'Nation. My city, nation, or people are all that matter. (Any)');

  URCHIN_1			= new Ideal(this.backgrounds.URCHIN.getBackgroundId(), 	'Respect. All people, rich or poor, deserve respect. (Good)');
  URCHIN_2			= new Ideal(this.backgrounds.URCHIN.getBackgroundId(), 	'Community. We have to take care of each other, because no one else is going to do it. (Lawful)');
  URCHIN_3			= new Ideal(this.backgrounds.URCHIN.getBackgroundId(), 	'Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)');
  URCHIN_4			= new Ideal(this.backgrounds.URCHIN.getBackgroundId(), 	'Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)');
  URCHIN_5			= new Ideal(this.backgrounds.URCHIN.getBackgroundId(), 	'People. I help people who help me--that\'s what keeps us alive. (Neutral)');
  URCHIN_6			= new Ideal(this.backgrounds.URCHIN.getBackgroundId(), 	'Aspiration. I\'m going to prove that I\'m worthy of a better life. (Any)');

  public getIdeals(background: Background): Ideal[] {
    if (background.getBackgroundId() === this.backgrounds.ACOLYTE.getBackgroundId()) {
      return [this.ACOLYTE_1, this.ACOLYTE_2, this.ACOLYTE_3, this.ACOLYTE_4, this.ACOLYTE_5, this.ACOLYTE_6];
    } else if (background.getBackgroundId() === this.backgrounds.CHARLATAN.getBackgroundId()) {
      return [this.CHARLATAN_1, this.CHARLATAN_2, this.CHARLATAN_3, this.CHARLATAN_4, this.CHARLATAN_5, this.CHARLATAN_6];
    } else if (background.getBackgroundId() === this.backgrounds.CRIMINAL.getBackgroundId()) {
      return [this.CRIMINAL_1, this.CRIMINAL_2, this.CRIMINAL_3, this.CRIMINAL_4, this.CRIMINAL_5, this.CRIMINAL_6];
    } else if (background.getBackgroundId() === this.backgrounds.ENTERTAINER.getBackgroundId()) {
      return [this.ENTERTAINER_1, this.ENTERTAINER_2, this.ENTERTAINER_3, this.ENTERTAINER_4, this.ENTERTAINER_5, this.ENTERTAINER_6];
    } else if (background.getBackgroundId() === this.backgrounds.FOLK_HERO.getBackgroundId()) {
      return [this.FOLK_HERO_1, this.FOLK_HERO_2, this.FOLK_HERO_3, this.FOLK_HERO_4, this.FOLK_HERO_5, this.FOLK_HERO_6];
    } else if (background.getBackgroundId() === this.backgrounds.GUILD_ARTISAN.getBackgroundId()) {
      return [this.GUILD_ARTISAN_1, this.GUILD_ARTISAN_2, this.GUILD_ARTISAN_3, this.GUILD_ARTISAN_4, this.GUILD_ARTISAN_5, this.GUILD_ARTISAN_6];
    } else if (background.getBackgroundId() === this.backgrounds.HERMIT.getBackgroundId()) {
      return [this.HERMIT_1, this.HERMIT_2, this.HERMIT_3, this.HERMIT_4, this.HERMIT_5, this.HERMIT_6];
    } else if (background.getBackgroundId() === this.backgrounds.NOBLE.getBackgroundId()) {
      return [this.NOBLE_1, this.NOBLE_2, this.NOBLE_3, this.NOBLE_4, this.NOBLE_5, this.NOBLE_6];
    } else if (background.getBackgroundId() === this.backgrounds.OUTLANDER.getBackgroundId()) {
      return [this.OUTLANDER_1, this.OUTLANDER_2, this.OUTLANDER_3, this.OUTLANDER_4, this.OUTLANDER_5, this.OUTLANDER_6];
    } else if (background.getBackgroundId() === this.backgrounds.SAGE.getBackgroundId()) {
      return [this.SAGE_1, this.SAGE_2, this.SAGE_3, this.SAGE_4, this.SAGE_5, this.SAGE_6];
    } else if (background.getBackgroundId() === this.backgrounds.SAILOR.getBackgroundId()) {
      return [this.SAILOR_1, this.SAILOR_2, this.SAILOR_3, this.SAILOR_4, this.SAILOR_5, this.SAILOR_6];
    } else if (background.getBackgroundId() === this.backgrounds.SOLDIER.getBackgroundId()) {
      return [this.SOLDIER_1, this.SOLDIER_2, this.SOLDIER_3, this.SOLDIER_4, this.SOLDIER_5, this.SOLDIER_6];
    } else if (background.getBackgroundId() === this.backgrounds.URCHIN.getBackgroundId()) {
      return [this.URCHIN_1, this.URCHIN_2, this.URCHIN_3, this.URCHIN_4, this.URCHIN_5, this.URCHIN_6];
    }
  }
}

export class PersonalityTrait {
  constructor(readonly backgroundId: number, readonly personalityTrait: string) {
    this.backgroundId = backgroundId;
    this.personalityTrait = personalityTrait;
  }
}

export class PersonalityTraits {
  readonly backgrounds = new Backgrounds();
  ACOLYTE_1			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I idolize a particular hero o f my faith, and constantly refer to that person’s deeds and example.');
  ACOLYTE_2			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I can find common ground between the fiercest enemies, empathizing with them and always working towards peace.');
  ACOLYTE_3			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I see omens in every event and action. The gods try to speak to us, we just need to listen.');
  ACOLYTE_4			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'Nothing can shake my optimistic attitude.');
  ACOLYTE_5			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I quote (or misquote) sacred texts and proverbs in almost every situation.');
  ACOLYTE_6			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.');
  ACOLYTE_7			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I\'ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.');
  ACOLYTE_8			= new PersonalityTrait(this.backgrounds.ACOLYTE.getBackgroundId(), 	'I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.');

  CHARLATAN_1			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I fall in and out of love easily, and am always pursuing someone.');
  CHARLATAN_2			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I have a joke for every occasion, especially occasions where humor is inappropriate.');
  CHARLATAN_3			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Flattery is my preferred trick for getting what I want.');
  CHARLATAN_4			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I’m a born gambler who can\'t resist taking a risk for a potential payoff.');
  CHARLATAN_5			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I lie about almost everything, even when there’s no good reason to.');
  CHARLATAN_6			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'Sarcasm and insults are my weapons of choice.');
  CHARLATAN_7			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.');
  CHARLATAN_8			= new PersonalityTrait(this.backgrounds.CHARLATAN.getBackgroundId(), 	'I pocket anything I see that might have some value.');

  CRIMINAL_1 			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I always have a plan for what to do when things go wrong');
  CRIMINAL_2			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me');
  CRIMINAL_3			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden.');
  CRIMINAL_4			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I would rather make a new friend than a new enemy.');
  CRIMINAL_5			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.');
  CRIMINAL_6			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I don\'t pay attention to the risks in a situation. Never tell me the odds.');
  CRIMINAL_7			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'The best way to get me to do something is to tell me I can\'t do it.');
  CRIMINAL_8			= new PersonalityTrait(this.backgrounds.CRIMINAL.getBackgroundId(), 	'I blow up at the slightest insult.');

  ENTERTAINER_1		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I know a story relevant to almost every situation.');
  ENTERTAINER_2		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Whenever I come to a new place, I collect local rumors and spread gossip.');
  ENTERTAINER_3		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I\'m a hopeless romantic, always searching for that \'special someone\'.');
  ENTERTAINER_4		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.');
  ENTERTAINER_5		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I love a good insult, even one directed at me.');
  ENTERTAINER_6		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I get bitter if I\'m not the center of attention.');
  ENTERTAINER_7		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I\'ll settle for nothing less than perfection.');
  ENTERTAINER_8		= new PersonalityTrait(this.backgrounds.ENTERTAINER.getBackgroundId(), 	'I change my mood or my mind as quickly as I change key in a song.');

  FOLK_HERO_1			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I judge people by their actions, not their words.');
  FOLK_HERO_2			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'If someone is in trouble, I\'m always willing to lend help.');
  FOLK_HERO_3			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'When I set my mind to something, I follow through no matter what gets in my way.');
  FOLK_HERO_4			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I have a strong sense of fair play and always try to find the most equitable solution to arguments.');
  FOLK_HERO_5			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I\'m confident in my own abilities and do what I can to instill confidence in others.');
  FOLK_HERO_6			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'Thinking is for other people. I prefer action.');
  FOLK_HERO_7			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I misuse long words in an attempt to sound smarter.');
  FOLK_HERO_8			= new PersonalityTrait(this.backgrounds.FOLK_HERO.getBackgroundId(), 	'I get bored easily. When am I going to get on with my destiny.');

  GUILD_ARTISAN_1		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I believe that everything worth doing is worth doing right. I can\'t help it--I\'m a perfectionist.');
  GUILD_ARTISAN_2		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m a snob who looks down on those who can\'t appreciate fine art.');
  GUILD_ARTISAN_3		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I always want to know how things work and what makes people tick.');
  GUILD_ARTISAN_4		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m full of witty aphorisms and have a proverb for every occasion.');
  GUILD_ARTISAN_5		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m rude to people who lack my commitment to hard work and fair play.');
  GUILD_ARTISAN_6		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I like to talk at length about my profession.');
  GUILD_ARTISAN_7		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I don\'t part with my money easily and will haggle tirelessly to get the best deal possible.');
  GUILD_ARTISAN_8		= new PersonalityTrait(this.backgrounds.GUILD_ARTISAN.getBackgroundId(), 	'I\'m well known for my work, and I want to make sure everyone appreciates it. I\'m always taken aback when people haven\'t heard of me.');

  HERMIT_1			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I\'ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.');
  HERMIT_2			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I am utterly serene, even in the face of disaster.');
  HERMIT_3			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'The leader of my community has something wise to say on every topic, and I am eager to share that wisdom.');
  HERMIT_4			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I feel tremendous empathy for all who suffer.');
  HERMIT_5			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I\'m oblivious to etiquette and social expectations.');
  HERMIT_6			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I connect everything that happens to me to a grand cosmic plan.');
  HERMIT_7			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I often get lost in my own thoughts and contemplations, becoming oblivious to my surroundings.');
  HERMIT_8			= new PersonalityTrait(this.backgrounds.HERMIT.getBackgroundId(), 	'I am working on a grand philosophical theory and love sharing my ideas.');

  NOBLE_1				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.');
  NOBLE_2				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'The common folk love me for my kindness and generosity.');
  NOBLE_3				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.');
  NOBLE_4				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'I take great pains to always look my best and follow the latest fashions.');
  NOBLE_5				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'I don\'t like to get my hands dirty, and I won\'t be caught dead in unsuitable accommodations.');
  NOBLE_6				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'Despite my birth, I do not place myself above other folk. We all have the same blood.');
  NOBLE_7				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'My favor, once lost, is lost forever.');
  NOBLE_8				= new PersonalityTrait(this.backgrounds.NOBLE.getBackgroundId(), 	'If you do me an injury, I will crush you, ruin your name, and salt your fields.');

  OUTLANDER_1			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I\'m driven by a wanderlust that led me away from home.');
  OUTLANDER_2			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I watch over my friends as if they were a litter of newborn pups.');
  OUTLANDER_3			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I\'d do it again if I had to.');
  OUTLANDER_4			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I have a lesson for every situation, drawn from observing nature.');
  OUTLANDER_5			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I place no stock in wealthy or well-mannered folk. Money and manners won\'t save you from a hungry owlbear.');
  OUTLANDER_6			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I\'m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.');
  OUTLANDER_7			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I feel far more comfortable around animals than people.');
  OUTLANDER_8			= new PersonalityTrait(this.backgrounds.OUTLANDER.getBackgroundId(), 	'I was, in fact, raised by wolves.');

  SAGE_1				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I use polysyllabic words to convey the impression of great erudition.');
  SAGE_2				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I\'ve read every book in the world\'s greatest libraries--or like to boast that I have.');
  SAGE_3				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I\'m used to helping out those who aren\'t as smart as I am, and I patiently explain anything and everything to others.');
  SAGE_4				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'There\'s nothing I like more than a good mystery.');
  SAGE_5				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I\'m willing to listen to every side of an argument before I make my own judgment.');
  SAGE_6				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I...speak...slowly...when talking...to idiots...which...almost...everyone...is...compared ...to me.');
  SAGE_7				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I am horribly, horribly awkward in social situations.');
  SAGE_8				= new PersonalityTrait(this.backgrounds.SAGE.getBackgroundId(), 	'I\'m convinced that people are always trying to steal my secrets.');

  SAILOR_1			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'My friends know they can rely on me, no matter what.');
  SAILOR_2			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'I work hard so that I can play hard when the work is done.');
  SAILOR_3			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'I enjoy sailing into new ports and making new friends over a flagon of ale.');
  SAILOR_4			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'I stretch the truth for the sake of a good story.');
  SAILOR_5			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'To me, a tavern brawl is a nice way to get to know a new city.');
  SAILOR_6			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'I never pass up a friendly wager.');
  SAILOR_7			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'My language is as foul as an otyugh nest.');
  SAILOR_8			= new PersonalityTrait(this.backgrounds.SAILOR.getBackgroundId(), 	'I like a job well done, especially if I can convince someone else to do it.');

  SOLDIER_1			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I\'m always polite and respectful.');
  SOLDIER_2			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I\'m haunted by memories of war. I can\'t get the images of violence out of my mind.');
  SOLDIER_3			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I\'ve lost too many friends, and I\'m slow to make new ones.');
  SOLDIER_4			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I\'m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.');
  SOLDIER_5			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I can stare down a hellhound without flinching.');
  SOLDIER_6			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I enjoy being strong and like breaking things.');
  SOLDIER_7			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I have a crude sense of humor.');
  SOLDIER_8			= new PersonalityTrait(this.backgrounds.SOLDIER.getBackgroundId(), 	'I face problems head-on. A simple direct solution is the best path to success.');

  URCHIN_1			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I hide scraps of food and trinkets away in my pockets.');
  URCHIN_2			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I ask a lot of questions.');
  URCHIN_3			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I like to squeeze into small places where no one else can get to me.');
  URCHIN_4			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.');
  URCHIN_5			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I eat like a pig and have bad manners.');
  URCHIN_6			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I think anyone who\'s nice to me is hiding evil intent.');
  URCHIN_7			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I don\'t like to bathe.');
  URCHIN_8			= new PersonalityTrait(this.backgrounds.URCHIN.getBackgroundId(), 	'I bluntly say what other people are hinting or hiding.');

  public getPersonalityTraits(background: Background): PersonalityTrait[] {
    if (background.getBackgroundId() === this.backgrounds.ACOLYTE.getBackgroundId()) {
      return [this.ACOLYTE_1, this.ACOLYTE_2, this.ACOLYTE_3, this.ACOLYTE_4, this.ACOLYTE_5, this.ACOLYTE_6, this.ACOLYTE_7, this.ACOLYTE_8];
    } else if (background.getBackgroundId() === this.backgrounds.CHARLATAN.getBackgroundId()) {
      return [this.CHARLATAN_1, this.CHARLATAN_2, this.CHARLATAN_3, this.CHARLATAN_4, this.CHARLATAN_5, this.CHARLATAN_6, this.CHARLATAN_7, this.CHARLATAN_8];
    } else if (background.getBackgroundId() === this.backgrounds.CRIMINAL.getBackgroundId()) {
      return [this.CRIMINAL_1, this.CRIMINAL_2, this.CRIMINAL_3, this.CRIMINAL_4, this.CRIMINAL_5, this.CRIMINAL_6, this.CRIMINAL_7, this.CRIMINAL_8];
    } else if (background.getBackgroundId() === this.backgrounds.ENTERTAINER.getBackgroundId()) {
      return [this.ENTERTAINER_1, this.ENTERTAINER_2, this.ENTERTAINER_3, this.ENTERTAINER_4, this.ENTERTAINER_5, this.ENTERTAINER_6, this.ENTERTAINER_7, this.ENTERTAINER_8];
    } else if (background.getBackgroundId() === this.backgrounds.FOLK_HERO.getBackgroundId()) {
      return [this.FOLK_HERO_1, this.FOLK_HERO_2, this.FOLK_HERO_3, this.FOLK_HERO_4, this.FOLK_HERO_5, this.FOLK_HERO_6, this.FOLK_HERO_7, this.FOLK_HERO_8];
    } else if (background.getBackgroundId() === this.backgrounds.GUILD_ARTISAN.getBackgroundId()) {
      return [this.GUILD_ARTISAN_1, this.GUILD_ARTISAN_2, this.GUILD_ARTISAN_3, this.GUILD_ARTISAN_4, this.GUILD_ARTISAN_5, this.GUILD_ARTISAN_6, this.GUILD_ARTISAN_7, this.GUILD_ARTISAN_8];
    } else if (background.getBackgroundId() === this.backgrounds.HERMIT.getBackgroundId()) {
      return [this.HERMIT_1, this.HERMIT_2, this.HERMIT_3, this.HERMIT_4, this.HERMIT_5, this.HERMIT_6, this.HERMIT_7, this.HERMIT_8];
    } else if (background.getBackgroundId() === this.backgrounds.NOBLE.getBackgroundId()) {
      return [this.NOBLE_1, this.NOBLE_2, this.NOBLE_3, this.NOBLE_4, this.NOBLE_5, this.NOBLE_6, this.NOBLE_7, this.NOBLE_8];
    } else if (background.getBackgroundId() === this.backgrounds.OUTLANDER.getBackgroundId()) {
      return [this.OUTLANDER_1, this.OUTLANDER_2, this.OUTLANDER_3, this.OUTLANDER_4, this.OUTLANDER_5, this.OUTLANDER_6, this.OUTLANDER_7, this.OUTLANDER_8];
    } else if (background.getBackgroundId() === this.backgrounds.SAGE.getBackgroundId()) {
      return [this.SAGE_1, this.SAGE_2, this.SAGE_3, this.SAGE_4, this.SAGE_5, this.SAGE_6, this.SAGE_7, this.SAGE_8];
    } else if (background.getBackgroundId() === this.backgrounds.SAILOR.getBackgroundId()) {
      return [this.SAILOR_1, this.SAILOR_2, this.SAILOR_3, this.SAILOR_4, this.SAILOR_5, this.SAILOR_6, this.SAILOR_7, this.SAILOR_8];
    } else if (background.getBackgroundId() === this.backgrounds.SOLDIER.getBackgroundId()) {
      return [this.SOLDIER_1, this.SOLDIER_2, this.SOLDIER_3, this.SOLDIER_4, this.SOLDIER_5, this.SOLDIER_6, this.SOLDIER_7, this.SOLDIER_8];
    } else if (background.getBackgroundId() === this.backgrounds.URCHIN.getBackgroundId()) {
      return [this.URCHIN_1, this.URCHIN_2, this.URCHIN_3, this.URCHIN_4, this.URCHIN_5, this.URCHIN_6, this.URCHIN_7, this.URCHIN_8];
    }
  }
}
