import Noticias from "../../components/Noticias";

export function generateStaticParams() {
  return [
    { categoria: 'novedades' },
    { categoria: 'eventos' },
    { categoria: 'secretaria' },
  ];
}

export default async function NoticiasDetalle({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  return <Noticias category={categoria} />;
}
