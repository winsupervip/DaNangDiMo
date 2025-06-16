const format = (value: string) => {
  return value ? parseFloat(value).toLocaleString("vi-VN") : "";
};

const round = (value: number) => {
  return value;
};
export const numberFormat = {
  format,
  round,
};
