import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../UserContext'

export default function Worker_main() {

  const {userData}= useContext(UserContext)

  return (
    <div>Worker_dashboard
      <br />
      id: {userData.id} <br />
      type: {userData.type} <br />
      email: {userData.emailorphone} <br />
    </div>
  )
}
