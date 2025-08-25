export function toIndianCurrency(amount: number): string {
  return amount?.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
}
