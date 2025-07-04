import styled from '@emotion/styled'
import Color from '../../styles/Color'
import Font from '../../styles/Font'


// 메인 스타일

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding: 120px 0 0;

  @media (max-width: 768px) {
    gap: 32px;
    padding: 82px 0 0;
  }
`

export const DisplayWrapper = styled.main`
  width: 100%;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Section = styled.section`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;

  @media (max-width: 1023px) {
    width: 90vw;
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionHeadLine = styled.p`
  color: ${Color.gray300};
  ${Font.medium14}
`

export const Title = styled.h1`
  text-align: center;
  white-space: pre-line;
  color: ${Color.white};
  ${Font.medium24}
`

export const SectionTitle = styled.h1`
  ${Font.semi28}
`

export const SubTitle = styled.h6`
  color: ${Color.gray500};
  ${Font.medium20}
`

export const ActionWrapper = styled.div`
  position: relative;
  border-radius: 24px 24px 0 0;
  background-color: ${Color.blue800};
  width: 100vw;
  height: 80vh;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1023px) {
    height: 140vh;
  }
`

export const ActionBox = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0;
`

export const ActionHeadLine = styled.b`
  color: ${Color.gray200};
  ${Font.regular14}
`

// 슬라이드 스타일

export const SlideContainer = styled.div<{
  backgroundImage: string
}>`
  width: 90%;
  max-width: 780px;
  height: 420px;
  padding: 5vw 4vw;
  border-radius: 32px;
  background-color: ${Color.gray500};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;

  @media (max-width: 1023px) {
    width: 80%;
    padding: 6vw 5vw;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 35vh;
    padding: 8vw 6vw;
  }
`

export const SlideContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const ImageTitle = styled.h1`
  text-align: center;
  white-space: pre-line;
  color: ${Color.white};
  ${Font.medium32}

  @media (max-width: 768px) {
    ${Font.medium24}
  }
`

export const ImageSubTitle = styled.h6`
  color: ${Color.gray300};
  ${Font.regular14}
`

export const SlideNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const PageDisplay = styled.p`
  white-space: pre;
  color: ${Color.gray200};
  ${Font.medium12}
`

export const PaginationController = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 12px;
  border-radius: 20px;
  background-color: ${Color.gray800};
`

export const PlayBackWrapper = styled.div`
  display: flex;
  align-items: center;
`