import AllPosts from "@/components/AllPosts";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div>
			<Header />
			<section className='px-2 md:px-20 py-2'>
				<AllPosts />
			</section>
		</div>
	);
}
