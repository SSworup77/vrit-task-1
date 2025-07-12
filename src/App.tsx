import BgComponent from "./components/BgComponent";
import MainTitle from "./components/MainTitle";

const App = () => {
	return (
		<div className="relative h-screen">
			<BgComponent />
			<div className="flex items-center justify-center h-full">
				<MainTitle />
			</div>
		</div>
	);
};

export default App;
