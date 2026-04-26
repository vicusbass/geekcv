export const CAREER_START = new Date(2005, 1, 1); // Feb 1, 2005

export function formatUptime(from: Date = CAREER_START, to: Date = new Date()): string {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  if (to.getDate() < from.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${years}y ${months}mo`;
}
