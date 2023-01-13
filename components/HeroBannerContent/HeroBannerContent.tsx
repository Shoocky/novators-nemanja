import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Element } from "../../types";
import Link from "../Link";

const HeroBannerContent: React.FC<Element> = ({
  configuration,
  markdown_content,
  media,
  urls,
}) => {
  const height = configuration[0].height || 400;
  return (
    <div
      style={{
        height: `${height}px`,
      }}
      className="relative text-slate-100"
    >
      <Image
        src={media[0].media_url}
        alt={media[0].media_alt || "Failed to load image"}
        fill
        unoptimized
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
        }}
        priority
      />
      <div className="absolute bottom-0 m-4 md:m-[100px]">
        {markdown_content && <ReactMarkdown>{markdown_content}</ReactMarkdown>}
        <div className="flex flex-col md:flex-row mt-6">
          <Link {...urls[0]} type="primary" className="mb-3 md:mr-4 md:mb-0" />
          <Link {...urls[1]} type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default HeroBannerContent;
