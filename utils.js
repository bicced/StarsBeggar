
export function getRandomRangeBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
