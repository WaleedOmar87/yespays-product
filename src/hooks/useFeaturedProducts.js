import { useState, useEffect, useContext } from "react";
import { AppContext } from "@main/store";
import { getFeaturedProducts } from "@main/services";

/* Update State After Featured Products Data Is Loaded */
export function useFeaturedProducts() {
	const [error, setError] = useState();
	const { loading, featuredProducts, dispatchAction } =
		useContext(AppContext);

	useEffect(() => {
		// Remove Loading Screen
		dispatchAction("loading", true);

		// Fetch Featured Products and Update State
		(async () => {
			let getProducts = await getFeaturedProducts("");
			let { products } = getProducts;
			if (!products || products.hasOwnProperty("error")) {
				setError({ code: 500, message: products.errorMessage });
			} else {
				setError({ code: 0, message: "" });
				dispatchAction("featuredProducts", products);
				dispatchAction("loading", false);
			}
		})();
		return () => {};
	}, []);
	return { error, loading, featuredProducts };
}
