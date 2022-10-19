import { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
    const [items, setItems] = useState({});

  useEffect(() => {
    const url = `https://mighty-river-69117.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [id]);


    return [items, setItems]
};

export default useSingleProduct;