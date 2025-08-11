const ProductDetail = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div>
      <p>product: {productId}</p>
    </div>
  );
};
export default ProductDetail;
