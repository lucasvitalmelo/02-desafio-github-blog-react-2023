import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 54rem;
  height: 100%;
`
export const PublicationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  > p {
    font-weight: 700;
    font-size: 18px;

    color: ${props => props.theme.colors.subtitle};
  }

  > span {
    font-weight: 400;
    font-size: 14px;

    color: ${props => props.theme.colors.span};
  }
`
export const SearchPublicationsInput = styled.input`
  width: 100%;

  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  
  background: ${props => props.theme.colors.input};
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
`

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  margin-bottom: 3rem;
`
