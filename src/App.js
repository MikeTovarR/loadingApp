import React, { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos desde el servidor
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default App;