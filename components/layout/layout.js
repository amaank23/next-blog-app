import { useContext } from "react";
import { Context } from "../../store/notification-context";
import Notification from "../ui/notification";
import MainNavigation from "./main-navigation";


const Layout = ({ children }) => {
    const notificationCtx = useContext(Context)
    return <>
        <MainNavigation />
        <main>{ children }</main>
        {notificationCtx.notification && <Notification title={notificationCtx.notification.title} message={notificationCtx.notification.message} status={notificationCtx.notification.status} />}
    </>;
  };
  
  export default Layout;
  