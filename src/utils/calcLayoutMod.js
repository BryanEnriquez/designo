const DESIGN = ['design', ['3']];
const INFO = 'info';

export const calcLayoutMod = (location) => {
  switch (location) {
    case '/':
      return [null, ['1', '2']];
    case '/web-design':
    case '/app-design':
    case '/graphic-design':
      return DESIGN;
    case '/about':
      return [INFO, ['1', '4']];
    case '/locations':
      return [INFO, null];
    case '/contact':
      return [INFO, ['5']];
    default:
      return [INFO, null];
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
