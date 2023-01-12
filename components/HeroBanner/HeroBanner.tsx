import { Element } from "../../types";
import ElementItem from "../ElementItem";

const HeroBanner: React.FC<{ elements: Element[] }> = ({ elements }) => {
  return (
    <div>
      Hero banner
      {elements.map((e) => (
        <ElementItem key={Math.random()} {...e} />
      ))}
    </div>
  );
};

export default HeroBanner;
