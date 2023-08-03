import ids from 'virtual:svg-icons-names';

// Generate iconEnum Object dynamically based on svg sprite icons list
const iconEnum = Object.fromEntries(
  ids.map((icon) => {
    const value = icon.slice(5);
    const key = value.toUpperCase();

    return [[key], value];
  })
);

export { iconEnum };
