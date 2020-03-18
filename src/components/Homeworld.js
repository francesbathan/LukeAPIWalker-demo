import React, { useState, useEffect } from "react";
import axios from "axios";

function Homeworld({ url }) {
  const [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setHomeworld(response.data);
      })
      .catch(console.log);
  }, [url]);

  return (
    <div>
      <p>Homeworld: {homeworld.name}</p>
    </div>
  );
}

export default Homeworld;
