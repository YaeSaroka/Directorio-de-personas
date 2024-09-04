

import Link from 'next/link';

export default function Hola(props) {
    /*style*/
    const card = {
        padding: '1rem 1.2rem',
        borderRadius: 'var(--border-radius)',
        background: 'rgba(var(--card-rgb), 0)',
        border: '10px solid rgba(var(--card-border-rgb), 0)',
        transition: 'background 200ms, border 200ms',
      };
    
  return (
    <>

    <Link href={`/${props.direccion}`} passHref target="_blank">
      <div className={card} >
        <h2>{props.direccion}</h2>
      </div>
    </Link>

    </>
  );
  
}