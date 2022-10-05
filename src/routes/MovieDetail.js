import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function MovieDetail() {
  const movie = useLoaderData();

  useEffect(() => {
    console.log(movie);
  }, []);

  return <h3>MovieDetail</h3>;
}
