import React, {useState, useEffect} from "react";

import styles from './styles/Projects.module.css'


interface Props {
    children?: React.ReactNode;
}

export default function Projects({ children }: Props) {


    return(
        <section className={styles.projectsContainer}>
            <div className={styles.img} >

            </div>
            <div className={styles.text}>
                <h1>Projects</h1>
                <p>
                    I'm a 21 years old developer from Poland. I'm currently studying Computer Science at the University of Warsaw. I'm interested in web development, especially in frontend. I'm also interested in game development and I'm currently learning Unity. I'm also interested in machine learning and I'm currently learning Python.
                </p>
            </div>


            {children}   
         </section>
    )
}
