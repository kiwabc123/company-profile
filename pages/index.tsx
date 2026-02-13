import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
    <>
      <Head>
        <title>FAIR PRICE SUPPLY CO., LTD. | Hotel & Spa Supply Specialist</title>
        <meta name="description" content="FAIR PRICE SUPPLY CO., LTD. is your trusted partner for premium hotel and spa supplies. Discover quality products to elevate guest experiences and support hospitality businesses." />
        <meta name="keywords" content="hotel supply, spa supply, hospitality, guest amenities, wholesale, FAIR PRICE SUPPLY CO., LTD." />
        <meta property="og:title" content="FAIR PRICE SUPPLY CO., LTD. | Hotel & Spa Supply Specialist" />
        <meta property="og:description" content="Premium hotel and spa supplies for hospitality businesses. Trusted by hotels and spas for quality and value." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fairpricesupply.com/" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <div className={styles.container}>
        <section className={styles.hero}>
          <Image
            src="/images/home-hero.jpg"
            alt="Hotel & Resort Supply Specialist - LCP Hero"
            sizes="100vw"
            style={{
              objectFit: 'cover',
              zIndex: 0,
            }}
            layout='fill'
            priority
            // Use blur placeholder for low-res preview
            placeholder="blur"
            blurDataURL="/images/home-hero-blur.jpg"
          // Natural dimensions proportional to display size and pixel ratio
          // (Assume hero image is 1920x1080 for full HD clarity)
          />
          <div className={styles.heroOverlay} style={{ position: 'relative', zIndex: 1 }}>
            <h1 className={styles.title}>Hotel & Resort Supply Specialist</h1>
            <p className={styles.description}>
              Supplying hotels, resorts, and spas with quality linens, amenities, and hospitality essentials.<br />
              <span style={{ fontWeight: 500, color: '#A86E6A', fontSize: '1.08rem', display: 'block', marginTop: '0.7em' }}>
                Trusted by leading hospitality businesses across Thailand.
              </span>
            </p>
            <a href="/products" className={styles.heroCta}>
              View Products
            </a>
          </div>
        </section>
        <section className={styles.aboutStrip}>
          <div className={styles.aboutProof}>
            <span>10+ Years Experience</span>
            <span>| Hotel & Spa Focus</span>
            <span>| Wholesale Supply</span>
          </div>
        </section>

        <Discover items={discoverItems} />
        <section style={{ margin: '3rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 700, fontSize: '2rem' }}>Why Choose Us</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: 1000,
            margin: '0 auto',
          }}>
            <div
              style={{
          flex: '1 1 250px',
          minWidth: 250,
          background: '#f7faf7',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 2px 12px #0001',
          textAlign: 'center',
              }}
            >
              <img
          src="/images/hotelstaff.jpg"
          alt="Expertise"
          style={{
            width: '100%',
            height: 160,
            objectFit: 'cover',
            borderRadius: '0.75rem',
            marginBottom: 16,
          }}
              />

              <h3
          style={{
            fontWeight: 600,
            fontSize: '1.2rem',
            marginBottom: 8,
          }}
              >
          Experience & Expertise
              </h3>

              <p style={{ color: '#444', fontSize: '1rem' }}>
          Our seasoned team brings deep expertise in the hotel and spa industry, providing expert guidance tailored to your needs.
              </p>
            </div>

            <div style={{
              flex: '1 1 250px',
              minWidth: 250,
              background: '#f7faf7',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
              boxShadow: '0 2px 12px #0001',
              textAlign: 'center',
            }}>
              <img src="/images/whitetowels.jpg" alt="Product Quality" style={{
          width: '100%',
          height: 160,
          objectFit: 'cover',
          borderRadius: '0.75rem',
          marginBottom: 16,
              }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 8 }}>Premium Quality Products</h3>
              <p style={{ color: '#444', fontSize: '1rem' }}>Carefully curated premium-grade products that are durable and perfectly suited for hotel and spa operations.</p>
            </div>
            <div style={{
              flex: '1 1 250px',
              minWidth: 250,
              background: '#f7faf7',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
              boxShadow: '0 2px 12px #0001',
              textAlign: 'center',
            }}>
              <img src="/images/customerservice.jpg" alt="Fast Service" style={{
          width: '100%',
          height: 160,
          objectFit: 'cover',
          borderRadius: '0.75rem',
          marginBottom: 16,
              }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 8 }}>Fast & Attentive Service</h3>
              <p style={{ color: '#444', fontSize: '1rem' }}>On-time delivery with dedicated after-sales support that cares about every detail.</p>
            </div>
          </div>
        </section>

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
    </>
  );
};

export default Home;
