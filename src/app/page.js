'use client'
import { useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faNodeJs, faReact, faPython, faAws, faApple, faAndroid, faGithub, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    event.preventDefault();

  };

  const sendMail = (event) => {
    event.preventDefault();

    let data = {
      email: email,
      name: name,
      message: message
    }

    axios
      .post('https://utopia-new-api.onrender.com/send_mail/', data)
      .then((response) => {
        if (response.status === 201) {
          setOpenError(false);
          setOpenSuccess(true);
        }
        // console.log(response.data.data);
      })
      .catch((error) => {
        setOpenSuccess(false);
        setOpenError(true);
        console.log(error);
      })
  }

  return (
    <>
      <header>
        <div className={styles.header}>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <Link href="/cv">CV</Link>
        </div>
      </header>
      <main className={styles.main}>
        <section id='intro'>
          <div className={styles.center}>
            <div className={styles.title}>
              <h1>SoftSolutions</h1>
              <h2>Soluciones suaves para problemas dificiles</h2>
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.grid2}>
              <div>
                <h1> Iván Daniel Hernández Rocha </h1>
                <h3>Ing. en Sistemas Computacionales </h3>
                <h3>Desarrollador de Software</h3>
              </div>
              <div>
                <Image
                  src="/profile_site.jpg"
                  alt="Profile Picture"
                  // fill={true}
                  width={220}
                  height={340}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id='stack'>
          <div className={styles.gridStack}>
            <FontAwesomeIcon icon={faSquareJs} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faNodeJs} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faReact} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faPython} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faDatabase} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faAws} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faApple} style={{ height: "5em" }} />
            <FontAwesomeIcon icon={faAndroid} style={{ height: "5em" }} />
          </div>
        </section>
        <section id='projects'>
          <div className={styles.center}>
            <div className={styles.subtitle}>
              <h2>Proyectos</h2>
            </div>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <a
                href="https://utopia-rnttb2v36-ivansoftsolutions-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Utopia WebApp -&gt;
                </h2>
                <p>Una aplicación de administracion y control de inventario para una compañía de pieles. <strong>Online</strong></p>
                <p>Next.js, React </p>
              </a>
              <a
                className={styles.cardGithubIcon}
                href="https://github.com/IvanSoftSolutions/utopia_new"
                target='_blank'>
                <FontAwesomeIcon icon={faGithub} style={{ height: "2em" }} />
              </a>
            </div>
            <div className={styles.card}>
              <a
                href="https://github.com/IvanSoftSolutions/utopia_new_server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Utopia WebApp Server -&gt;
                </h2>
                <p>Backend para Utopia WebApp.</p>
                <p> Node, MongoDB </p>
              </a>
              <a
                className={styles.cardGithubIcon}
                href="https://github.com/IvanSoftSolutions/utopia_new_server"
                target='_blank'>
                <FontAwesomeIcon icon={faGithub} style={{ height: "2em" }} />
              </a>
            </div>
            <div className={styles.card}>
              <a
                href="https://github.com/IvanSoftSolutions/portfolio_new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Website / Portfolio -&gt;
                </h2>
                <p>Sitio web personal y portafolio.</p>
                <p>Next.js, React </p>
              </a>
              <a
                className={styles.cardGithubIcon}
                href="https://github.com/IvanSoftSolutions/portfolio_new"
                target='_blank'>
                <FontAwesomeIcon icon={faGithub} style={{ height: "2em" }} />
              </a>
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className={styles.center}>
            <div className={styles.subtitle}>
              <h2>Contacto</h2>
            </div>
          </div>
          <div className={styles.grid}>
            <div>
              <a href="https://twitter.com/_SoftSolutions" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} style={{ height: "2em" }} />
              </a>
              <p>@_SoftSolutions</p>
            </div>
            <div>
              <a href="https://www.instagram.com/softsolutionsmx/" target='_blank'>
                <FontAwesomeIcon icon={faInstagram} style={{ height: "2em" }} />
              </a>
              <p>softsolutionsmx</p>
            </div>
            <div>
              <a href="https://www.tiktok.com/@softsolutions_mx" target='_blank'>
                <FontAwesomeIcon icon={faTiktok} style={{ height: "2em" }} />
              </a>
              <p>softsolutions_mx</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} style={{ height: "2em" }} />
              <p>softsolutions4@outlook.com</p>
            </div>
          </div>
          <div className={styles.grid}>
          </div>

          <div className={styles.center}>
            <div className={styles.subtitle}>
              <h2>Escríbenos</h2>
            </div>
          </div>
          <div>
            <form className={styles.contact} onSubmit={sendMail}>
              <input className={styles.contactChild} type="text" name="name" placeholder="Nombre" value={name} onChange={handleNameChange} />
              <input className={styles.contactChild} type="email" name="email" placeholder="Correo Electronico" value={email} onChange={handleEmailChange} />
              <textarea className={styles.contactChild} name="message" rows="5" cols="55" placeholder="Mensaje" value={message} onChange={handleMessageChange}></textarea>
              <button className={styles.contactChild} type='submit'>Enviar</button>
            </form>
            <Box sx={{ width: '100%' }}>
              <Collapse in={openSuccess}>
                <Alert variant="filled" severity="success" action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenSuccess(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }>
                  <AlertTitle>Tu mensaje ha sido enviado.</AlertTitle>
                  En breve nos pondremos en contacto contigo.
                </Alert>
              </Collapse>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Collapse in={openError}>
                <Alert variant="filled" severity="error" action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenError(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }>
                  <AlertTitle> Mensaje no enviado.</AlertTitle>
                  Por favor llena todos los campos
                </Alert>
              </Collapse>
            </Box>
          </div>
        </section>

      </main>
    </>
  )
}
