export const formatNumber = (num: number, separator: string = '.'): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const formatNumberSuffix = (num: number, decimals: number = 0) => {
  if (num === 0) return '0';
  if (isNaN(num)) return 'NaN';
  if (!isFinite(num)) return num.toString();

  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';

  if (absNum >= 1000000000) {
    const formatted = (absNum / 1000000000).toFixed(decimals);
    return sign + formatted + 'b';
  } else if (absNum >= 1000000) {
    const formatted = (absNum / 1000000).toFixed(decimals);
    return sign + formatted + 'm';
  } else if (absNum >= 1000) {
    const formatted = (absNum / 1000).toFixed(decimals);
    return sign + formatted + 'k';
  } else {
    return num.toString();
  }
};
