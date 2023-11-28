import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Icon, useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <p>123</p>
      <div className={styles.container}>
        <Icon icon="fa:500px"></Icon>
        <Icon icon="local:1"></Icon>
        <div className="p10 m-6 br">132</div>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
