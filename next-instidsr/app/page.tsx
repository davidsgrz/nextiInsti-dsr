import Sidebar from "./components/Sidebar";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <div className="home-container" style={{ display: 'flex', gap: '2rem', padding: '2rem', maxWidth: '1400px', margin: '0 auto', flexWrap: 'wrap' }}>
      
    
      <section style={{ flex: '1 1 300px', paddingRight: '2rem' }}>
       
        <img 
            src="/next.png" 
            alt="Next.js Logo" 
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }} 
        />
        <div style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#555' }}>
            Next mola
        </div>
        <div style={{ color: '#888', marginTop: '0.5rem' }}>
            Curso de Next para todos
        </div>
        
    
        <div style={{ 
            marginTop: '150px', 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            backgroundColor: '#333', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 'bold' 
        }}>
            N
        </div>
      </section>

      
      <section style={{ flex: '1 1 400px' }}>
        <InfoCard />
      </section>

    
      <Sidebar />
    </div>
  );
}
