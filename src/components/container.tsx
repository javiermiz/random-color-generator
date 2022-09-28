import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: ${({ background = 'white' }: { background: string }) =>
    background};
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export default Container;
