import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Image from "next/image";
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
		<div className="relative h-full min-h-screen">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
