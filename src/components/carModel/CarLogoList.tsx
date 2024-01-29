import * as React from "react";
import carLogo  from '../../assets/ford.jpeg';
import carMarutiLogo  from '../../assets/maruti.jpeg';
import {CAR_LOGO_LIST} from "../../constants/constants";

type Props = {
    carLogoClicked: (carModelStr:string) => void;
};


const CarLogoList: React.FC<Props> = ({ carLogoClicked }) => {
    const onLogoClick = (event:any)=>{
        carLogoClicked(event.currentTarget.id);
    }

    return (<>
       <div className="flex-row-logo" >
           {CAR_LOGO_LIST.map((carObj:{model:string,logo:string})=>{
               return (<img src={`/assets/${carObj.logo}`} alt="Ford" id={carObj.model} onClick={onLogoClick}></img>)
           })}
       </div>
       </>
    );

};

export default CarLogoList;