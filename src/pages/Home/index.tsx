import { Icon, useModel } from '@umijs/max';
import { StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Descriptions } from 'antd';

import Guide from '@/components/Guide';
import { useMessage, useModal } from '@/hooks';
import { useQueryUserList } from '@/services/demo';
import { useGlobalStore } from '@/store';
import { trim } from '@/utils/format';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { salmon, addSalmon } = useGlobalStore();

  const message = useMessage();
  const modal = useModal();

  const { data } = useQueryUserList();
  console.log('👻 ~ data:', data);

  const content = (
    <Descriptions size="small" column={2}>
      <Descriptions.Item label="创建人">张三</Descriptions.Item>
      <Descriptions.Item label="联系方式">
        <a>421421</a>
      </Descriptions.Item>
      <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
      <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
      <Descriptions.Item label="备注">
        中国浙江省杭州市西湖区古翠路
      </Descriptions.Item>
    </Descriptions>
  );

  return (
    <PageContainer>
      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
      <div h="3000">{/* <Guide name={trim(name)} /> */}</div>
      {/* <p>{salmon}</p>

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
      </div> */}
    </PageContainer>
  );
};

export default HomePage;
