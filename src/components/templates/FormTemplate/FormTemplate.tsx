import { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from '../../atoms/Footer';
import { Header } from '../../molecules/Header';
import { Container } from '../../layouts/Container/Container';

interface IFormTemplate {
  children: ReactNode;
}

export const FormTemplate = ({ children }: IFormTemplate) => (
  <WrapperSt>
    <Header />
    <Container>
      <ContentSt>{children}</ContentSt>
      <Footer />
    </Container>
  </WrapperSt>
);

const WrapperSt = styled.div`
  max-width: calc(100% - 600px);
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: auto;
  position: relative;
`;

const ContentSt = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 160px);
  padding: 0 0 0 0;
`;
