// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component imports
import Luke12 from "../components/Luke12"
import Matt10 from "../components/Matt10"

// CSS import
import './styles.css'

const Family: React.FC = () => {
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
                        Say, "Why worry about your family?"
                    </h1>
                </IonText>
                <Matt10 />
                <IonText>
                    <h1>
                        Ask, "What does this say to you?"
                    </h1>
                </IonText>
                <Luke12 />
                <IonText>
                    <h1>
                        Ask, "What does this say to you?"
                    </h1>
                    <h1>
                        Ask, "Are you ready to accept the forgiveness Jesus offers?"
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/commitment" expand="block" shape="round">Yes</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton href="/no" expand="block" shape="round">No</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Family