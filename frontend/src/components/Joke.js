import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Joke.css';

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_JOKE_API_URL);
        setJoke(response.data);
      } catch (error) {
        setError('Error fetching joke data');
      }
    };

    fetchJoke();
  }, []);

  return (
    <div className="joke">
      <h2>Random Joke</h2>
      {error && <p>{error}</p>}
      {joke && (
        <div>
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default Joke;
