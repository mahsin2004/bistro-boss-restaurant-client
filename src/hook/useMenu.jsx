
import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:5000/product")
    fetch("https://bistro-boss-restaurant-server-ashy.vercel.app/product")
      .then((response) => response.json())
      .then((data) => setMenu(data))
      setLoading(false)
  }, []);
  return [menu, loading];
};

export default useMenu;
