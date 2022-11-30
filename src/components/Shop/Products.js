import ProductItem from './ProductItem';
import classes from './Products.module.css';

const items = [
	{
		title: "Item 1",
		quantity: 1,
		price: 6,
		description: "This is a first product - amazing!",
		id: 1,
	},
	{
		title: "Item 2",
		quantity: 1,
		price: 4,
		description: "This is a first product - amazing!",
		id: 2,
	},
	{
		title: "Item 3",
		quantity: 1,
		price: 7,
		description: "This is a first product - amazing!",
		id: 3,
	},
	{
		title: "Item 4",
		quantity: 1,
		price: 10,
		description: "This is a first product - amazing!",
		id: 4,
	},
	{
		title: "Item 5",
		quantity: 1,
		price: 5,
		description: "This is a first product - amazing!",
		id: 5,
	},
	{
		title: "Item 6",
		quantity: 1,
		price: 11,
		description: "This is a first product - amazing!",
		id: 6,
	},
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          items={items}
        />
      </ul>
    </section>
  );
};

export default Products;
