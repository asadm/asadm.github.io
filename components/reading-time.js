// calculate reading time based on number of words
export default function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm); 
}