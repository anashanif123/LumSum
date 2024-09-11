import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/utils";

 
export const UserContext = createContext();

function UserContextProvider({children}) {
 
    const [user, setUser] = useState({islogin:false , email:''});

    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if (user) {
               setUser({islogin: true, email:user.email}) 
               console.log("user login ha", user);
               
            }else{
               setUser({islogin: false, email:''})
               console.log("user login nahi", user);


            }

        })
    },[]
    )

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
    
}

export default UserContextProvider;