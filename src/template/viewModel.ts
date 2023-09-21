export const generateViewModelTmpl = (componentName: string) => {
  return (
    `import { ${componentName}Domain } from './${componentName}.Domain';
import { ${componentName}Props } from './${componentName}.View';
import { useRemeshDomain, useRemeshQuery, useRemeshSend } from 'remesh-react';

export type ${componentName}ViewModelOptions = {

};

export function use${componentName}ViewModel(
  props: ${componentName}ViewModelOptions,
): ${componentName}Props {
  const send = useRemeshSend();
  const domain = useRemeshDomain(${componentName}Domain());

  return {

  }
};
`
  );
}
