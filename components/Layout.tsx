import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
interface Props {
	children: ReactNode;
	hasFooter?: boolean;
	hasHeader?: boolean;
}
export default function Layout({
	children,
	hasFooter = true,
	hasHeader = true,
}: Props) {
	return (
		<div>
			{hasHeader && <Header />}
			{children}
			{hasFooter && <Footer />}
		</div>
	);
}
