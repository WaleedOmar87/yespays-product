import { useState, useEffect, useContext } from "react";
import { AppContext } from "@main/store";
import { getPageContent } from "@main/services";

export function usePageContent() {
	const [error, setError] = useState();
	const { loading, pageContent, dispatchAction } = useContext(AppContext);

	useEffect(() => {
		// Remove Loading Screen
		dispatchAction("loading", true);

		// Fetch Product Details and Update State
		(async () => {
			let content = await getPageContent("");
			if (!content || content.hasOwnProperty("error")) {
				setError({ code: 500, message: content.errorMessage });
			} else {
				setError({ code: 0, message: "" });
				dispatchAction("pageContent", content);
				dispatchAction("loading", false);
			}
		})();
		return () => {};
	}, []);
	return { error, loading, pageContent };
}
