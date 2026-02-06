import Noticias from "../../components/Noticias";
import NewsDetail from "../../components/NewsDetail";

export function generateStaticParams() {
  return [
    { categoria: 'novedades' },
    { categoria: 'eventos' },
    { categoria: 'secretaria' },
    { categoria: 'next-mola' },
    { categoria: 'almeria' },
  ];
}

export default async function NoticiasDetalle({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;

  if (categoria === 'next-mola' || categoria === 'almeria') {
      return <NewsDetail slug={categoria} />;
  }

  return <Noticias category={categoria} />;
}
