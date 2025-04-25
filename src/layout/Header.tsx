import { eventDetails } from '@/pages/Landing';

const Header = () => {

	return (
		<header className="bg-black w-full py-4 px-6 flex justify-between items-center">
			<div className="flex items-center">
				<div className="flex items-center justify-center mr-3">
					<img src="https://zuafrique.com/images/logo.png" alt="ZuAfrique Logo" className="w-10 md:w-12 h-10 md:h-12 object-cover object-left" />
				</div>
				<span className="text-white text-2xl md:text-4xl font-extralight">ZuAfrique</span>
			</div>
			<div>
				<div className="border border-2 font-bold border-orange-500 text-orange-500 rounded-full px-6 py-2">
					<span className="hidden md:block">{eventDetails.title}</span>
					<span className="md:hidden">ZK Day</span>
				</div>
			</div>
		</header>
	);
};


export default Header;