export class Alignment {
  constructor(readonly alignmentId: number, readonly alignmentName: string) {
    this.alignmentId = alignmentId;
    this.alignmentName = alignmentName;
  }

  getAlignmentId() {
    return this.alignmentId;
  }
}

export class Alignments {
  readonly LAWFUL_GOOD = new Alignment(0, 'Lawful Good');
  readonly NEUTRAL_GOOD = new Alignment(1, 'Neutral Good');
  readonly CHAOTIC_GOOD = new Alignment(2, 'Chaotic Good');
  readonly LAWFUL_NEUTRAL = new Alignment(3, 'Lawful Neutral');
  readonly TRUE_NEUTRAL = new Alignment(4, 'True Neutral');
  readonly CHAOTIC_NEUTRAL = new Alignment(5, 'Chaotic Neutral');
  readonly LAWFUL_EVIL = new Alignment(6, 'Lawful Evil');
  readonly NEUTRAL_EVIL = new Alignment(7, 'Neutral Evil');
  readonly CHAOTIC_EVIL = new Alignment(8, 'Chaotic Evil');

  readonly alignmentMap = new Map([
    [ this.LAWFUL_GOOD.getAlignmentId(), this.LAWFUL_GOOD ],
    [ this.NEUTRAL_GOOD.getAlignmentId(), this.NEUTRAL_GOOD ],
    [ this.CHAOTIC_GOOD.getAlignmentId(), this.CHAOTIC_GOOD ],
    [ this.LAWFUL_NEUTRAL.getAlignmentId(), this.LAWFUL_NEUTRAL ],
    [ this.TRUE_NEUTRAL.getAlignmentId(), this.TRUE_NEUTRAL ],
    [ this.CHAOTIC_NEUTRAL.getAlignmentId(), this.CHAOTIC_NEUTRAL ],
    [ this.LAWFUL_EVIL.getAlignmentId(), this.LAWFUL_EVIL ],
    [ this.NEUTRAL_EVIL.getAlignmentId(), this.NEUTRAL_EVIL ],
    [ this.CHAOTIC_EVIL.getAlignmentId(), this.CHAOTIC_EVIL ],
  ]);

  public getAlignments(): Alignment[] {
    return [this.LAWFUL_GOOD, this.NEUTRAL_GOOD, this.CHAOTIC_GOOD,
      this.LAWFUL_NEUTRAL, this.TRUE_NEUTRAL, this.CHAOTIC_NEUTRAL,
      this.LAWFUL_EVIL, this.NEUTRAL_EVIL, this.CHAOTIC_EVIL];
  }

  getAlignmentById(alignmentId: number) {
    return this.alignmentMap.get(alignmentId);
  }
}
