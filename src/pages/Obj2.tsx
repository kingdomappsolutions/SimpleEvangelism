// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component imports
import Evidence1 from "../components/Evidence1"
import Evidence2 from "../components/Evidence2"
import Evidence3 from "../components/Evidence3"
import Evidence4 from "../components/Evidence4"
import Evidence5 from "../components/Evidence5"

// CSS import
import './styles.css'

const Obj2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Objections</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h1>
                        God made sure that we had enough evidence for Jesus's life, death, and resurrection.
                    </h1>
                </IonText>
                <IonText>
                    <h1>
                        Let me give you five pieces of evidence for Jesus's life, death, and resurrection:
                    </h1>
                </IonText>
                <Evidence1 />
                <Evidence2 />
                <Evidence3 />
                <Evidence4 />
                <Evidence5 />
                <IonText>
                    <h1>
                        Are you ready to trust and believe in the risen Jesus?
                    </h1>
                </IonText>
                <IonButton className="top" href="/commitment/c1" expand="block" shape="round">Yes</IonButton>
                <IonButton className="top" href="/no" expand="block" shape="round">I need more time to think on this</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Obj2