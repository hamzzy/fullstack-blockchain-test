import { utils } from "ethers";
import car_logo from "../utils/cars_brand_logo.json";

export const trimAddress = (address : string, digitQuantity : number) => `${
    address.slice(0, digitQuantity)
}...${
    address.slice(-4)
}`


export const addVehicleLogo =(brand:any)=>car_logo.filter((data)=>{ return data.slug === brand.toLowerCase()})[0]?.image.original;

export const  byte2Vin=(vin:string)=> utils.parseBytes32String(vin);



export const convertEnum=(id:number)=>{

    switch (id) {
        case 0:
            return "Excellent"
        case 1:
            return "Good"
        case 2:
            return "Fair"
        case 3:
            return "Bad"
    }
}