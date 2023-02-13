import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
      <div>
        <div className='quote'>
          <div className='first_quote'>
            <div className='first_name'>Magdalena & annie</div>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </div>
          <div className='second_quote'>
            <div className='second_name'>shihab</div>
            Use the text generator to create your own text! The Lorem Ipsum
            online text generator creates fictitious, fake, causal, or
            placeholder text.
          </div>
          <div className='third_quote'>
            <div className='third_name'>Abdullah Al mamun</div>
            Use the text generator to create your own text! The Lorem Ipsum
            online text generator creates fictitious, fake, causal, or
            placeholder text.
          </div>
        </div>
        <div className='inform'>
          <div className='first'>
            <h3 className='item'>Legal</h3>

            <div className='item1'>
              <ul>Privacy</ul>
              <ul>Terms</ul>
              <ul>Cookies</ul>
            </div>
          </div>
          <div className='first'>
            <h3 className='item'>career</h3>
            <div className='item1'>
              <ul>career portal</ul>
              <ul>career blog</ul>
            </div>
          </div>
          <div className='first'>
            <h3 className='item'>social</h3>
            <div className='item2'>
              {' '}
              <ul>fb</ul>
              <ul>insta</ul>
              <ul>youtuve</ul>
              <ul>twitter</ul>
            </div>
          </div>
          <div className='first'>
            <h3 className='item'>FAQ</h3>
            <div className='item1'>
              <ul>destination</ul>
              <ul>press room</ul>
              <ul>contact</ul>
              <ul>promocode</ul>
            </div>
          </div>
        </div>

        <div className='download'>
          <p className='title'>Get The App!</p>
          <div>
            {' '}
            <button className='Google_play'>
              <img src='/google_play.png' alt='Google_play' />
            </button>
          </div>
          <div className='applae_store'>
            {' '}
            <button className='apple_store'>
              <img src='/apple.png' alt='' />
            </button>
          </div>
        </div>
        <div className='footer-text'>
          Single people, listen up: If you're looking for love, want to start
          dating, or just keep it casual, you need to be on Tinder. With over 55
          billion matches made, it's the place to be to meet your next best
          match. Let's be real, the dating landscape looks very different today,
          as most people are meeting online. With Tinder, the world's most
          popular free dating app, you have millions of other single people at
          your fingertips and they're all ready to meet someone like you.
          Whether you're straight or in the LGBTQIA community, Tinder's here to
          bring you all the sparks.
        </div>
        <div className='last'>
          <button className='all'>FAQ /</button>
          <button className='all'>Safty Tips /</button>
          <button className='all'>Terms /</button>
          <button className='all'>Cookie Policy</button>
        </div>
      </div>
    </>
  )
}
