import { Icon, useModel } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

import Guide from '@/components/Guide';
import { useMessage, useModal } from '@/hooks';
import { useGlobalStore } from '@/store';
import { trim } from '@/utils/format';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const { salmon, addSalmon } = useGlobalStore();

  const message = useMessage();
  const modal = useModal();

  return (
    <PageContainer content={<span>111</span>}>
      <p>{salmon}</p>

      <Button
        onClick={() => {
          addSalmon(1);
        }}
      >
        addSalmon
      </Button>

      <p>123</p>
      <Button type="primary">123</Button>
      <div className={styles.container}>
        <Icon icon="fa:500px"></Icon>
        <Icon icon="local:1"></Icon>
        <div className="p-y-20" m="x10" p="x-10 y-10">
          132
        </div>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
