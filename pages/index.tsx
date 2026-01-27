import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef, useState } from 'react';
import Discover from '../components/Discover/Discover';
import { discoverItems } from '../components/Discover/discover.data';
import Detail from '../components/Detail/Detail';


const products = [
  {
    id: 1,
    name: 'Product A',
    description: 'High-quality product for modern businesses.',
    image: '/images/product-a.jpg',
  },
  {
    id: 2,
    name: 'Product B',
    description: 'Reliable and efficient solution for your needs.',
    image: '/images/product-b.jpg',
  },
  {
    id: 3,
    name: 'Product C',
    description: 'Affordable and scalable for growing companies.',
    image: '/images/product-c.jpg',
  },
  {
    id: 4,
    name: 'Product D',
    description: 'Premium support and integration.',
    image: '/images/product-d.jpg',
  },
    {
    id: 5,
    name: 'Product D',
    description: 'Premium support and integration.',
    image: '/images/product-d.jpg',
  },
    {
    id: 6,
    name: 'Product D',
    description: 'Premium support and integration.',
    image: '/images/product-d.jpg',
  },
];


const Home: NextPage = () => {
const pauseRef = useRef(false)
console.log(pauseRef);
const DURATION = 5000
 const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      drag: false,
      slides: { perView: 4, spacing: 24 },
      created(slider) {
        slider.moveToIdx(5, true, {
          duration: 20000,
          easing: (t) => t,
        })
      },
      updated(slider) {
        slider.moveToIdx(slider.track.details.abs + 5, true, {
          duration: 20000,
          easing: (t) => t,
        })
      },
      animationEnded(slider) {
        slider.moveToIdx(slider.track.details.abs + 5, true, {
          duration: 20000,
          easing: (t) => t,
        })
      },
    },
    [
      (slider) => {
        let mouseOver = false

        slider.container.addEventListener('mouseenter', () => {
          mouseOver = true
          slider.animator.stop()
        })

        slider.container.addEventListener('mouseleave', () => {
          mouseOver = false
          slider.moveToIdx(slider.track.details.abs + 5, true, {
            duration: 20000,
            easing: (t) => t,
          })
        })
      },
    ]
  )
  // Pause on mouse over, resume on mouse leave
    const handleMouseOver = () => {
      pauseRef.current = true
    }

    const handleMouseOut = () => {
      pauseRef.current = false
    }


  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>FAIR PRICE SUPPLY CO., LTD.</h1>
          <p className={styles.description}>
            Your trusted partner for premium hotel and spa supplies. Discover our wide range of quality products designed to elevate guest experiences and support hospitality businesses.
          </p>
        </div>
      </section>
       <section className={styles.fullScreen}><Detail></Detail> </section>
      
      <Discover items={discoverItems} />

      <section className={styles.products}>
        <h2>Our Customers</h2>
        <div
          ref={sliderRef}
          className={`keen-slider ${styles.slider}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {products.map((product) => (
            <div className="keen-slider__slide" key={product.id}>
              <div className={styles.card}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={240}
                  height={120}
                  style={{ width: '100%', borderRadius: '1rem', marginBottom: '1rem', objectFit: 'cover', minHeight: 120 }}
                />
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
