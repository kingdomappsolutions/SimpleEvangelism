// Ionic & React imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component imports
import Rom323 from "../components/Rom3.23"
import Rom58 from "../components/Rom5.8"
import Rom623 from "../components/Rom6.23"
import ICor15 from "../components/ICor15"
import Rom10_13 from "../components/Rom10.13"
import Rom10_9_11 from "../components/Rom10.9-11"

// CSS import
import './styles.css'

const Scriptures: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Scriptures</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h1>
                        Click each Scripture below. Have the person read it aloud and ask, "What does this Scripture say?"
                    </h1>
                </IonText>
                <Rom323 />
                <Rom623 />
                
                <IonText>
                    <h1>
                        For these Scriptures, have the person read it aloud and ask, "Why did Jesus come to die?"
                    </h1>
                </IonText>
                <Rom58 />
                <ICor15 />
                
                <IonText>
                    <h1>
                        For the final two, have the person read them aloud and again ask, "What does this Scripture say?"
                    </h1>
                </IonText>
                <Rom10_9_11 />
                <Rom10_13 />
                
                <IonText>
                    <h1>
                        Say, "Calling on Jesus is not something to be taken lightly."
                    </h1>
                </IonText>
                <IonButton href="/commitment" expand="block" shape="round">Continue</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Scriptures
