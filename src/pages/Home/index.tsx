import { useState } from 'react';
import { Icon } from '@umijs/max';
import { StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useMessage, useModal } from '@/hooks';
import { useQueryUserList } from '@/services/demo';

const HomePage: React.FC = () => {
  const message = useMessage();
  const modal = useModal();
  const [id, setid] = useState(1);
  const { data } = useQueryUserList({ id });

  return (
    <PageContainer>
      <Icon icon="fa:500px" className="text-dark"></Icon>
      <Icon icon="fa-brands:accessible-icon"></Icon>
      <StarOutlined className="m-10" />
      <StarFilled className="mr-4" />
      <StarTwoTone twoToneColor="#eb2f96" />
      <Button
        onClick={() => {
          if (id > 5) {
            setid(1);
          } else {
            setid(id + 1);
          }
        }}
      >
        add
      </Button>
    </PageContainer>
  );
};

export default HomePage;
