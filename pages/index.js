import Swiper from "../components/Swiper";
import styles from "../styles/Home.module.css";

export default function Home({ cities, island }) {
  return (
    <div className={styles.container}>
      <div
        style={{
          background: "url(/main.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
        className={styles.main}
      ></div>
      <div className={styles.content}>
        <section>
          <h2 style={{ color: "#ff395c" }}>What&apos;s your favorite city?</h2>
          <Swiper data={cities} />
        </section>

        <section>
          <h2 style={{ color: "#ff395c" }}>
            Where&apos;d you like to go on vacation?
          </h2>
          <Swiper data={island} />
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cities = [
    { name: "Seoul", imageURL: "/city/seoul.jpg" },
    { name: "Sanfrancisco", imageURL: "/city/sanfrancisco.jpg" },
    { name: "Rio", imageURL: "/city/rio.jpg" },
    { name: "Paris", imageURL: "/city/paris.jpg" },
    { name: "New york", imageURL: "/city/newyork.jpg" },
    { name: "London", imageURL: "/city/london.jpg" },
  ];

  const island = [
    { name: "Bali", imageURL: "/island/bali.jpg" },
    { name: "BoraBora", imageURL: "/island/borabora.jpg" },
    { name: "Fiji", imageURL: "/island/fiji.jpg" },
    { name: "Hawaii", imageURL: "/island/hawaii.jpg" },
    { name: "Malta", imageURL: "/island/malta.jpg" },
    { name: "Moldive", imageURL: "/island/moldive.jpg" },
  ];

  return {
    props: {
      cities,
      island,
    },
  };
}
