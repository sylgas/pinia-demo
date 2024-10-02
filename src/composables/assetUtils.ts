export const getImageUrl = (url: string) => {
  return new URL(url, import.meta.url).href;
};
