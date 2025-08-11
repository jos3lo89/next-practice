import { notFound } from "next/navigation";

const ProductReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      revision {reviewId} para el producto {productId}
    </div>
  );
};
export default ProductReviewPage;
