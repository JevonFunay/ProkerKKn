import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programKerja } from "@/data/content";
import ProkerDetailContent from "@/components/ProkerDetailContent";

export function generateStaticParams() {
  return programKerja.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const program = programKerja.find((p) => p.id === Number(id));
  if (!program) return {};
  return {
    title: `${program.title} — KKN Kelompok 44`,
    description: program.shortDesc,
  };
}

export default async function ProkerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = programKerja.find((p) => p.id === Number(id));
  if (!program) notFound();
  return <ProkerDetailContent program={program} />;
}
