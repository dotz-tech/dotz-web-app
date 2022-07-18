import {
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";

import App from "./App";
import FileUploadComponent from "./documentUpload/FileUploadComponent";

function DotzRouter() {
return (
	<Router>
		<Routes>
		    <Route path="/" element={<App />} />
		    <Route path="/docUpload" element={<FileUploadComponent />} />
		</Routes>
	</Router>
    );
}

export default DotzRouter;

