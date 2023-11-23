import { useEffect } from "react";

const MainScreen = () => {

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  })
  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}

export default MainScreen
