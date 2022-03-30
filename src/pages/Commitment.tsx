// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component imports
import IICor5 from "../components/IICor5"
import Mark8 from "../components/Mark8"

// CSS import
import './styles.css'

const Commitment: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Commitment</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h1>
                        Click the Scripture below and have the person read it aloud asking, "What does this Scripture say?"
                    </h1>
                </IonText>
                <Mark8 />
                <IonText>
                    <h1>
                        Say, "Following Jesus is a commitment that may cost us our earthly lives, but will gain us eternal life with Jesus."
                    </h1>
                    <h1>
                        Would you like to call on Jesus and commit to following Him?
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/commitment/c1" expand="block" shape="round">Yes</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton href="/objections" expand="block" shape="round">No</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Commitment