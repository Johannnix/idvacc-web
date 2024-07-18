import { Carousel } from 'flowbite-react';
import React from 'react';
import Image from 'next/image';
import imgOne from '~/assets/images/carousel/1.png';
import imgTwo from '~/assets/images/carousel/2.png';
import imgThree from '~/assets/images/carousel/3.png';
import imgFour from '~/assets/images/carousel/4.png';
import imgFive from '~/assets/images/carousel/5.png';
import imgSix from '~/assets/images/carousel/6.png';
import imgSeven from '~/assets/images/carousel/7.png';

const CarouselFlow = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        <Image src={imgOne} alt="Slide 1" />
        <Image src={imgTwo} alt="Slide 2" />
        <Image src={imgThree} alt="Slide 3" />
        <Image src={imgFour} alt="Slide 4" />
        <Image src={imgFive} alt="Slide 5" />
        <Image src={imgSix} alt="Slide 6" />
        <Image src={imgSeven} alt="Slide 7" />
      </Carousel>
    </div>
  );
};

export default CarouselFlow;
