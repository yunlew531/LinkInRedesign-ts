export default (fileName: string, extension = 'png') =>
  new URL(`../assets/images/${fileName}.${extension}`, import.meta.url).href;