import { fetchData } from "./utils";

const fetchGlobals = async (url: string) => {
  const json = await fetchData(url, "", "Failed to fetch global data");
  let data = {};
  if (json?.data)
    data = {
      favicon: json.data?.favicon?.url || "",
      siteName: json.data?.siteName || "",
      siteDescription: json.data?.siteDescription || "",
      designSystem: json.data?.designSystem || "",
      html: json.data?.blocks[0]?.html || "",
    };
  return data;
};

export default fetchGlobals;
