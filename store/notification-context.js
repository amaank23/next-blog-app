import { createContext, useEffect, useState } from "react";

export const Context = createContext({
    notification: null,
    showNotification: function() {},
    hideNotification: function() {}
})

function NotificationContextProvider({ children }){
    const [notification, setNotification] = useState();

    useEffect(() => {
        if(notification){
            const timeout = setTimeout(() => {
                if(notification.status === 'success' || notification.status === 'error'){
                    setNotification(null)
                }
            }, 3000)
            return () => clearTimeout(timeout);
        }

    }, [notification])
    function showNotification({ title, message, status }){
        setNotification({
            title: title,
            message: message,
            status: status
        })
    }
    function hideNotification(){
        setNotification(null)
    }

    const context = {
        notification,
        showNotification,
        hideNotification
    }
    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default NotificationContextProvider