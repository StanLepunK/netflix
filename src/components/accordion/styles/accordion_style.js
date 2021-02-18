import styled from 'styled-components';

export const Container = styled.section``;
// export const Container = styled.section`
//   display: flex;
//   border-bottom: 8px solid #222;
// `;

// export const Item = styled.div``;
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Frame = styled.div`
  margin-bottom: 10px;
  max-width: 1000px;
`;

export const Title = styled.h1`
  font-size: 25px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: black;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 20px;
  font-weight: normal;
  color: #c0c0c0;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(0);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
// export const Header = styled.div`
//   font-size: 16px;
//   color: black;
//   margin-bottom: 12px;
// `;

export const Body = styled.div`
  max-width: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  color: yellow;
  color: #808080;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
// export const Body = styled.body`
//   color: yellow;
//   margin-bottom: 5px;
//   font-size: 13px;
//   text-decoration: none;
// `;
