import { instance } from "../Axios";
import { AwardData, CreateContestRequest, ContestListResponse, ContestDetailResponse, UpdateContestRequest, UpdateContestStateRequest, CONTEST_STATE } from "./interface";

export const createContest = async (data: CreateContestRequest) => {
  const response = await instance.post(`/contest`, data);
  return response.data;
};

export const getContestList = async (): Promise<ContestListResponse> => {
  const response = await instance.get(`/contest`);
  return response.data;
};

export const getContestDetail = async (contestId: number): Promise<ContestDetailResponse> => {
  const response = await instance.get(`/contest/${contestId}`);
  return response.data;
};

export const updateContest = async (contestId: number, data: UpdateContestRequest) => {
  const response = await instance.patch(`/contest/${contestId}`, data);
  return response.data;
};

export const updateContestState = async (contestId: number, data: UpdateContestStateRequest) => {
  const response = await instance.patch(`/contest/${contestId}/state`, data);
  return response.data;
};
