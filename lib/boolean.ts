const boolean = function (value: any): boolean {
  if (typeof value === 'string') {
    // Currently using a RegExp without the named capture group due to missing support for named capture groups in Firefox.
    // Kangax table: https://kangax.github.io/compat-table/es2016plus/#test-RegExp_named_capture_groups
    // Issue on Bugzilla: https://bugzilla.mozilla.org/show_bug.cgi?id=1362154
    // Regex with named capture group
    // return /^(?<truthy>true|t|yes|y|on|1)$/iu.test(value.trim());

    // eslint-disable-next-line prefer-named-capture-group
    return /^(true|t|yes|y|on|1)$/iu.test(value.trim());
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
