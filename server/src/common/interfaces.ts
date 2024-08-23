export interface Organizer {
  id: string;
  name: string;
  type: string;
  rating: number;
  totalevents: number;
  contactinformation: string;
  dorefund: boolean;
}

export interface Event {
  id: number;
  organizer_id: number;
  name: string;
  description: string;
  attendance: number;
  fee: number;
  tags: string;
  startDate: Date;
  endDate: Date;
  location: string;
}

export interface RewardProgram {
  id: number;
  organizer_id: number;
  threshold: number;
  discount: number;
  name: string;
  description: string;
}

export interface UserReward {
  user_id: string;
  reward_id: number;
  points: number;
}
