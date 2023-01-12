import { Element } from "../../types";

const HeroBannerContent: React.FC<Element> = ({
  configuration,
  markdown_content,
}) => {
  return <div> {markdown_content} </div>;
};

export default HeroBannerContent;
