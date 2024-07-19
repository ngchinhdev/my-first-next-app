function ProductDetails({ params }: { params: { productId: string } }) {
  return <h1>ProductDetails of {params.productId}</h1>;
}

export default ProductDetails;
