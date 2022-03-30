// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Testimony: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Foundational Questions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h1>
                        Ask them to share their testimony about when they became a Christian and see if there is any need for further discipleship.
                    </h1>
                </IonText>
                <IonButton className="top" href="/home" expand="block" shape="round">Back to Home</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Testimony