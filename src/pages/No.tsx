// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const No: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Simple Evangelism</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h1>
                        Thank them for their time and wish them well. Give them a tract or information about your church.
                    </h1>
                </IonText>
                <IonButton className="top" href="/home" expand="block" shape="round">Back to Home</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default No