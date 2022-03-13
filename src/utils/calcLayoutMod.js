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

export const resMod = (cn, mod) => (mod ? `${cn} ${cn}--${mod}` : cn);

export const addMod = (cn, mod) => `${cn} ${cn}--${mod}`;
