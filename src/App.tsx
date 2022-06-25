// Ionic & React imports
import { Redirect, Route } from "react-router-dom"
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from "@ionic/react"
import { useEffect } from "react"
import { IonReactRouter } from "@ionic/react-router"
import { Capacitor } from "@capacitor/core"
import { App as capApp } from "@capacitor/app"

// Icon imports
import { home, help as helpIcon, book, heart } from "ionicons/icons"

// Page imports
import Home from "./pages/Home"
import Commitment from "./pages/Commitment"
import Questions from "./pages/Questions"
import Scriptures from "./pages/Scriptures"
import Yes from "./pages/Yes"
import Final from "./pages/Final"
import NotTrue from "./pages/NotTrue"
import Know from "./pages/Know"
import No from "./pages/No"
import Testimony from "./pages/Testimony"
import Objections from "./pages/Objections"
import Obj1 from "./pages/Obj1"
import Obj2 from "./pages/Obj2"
import Obj3 from "./pages/Obj3"
import Obj4 from "./pages/Obj4"
import Obj5 from "./pages/Obj5"
import Good from "./pages/Good"
import Lifestyle from "./pages/Lifestyle"
import Family from "./pages/Family"
import C1 from "./pages/C1"
import C2 from "./pages/C2"
import C3 from "./pages/C3"
import C4 from "./pages/C4"
import C5 from "./pages/C5"
import Growth from "./pages/Growth"
import About from "./pages/About"
import Menu from "./components/Menu"
import Prayer from "./pages/Prayer"

setupIonicReact()

const App: React.FC = () => {
    // handling hardware back button
    useEffect(() => {
        if (Capacitor.isNativePlatform) {
            capApp.addListener("backButton", (e) => {
                if (window.location.pathname === "/home") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                } else if (window.location.pathname === "/questions") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                } else if (window.location.pathname === "/scriptures") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                } else if (window.location.pathname === "/commitment") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                } else if (window.location.pathname === "/questions/testimony") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                } else if (window.location.pathname === "/growth") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                } else if (window.location.pathname === "/") {
                    // Show A Confirm Box For User to exit app or not
                    let ans = window.confirm("Are you sure you want to exit?")
                    if (ans) {
                        capApp.exitApp()
                    }
                }
            })
        }
    }, [])

    return (
        <IonApp>
            <IonReactRouter>
                <Menu />
                <IonTabs>
                    <IonRouterOutlet id="main">
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/questions">
                            <Questions />
                        </Route>
                        <Route exact path="/scriptures">
                            <Scriptures />
                        </Route>
                        <Route exact path="/objections">
                            <Objections />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/obj1">
                            <Obj1 />
                        </Route>
                        <Route exact path="/obj2">
                            <Obj2 />
                        </Route>
                        <Route exact path="/obj3">
                            <Obj3 />
                        </Route>
                        <Route exact path="/obj4">
                            <Obj4 />
                        </Route>
                        <Route exact path="/obj5">
                            <Obj5 />
                        </Route>
                        <Route exact path="/good">
                            <Good />
                        </Route>
                        <Route exact path="/family">
                            <Family />
                        </Route>
                        <Route exact path="/lifestyle">
                            <Lifestyle />
                        </Route>
                        <Route exact path="/commitment">
                            <Commitment />
                        </Route>
                        <Route exact path="/commitment/C1">
                            <C1 />
                        </Route>
                        <Route exact path="/commitment/C2">
                            <C2 />
                        </Route>
                        <Route exact path="/commitment/C3">
                            <C3 />
                        </Route>
                        <Route exact path="/commitment/C4">
                            <C4 />
                        </Route>
                        <Route exact path="/commitment/C5">
                            <C5 />
                        </Route>
                        <Route exact path="/commitment/prayer">
                            <Prayer />
                        </Route>
                        <Route exact path="/growth">
                            <Growth />
                        </Route>
                        <Route exact path="/questions/yes">
                            <Yes />
                        </Route>
                        <Route exact path="/no">
                            <No />
                        </Route>
                        <Route exact path="/questions/testimony">
                            <Testimony />
                        </Route>
                        <Route exact path="/questions/final">
                            <Final />
                        </Route>
                        <Route exact path="/questions/nottrue">
                            <NotTrue />
                        </Route>
                        <Route exact path="/questions/know">
                            <Know />
                        </Route>
                        <Redirect exact path="/" to="/home" />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" color="primary">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon icon={home} />
                            <IonLabel>Home</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="questions" href="/questions">
                            <IonIcon icon={helpIcon} />
                            <IonLabel>Questions</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="scriptures" href="/scriptures">
                            <IonIcon icon={book} />
                            <IonLabel>Scriptures</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="commitment" href="/commitment">
                            <IonIcon icon={heart} />
                            <IonLabel>Commitment</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    )
}

export default App
