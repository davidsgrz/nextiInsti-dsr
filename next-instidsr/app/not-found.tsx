import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '50vh', 
        textAlign: 'center' 
    }}>
      <h1 style={{ fontSize: '4rem', color: '#d32f2f' }}>404</h1>
      <h2 style={{ fontSize: '2rem' }}>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link 
        href="/" 
        style={{ 
            marginTop: '1rem', 
            padding: '0.5rem 1rem', 
            backgroundColor: '#333', 
            color: 'white', 
            borderRadius: '4px',
            textDecoration: 'none'
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
