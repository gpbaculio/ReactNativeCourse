export const fastImageVariants = {
  defaults: {},
};

export const colors = {
  '#61DAFB': '#61DAFB',
  '#FB61DA': '#FB61DA',
  '#DAFB61': '#DAFB61',
  '#61FBCF': '#61FBCF',
  '#495E57': '#495E57',
  '#F4CE14': '#F4CE14',
  '#000000': '#000000',
  '#FFFFFF': '#FFFFFF',
  '#EDEFEE': '#EDEFEE',
  '#EE9972': '#EE9972',
  '#333333': '#333333',
};

export const spacing = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 20,
  xL: 24,
  xxL: 28,
  40: 40,
  10: 10,
  auto: 'auto',
};

export const buttonVariants = {
  defaults: {},
  buttonPrimary: {
    borderRadius: spacing['xs'],
    paddingVertical: 's',
    backgroundColor: colors['#495E57'],
    alignItems: 'center',
  },
};

export const containerVariants = {
  defaults: {},
  header: {
    backgroundColor: colors['#495E57'],
    paddingTop: 40,
    paddingBottom: 'l',
  },
  container: {
    flex: 1,
    paddingHorizontal: 'xxL',
  },
};

export const textVariants = {
  defaults: {},
  header: {
    color: colors['#FFFFFF'],
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 's',
  },
  buttonText: {
    color: colors['#FFFFFF'],
    fontSize: 16,
    fontWeight: '500',
  },
};
