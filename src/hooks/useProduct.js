import { useState, useEffect, useContext } from "react";
import { AppContext } from "@main/store";
import { getProduct } from "@main/services";

/* Update State After Product Data Is Loaded */
export function useProduct() {
	const [error, setError] = useState();
	const { loading, productDetails, dispatchAction } = useContext(AppContext);

	useEffect(() => {
		// Remove Loading Screen
		dispatchAction("loading", true);

		// Fetch Product Details and Update State
		(async () => {
			let productDetails = await getProduct("");
			if (!productDetails || productDetails.hasOwnProperty("error")) {
				setError({ code: 500, message: productDetails.errorMessage });
			} else {
				setError({ code: 0, message: "" });
				dispatchAction("productDetails", productDetails);
				dispatchAction("selectedProduct", {
					quantity: 1,
					color: productDetails.colors[0].color_name,
					size: Object.keys(productDetails.sizes)[0],
				});
				dispatchAction("loading", false);
			}
		})();
		return () => {};
	}, []);
	return { error, loading, productDetails, dispatchAction };
}
