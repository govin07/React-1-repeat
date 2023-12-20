import React, {createContext, useContext} from 'react'

 export const ThemeContext = createContext({
    thememode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});




// export default ThemeContext;

export const  ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}