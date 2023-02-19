import React, { useEffect, useRef, useState } from 'react'
import './Modal.css'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
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
  const [user, setuser] = useState(false)
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  const [modal2, setModal2] = useState(false)
  const toggleModal2 = () => {
    setModal2(!modal2)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if (modal2) {
    document.body.classList.add('active-modal2')
  } else {
    document.body.classList.remove('active-modal2')
  }
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        )

        console.log(res.data)
        setuser(res.data)
      } catch (err) {
        console.log(err)
      }
    },
  })
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
              {user ? (
                <div className='user'>
                  {user.given_name} <button className='logout'>Logout</button>
                </div>
              ) : (
                <button onClick={toggleModal} className='login'>
                  Login
                </button>
              )}
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
                      <button class='btn-modal2' onClick={toggleModal2}>
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
      {modal2 && (
        <div>
          <div>enter your mobile number</div>
        </div>
      )}

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
            <div>
              {' '}
              <button className='google' onClick={() => login()}>
                Signin with Google
              </button>
            </div>
            <button className='facebook'>Signin with Facebook</button>
            <button className='number' onClick={toggleModal2}>
              Signin with Phone Number
            </button>
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

      {modal2 && (
        <div className='modal2'>
          <div onClick={toggleModal2} className='overlay2'></div>

          <div className='modal-content2'>
            <div className='modal-text2'>
              {/* <div className='full-logo1'>
                <img src='full logo1.png' alt='' />
              </div> */}

              <p className='started2'>Create Account</p>
            </div>{' '}
            <div className='close-modal2'>
              <div className='outer2'>
                <div className='inner2'>
                  <button className='close2' onClick={toggleModal2}>
                    <label>Back</label>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className='field'>
                <div className='input_field'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                  />
                </div>
                <div className='input_field'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                  />
                </div>
                <div className='input_field'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Re-type Password'
                    required
                  />
                </div>
                <div className='input_field'></div>
                <div className='input_field'></div>
              </div>
            </div>
            <p className='gettheapp'>Get The App!</p>
            <button className='Google_play'>
              <img src='/google_play.png' alt='Google_play' />
            </button>
            <button className='apple_store'>
              <img src='/apple.png' alt='' />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
