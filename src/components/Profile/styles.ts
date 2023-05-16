import styled from "styled-components";

export const ProfileContainer = styled.header`
  height: 212px;
  padding: 2rem;
  padding-left: 2.5rem;
  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  display: flex;
  gap: 2rem;
`

export const InfosProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  > div > p {
    color: ${props => props.theme.colors.text};

  }
`

export const ImageProfile = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 0.625rem;
`

export const TitleProfileContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  justify-content: space-between;
  width: 100%;

  > h1 {
    color: ${props => props.theme.colors.title};
    font-size: ${props => props.theme.font.sizes["2xl"]};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 8px;

    text-transform:  uppercase;
    font-weight: 700;
    font-size: small;
    color: ${props => props.theme.colors.blue};   
    
    > svg {
      color: ${props => props.theme.colors.blue};
    }
  }

`

export const FooterProfileContainer = styled.footer`
  display: flex;
  gap: 24px;

  > a, span {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;
    color: ${props => props.theme.colors.subtitle};
    
    > svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme.colors.label};  
    }
  }

  > a:hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`

export const LoadAnimated = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
  position: absolute;
  border: 4px solid ${props => props.theme.colors.label};
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