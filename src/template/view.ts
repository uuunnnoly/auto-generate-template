export const generateViewTmpl = (componentName: string) => {
  return (
    `import React from 'react';
import { useTranslation } from '@jupiter/plugin-runtime/i18n';

export type ${componentName}Props = {

};

export const ${componentName} = (props: ${componentName}Props ) => {
  const { t } = useTranslation();

  return (
    <div>

    </div>)
};
`
  );
}
