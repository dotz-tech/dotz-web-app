import {
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";

import FileUploadComponent from "./components/FileUploadComponent";
import LoginComponent from "./components/LoginComponent";

function DotzRouter() {
return (
	<Router>
		<Routes>
		    <Route path="/" element={<LoginComponent />} />
		    <Route path="/docUpload" element={<FileUploadComponent />} />
		</Routes>
	</Router>
    );
}

export default DotzRouter;

