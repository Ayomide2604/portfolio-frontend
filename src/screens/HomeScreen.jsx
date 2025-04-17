import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
const HomeScreen = () => {
	return (
		<div>
			<Hero />
			<Services />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
};

export default HomeScreen;
