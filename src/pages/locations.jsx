import styles from "../styles/Locations.module.scss";
import { roomList } from "@/mock/reservations";

export default function Locations({ locationInfo }) {
    return (
      <div className={styles.container}>
        {locationInfo.map((location) => (
          <div key={location.id} className={styles.card}>
            <img
              src={location.imageLocation}
              alt={location.name}
              className={styles.image}
            />
            <div className={styles.details}>
              <h2 className={styles.name}>{location.name}</h2>
              <p className={styles.description}>{location.description}</p>
              <div className={styles.info}>
                <p>
                  Location: <span>{location.location}</span>
                </p>
                <p>
                  Price: <span>{location.price}$</span>
                </p>
                <p>
                  Availability:{" "}
                  <span
                    className={
                      location.availability
                        ? styles.available
                        : styles.unavailable
                    }
                  >
                    {location.availability ? "Available" : "Not Available"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export async function getServerSideProps() {
    return {
      props: {
        locationInfo: roomList,
      },
    };
  }