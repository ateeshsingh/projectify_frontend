import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const DrawerComponent = (props) => {
    const{open,setOpen,data} =props;
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p><strong>Project Technologies</strong> : {data.Project.Technologies} </p>
        <p><strong>Frontend Skill</strong> : {data.Technical_Skillset.Frontend}</p>
        <p><strong>Backend Skill</strong>  : {data.Technical_Skillset.Backend}</p>
        <p><strong>Databases Skill</strong>  : {data.Technical_Skillset.Databases}</p>
        <p><strong>Other Information</strong>  : {data.Other_Information.Availability}</p>
      </Drawer>
    </>
  );
};

export default DrawerComponent;