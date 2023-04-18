import { HeaderContainer } from "./styles";

import LeftLines from "../../assets/Left_Lines.svg"
import LogoIcon from "../../assets/icon.svg"
import RightLines from "../../assets/Right_Lines.svg"

export function Header() {
  return (

    <HeaderContainer>
      <img src={LeftLines} alt="" />
      <img src={LogoIcon} alt="" />
      <img src={RightLines} alt="" />
    </HeaderContainer>
  )
}