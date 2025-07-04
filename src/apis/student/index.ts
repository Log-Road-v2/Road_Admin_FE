import { instance } from "../Axios";
import { StudentListResponse, UpdateStudentRequest } from "./interface";

export const getStudentList = async (offset: number, limit: number): Promise<StudentListResponse> => {
  const response = await instance.get(`/student`, {
    params: { offset, limit },
  });
  return response.data;
};

export const updateStudent = async (studentId: number, data: UpdateStudentRequest) => {
  const response = await instance.patch(`/student/${studentId}`, data);
  return response.data;
};

export const deleteStudent = async (studentId: number) => {
  const response = await instance.delete(`/student/${studentId}`);
  return response.data;
}; 