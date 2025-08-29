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
