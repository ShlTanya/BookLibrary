import { ReactNode } from 'react';
import styled from 'styled-components';

interface IContainer {
  children: ReactNode;
}

export const Container = ({ children }: IContainer) => <ContainerSt>{children}</ContainerSt>;

const ContainerSt = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: auto;
`;
