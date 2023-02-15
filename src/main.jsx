import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@main/store/index";
import ProductPage from "@main/pages/Product";
import { Cart } from "@main/components";
import "@main/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<ProductPage />
			<Cart />
		</AppProvider>
	</React.StrictMode>
);
