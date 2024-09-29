import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className='h-20 w-full'>
			<div className='container h-full w-full mx-auto px-2 md:px-20 flex flex-col md:flex-row justify-between items-center '>
				<Link href={"/"}>
					<h2 className='text-slate-500 font-extrabold text-3xl'>FireStore</h2>
				</Link>
				<nav className='flex flex-row gap-4'>
					<Link href={"/"}>
						<button className='px-5 py-2 rounded bg-blue-700 hover:bg-blue-500 text-white '>
							See Posts
						</button>
					</Link>
					<Link href={"/add-project"}>
						<button className='px-5 py-2 rounded bg-green-700 hover:bg-green-500 text-white '>
							Create post
						</button>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
