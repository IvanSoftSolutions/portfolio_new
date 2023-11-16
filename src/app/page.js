import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNodeJs, faReact, faPython, faAws, faApple, faAndroid, faGithub, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <div className={styles.title}>
          <h1>SoftSolutions</h1>
          <h2>Soluciones suaves para problemas dificiles</h2>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.grid2}>
          <div>
            <h1> Ivan Daniel Hernández Rocha </h1>
            <h3>Ing. en Sistemas Computacionales </h3>
            <h3> Desarrollador de Software</h3>
          </div>
          <div>
            <Image
              src="/1.jpg"
              alt="Next.js Logo"
              // fill={true}
              width={255}
              height={255}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.gridStack}>
        <FontAwesomeIcon icon={faJs} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faNodeJs} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faReact} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faPython} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faDatabase} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faAws} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faApple} style={{ height: "5em" }} />
        <FontAwesomeIcon icon={faAndroid} style={{ height: "5em" }} />
      </div>

      <div className={styles.center}>
        <div className={styles.subtitle}>
          <h2>Proyectos</h2>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.card}>
          <a
            href="https://utopia-rnttb2v36-ivansoftsolutions-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Utopia WebApp <span>-&gt;</span>
            </h2>
            <p>Una aplicación de administracion y control de inventario para una compañía de pieles.</p>
            <p>React, MongoDB </p>
          </a>
          <a
            href="https://github.com/IvanSoftSolutions/utopia_new"
            target='_blank'>
            <FontAwesomeIcon icon={faGithub} style={{ height: "2em" }} />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.subtitle}>
          <h2>Contacto</h2>
        </div>
      </div>
      <div className={styles.grid}>
        <a href="https://twitter.com/_SoftSolutions" target='_blank'>
          <FontAwesomeIcon icon={faTwitter} style={{ height: "2em" }} />
        </a>
        <a href="https://www.instagram.com/softsolutionsmx/" target='_blank'>
          <FontAwesomeIcon icon={faInstagram} style={{ height: "2em" }} />
        </a>
        <a href="https://www.tiktok.com/@softsolutions_mx" target='_blank'>
          <FontAwesomeIcon icon={faTiktok} style={{ height: "2em" }} />
        </a>
        <a href="" >
          <FontAwesomeIcon icon={faEnvelope} style={{ height: "2em" }} />
        </a>
      </div>
      <div className={styles.grid}>
        <p>@_SoftSolutions</p>
        <p>softsolutionsmx</p>
        <p>softsolutions_mx</p>
        <p>softsolutions4@outlook.com</p>
      </div>

    </main>
  )
}
