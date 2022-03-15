export const calcLayoutMod = (location) => {
  switch (location) {
    case '/':
      return null;
    case '/web-design':
    case '/app-design':
    case '/graphic-design':
      return 'design';
    default:
      return 'info';
  }
};
export const addMod = (cn, mod) => `${cn} ${cn}--${mod}`;

export const addMods = (cn, mods) =>
  `${cn} ${mods.map((el) => `${cn}--${el}`).join(' ')}`;

export const resMod = (cn, mod) => (mod ? addMod(cn, mod) : cn);

export const resMods = (base, mods) => {
  let cn = base;
  Object.keys(mods).forEach((key) => mods[key] && (cn += ` ${base}--${key}`));
  return cn;
};
