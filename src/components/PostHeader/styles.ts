import styled from 'styled-components'

export const PostCard = styled.div`
  height: 168px;
  padding: 2rem;
  padding-left: 2.5rem;

  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > img {
    height: 100%;
    border-radius: 8px;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  > a,
  button {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;

    :visited {
      color: ${({ theme }) => theme.colors.blue};
    }

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      margin-bottom: -2px;
      cursor: pointer;
    }

    > svg {
      -webkit-text-stroke: 4px white;
    }
  }
`

export const ContentCard = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  > h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.font.sizes['2xl']};
  }

  > div:last-child {
    margin-top: auto;

    display: flex;
    gap: 1.5rem;

    > span {
      line-height: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.span};
    }
  }
`

export const LoadAnimated = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
    position: absolute;
    border: 4px solid ${(props) => props.theme.colors.label};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`
