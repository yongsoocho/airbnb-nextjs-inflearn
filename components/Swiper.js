import Card from "../mixin/Card";
import styles from "../styles/Swiper.module.css";

export default function Swiper({ data }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ width: `${data.length * 350}px` }}
      >
        {data.map((e) => (
          <Card key={e.name} data={e} />
        ))}
      </div>
    </div>
  );
}
