import {Navbar} from "./components/navbar";
import {Jumbotron} from "./components/jumbotron";
import {Testimonials} from "./components/testimonials";

function App() {
	return (
		<div className={"font-Poppins flex flex-col h-[83vh]"}>
			<Navbar/>
			<Jumbotron/>
			<Testimonials/>
		</div>
	);
}

export default App;
