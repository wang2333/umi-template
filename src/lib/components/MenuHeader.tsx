import { ReactNode } from 'react';
import { useModel } from '@umijs/max';

interface MenuHeaderProps {
  logo?: ReactNode;
  title?: ReactNode;
}
const Header: React.FC<MenuHeaderProps> = ({ logo, title }) => {
  const { initialState } = useModel('@@initialState');

  return (
    <div flex="y-center" h="full" w="full" text="nowrap" p="x-2">
      <span>{logo}</span>
      <span m="l-4"> {!initialState?.collapsed && title}</span>
    </div>
  );
};

export default Header;
