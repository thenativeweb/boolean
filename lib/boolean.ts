const boolean = function (value: any): boolean {
  if (typeof value === 'string') {
    return /^(?<truthy>true|t|yes|y|on|1)$/iu.test(value.trim());
  }

  if (typeof value === 'number') {
    return value === 1;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  return false;
};

export default boolean;
