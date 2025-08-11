const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div>
        <p>productos destacados</p>
        <ul>
          <li>producto 33</li>
          <li>producto 66</li>
          <li>producto 99</li>
        </ul>
      </div>
    </>
  );
};
export default ProductsLayout;
