'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContext } from 'react-icons';
import { faSquareJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faAt, faMobile, faGlobe, faLocationDot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { RiEnglishInput } from "react-icons/ri";

export default function cvPage() {
    return (
        <>
            <header>
                <div className={styles.header}>
                    <Link href="/"><span>&lt;-</span> Atrás</Link>
                </div>
            </header>
            <div className={styles.main}>
                <div className={styles.grid2}>
                    <div className={styles.center}>
                        <a
                            // className={styles.downloadButton}
                            href="/cv_spanish.pdf"
                            download="HernandezIvan_CV_Spanish"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Descargar CV en español
                        </a>
                    </div>
                    <div className={styles.center}>
                        <a
                            // className={styles.downloadButton}
                            href="/cv_english.pdf"
                            download="HernandezIvan_CV_English"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV in English
                        </a>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.gridCV}>
                        <div className={styles.CVGridLeft}>
                            <Image
                                src="/profile_cv.jpg"
                                alt="Next.js Logo"
                                // fill={true}
                                width={220}
                                height={320}
                                priority
                            />
                            <h2>Contacto</h2>
                            <div className={styles.contactCV}>
                                <FontAwesomeIcon icon={faAt} style={{ height: "1.5em" }} bounce />
                                <p>ivan.daniel.hdz@gmail.com</p>
                            </div>
                            <div className={styles.contactCV}>
                                <FontAwesomeIcon icon={faMobile} style={{ height: "1.5em" }} bounce />
                                <p>(+52) 464 103-95-85</p>
                            </div>
                            <div className={styles.contactCV}>
                                <FontAwesomeIcon icon={faGlobe} style={{ height: "1.5em" }} bounce />
                                <p>www.softsolutions.com.mx</p>
                            </div>
                            <div className={styles.contactCV}>
                                <FontAwesomeIcon icon={faLocationDot} style={{ height: "1.5em" }} bounce />
                                <p>Salamanca, GTO, Mex</p>
                            </div>
                            <hr />
                            <h2>Educación</h2>
                            <p>Universidad de Guanajuato</p>
                            <p>Ing. en Sistemas Computacionales</p>
                            <p>
                                <FontAwesomeIcon icon={faGraduationCap} style={{ height: "1.5em" }} bounce /> (01 - 2022)</p>
                        </div>
                        <div className={styles.CVGridRight}>
                            <h1>Ivan Daniel Hernandez Rocha</h1>
                            <hr />
                            <h2>About Me</h2>
                            <p>Decidido, curioso, jovial y emprendedor. Analítico y
                                perfeccionista, no me gusta la conformidad. Siempre busco
                                mejorar y estar en movimiento porque me aburro con
                                facilidad. Tengo facilidad para poner mis pensamientos en
                                palabras y comunicar intenciones, sentimientos y asuntos,
                                ya sea de manera verbal o escrita. Me apasionan los
                                rompecabezas, el volleyball y descubrir cómo funcionan las
                                cosas.
                            </p>
                            <hr />
                            <h2>Experiencia</h2>
                            <h3>React Developer</h3>
                            <p>(01/2022–07/2022)</p>
                            <p><strong>Utopia Leathers MX</strong> – Desarrollo de una aplicación web y
                                base de datos para control de inventario y administración.
                                Desarrollada con React y MySQL, hosted en AWS.
                            </p>
                            <h3>Contratista Independiente</h3>
                            <p>(07/2022– hasta la fecha)</p>
                            <p><strong>Rev.com</strong> – Transcripciones de audio y video en inglés.</p>
                            <hr />
                            <h2>Habilidades</h2>
                            <div>
                                <div className={styles.tubes}>
                                    <div className={styles.tube} style={{ "--percent": 75, "--fill-color": '#1747a1' }}>
                                        <i className={styles.cap}></i><i className={styles.fill}></i>
                                        <div className={styles.base}>
                                            <div className={styles.icon}>
                                                <FontAwesomeIcon icon={faSquareJs} style={{ height: "2.5em", color: "#1747a1" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.tube} style={{ "--percent": 75, "--fill-color": "#61dbfb" }}>
                                        <i className={styles.cap}></i><i className={styles.fill}></i>
                                        <div className={styles.base}>
                                            <div className={styles.icon}>
                                                <FontAwesomeIcon icon={faReact} style={{ height: "2.5em", color: "#61dbfb" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.tube} style={{ "--percent": 75, "--fill-color": "#3C873A" }}>
                                        <i className={styles.cap}></i><i className={styles.fill}></i>
                                        <div className={styles.base}>
                                            <div className={styles.icon}>
                                                <FontAwesomeIcon icon={faNodeJs} style={{ height: "2.5em", color: "#3C873A" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.tube} style={{ "--percent": 60, "--fill-color": "#303030" }}>
                                        <i className={styles.cap}></i><i className={styles.fill}></i>
                                        <div className={styles.base}>
                                            <div className={styles.icon}>
                                                <FontAwesomeIcon icon={faDatabase} style={{ height: "2.5em", color: "#303030" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.tube} style={{ "--percent": 90, "--fill-color": "#B31942" }}>
                                        <i className={styles.cap}></i><i className={styles.fill}></i>
                                        <div className={styles.base}>
                                            <div className={styles.icon}>
                                                <IconContext.Provider value={{ size: "2.25em", color: "#B31942" }}>
                                                    <div>
                                                        <RiEnglishInput />
                                                    </div>
                                                </IconContext.Provider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
