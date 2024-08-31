export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div className="flex flex-col items-center m-auto justify-center text-5xl ">
      <h1>{slug}</h1>
    </div>
  );
}
  