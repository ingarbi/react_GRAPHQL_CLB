import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

export type Launch = {
  mission_name: string
}

const GET_DATA = gql`
  query LaunchesPast($limit: Int = 10) {
    launchesPast(limit: $limit) {
      mission_name
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_DATA);
  useEffect(() => {
    console.log(loading, error, data);
  });
  return (
    <div className="App">
      {data
        ? data.launchesPast.map((launch: Launch) => {
            return <p>{launch.mission_name}</p>;
          })
        : null}
    </div>
  );
}

export default App;
