export interface Streak {
  startDate: Date;
  lengthInWeeks: number;
  positions: number[];
  offset: number;
}

export interface Record {
  trackId: string;
  streaks: Streak[];
}
