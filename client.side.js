import axios from "axios";

const fetchApi = async (watch) => {
  const serverUrl = 'http://localhost:2000/get-user-details'; // Replace with your server URL
  if (watch) {
    try {
      const response = await axios.get(serverUrl);
      if (response.status === 200) {
        console.log(response.data);
        console.log(`📥 Receiving data from ${serverUrl}`);
      } else {
        console.log('🔴 Server returned an unexpected status code:', response.status);
      }
    } catch (error) {
      console.log('Error occurred while trying to connect to the server');
    }
  }
  else {
    console.log("🚧 We are not listening to Websocket server.");
  }
};

export { fetchApi };


