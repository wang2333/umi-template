import { StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

import { useMessage, useModal } from '@/hooks';
import { useQueryUserList } from '@/services/demo';

const HomePage: React.FC = () => {
  const message = useMessage();
  const modal = useModal();

  const { data } = useQueryUserList({ id: 1 });

  return (
    <PageContainer>
      <StarOutlined className="m-5" />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
    </PageContainer>
  );
};

export default HomePage;
