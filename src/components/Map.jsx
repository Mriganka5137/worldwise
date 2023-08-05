import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map : {id}</h1>
      <h1>
        Position : {lat} , {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 5137, lng: 5137 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
