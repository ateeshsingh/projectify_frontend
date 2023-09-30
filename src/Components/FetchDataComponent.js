import React, { useState, useEffect } from 'react';
import CardComponent from "../Components/Cards";
import { Row, Col } from 'antd';
import fetchData from '../service/service';

const FetchDataComponent = (props) => {
  const {searchParams ,data,setData} =props;
  const [loading, setLoading] = useState(true);
const fetchProject = async ()=>{
        // Function to fetch data from the backend
        const [resData] = await Promise.all([fetchData(searchParams)]);
        setData(resData);
        setLoading(false);
}
    useEffect(() => {
            fetchProject();
  }, []);
  return (
    <Row gutter={22}>
        { 
        data.map((ele,indx)=>{
          return (
            <Col md={4} sm= {12}className='columns'>
            <CardComponent data={ele}/>
            </Col>
          )
        })
        }
      </Row>
  );
};

export default FetchDataComponent;
