'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import { signIn } from 'next-auth/react'

import Logo from '@components/layout/shared/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports

import AuthIllustrationWrapper from './AuthIllustrationWrapper'

// Next Auth

const LoginV1 = () => {
  const handleLogin = () => {
    // This will redirect the user to Keycloak login
    signIn('keycloak')
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      test : {process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID}
      <AuthIllustrationWrapper>
        <Card className='w-full h-full '>
          <CardContent className='sm:!p-12'>
            <Link href={'/'} className='flex justify-center mbe-6'>
              <Logo />
            </Link>
            <div className='flex flex-col gap-1 mbe-6'>
              <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
              <Typography>Please sign in with your organizational account</Typography>
            </div>
            <div className='flex flex-col gap-6'>
              <Button
                fullWidth
                variant='contained'
                onClick={handleLogin}
                className='py-4 text-lg ' // Tailwind: larger padding + font
                startIcon={
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/2/29/Keycloak_Logo.png?20200311211229'
                    alt='Keycloak Logo'
                    width={28} // increased size
                    height={28}
                    style={{ marginRight: 8 }}
                  />
                }
              >
                Login with Keycloak
              </Button>

              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>New on our platform?</Typography>
                <Typography component={Link} href={'/pages/auth/register-v1'} color='primary.main'>
                  Create an account
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </AuthIllustrationWrapper>
    </div>
  )
}

export default LoginV1
