const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  if (slug?.length === 1) {
    return <p>viendo documentacion de {slug[0]}</p>;
  } else if (slug?.length === 2) {
    return (
      <p>
        viendo documentacion de {slug[0]} y concepto {slug[1]}
      </p>
    );
  }

  return (
    <div>
      <p>Docs home page</p>
    </div>
  );
};
export default Docs;
