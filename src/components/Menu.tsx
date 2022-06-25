// Ionic & React imports
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonTitle,
    IonToolbar,
} from "@ionic/react"
import { useLocation } from "react-router-dom"

// Icon imports
import {
    home,
    help as helpIcon,
    book,
    heart,
    leaf,
    alertCircle,
    alert,
} from "ionicons/icons"

// CSS imports
import "../pages/styles.css"
import "./Menu.css"

interface AppPages {
    url: string
    iosIcon: string
    mdIcon: string
    title: string
}

const appPages: AppPages[] = [
    {
        title: "Home",
        url: "/home",
        iosIcon: home,
        mdIcon: home,
    },
    {
        title: "Foundational Questions",
        url: "/questions",
        iosIcon: helpIcon,
        mdIcon: helpIcon,
    },
    {
        title: "Scriptures",
        url: "/scriptures",
        iosIcon: book,
        mdIcon: book,
    },
    {
        title: "Objections",
        url: "/objections",
        iosIcon: alert,
        mdIcon: alert,
    },
    {
        title: "Commitment",
        url: "/commitment",
        iosIcon: heart,
        mdIcon: heart,
    },
    {
        title: "Growth",
        url: "/growth",
        iosIcon: leaf,
        mdIcon: leaf,
    },
    {
        title: "About Simple Evangelism",
        url: "/about",
        iosIcon: alertCircle,
        mdIcon: alertCircle,
    },
]

const Menu: React.FC = () => {
    const location = useLocation()

    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList id="menu-list">
                    <IonListHeader>Simple Evangelism</IonListHeader>
                    <IonNote>kingdomappsolutions.tech</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    className={
                                        location.pathname === appPage.url
                                            ? "selected"
                                            : ""
                                    }
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}
                                >
                                    <IonIcon
                                        slot="start"
                                        ios={appPage.iosIcon}
                                        md={appPage.mdIcon}
                                    />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu
