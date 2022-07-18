import React, {useState} from 'react';
import { uploadWreckingBallFile } from '../api/WreckingBallApis';

function FileUploadComponent(){
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
        const formData = new FormData();
		formData.append('file', selectedFile);
        formData.append('customerId', 123);
        formData.append('documentType', 'W2');
        uploadWreckingBallFile(
            formData
        );
	};

	return(
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}

export default FileUploadComponent;
