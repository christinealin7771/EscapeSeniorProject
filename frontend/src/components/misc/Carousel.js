import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import Marston from '../images/rooms/Marston.png'
import Century from '../images/rooms/Century.png'
import Malachowsky from '../images/rooms/Malachowsky.png'
import Retiz from '../images/rooms/Retiz.png'
import SW from '../images/rooms/SW.png'

const CarouselPic = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <Image src={Marston} style={{ width: '100%'}}/>
        <Carousel.Caption>
          <h3>Room 1</h3>
          <p>Marston</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={Retiz} style={{ width: '100%' }}/>
        <Carousel.Caption>
          <h3>Room 2</h3>
          <p>Retiz</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={SW} style={{ width: '100%' }}  />
        <Carousel.Caption>
          <h3>Room 3</h3>
          <p>Southwest Rec</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={Malachowsky} style={{ width: '100%' }}/>
        <Carousel.Caption>
          <h3>Room 4</h3>
          <p>Malachowsky</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={Century} style={{ width: '100%' }}/>
        <Carousel.Caption>
          <h3>Room 5</h3>
          <p>Century</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </>
  )
}

export default CarouselPic