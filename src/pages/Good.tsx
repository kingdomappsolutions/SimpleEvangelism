// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component import
import Matt5_48 from "../components/Matt5.48"

// CSS import
import './styles.css'

const Good: React.FC = () => {
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
                        By whose standards are you a good person?
                    </h1>
                </IonText>
                <IonText>
                    <h1>
                        "Let's look at what the Bible says:"
                    </h1>
                </IonText>
                <Matt5_48 />
                <IonText>
                    <h1>
                        "God's standard is perfection. Are you perfect? I know I am not."
                    </h1>
                </IonText>
                <IonText>
                    <h1>
                        "Are you ready to trust in Jesus who is perfect?"
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/commitment" expand="block" shape="round">Yes</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton href="/obj5" expand="block" shape="round">Still unsure</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Good