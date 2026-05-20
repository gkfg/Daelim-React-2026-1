import { useState } from "react";
import { gallery } from "./imgData";
import styles from "./Carousel.module.css";

export default function Carousel() {
    const [index, setIndex] = useState(0);

    function handeeNext() {
        setIndex((index + 1) % gallery.length);
    }
    function handlePrev() {
        setIndex((index - 1 + gallery.length) % gallery.length);
    }

    let slide = gallery[index];
    return (
        <>
        <section>
            <button className={styles.button} onClick={handlePrev}>Previous</button>
            <button className={styles.button} onClick={handeeNext}>Next</button>
        </section>
        <h2>
            <li>{slide.name}</li>
            by {slide.artist}
        </h2>
        <h3>{index + 1} of {gallery.length}</h3>
        <img src={slide.img} alt={slide.alt} />
        <p>{slide.description}</p>
        </>
    )
}