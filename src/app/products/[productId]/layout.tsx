import { ReactNode } from "react";

function ProductDetailsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <h2>Related Products</h2>
    </div>
  );
}

export default ProductDetailsLayout;
