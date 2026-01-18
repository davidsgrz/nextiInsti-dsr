import Sidebar from "../components/Sidebar";

export default function Contacto() {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
    
      <section style={{ flex: 1, backgroundColor: '#f5f5dc', padding: '2rem', minHeight: '400px' }}>
        <h1 style={{ fontSize: '1.5rem', color: '#444' }}>CONTENIDO DE PÁGINA CONTACTO</h1>
      </section>
      

      <Sidebar />
    </div>
  );
}
