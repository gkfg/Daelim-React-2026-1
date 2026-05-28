import { useState } from "react";
import { gallery } from "./imgData";
import styles from "./Carousel.module.css";

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [more, setMore] = useState(false);

    function handleNext() {
        setIndex((index + 1) % gallery.length);
    }
    function handlePrev() {
        setIndex((index - 1 + gallery.length) % gallery.length);
    }
    function handleMoreCheck() {
        setMore(!more);
    }

    let slide = gallery[index];
    return (
        <>
        <section>
            <button className={styles.button} onClick={handlePrev}>Previous</button>
            <button className={styles.button} onClick={handleNext}>Next</button>
            <button className={styles.button} onClick={handleMoreCheck}>{more ? "Hide description" : "Show description"}</button>
        </section>
        <h2>
            <li>{slide.name}</li>
            by {slide.artist}
        </h2>
        <h3>{index + 1} of {gallery.length}</h3>
        <img src={slide.img} alt={slide.alt} />
        {more && <p>{slide.description}</p>}
        </>
    )
}