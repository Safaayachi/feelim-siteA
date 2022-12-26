import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
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
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	return (
		<div className="relative">
			{hasHeader && <Header />}

			{router.pathname.startsWith("/contributor") ||
			router.pathname.startsWith("/creator") ? (
				<>
					<div className="hidden md:flex h-screen">
						<aside className=" w-64 h-screen border-solid border border-dark-tint bg-white">
							{hasSideBar && <SideBar />}
						</aside>
						<main className="overflow-y-scroll h-screen flex-1 ">
							{children}
						</main>
					</div>
					<div className="md:hidden">
						{isSideBarOpen ? (
							<div className="flex h-screen  flex-col">
								<nav className="md:hidden text-xs z-30 py-4 bg-white flex justify-end  cursor-pointer border-b border-solid border-dark-tint">
									<i
										className="icon-switch font-medium text-primary text-xl px-4"
										onClick={() =>
											setIsSideBarOpen(!isSideBarOpen)
										}
									></i>
								</nav>

								<aside className="absolute z-20 w-64 h-screen border-solid border border-dark-tint bg-white">
									{hasSideBar && <SideBar />}
								</aside>
								<main className="relative h-screen overflow-hidden">
									<div className="absolute z-10 inset-0 bg-black opacity-25"></div>
									{children}
								</main>
							</div>
						) : (
							<div className="flex h-screen  flex-col">
								<nav className="md:hidden text-xs z-30 py-4 bg-white flex justify-end cursor-pointer border-b border-solid border-dark-tint">
									<i
										className="icon-switch font-medium text-primary text-xl px-4 "
										onClick={() =>
											setIsSideBarOpen(!isSideBarOpen)
										}
									></i>
								</nav>
								<div className="overflow-y-scroll h-screen flex-1 ">
									{children}
								</div>
							</div>
						)}
					</div>
				</>
			) : (
				<>{children}</>
			)}
			{hasFooter && <Footer />}
		</div>
	);
}
