import React from 'react';

export default function Home() {
  return (
    <div className="centering_container">
      <div style={{ textAlign: 'center' }}>
        <h1>ReactJS Sample Code Project</h1>
        <h3>Select a sample page from the left menu</h3>
        <br />
        <h4>
          These codes were contributed by{' '}
          <a href="https://nomadcoders.co/" target={'_blank'} rel="noreferrer">
            Nomad_Coders(https://nomadcoders.co/)
          </a>
        </h4>
      </div>
    </div>
  );
}
