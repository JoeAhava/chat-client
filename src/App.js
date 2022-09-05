// import ChatContainer from "./components/ChatContainer";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { AuthCTX } from "./context";
import "./index.css";
import { USER_EXAMPLE } from "./utils/util";
function App() {
	const [user, setUser] = useState(USER_EXAMPLE);
	return (
		<AuthCTX.Provider value={{ user }}>
			<main className="">
				<Dashboard />
			</main>
		</AuthCTX.Provider>
	);
}

export default App;
