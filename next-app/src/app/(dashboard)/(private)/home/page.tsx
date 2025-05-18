/* eslint-disable import/no-unresolved */
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  console.log('🚀 ~ Home ~ session:', session)

  return (
    <div>
      Your name is {session?.user?.name || ' : not authenticated'}
      <div>test key : {process.env.NEXTAUTH_SECRET}</div>
    </div>
  )
}
