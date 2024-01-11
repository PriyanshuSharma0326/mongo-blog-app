import { createContext, useState } from "react";

export const ConfirmationBoxContext = createContext();

export const ConfirmationBoxContextProvider = ({ children }) => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [blogIdToDelete, setBlogIdToDelete] = useState('');

    const contextValue = {
        isBoxOpen,
        setIsBoxOpen,
        blogIdToDelete,
        setBlogIdToDelete,
    };

    return (
        <ConfirmationBoxContext.Provider value={ contextValue }>
            { children }
        </ConfirmationBoxContext.Provider>
    )
}
