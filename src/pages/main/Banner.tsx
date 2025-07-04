import { useState, useEffect, useCallback } from "react"
import * as S from "./style"
import { Play, Move } from "../../assets"
import { SlideImageData } from "./Data/data"
import Color from "../../styles/Color"

const Banner = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isImageSlide, setIsImageSlide] = useState<boolean>(true);

  const handlePrev = useCallback(() => {
    setCurrentPage(prev => (prev === 0 ? SlideImageData.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev === SlideImageData.length - 1 ? 0 : prev + 1));
  }, []);

  const toggleSlide = useCallback(() => {
    setIsImageSlide(prev => !prev);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isImageSlide) {
      interval = setInterval(handleNext, 7000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isImageSlide, handleNext]);


  return (
    <S.SlideContainer backgroundImage={SlideImageData[currentPage].image}>
      <S.SlideContent>
        <S.ImageTitle>{SlideImageData[currentPage].title}</S.ImageTitle>
        <S.ImageSubTitle>{SlideImageData[currentPage].subTitle}</S.ImageSubTitle>
      </S.SlideContent>

      <S.SlideNavigation>
        <S.PageDisplay>{`${currentPage + 1} / ${SlideImageData.length}`}</S.PageDisplay>

        <S.PaginationController>
          <Move size={12} color={Color.gray200} rotate="left" onClick={handlePrev} />
          <S.PlayBackWrapper onClick={toggleSlide} >
            {isImageSlide ?
              <Play size={16} color={Color.gray200} /> :
              <Move size={16} color={Color.gray200} rotate="right" />
            }
          </S.PlayBackWrapper>

          <Move size={12} color={Color.gray200} rotate="right" onClick={handleNext} />
        </S.PaginationController>
      </S.SlideNavigation>

    </S.SlideContainer>
  )
}

export default Banner