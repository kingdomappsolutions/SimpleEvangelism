// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Yes: React.FC = () => {
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
                        What does it mean to follow Jesus?
                    </h1>
                </IonText>
                <IonButton className="top" href="/questions/final" expand="block" shape="round">To be a good person</IonButton>
                <IonButton className="top" href="/questions/final" expand="block" shape="round">To obey the 10 Commandments</IonButton>
                <IonButton className="top" href="/questions/final" expand="block" shape="round">To not hurt anyone</IonButton>
                <IonButton className="top ion-text-wrap" href="/questions/testimony" expand="block" shape="round">To trust and believe in Jesus for salvation</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Yes