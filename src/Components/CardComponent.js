import { Card } from "antd";
import { useState } from 'react';
import DrawerComponent from "./DrawerComponent";

function CardComponent (props){
    const {data}=props
    const [open, setOpen] = useState(false);
    const onClickCard =() =>{
        setOpen(true);
    }
    return(
        <><DrawerComponent open={open} setOpen={setOpen} data={data}/>
            <Card title={data.Project.Title}  className="colcss" onClick={onClickCard}>
            <p><strong>Tech Stack</strong> :{data.Project.Technologies}</p>
            <p>{data.Other_Information.Availability}</p>
            </Card>
        </>
        
    )
}
export default CardComponent ;