import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {
  Element,
  LinkedProductTagGroup,
  ProductTagGroup,
  URL,
  ProductTag,
} from "../../types";
import Link from "../Link";

const ProductTagView: React.FC<ProductTag> = ({
  name,
  media_alt,
  media_url = "",
  url,
}) => {
  return (
    <div className="h-[250px] relative Product">
      <Image
        src={media_url}
        alt={media_alt || "Failed to load image"}
        fill
        unoptimized
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
        }}
        priority
      />
      <a className="absolute bottom-0 m-3 text-slate-50 text-xs" href={url}>
        {name} →
      </a>
    </div>
  );
};

const ProductTagGroupView: React.FC<ProductTagGroup> = ({
  name,
  linked_product_tags,
}) => {
  return (
    <div>
      {name}
      <div className="md:flex flex-wrap mt-4">
        {linked_product_tags.map((lpt, index) => (
          <ProductTagView key={index} {...lpt.product_tag} />
        ))}
      </div>
    </div>
  );
};

const ProductTagGroups: React.FC<Element> = ({
  markdown_content,
  linked_product_tag_groups,
  urls,
}) => {
  return (
    <div className="w-full max-w-[1140px] p-2 md:px-8 m-auto">
      <div className="flex items-center justify-between text-slate-900">
        {markdown_content && (
          <div className="ProductTagGroup">
            <ReactMarkdown>{markdown_content}</ReactMarkdown>{" "}
          </div>
        )}
        {urls && urls[0] && (
          <a
            href={urls[0].url}
            target={urls[0].target}
            className="hidden md:block text-sm"
          >
            {urls[0].name}
          </a>
        )}
      </div>
      <div>
        {linked_product_tag_groups.map((lptg, index) => (
          <ProductTagGroupView key={index} {...lptg.product_tag_group} />
        ))}
      </div>
      <div className="md:hidden p-2">
        {urls && urls[0] && <Link {...urls[0]} type="outline" />}
      </div>
    </div>
  );
};

export default ProductTagGroups;
