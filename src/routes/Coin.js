import { useEffect, useState } from 'react';

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState({ symbol: '', price: 0, amount: 0 });
  const [dollar, setDollar] = useState(1);
  const getCoins = async () => {
    const jsonCoins = await (await fetch('https://api.coinpaprika.com/v1/tickers')).json();
    // console.log(jsonCoins);
    setCoins(jsonCoins);
    setLoading(false);
  };
  const onChangeCoin = function (index) {
    console.log('onChangeCoin...');
    const c = coins[index];
    if (c) setCoin({ symbol: c.symbol, price: c.quotes.USD.price, amount: dollar / c.quotes.USD.price });
  };
  const onInputDollar = (event) => {
    setCoin((present) => {
      present.amount = event.target.value / present.price;
      return present;
    });
    setDollar(event.target.value);
  };

  // useEffect(async () => {
  //   const jsonCoins = await (await fetch('https://api.coinpaprika.com/v1/tickers')).json();
  //   console.log(jsonCoins);
  //   setLoading(false);
  // }, []);
  /* 위와 같이 useEffect() 메소드 첫번째 인자에 Async function을 전달하면 안된다. Async function은 Promise를 리턴하기 때문이다.
   * 아래와 같이 Async function을 별도로 선언한 다음, 다시 일반적인 Sync function으로 감싸야 한다.*/
  useEffect(() => {
    getCoins();
  }, []);
  useEffect(() => {
    console.log('useEffect() { ...onChangeCoin(0)... }');
    const c = coins[0];
    if (c) setCoin({ symbol: c.symbol, price: c.quotes.USD.price, amount: 1 / c.quotes.USD.price });
    setDollar(1);
  }, [coins]);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h2>The Coins! {loading ? '' : `(${coins.length})`}</h2>
      <input value={dollar} type="number" placeholder="Input a number by dollar" onChange={onInputDollar} />$ =&gt;&nbsp;
      <input value={coin.amount} type="number" readOnly />
      <select onChange={(event) => onChangeCoin(event.target.value)}>
        {coins.map((c, i) => (
          <option key={c.id} value={i}>{`${c.name}(${c.symbol})`}</option>
        ))}
      </select>
      <ul>
        {coins.map((c) => (
          <li key={c.id}>{`${c.name}(${c.symbol}) - ${c.quotes.USD.price}$`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Coin;
