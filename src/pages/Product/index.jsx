import React from "react";
import { Header, Product, FeaturedProducts, Footer } from "@main/components";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage() {
	return (
		<>
			<Header />
			<Product />
			<FeaturedProducts />
			<Footer />
		</>
	);
}
