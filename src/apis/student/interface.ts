export enum STUDENT_STATE {
  SCHOOL = 'SCHOOL', // 재학
  GRADURATION = 'GRADURATION', // 졸업
  LEAVE = 'LEAVE', // 휴학
  DROP = 'DROP', // 자퇴
  KICK = 'KICK', // 퇴학
}

export interface Student {
  id: number;
  generation: number;
  grade?: number;
  classNumber?: number;
  studentNumber?: number;
  name: string;
  state: STUDENT_STATE;
}

export interface StudentListResponse {
  offset: number;
  totalStudent: number;
  students: Student[];
}

export interface UpdateStudentRequest {
  state: STUDENT_STATE;
  generation: number;
  grade: number;
  classNumber: number;
  studentNumber: number;
  name: string;
} 