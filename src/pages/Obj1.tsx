// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component import
import Rom323 from "../components/Rom3.23"

// CSS import
import './styles.css'

const Obj1: React.FC = () => {
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
                        Say, "Let's read Romans 3:23 again."
                    </h1>
                </IonText>
                <Rom323 />
                <IonText>
                    <h1>
                        Ask, "Does 'all' include you?"
                    </h1>
                    <h1>
                        Do you want the forgiveness Jesus offers?
                    </h1>
                    <IonButton href="/commitment" expand="block" shape="round">Yes</IonButton>
                    <h1>
                        If no, ask, "What is stopping you from wanting to trust and follow Jesus?"
                    </h1>
                </IonText>
                <IonButton className="top" href="/obj4" expand="block" shape="round">I don't know enough</IonButton>
                <IonButton className="top" href="/good" expand="block" shape="round">I'm a good person</IonButton>
                <IonButton className="top ion-text-wrap" href="/family" expand="block" shape="round">I'm afraid of what my family might think</IonButton>
                <IonButton className="top ion-text-wrap" href="/lifestyle" expand="block" shape="round">I don't want to give up my current lifestyle</IonButton>
                <IonButton className="top ion-text-wrap" href="/no" expand="block" shape="round">I'm just not ready or I want to think about it</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Obj1