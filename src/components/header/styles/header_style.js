import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: black;
`;

export const Frame = styled.div``;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: flex;
  align-items: center;
  height: 70px;
  background: black;
  color: red;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  text-align: right;
`;
