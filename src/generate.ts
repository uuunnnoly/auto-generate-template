import {
  generateViewTmpl,
  generateViewModelTmpl,
  generateIndexTmpl,
  generateExternTmpl,
  generateImplTmpl,
  generateDomainTmpl,
  generateModalTmpl,
} from './template';

export enum ActionType {
  Component = 'component',
  Modal = 'modal',
  Module = 'module',
}

export const generateFilesTemplate = (action: ActionType, componentName: string) => {
  let filesTemplate: any[] = [];

  switch (action) {
    case ActionType.Component:
      filesTemplate = generateComponentTemplate(componentName);
      break;
    case ActionType.Modal:
      filesTemplate = generateModalTemplate(componentName);
      break;
    case ActionType.Module:
      filesTemplate = generateModuleTemplate(componentName);
      break;
  };
  return filesTemplate;
}

const generateComponentTemplate = (componentName: string) => {
  const viewTmpl = {
    fileName: `${componentName}.View.tsx`,
    template: generateViewTmpl(componentName),
  };
  const viewModelTmpl = {
    fileName: `${componentName}.ViewModel.ts`,
    template: generateViewModelTmpl(componentName),
  };
  const indexTmpl = {
    fileName: 'index.ts',
    template: generateIndexTmpl(componentName),
  };

  return [viewTmpl, viewModelTmpl, indexTmpl];
}

const generateModalTemplate = (componentName: string) => {
  const viewTmpl = {
    fileName: `${componentName}.View.tsx`,
    template: generateViewTmpl(componentName),
  };
  const viewModelTmpl = {
    fileName: `${componentName}.ViewModel.ts`,
    template: generateViewModelTmpl(componentName),
  };
  const modalTmpl = {
    fileName: 'index.tsx',
    template: generateModalTmpl(componentName),
  };
  const domainTmpl = {
    fileName: `${componentName}.Domain.ts`,
    template: generateDomainTmpl(componentName),
  };
  const externTmpl = {
    fileName: `${componentName}.Extern.ts`,
    template: generateExternTmpl(componentName),
  };
  const implTmpl = {
    fileName: `${componentName}.Impl.ts`,
    template: generateImplTmpl(componentName),
  };

  return [viewTmpl, viewModelTmpl, modalTmpl, domainTmpl, externTmpl, implTmpl];
}

const generateModuleTemplate = (componentName: string) => {
  const viewTmpl = {
    fileName: `${componentName}.View.tsx`,
    template: generateViewTmpl(componentName),
  };
  const viewModelTmpl = {
    fileName: `${componentName}.ViewModel.ts`,
    template: generateViewModelTmpl(componentName),
  };
  const indexTmpl = {
    fileName: 'index.tsx',
    template: generateIndexTmpl(componentName),
  };
  const domainTmpl = {
    fileName: `${componentName}.Domain.ts`,
    template: generateDomainTmpl(componentName),
  };
  const externTmpl = {
    fileName: `${componentName}.Extern.ts`,
    template: generateExternTmpl(componentName),
  };
  const implTmpl = {
    fileName: `${componentName}.Impl.ts`,
    template: generateImplTmpl(componentName),
  };

  return [viewTmpl, viewModelTmpl, indexTmpl, domainTmpl, externTmpl, implTmpl];
}