export interface AwardData {
  name: string;
  awardCount: number;
}

export interface CreateContestRequest {
  name: string;
  startDate: string;
  endDate: string;
  purpose: string;
  awards: AwardData[];
}

export enum CONTEST_STATE {
  BEFORE = 'BEFORE', // 시작 전
  NOW = 'NOW', // 진행 중
  VOTING = 'VOTING', // 투표 진행
  PENDING = 'PENDING', // 시상 대기
  FINISHED = 'FINISHED', // 종료됨
}

export interface Contest {
  id: number;
  name: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  state: CONTEST_STATE;
}

export interface ContestListResponse {
  contests: Contest[];
}

export interface ContestDetailResponse {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  purpose: string;
  awards: { name: string }[];
}

export interface UpdateContestRequest {
  name: string;
  startDate: string;
  endDate: string;
  purpose: string;
  awards: AwardData[];
}

export interface UpdateContestStateRequest {
  state: CONTEST_STATE;
} 