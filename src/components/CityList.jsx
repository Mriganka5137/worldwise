import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
function CityList({ cities, isLoading }) {
  // console.log(cities);
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
