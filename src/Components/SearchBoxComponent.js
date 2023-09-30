import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
import fetchData from '../service/service';
const { Search } = Input;


const SearchBoxComponent = (props)=>{
    const {searchParams,setSearchParams,setData}= props;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1677ff',
          }}
        />
      );
      const onSearch = async (value, _e, info) => {

        const [resData] = await Promise.all([fetchData(value.toLowerCase())]);
        setData(resData);
      };


      return (
        <Space direction="vertical" className='searchBox'>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
      )
}



export default SearchBoxComponent;


