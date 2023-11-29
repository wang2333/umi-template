import { useState } from 'react';

const useUser = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return {
    collapsed,
    setCollapsed,
  };
};

export default useUser;
