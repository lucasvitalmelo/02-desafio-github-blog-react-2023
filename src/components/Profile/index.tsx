import {
  FooterProfileContainer,
  ImageProfile,
  InfosProfileContainer,
  LoadAnimated,
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
import { GetUserResponse } from "../../services/github";

interface ProfileProps {
  user?: GetUserResponse
}

export function Profile({ user }: ProfileProps) {
  return (

    <ProfileContainer>

      {user ?
        (
          <>
            <ImageProfile src={user.avatar_url} />

            <InfosProfileContainer>

              <div>
                <TitleProfileContainer>
                  <h1>{user.name}</h1>
                  <a href={user.html_url}> github  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </a>
                </TitleProfileContainer>

                <p>{user.bio}</p>
              </div>

              <FooterProfileContainer>
                <a href="">
                  <FontAwesomeIcon icon={faGithub} />

                  {user.login}
                </a>

                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                  <p>
                    {user.company}
                  </p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <p>
                    {user.following} seguidores
                  </p>
                </span>
              </FooterProfileContainer>

            </InfosProfileContainer>
          </>
        )
        :
        (
          <LoadAnimated>
            <div />
          </LoadAnimated>
        )
      }

    </ProfileContainer>

  )
}