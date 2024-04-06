import React, { createContext, useState } from "react";

export const ToggleSidebarContext = createContext();

const ToggleSidebarContextProvider = (props) => {
    const [sidebar, setSidebar] = useState(true);
    return (
        <ToggleSidebarContext.Provider value={{sidebar, setSidebar}}>
            {props.children}
        </ToggleSidebarContext.Provider>
    )
}
export default ToggleSidebarContextProvider;