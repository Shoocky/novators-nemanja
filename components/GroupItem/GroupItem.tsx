import dynamic from "next/dynamic";
import { Group, GroupCodeConfig } from "../../types";

const getComponent = (c: string) =>
  dynamic(() => import(`components/${c}`), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

const GroupItem: React.FC<Group> = ({ code }) => {
  const Component = getComponent(GroupCodeConfig[code]);
  return <Component />;
};

export default GroupItem;
