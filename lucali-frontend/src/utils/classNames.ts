export const classNames = (...classes: (string | boolean | any)[]): string => {
  return classes.filter(Boolean).join(" ");
};
