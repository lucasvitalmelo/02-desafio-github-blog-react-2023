import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.profile};
`

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18.5rem;

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

export const LeftBlur = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  left: -130px;
  top: -96px;

background: #14589C;
filter: blur(200px);
`
export const CenterBlur = styled.div`
  position: absolute;
  width: 891px;
  height: 52px;
  left: calc(50% - 891px/2 - 2.5px);
  top: 235px;

  background: #14589C;
  filter: blur(106px);
`
export const RightBlur = styled.div`
  position: absolute;
  width: 155.25px;
  height: 155.25px;
  right: -15.43px;
  top: -52.14px;

  background: #14589C;
  filter: blur(184px);
  transform: rotate(15deg);
`
