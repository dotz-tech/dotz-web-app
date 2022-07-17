import {
BrowserRouter as Router,
Switch,
Route,
Routes,
} from "react-router-dom";

import App from "./App";
import FileUploadPage from "./documentUpload/Upload";

function DotzRouter() {
return (
	<Router>
		<Routes>
		    <Route path="/" element={<App />} />
		    <Route path="/docUpload" element={<FileUploadPage />} />
		</Routes>
	</Router>
    );
}

export default DotzRouter;

