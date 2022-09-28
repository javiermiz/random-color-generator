import styled from 'styled-components';

type Props = {
  color?: string;
};

const Subtitle = styled.h2<Props>`
  font-size: clamp(20px, 4vw, 25px);
  color: ${({ color = 'black' }) => color};
  margin: 0;
  text-shadow: rgb(0 0 0 / 14%) 0px 0px 20px;
`;

export default Subtitle;
