export const useFetch = (link: string, set: any) => {
  const fetchData = async () => {
    const res = await fetch(link);
    const { products } = await res.json();
    set(products);
  };
  fetchData();
};
