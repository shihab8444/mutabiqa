import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  }
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='border'>
          <span className='box'>
            <h3 className='header'>first header</h3>
            <h5>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
            </h5>
          </span>
        </div>
        <div className='border'>
          <span className='box'>
            <h3 className='header'>second header</h3>
            <h5>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document o
              emphasise design elements over content.
            </h5>
          </span>
        </div>
        <div className='border'>
          <h3 className='header'>third header</h3>
          <span className='box'>
            <h5>
              Lorem ipsum is a pseudo-Latin text used in web design, typography,
              layout, and printing in place of English to emphasise design
              elements over content.
            </h5>
          </span>
        </div>
        <div className='border'>
          <span className='box'>
            <h3 className='header'>fourth header</h3>
            <h5>
              Use the text generator to create your own text! The Lorem Ipsum
              online text generator creates fictitious, fake, causal, or
              placeholder text.
            </h5>
          </span>
        </div>
        <div className='border'>
          <span className='box'>
            <h3 className='header'>fifth header</h3>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </h5>
          </span>
        </div>
        <div className='border'>
          <span className='box'>
            <h3 className='header'>sixth header</h3>
            <h5>
              Quickly generate Lorem Ipsum placeholder text. Select a desired
              length and choose between paragraphs, words, bytes or lists.
              Toggle between HTML and rich
            </h5>
          </span>
        </div>
      </Slider>
    </div>
  )
}
