import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="flex flex-col">
				<Navbar />
				<Body />
			</div>
		</Provider>
	);
}

export default App;
