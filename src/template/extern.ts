export const generateExternTmpl = (ComponentName: string) => {
  return (
    `import { RemeshExtern } from 'remesh';

export type ${ComponentName}ExternImplType = {
  get: () => Promise<any>;
};

export const ${ComponentName}Extern =
  RemeshExtern<${ComponentName}ExternImplType>({
    default: {
      get: async () => {
        throw new Error('not implemented');
      },
    },
  });
`
  );
}
