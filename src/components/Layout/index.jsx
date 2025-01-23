import Header from '../Header'
import BodyInfo from '../bodyInfo'

import { infoEnterprise } from '../../mocks/infoEnterprise'
import { infoSchool } from '../../mocks/infoSchool'
import { morePersonalInfo } from '../../mocks/morePersonalInfo'

export default function Layout() {
  const {
    address, firstName, lastName
  } = morePersonalInfo
  
  return (
      <>
        <Header 
          email={morePersonalInfo.email}
          phoneNumber={morePersonalInfo.phoneNumber}
          address={`${address.road}, ${address.number}, ${address.neighborhood}, ${address.city}`}
          instagram={morePersonalInfo.instagram}
          github={morePersonalInfo.github}
          linkedin={morePersonalInfo.linkedin}
          name={`${firstName} ${lastName}`}
        />

        {infoEnterprise.map(info => {
          return <BodyInfo 
            position={info.position}
            organ={info.enterprise}
            description={info.description}
          />
        })}

        {infoSchool.map(info => {
          return <BodyInfo
            position={info.position}
            organ={info.school}
            description={info.description}
          />
        })}
      </>
  )
}