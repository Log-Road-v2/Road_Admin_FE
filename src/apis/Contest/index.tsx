import { instance } from "../Axios";
import { AwardData, CreateContestRequest, ContestListResponse, ContestDetailResponse, UpdateContestRequest, UpdateContestStateRequest, CONTEST_STATE } from "./interface";

export const createContest = async (data: CreateContestRequest) => {
  const response = await instance.post(`/contest`, data);
  return response.data;
};

export const getContestList = async (offset?: number, limit?: number): Promise<ContestListResponse> => {
  // 서버에서 다양한 페이지네이션 파라미터명을 사용할 수 있으므로 여러 가지로 시도
  const params: any = {};
  
  if (offset !== undefined) {
    params.offset = offset;
    params.page = Math.floor(offset / (limit || 10)) + 1; // offset을 page로 변환
  }
  
  if (limit !== undefined) {
    params.limit = limit;
    params.size = limit;
    params.per_page = limit;
  }
  
  console.log('Contest API 요청 파라미터:', params);
  
  const response = await instance.get(`/contest`, {
    params,
  });
  
  console.log('Contest API 응답:', response.data);
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
