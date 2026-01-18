export default function OfertaEducativa({ nivel }: { nivel?: string }) {
  let title = "Oferta Educativa";
  
  if (nivel === 'eso') title = "Educación Secundaria Obligatoria (ESO)";
  else if (nivel === 'bachillerato') title = "Bachillerato";
  else if (nivel === 'fp') title = "Formación Profesional";

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{title}</h1>
      <ul>
        {(!nivel || nivel === 'eso') && <li>1º - 4º ESO</li>}
        {(!nivel || nivel === 'bachillerato') && <li>Ciencias y Tecnología</li>}
        {(!nivel || nivel === 'bachillerato') && <li>Humanidades y Ciencias Sociales</li>}
        {(!nivel || nivel === 'fp') && <li>Ciclos Formativos de Grado Medio</li>}
        {(!nivel || nivel === 'fp') && <li>Ciclos Formativos de Grado Superior</li>}
      </ul>
    </div>
  );
}
