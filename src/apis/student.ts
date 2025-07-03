import { instance } from "./index";

const path = '/student'

export const handleUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    await instance.post(`${path}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log("학생 문서 추가 완료", file);
  } catch (error) {
    console.error(error)
  }
}