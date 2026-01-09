import React from 'react'
import {SignedIn,SignOutButton, SignUpButton,SignedOut } from '@clerk/nextjs'


export default function Home() {
  return (
    <div>
      <SignedOut>
      <SignUpButton mode='modal'>
          signup
      </SignUpButton>
      </SignedOut>
      <SignedIn>
      <SignOutButton>
        Signout
      </SignOutButton>
      </SignedIn>
      
    </div>
  )
}

 