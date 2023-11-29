import { useModel, useSelectedRoutes } from '@umijs/max';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const Header: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const routes = useSelectedRoutes();

  const handleClick = () => {
    setInitialState((s: any) => ({
      ...s,
      collapsed: !s.collapsed,
    }));
  };

  const breadcrumbItems = routes
    .map((item: any, index) => {
      const obj: any = {};
      if (item?.route?.name) {
        obj.title = item.route.name;
      }
      return obj;
    })
    .filter(Boolean);

  return (
    <div p="x-5" flex="y-center">
      <span onClick={handleClick} cursor="pointer" m="r-6">
        {initialState?.collapsed ? (
          <MenuUnfoldOutlined />
        ) : (
          <MenuFoldOutlined />
        )}
      </span>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default Header;
