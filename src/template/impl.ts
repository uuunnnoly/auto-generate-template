export const generateImplTmpl = (componentName: string) => {
  return (
    `import { ${componentName}Extern } from './${componentName}.Extern';

export const ${componentName}ExternImpl = ${componentName}Extern.impl({
  get: async () => {
    return Promise.resolve();
  }
});
`
  );
}
