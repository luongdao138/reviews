import React from 'react';
import Reviews from './Reviews';

function App() {
  return (
    <section>
      <div className='title-wrapper'>
        <h1 className='title text-center'>Ours Reviews</h1>
        <div className='seperate'></div>
      </div>
      <div className='main'>
        <Reviews />
      </div>
    </section>
  );
}

export default App;
