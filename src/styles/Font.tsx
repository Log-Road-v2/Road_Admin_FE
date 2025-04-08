const fontGenerator = (
  weight: number | string,
  size: number,
  lineHeight: number,
) => ({
  fontWeight: `${weight}`,
  fontSize: `${size / 16}rem`,
  lineHeight: `${lineHeight}%`,
  fontFamily: `'Pretendard', sans-serif`
});

const Font = {
  bold36: fontGenerator(700, 36, 180),
  bold32: fontGenerator(700, 32, 160),
  bold16: fontGenerator(700, 16, 140),
  bold14: fontGenerator(700, 14, 140),
  bold12: fontGenerator(700, 12, 140),
  semi28: fontGenerator(600, 28, 160),
  semi24: fontGenerator(600, 24, 160),
  semi20: fontGenerator(600, 20, 160),
  semi16: fontGenerator(600, 16, 140),
  semi14: fontGenerator(600, 14, 140),
  semi12: fontGenerator(600, 12, 140),
  medium32: fontGenerator(500, 32, 160),
  medium24: fontGenerator(500, 24, 160),
  medium20: fontGenerator(500, 20, 160),
  medium16: fontGenerator(500, 16, 140),
  medium14: fontGenerator(500, 14, 140),
  medium12: fontGenerator(500, 12, 140),
  regular16: fontGenerator(400, 16, 140),
  regular14: fontGenerator(400, 14, 140),
  regular12: fontGenerator(400, 12, 140),
  content: fontGenerator(500, 16, 220),
  subContent: fontGenerator(500, 16, 180),
}

export default Font;