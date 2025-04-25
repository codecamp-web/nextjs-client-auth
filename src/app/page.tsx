"use client"

import { SignedOut, SignInButton,UserButton, SignedIn, useUser } from "@clerk/nextjs"


const Homepage = () => {

  const {isLoaded, isSignedIn, user} = useUser()

  return (
    <div className="flex justify-between w-3/5 mx-auto">
      Home
      <div className="flex">
        <SignedOut>
          <SignInButton>
            <button> Login </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <h1>{user?.firstName}</h1>
      </div>
    </div>
  )
}

export default Homepage
