export default (text: string, limit: number = 20) => {
  return text.length > limit ? `${text.split('').splice(0, 20).join('')}...` : text;
};