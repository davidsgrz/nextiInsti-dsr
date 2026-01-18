import { notFound } from "next/navigation";
import Noticias from "../components/Noticias";
import OfertaEducativa from "../components/OfertaEducativa";
import Biblioteca from "../components/Biblioteca";

export function generateStaticParams() {
  return [
    { slug: 'noticias' },
    { slug: 'oferta' },
    { slug: 'biblioteca' },
  ]
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  switch (slug) {
    case "noticias":
      return <Noticias />;
    case "oferta":
      return <OfertaEducativa />;
    case "biblioteca":
      return <Biblioteca />;
    default:
      return notFound();
  }
}
