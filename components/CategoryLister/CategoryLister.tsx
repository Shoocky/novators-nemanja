import { Element } from "../../types";
import ElementItem from "../ElementItem";

const CategoryLister: React.FC<{ elements: Element[] }> = ({ elements }) => {
  return (
    <div>
      Category Lister
      {elements.map((e) => (
        <ElementItem key={Math.random()} {...e} />
      ))}
    </div>
  );
};

export default CategoryLister;
