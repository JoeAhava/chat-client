/* This example requires Tailwind CSS v2.0+ */

import ChatContainer from "./ChatContainer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Dashboard() {
	return (
		<div className="min-h-full">
			<NavBar />

			<Header />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					{/* Replace with your content */}
					<div className="px-4 py-6 sm:px-0">
						<div className="h-96 rounded-lg border-gray-200 ">
							<ChatContainer />
						</div>
						{/** Router Goes in Here for authenticated user */}

						{/** Router END */}
					</div>
					{/* /End replace */}
				</div>
			</main>
		</div>
	);
}
