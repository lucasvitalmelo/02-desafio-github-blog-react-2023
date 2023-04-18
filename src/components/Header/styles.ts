import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 18.5rem;
  background: ${props => props.theme.colors.profile};

  > :nth-child(1) {
    min-width: 0;
    height: 11.75rem;
  }

  > :nth-child(2) {
    height: 6.125rem;
    margin-bottom: 4rem;
  }

  > :nth-child(3) {
    min-width: 0;
    height:14.75rem;
  }


`