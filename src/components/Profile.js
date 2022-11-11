import React, { useState } from "react";

const Profile = () => {
    const [tab, setTab] = useState(null)

    return (
        <div className="profile">  
            <div className="tabs">
                <div onClick={() => setTab(0)} className={tab === 0? "tab-switch-head" : "tab-one"}>Institution</div>    
                <div onClick={() => setTab(1)} className={tab === 1? "tab-switch-head" : "tab-two"}>Address</div>    
            </div> 
            <form >
                
            </form>
        </div>
    )
};

export default Profile;
