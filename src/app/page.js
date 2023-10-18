import Link from 'next/link';
import React from 'react';

const HjemmeSide = () => {
  return (
      <div class="center">
        <h1> Fullstækk oblig 19.10.2023 </h1>
        <p>Henter nyhetsartikler fra newsapi.org.</p>
        <Link href="/nyheter" className="link">Gå til nyhets siden</Link>
        
      </div>
  );
};
  
export default HjemmeSide;