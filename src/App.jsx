import Header from './components/Header'
import BodyInfo from './components/bodyInfo'

import { infoEnterprise } from './mocks/infoEnterprise'

export default function App() {
  return (
    <>
      <Header 
        email="meuemail@gmail.com"
        phoneNumber="(meu) tele-fone"
        address="Rua minha casa, 212"
        instagram="@meuinstagram"
        github="meuGitHub"
        linkedin="meulinkedin"
      />

      {infoEnterprise.map(info => {
        return <BodyInfo 
          position={info.position}
          enterprise={info.enterprise}
          description={info.description}
        />
      })}
    </>
  )
}