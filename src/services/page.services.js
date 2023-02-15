import { config } from "@main/config";

export async function getPageContent() {
	let data = await fetch(`${config.apiURL}/websiteInfo.json`);
	let pageContent = await data.json();
	return pageContent;
}
