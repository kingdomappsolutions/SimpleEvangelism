// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Objections: React.FC = () => {
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
                        What are you having trouble understanding? 
                    </h1>
                    <h1>
                        What is stopping you from trusting and following Jesus?
                    </h1>
                </IonText>
                <IonButton className="top ion-text-wrap" href="/obj1" expand="block" shape="round">I don't know that I'm really a sinner.</IonButton>
                <IonButton className="top ion-text-wrap" href="/obj2" expand="block" shape="round">How can I know for sure that Jesus really lived and died?</IonButton>
                <IonButton className="top" href="/obj3" expand="block" shape="round">What exactly is sin?</IonButton>
                <IonButton className="top" href="/obj4" expand="block" shape="round">I think I need to know more.</IonButton>
                <IonButton className="top" href="/obj5" expand="block" shape="round">Something else...</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Objections