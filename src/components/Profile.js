import React, { useState } from "react";
import Address from "./Address";
import Institution from "./Institution";

const Profile = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className="profile">  
            <div className="tabs">
                <div onClick={() => setTab(0)} className={tab === 0? "tab-switch-head" : "tab-one"}>Institution</div>    
                <div onClick={() => setTab(1)} className={tab === 1? "tab-switch-head" : "tab-two"}>Address</div>    
            </div> 
            {tab === 0? <Institution /> : ""}
            {tab === 1? <Address /> : ""}
        </div>
    )
};

export default Profile;
