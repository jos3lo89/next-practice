"use client";
import { usePathname } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h2>
        revision {reviewId} no encontrada del producto {productId}
      </h2>
    </div>
  );
};
export default NotFoundPage;
