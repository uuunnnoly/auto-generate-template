export const generateDomainTmpl = (ComponentName: string) => {
  return (
    `import { Remesh } from 'remesh';
import {
  ${ComponentName}Extern,
} from './${ComponentName}.Extern';
import { EasyAsyncModule } from '@/infra/domain/modules/EasyAsyncModule';

export const ${ComponentName}Domain = Remesh.domain({
  name: '${ComponentName}Domain',
  impl: domain => {
    const repo = domain.getExtern(${ComponentName}Extern);

    return {
      query: {

      },
      command: {
       
      },
    };
  },
});`);
}
