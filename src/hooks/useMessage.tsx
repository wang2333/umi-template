import React, { createContext, ReactNode } from 'react';
import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

const context = createContext<any>(null);

export const useMessage = () => {
  const message: MessageInstance = React.useContext(context);
  return message;
};

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <context.Provider value={messageApi}>
      {contextHolder}
      {children}
    </context.Provider>
  );
};
