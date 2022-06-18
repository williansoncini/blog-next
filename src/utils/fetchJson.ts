export const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  const jsonData = await res.json();
  return jsonData.data;
};
