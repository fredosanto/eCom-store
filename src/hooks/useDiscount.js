export default function useDiscount(fullPrice, discountPrice) {
  const percentage = (((fullPrice - discountPrice) / fullPrice) * 100).toFixed(
    0
  );
  return percentage;
}
