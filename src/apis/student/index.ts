import { instance } from "../Axios";
import { StudentListResponse, UpdateStudentRequest } from "./interface";

export const getStudentList = async (
  offset?: number,
  grade?: number,
  classNumber?: number,
  keyword?: string
): Promise<StudentListResponse> => {
  // 서버에서 다양한 페이지네이션 파라미터명을 사용할 수 있으므로 여러 가지로 시도
  const params: any = {};

  if (offset !== undefined) params.offset = offset;
  if (grade !== undefined) params.grade = grade;
  if (classNumber !== undefined) params.classNumber = classNumber;
  if (keyword !== undefined) params.keyword = keyword;

  console.log("Student API 요청 파라미터:", params);

  const response = await instance.get(`/student`, {
    params: {
      offset,
      grade,
      classNumber,
      keyword,
    },
  });

  console.log("Student API 응답:", response.data);
  return response.data;
};

export const updateStudent = async (
  studentId: number,
  data: UpdateStudentRequest
) => {
  const response = await instance.patch(`/student/${studentId}`, data);
  return response.data;
};

export const deleteStudent = async (studentId: number) => {
  const response = await instance.delete(`/student/${studentId}`);
  return response.data;
};
