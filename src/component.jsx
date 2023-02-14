import React from 'react'
import Modal from './Modal/Modal'
// import Slider from './slider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Footer from './footer'

function component() {
  return (
    <>
      <GoogleOAuthProvider clientId='667088167133-9mvrj6buh858uta30mi18bsi3tga93bj.apps.googleusercontent.com'>
        <Modal />
        {/* <Slider /> */}
        <Footer />
      </GoogleOAuthProvider>
      ;
    </>
  )
}

export default component
