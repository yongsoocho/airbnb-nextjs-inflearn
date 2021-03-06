import styles from "../styles/Card.module.css";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/router";

export default function Card({ data, type }) {
  const router = useRouter();

  const onClickRouteCity = useCallback(
    (name) => {
      return router.push(`seaerch/${name}`);
    },
    [router]
  );

  return (
    <div
      className={`${styles.container} swiper_${type}_items`}
      // onClick={() => onClickRouteCity(data.name)}
    >
      <div className={styles.content}>
        <Image
          draggable="false"
          className={styles.thumbnail}
          src={data.imageURL}
          alt="thumbnail"
          width="300px"
          height="300px"
        />
      </div>
      <span className={styles.name}>{data.name}</span>
    </div>
  );
}
