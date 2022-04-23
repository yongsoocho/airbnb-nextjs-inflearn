import Card from "../mixin/Card";
import styles from "../styles/Swiper.module.css";
import {useEffect} from "react";

export default function Swiper({data, type}) {


  useEffect(() => {
    let isDrag = false;

    const swiperContainer = document.querySelector(`#swiper_${type}_container`)
    const swiperItems = document.querySelectorAll(`.swiper_${type}_items`)

    swiperContainer.addEventListener("mousemove", (e) => {
      if (isDrag) {
        console.log(e.movementX > 0 ? "right" : e.movementX < 0 ? "left" : "", "offset : ", e.offsetX)
      }
    })
    swiperContainer.addEventListener("mouseleave", (e) => {
      e.stopImmediatePropagation()
      console.log("leave")
      isDrag = false
    })
    swiperContainer.addEventListener("mousedown", (e) => {
      e.stopImmediatePropagation()
      console.log("down")
      isDrag = true
    })
    swiperContainer.addEventListener("mouseup", (e) => {
      e.stopImmediatePropagation()
      console.log("up")
      isDrag = false
    })
  }, [type])

  return (
    <div className={styles.container}>
      <div
        id={`swiper_${type}_container`}
        className={styles.content}
        style={{width: `${data.length * 350}px`}}
      >
        {data.map((e) => (
          <Card key={e.name} data={e} type={type}/>
        ))}
      </div>
    </div>
  );
}
