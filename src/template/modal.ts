export const generateModalTmpl = (ComponentName: string) => {
  return (
    `import React from 'react';
import Modal from '@m4b-design/Modal';
import { RemeshRoot } from 'remesh-react';
import { useTranslation } from '@jupiter/plugin-runtime/i18n';
import { withViewModel } from '@i18n-ecom-seller/mundo-model';
import { ${ComponentName} as View } from './${ComponentName}.View';
import {
  use${ComponentName}ViewModel as ViewModel,
  ${ComponentName}ViewModelOptions,
} from './${ComponentName}.ViewModel';
import { createModal, useModal, getModalProps } from '@/infra/core/modal';
import { ${ComponentName}ExternImpl } from './${ComponentName}.Impl';

const ${ComponentName} = withViewModel(ViewModel, View);

type ${ComponentName}ModalProps = {

};

const ${ComponentName}Modal = createModal((props: ${ComponentName}ModalProps) => {
  const modal = useModal();
  const { t } = useTranslation();

  const onClose = () => {
    modal.hide();
  };

  return (
    <Modal
      {...getModalProps(modal)}
      title={t('modal title')}>
      <RemeshRoot
        options={{
          externs: [${ComponentName}ExternImpl],
        }}>
        <${ComponentName} {...props} />
      </RemeshRoot>
    </Modal>
  );
});

export const use${ComponentName}Modal = () => {
  const modal = useModal(${ComponentName}Modal);

  const open = (props: ${ComponentName}ModalProps) => {
    modal.show(props);
  };

  const close = () => {
    modal.hide();
  };

  return { open, close };
};
`);
}
