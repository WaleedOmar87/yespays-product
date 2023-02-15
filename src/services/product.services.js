import { config } from "@main/config";

export async function getProduct(productID) {
	let data = await fetch(`${config.apiURL}/product.json`);
	return await data.json();
}

export async function getFeaturedProducts(productID) {
	let data = await fetch(`${config.apiURL}/featuredProducts.json`);
	return await data.json();
}
