import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./ProductSlideShow.module.css";

interface Props {
  images: string[];
}

export function ProductSlideShow({ images }: Props) {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div key={image} className={styles["each-slide"]}>
            <div style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}></div>
          </div>
        );
      })}
    </Slide>
  );
}
