const boolean = function (value: any): boolean {
  if (typeof value === 'string') {
    return ['true', '1', 'on', 'yes'].includes(value.trim());
  }

  if (typeof value === 'number') {
    return value === 1;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  return false;
};

export { boolean };
