import Chance from "chance";

const chance=Chance();

export const UserData=()=>{
    
    console.log(chance.name({ middle_initial: true }));
    return chance.name({ middle_initial: true });
}