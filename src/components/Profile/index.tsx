import {
  FooterProfileContainer,
  ImageProfile,
  InfosProfileContainer,
  ProfileContainer,
  TitleProfileContainer
} from "./styles"

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ImageProfile src="https://avatars.githubusercontent.com/lucasvitalmelo" />

      <InfosProfileContainer>

        <div>
          <TitleProfileContainer>
            <h1>Lucas Vital de Melo</h1>
            <a href=""> github  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </a>
          </TitleProfileContainer>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </div>

        <FooterProfileContainer>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />

            lucasvitalmelo
          </a>
          <a href="">
            <FontAwesomeIcon icon={faBuilding} />
            Cromai
          </a>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </p>
        </FooterProfileContainer>

      </InfosProfileContainer>
    </ProfileContainer>

  )
}