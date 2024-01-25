import * as React from "react";
import { ICarModel } from "../../../reducers/car-type";
import carLogo  from '../../../assets/ford.jpeg';
import carMarutiLogo  from '../../../assets/maruti.jpeg';
type Props = {
    carLogoClicked: (carModelStr:string) => void;
};


const CarLogoList: React.FC<Props> = ({ carLogoClicked }) => {
    const onLogoClick = (event:any)=>{
        carLogoClicked(event.currentTarget.id);
    }

    return (<>
       <div className="flex-row-logo" >
           <img src={carLogo} alt="Ford" id="Ford" onClick={onLogoClick}></img>
           <img src={carMarutiLogo} alt=""  id="maruti" onClick={onLogoClick}></img>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
       </div>
       <div className="flex-row-logo" onClick={onLogoClick}>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
           <img src={carMarutiLogo} alt=""></img>
           <img src={carLogo} alt=""></img>
       </div>
       </>
    );

};

export default CarLogoList;