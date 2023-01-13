import { URL } from "../../types";
import classnames from "classnames";

interface LinkProps {
  type: "primary" | "secondary" | "outline";
  className?: string;
  fill?: boolean;
}

const Link: React.FC<LinkProps & URL> = ({
  type,
  url,
  target,
  className,
  name,
  fill,
}) => {
  return (
    <a
      className={classnames(
        "flex items-center justify-center rounded text-sm px-4 py-3",
        {
          "bg-orange-600": type === "primary",
          "border border-slate-200": type === "secondary",
          "text-slate-900 border border-slate-900": type === "outline",
          "w-full": fill,
        },
        className
      )}
      href={url}
      target={target}
    >
      {name}
    </a>
  );
};

export default Link;
