export function sortByLastName(arr) {
  return [...arr].sort((a, b) => {
    const lastA = a.name.trim().split(' ').slice(-1)[0].toLowerCase();
    const lastB = b.name.trim().split(' ').slice(-1)[0].toLowerCase();
    return lastA.localeCompare(lastB);
  });
} 