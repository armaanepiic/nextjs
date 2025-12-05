import { notFound } from "next/navigation";

export default async function BloagPage({ params }) {
  const { id } = await params;

  if (id === '3') {
    return notFound();
  }
  return <div>The blog ID is {id}</div>;
}
