import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id='pasta'
          title='Pasta'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id='rucola'
          title='Rucola'
          price={4}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id='coca-cola'
          title='Coca Cola'
          price={2}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
