import { StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';

import { useMessage, useModal } from '@/hooks';
import { useQueryUserList } from '@/services/demo';
import { useGlobalStore } from '@/store';
import Table from '../Table';

const HomePage: React.FC = () => {
  const message = useMessage();
  const modal = useModal();

  const { data } = useQueryUserList({ id: 1 });
  console.log('👻 ~ data:', data);

  return (
    <PageContainer>
      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
      <Table></Table>
    </PageContainer>
  );
};

export default HomePage;
