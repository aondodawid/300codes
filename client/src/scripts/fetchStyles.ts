import { fetchData } from "./utils";

const STRAPI_BASE_URL =
  import.meta.env.STRAPI_BASE_URL || "http://localhost:1337";
const getStyles = async () => {
  const json = await fetchData(
    `${STRAPI_BASE_URL}/api/design?populate=*`,
    "",
    "Failed to fetch design system",
  );
  const designSystem = JSON.stringify(json?.data?.designSystem);
  return json?.data?.designSystem;
};

export default getStyles;
