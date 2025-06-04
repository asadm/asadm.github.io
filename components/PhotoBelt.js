// components/PhotoBelt.js (Fresh Embla Implementation)
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import styles from './PhotoBelt.module.css';

const images = [
  "/assets/img/belt/photos1.jpeg",
  "/assets/img/belt/photos2.jpeg",
  "/assets/img/belt/photos3.jpeg",
  "/assets/img/belt/photos4.jpeg",
  "/assets/img/belt/photos5.jpeg",
  "/assets/img/belt/photos6.jpeg",
  "/assets/img/belt/photos7.jpeg",
  "/assets/img/belt/photos8.jpeg",
  "/assets/img/belt/photos11.gif",
  "/assets/img/belt/photos22.gif"
];

const PhotoBelt = () => {
  console.log('PhotoBelt (Fresh Embla): Component rendering.');

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true, // For direct, non-snapping drag
      align: 'start', // Align slides to the start of the viewport
    },
    [
      AutoScroll({
        speed: 1,
        playOnInit: false, // Auto-scroll is initially off
        stopOnInteraction: false, // Auto-scroll resumes after user interaction
        stopOnMouseEnter: true, // Pause auto-scroll on mouse hover
      })
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log('PhotoBelt (Fresh Embla): emblaApi is available.', emblaApi);
      // Optional: Log some events if needed for debugging later
      // emblaApi.on('select', () => console.log('Embla event: select', emblaApi.selectedScrollSnap()));
      // emblaApi.on('dragStart', () => console.log('Embla event: dragStart'));
      // emblaApi.on('dragEnd', () => console.log('Embla event: dragEnd'));
    } else {
      console.log('PhotoBelt (Fresh Embla): emblaApi is NOT YET available in useEffect.');
    }
  }, [emblaApi]);

  return (
    <div className={styles.beltWrapper} ref={emblaRef}>
      <div className={styles.belt}>
        {images.map((src, index) => (
          <div className={styles.beltItem} key={index}>
            <img src={src} alt={`Photo ${index + 1}`} draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBelt;
