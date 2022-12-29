import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { ReactNode } from "react";

import { A } from "./styles";

interface Props extends LinkProps {
	children: ReactNode;
}

export const Link: FC<Props> = ({ children, ...props }) => (
	<NextLink {...props} passHref>
		<A>{children}</A>
	</NextLink>
);
