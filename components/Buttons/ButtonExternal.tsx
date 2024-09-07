import { FC } from "react";
import Link from "next/link";

interface IButtonExternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
};

const ButtonExternal: FC<IButtonExternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target="_blank" rel="noopener noreferrer" className={"text-center text-white group " + className}>
      <div className="max-sm:py-6 max-sm:px-8 sm:py-8 sm:px-14 rounded bg-green-900 group-focus:bg-[#1D271E] group-active:bg-[#1D271E] group-hover:bg-[#4A5740] transition-all motion-reduce:transition-none motion-reduce:hover:transform-none">{children}</div>
    </Link>
  );
};

export default ButtonExternal;