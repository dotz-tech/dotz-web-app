const { REACT_APP_WRECKING_BALL_BASE_URL } = process.env;

export function postWreckingBall(bodyObject, apiUrl) {
  (async () => {
    const rawResponse = await fetch(`${REACT_APP_WRECKING_BALL_BASE_URL}${apiUrl}`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    }); 
    const content = await rawResponse.json();

    console.log(content);
  })();
}

export function getWreckingBall(apiUrl) {
  (async () => {
    const rawResponse = await fetch(`${REACT_APP_WRECKING_BALL_BASE_URL}${apiUrl}`, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }   
    }); 
    const content = await rawResponse.json();

    console.log(content);
  })();
}
