export const generateIndexTmpl = (ComponentName: string) => {
  return (
    `import { withViewModel } from '@i18n-ecom-seller/mundo-model';
import { ${ComponentName} as View } from './${ComponentName}.View';
import { use${ComponentName}ViewModel as ViewModel } from './${ComponentName}.ViewModel';

export const ${ComponentName} = withViewModel(ViewModel, View);
`
  );
}