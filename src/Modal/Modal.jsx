import React, { useEffect, useRef, useState } from 'react'
import './Modal.css'
import { GoogleLogin } from '@react-oauth/google'
function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(`entry`, entry, `is = ${entry.isIntersecting}`)
        setVisible(entry.isIntersecting)
      })
    })

    const { current } = domRef
    observer.observe(current)

    return () => observer.unobserve(current)
  }, [])
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default function Modal() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className='transparent'>
        <div className='navbar'>
          <nav>
            <div className='first-row'>
              <div className='logo'>
                <button className='tinder'>
                  <img src='white.png' alt='' className='logo1' />
                  <img src='typo4.png' alt='' />
                </button>
              </div>
              <div className='buttonAll'>
                {' '}
                <div className='dropdown'>
                  <button className='navbutton'>Secutiy</button>
                  <div class='dropdown-content'>
                    <a href='#'> Security 1</a>
                    <a href='#'>Security 2</a>
                    <a href='#'>Security 3</a>
                  </div>
                </div>
                <button className='navbutton'>Preface</button>
                <button className='navbutton'>Services</button>
                <button className='navbutton'>Download</button>
                <button className='navbutton'>Contact</button>
              </div>
            </div>
            <div className='second-row'>
              <button className='language'>Language</button>

              <button onClick={toggleModal} className='login'>
                Login
              </button>
            </div>
          </nav>
        </div>
        <div>
          <div>
            <FadeInSection>
              <div className='register'>
                <div className='fade-in-text'>
                  <p className='text'>Fill In The Gap, Changing The Trend</p>
                  <div class='container'>
                    <div class='center'>
                      <button class='btn' onClick={toggleModal}>
                        {/* <svg
                          width='180px'
                          height='60px'
                          viewBox='0 0 180 60'
                          class='border'
                        >
                          <polyline
                            points='179,1 179,59 1,59 1,1 179,1'
                            class='bg-line'
                          />
                          <polyline
                            points='179,1 179,59 1,59 1,1 179,1'
                            class='hl-line'
                          />
                        </svg> */}
                        <span>Create Account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>

          <div className='modal-content'>
            <div className='modal-text'>
              {/* <div className='full-logo1'>
                <img src='full logo1.png' alt='' />
              </div> */}

              <p className='started'>Get started</p>

              <p className='policy1'>
                By clicking Log In,you agree to our Terms.Learn
              </p>
              <p className='policy2'>
                how we process your data in our Privacy Policy.and
              </p>
              <p className='policy3'>
                <a href='#'>Cookie Policy</a>
              </p>
            </div>{' '}
            <div className='close-modal'>
              <div className='outer'>
                <div className='inner'>
                  <button className='close' onClick={toggleModal}>
                    <label>Back</label>
                  </button>
                </div>
              </div>
            </div>
            <button className='google'>Signin with Google</button>
            <button className='facebook'>Signin with Facebook</button>
            <button className='number'>Signin with Phone Number</button>
            <p className='troubleshooting'>
              <a href='#'>Trouble Logging In?</a>
            </p>
            <p className='gettheapp'>Get The App!</p>
            <button className='Google_play'>
              <img src='/google_play.png' alt='Google_play' />
            </button>
            <button className='apple_store'>
              <img src='/apple.png' alt='' />
            </button>
          </div>
          {/* <div className='close-modal'>
              <button className='close' onClick={toggleModal}>
                CLOSE
              </button>
            </div> */}
        </div>
      )}
    </>
  )
}
