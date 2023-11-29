import React, { createContext, ReactNode } from 'react';
import { Modal } from 'antd';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';

const context = createContext<any>(null);

export const useModal = () => {
  const modal: ModalStaticFunctions = React.useContext(context);
  return modal;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <context.Provider value={modal}>
      {contextHolder}
      {children}
    </context.Provider>
  );
};
