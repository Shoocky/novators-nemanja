import dynamic from "next/dynamic";
import { Group, GroupCodeConfig, Element } from "../../types";

interface GroupItemComponentProps {
  elements: Element[];
}

const getComponent = (c: string) =>
  dynamic<GroupItemComponentProps>(() => import(`components/${c}`), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

const GroupItem: React.FC<Group> = ({ code, ...props }) => {
  const Component = getComponent(GroupCodeConfig[code]);
  return <Component {...props} />;
};

export default GroupItem;
