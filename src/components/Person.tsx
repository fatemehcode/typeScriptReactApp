import { useState } from "react";


interface Props{
    name:string;
    email:string;
    age:number;
    status:boolean;
    friends:string[];
    country?:string;
    sex:Sex;
}

export enum Sex{
    male = "male",
    femail= "female",
}
const Person = (props:Props) => {   
    const {name,email,age,status,friends,country,sex} = props;
    const showFriends=()=>{
        console.log(friends);
        return (<div>"{friends.map((friend:any) =>(<p>{friend}</p>))}"</div>) ;         
            
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <p>email:{email}</p>
            <p>age:{age}</p>
            <p>status:{status?'marrid':'single'}</p>
            <p>country:{country}</p>
            <p>sex:{sex}</p>
            <p>number of friends:
                {friends.length}
                <button onClick={(friends)=>showFriends}>List</button>
            </p>
            
        </div>
    );
};

export default Person;