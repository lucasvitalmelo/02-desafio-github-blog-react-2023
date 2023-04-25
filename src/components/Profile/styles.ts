import styled from "styled-components";

export const ProfileContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width:  100%;
  height: 13.25rem;
  padding: 2rem;
  gap: 2rem;

  border-radius: 0.625rem;
  background: ${props => props.theme.colors.profile};   
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

  > a, p {
    display: flex;
    align-items: center;
    gap: 8px;

    text-transform:  uppercase;
    font-weight: 700;
    font-size: small;
    color: ${props => props.theme.colors.subtitle};

    text-decoration: none;
    
    > svg {
      color: ${props => props.theme.colors.label};  
    }
  }

  > a:hover {
    transition: 0.2s;
    opacity: 0.8;
  }

`