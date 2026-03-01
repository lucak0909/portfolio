const BIRTHDAY = new Date(2005, 8, 9); // September 9, 2005
const UNI_START_YEAR = 2024; // Started university in September 2024

export function getAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = today.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
}

export function getAcademicYear(): number {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexed, so September = 8
  // If we're past September, we're in the next academic year
  if (currentMonth >= 8) {
    return currentYear - UNI_START_YEAR + 1;
  }
  return currentYear - UNI_START_YEAR;
}

export function getOrdinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const mod100 = n % 100;
  return n + (suffixes[(mod100 - 20) % 10] || suffixes[mod100] || suffixes[0]);
}
