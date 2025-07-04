import * as S from "./style";
import Input from "../../components/Input/index";
import TextArea from "../../components/TextArea/index";
import CalendarInput from "../../components/Calendar/input";
import { useWriteStore } from "../../stores/useWriteStore";
import AwardInput from "./Input/AwardName";

interface PropsType {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

interface InformationProps {
  onSubmit?: () => void;
}

const dateInputs = [
  { key: "startDate", label: "시작일을 입력해주세요" },
  { key: "endDate", label: "종료일을 입력해주세요" },
] as const;

const FormSection = ({ label, required = false, children }: PropsType) => (
  <S.InfoSection>
    <S.TextBox>
      <S.SectionDetailText>{label}</S.SectionDetailText>
      {required && <S.Required>*</S.Required>}
    </S.TextBox>
    {children}
  </S.InfoSection>
);

const Information = ({ onSubmit }: InformationProps) => {
  const { info, setInfo } = useWriteStore();

  // 폼 유효성 검사 함수
  const validateForm = () => {
    if(!info.projectName || !info.startDate || !info.endDate || !info.introduction || info.awards.length === 0) {
      console.log("필수 항목을 입력해라");
      return false;      
    }
    return true;
  };

  // 부모 컴포넌트에서 호출할 수 있도록 validateForm을 전역에 노출
  if (onSubmit) {
    // onSubmit이 전달되면 validateForm을 포함한 함수로 래핑
    const wrappedOnSubmit = () => {
      if (validateForm()) {
        onSubmit();
      }
    };
    
    // 부모 컴포넌트에서 접근할 수 있도록 window 객체에 임시로 저장
    (window as any).validateRallyForm = validateForm;
  }

  return (
    <S.InformationContainer>
      <S.Line />
      <FormSection label="대회명" required>
        <Input
          value={info.projectName}
          placeholder="대회 이름을 입력해주세요"
          label=""
          error="대회명을 작성해주세요"
          onChange={(e) => setInfo({ projectName: e.target.value })}
        />
      </FormSection>

      <FormSection label="대회 일정" required>
        <S.ContentWrapper>
          {dateInputs.map(({ key, label }) => (
            <CalendarInput
              key={key}
              val={info[key]}
              setVal={(val) => setInfo({ [key]: val })}
              describe={label}
            />
          ))}
        </S.ContentWrapper>
      </FormSection>

      <FormSection label="대회 목적" required>
        <TextArea
          value={info.introduction}
          placeholder="대회 목적을 간단하게 작성해주세요"
          onChange={(e) => setInfo({ introduction: e.target.value })}
        />
      </FormSection>

      <FormSection label="상 등록" required>
        <AwardInput />
      </FormSection>

    </S.InformationContainer>
  );
};

export default Information;
