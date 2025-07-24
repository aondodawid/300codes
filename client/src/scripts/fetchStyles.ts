import { fetchData } from "./utils";

const fetchStyles = async (url: string) => {
  const json = await fetchData(url, "", "Failed to fetch design system");
  return json?.data?.designSystem;
};

export default fetchStyles;
