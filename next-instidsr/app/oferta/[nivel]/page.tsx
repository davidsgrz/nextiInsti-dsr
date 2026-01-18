import OfertaEducativa from "../../components/OfertaEducativa";

export function generateStaticParams() {
  return [
    { nivel: 'eso' },
    { nivel: 'bachillerato' },
    { nivel: 'fp' },
  ];
}

export default async function OfertaDetalle({ params }: { params: Promise<{ nivel: string }> }) {
  const { nivel } = await params;
  return <OfertaEducativa nivel={nivel} />;
}
