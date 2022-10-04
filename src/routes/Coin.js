import { useState } from 'react';

const Coin = () => {
  const [loading, setLoading] = useState(true);
  // fetch()
  return loading ? <h2>Loading...</h2> : null;
};

export default Coin;
