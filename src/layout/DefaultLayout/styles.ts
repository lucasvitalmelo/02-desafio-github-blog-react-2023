import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  /* background: ${props => props.theme.colors.background}; */
`

export const OutletContainer = styled.div`
  z-index: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-top: -6.5rem;

  align-items: center;
`
