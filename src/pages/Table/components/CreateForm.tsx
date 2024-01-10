import React, { memo, PropsWithChildren } from 'react';
import { Modal } from 'antd';
import { useQueryUserList2 } from '@/services/demo';

interface CreateFormProps {
  modalVisible: boolean;
}

const CreateForm: React.FC<PropsWithChildren<CreateFormProps>> = (props) => {
  const { modalVisible } = props;
  const { data } = useQueryUserList2();
  console.log('👻 ~ data:', data?.list);

  return (
    <Modal
      destroyOnClose
      title="新建"
      width={420}
      open={modalVisible}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default memo(CreateForm);
