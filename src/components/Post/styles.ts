import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  gap: 1.50rem;

  border-radius: 10px;
  background: ${props => props.theme.colors.post};

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

`
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;

  > h1 {
    font-size:${props => props.theme.font.sizes.xl};
    font-weight: 700;
    line-height: 32px;
    color: ${props => props.theme.colors.title};

  }
  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.span};
  }

`