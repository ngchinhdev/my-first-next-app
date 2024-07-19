import { notFound } from "next/navigation";

function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (+params.reviewId > 100) {
    notFound();
  }

  return (
    <h1>
      ReviewDetail {params.reviewId} of product {params.productId}
    </h1>
  );
}

export default ReviewDetail;
