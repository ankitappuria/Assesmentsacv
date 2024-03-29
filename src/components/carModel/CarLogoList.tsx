import * as React from "react";
import carLogo  from '../../assets/ford.jpeg';
import carMarutiLogo  from '../../assets/maruti.jpeg';
import {CAR_LOGO_LIST} from "../../constants/constants";

type Props = {
    carLogoClicked: (carModelStr:string) => void;
};


const CarLogoList = (
    {
        carLogoClicked
    }: Props
) => {
    const onLogoClick = (event:any)=>{
        carLogoClicked(event.currentTarget.id);
    }

    return (<>
       <div className="flex-row-logo" >
           {CAR_LOGO_LIST.map((carObj:{model:string,logo:string},index:number)=>{
               return (<img src={`/assets/${carObj.logo}`}  key={index} alt="Ford" id={carObj.model} onClick={onLogoClick}></img>)
           })}
       </div>
       </>
    );

};

export default CarLogoList;