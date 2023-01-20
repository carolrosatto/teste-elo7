import React from 'react'
import styles from './VideoSection.module.css';
import videoSnapshot from '../../assets/images/placeholder-video.png';

export default function VideoSection() {
  return (
    <section className={styles.videoSectionContainer}>
      <div className={styles.contentContainer}>
        <img
          className={styles.videoSnapshot}
          src={videoSnapshot}
          alt='Preview de um vídeo mostrando o CEO da Elo7, vestido de camisa azul, sorrindo, com uma estante de livros ao fundo'
        />
        <article className={styles.videoInformationContainer}>
          <h3 className={styles.videoTitle}>PALAVRA DO CEO</h3>
          <span className={styles.videoSubtitle}>Carlos Curioni</span>
          <p className={styles.videoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla vulputate, ex ac porttitor convallis, ligula dui vestibulum lacus, id tristique risus nulla id velit.
            Morbi sit amet nibh fermentum, sagittis mauris sit amet, imperdiet lorem. Aenean condimentum tortor vel felis efficitur congue.
            Aliquam non finibus justo. Ut nec facilisis elit, ut rhoncus nunc. Morbi tincidunt mauris magna, et consectetur elit
            sollicitudin vel. Suspendisse venenatis sagittis nibh, vitae pellentesque eros gravida at.
          </p>
        </article>
      </div>
    </section>
  )
}