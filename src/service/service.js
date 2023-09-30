import axios  from "axios";


const fetchData = async (queryString) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/projects`,{search_string:queryString},{header: "At"});
      return response.data.response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


export default fetchData;