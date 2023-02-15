import React from "react";
import "@main/components/Header/Header.style.scss";
import { SecondaryNavigation } from "./common/SecondaryNav";
import { MainNavigation } from "./common/MainNav";
import { Categories } from "./common/Categories";
import { Breadcrumb } from "./common/Breadcrumb";

export function Header() {
	return (
		<>
			<SecondaryNavigation />
			<MainNavigation />
			<Categories />
			<Breadcrumb />
		</>
	);
}
