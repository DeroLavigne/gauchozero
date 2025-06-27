import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && bio) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h1>Gaucho Zero</h1>
      <p>The Errant Bit is a digital soul, always moving, never duplicated.</p>
      {!submitted ? (
        <div>
          <input
            type="text"
            placeholder="Nickname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '0.5rem', margin: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Short Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{ padding: '0.5rem', margin: '0.5rem' }}
          />
          <br />
          <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>
            Enter the Network
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {name}!</h2>
          <p>You're now part of the Gaucho Zero collective.</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
