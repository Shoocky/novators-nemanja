import dynamic from "next/dynamic";
import React from "react";
import { useCallback } from "react";
import { Element, ElementCode, ElementCodeConfig } from "../../types";

interface ElementItemComponentProps {
  code: ElementCode;
}

const getComponent = (c: string) =>
  dynamic<ElementItemComponentProps>(() => import(`components/${c}`), {
    ssr: true,
    loading: () => <p>Loading...</p>,
  });

const ElementItem: React.FC<Element> = ({ code, ...props }) => {
  const Component = getComponent(ElementCodeConfig[code]);
  return <Component code={code} {...props} />;
};

export default ElementItem;
