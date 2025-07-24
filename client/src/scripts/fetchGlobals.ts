import { fetchData } from "./utils";

const fetchGlobals = async (url: string) => {
  const json = await fetchData(url, "", "Failed to fetch global data");
  console.log("json.data?.blocks?.html", json.data?.blocks[0]?.html);
  const data = {
    favicon: json.data?.favicon?.url || "",
    siteName: json.data?.siteName || "",
    siteDescription: json.data?.siteDescription || "",
    html: json.data?.blocks[0]?.html || "",
  };
  return data;
};

export default fetchGlobals;
