import { Icon, useModel } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Image } from 'antd';

import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Image src="./1.png"></Image>
      <p>123</p>
      <Button>123</Button>
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
