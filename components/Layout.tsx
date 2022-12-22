import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
interface Props {
	children: ReactNode;
	hasFooter?: boolean;
	hasHeader?: boolean;
	hasSideBar?: boolean;
}
export default function Layout({
	children,
	hasFooter = true,
	hasHeader = true,
	hasSideBar = true,
}: Props) {
	const router = useRouter();
	return (
		<div className="relative">
			{hasHeader && <Header />}

			{router.pathname.startsWith("/contributor") ||
			router.pathname.startsWith("/creator") ||
			router.pathname.startsWith("/chats") ? (
				<>
					<div className="flex h-screen">
						<aside className="w-64 h-screen border-solid border border-dark-tint bg-white">
							{hasSideBar && <SideBar />}
						</aside>
						<main className="overflow-y-scroll h-screen flex-1 ">
							{children}
						</main>
					</div>
				</>
			) : (
				<>{children}</>
			)}
			{hasFooter && <Footer />}
		</div>
	);
}
