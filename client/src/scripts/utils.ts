async function fetchData(
  url: string,
  params = "",
  errorMessage: string = "sm fetch data failed",
  onError: (data?: any) => void = () => {},
) {
  try {
    const res = await fetch(url + params);
    const data = await res.json();
    if (!res.ok) throw new Error(errorMessage);
    return data;
  } catch (error) {
    console.log(error);
    onError();
  }
}

export { fetchData };
