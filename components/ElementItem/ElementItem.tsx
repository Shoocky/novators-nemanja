import dynamic from "next/dynamic";
import { Element, ElementCode, ElementCodeConfig } from "../../types";

interface ElementItemComponentProps {
  code: ElementCode;
}

const getComponent = (c: string) =>
  dynamic<ElementItemComponentProps>(() => import(`components/${c}`), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

const ElementItem: React.FC<Element> = ({ code, ...props }) => {
  const Component = getComponent(ElementCodeConfig[code]);
  return <Component code={code} {...props} />;
};

export default ElementItem;
