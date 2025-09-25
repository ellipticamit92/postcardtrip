export function toIndianCurrency(amount: number): string {
  return amount?.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
}

export const slugifyPackageName = (name: string): string =>
  name.trim().toLowerCase().replace(/\s+/g, "-");

export const unslugifyPackageName = (id: string): string =>
  id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

export const addRandomInRange = (
  base: number,
  min: number = 3000,
  max: number = 5000
): number => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return base + random;
};

export const truncateText = (text: string, limit: number): string => {
  if (!text) return "";

  // Normalize escaped/newline/HTML-break sequences -> single space
  const normalized = text
    .replace(/\\n/g, " ") // literal backslash-n sequences
    .replace(/\r\n/g, " ") // Windows newlines
    .replace(/\n/g, " ") // actual newlines
    .replace(/<br\s*\/?>/gi, " ") // HTML <br> or <br/>
    .replace(/\s+/g, " ") // collapse multiple whitespace into one space
    .trim();

  const words = normalized.split(" ");
  if (words.length <= limit) return normalized;

  return words.slice(0, limit).join(" ") + "...";
};

export function getInitials(name: string): string {
  if (!name) return "";

  return name
    .trim()
    .split(/\s+/) // split by spaces
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
