// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Lifestyle: React.FC = () => {
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
                        Say, "Why don't you want to give up your lifestyle"
                    </h1>
                    <h1>
                        Echo back what they say. (Ex. "So, you don't want to give up going drinking or partying?")
                    </h1>
                    <h1>
                        Ask, "According to this, when you die, where are you going?"
                    </h1>
                    <h1>
                        Ask, "Are you certain you don't want the forgiveness Jesus offers?"
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/no" expand="block" shape="round">Yes, I'm certain</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton href="/commitment" expand="block" shape="round">No, I want forgiveness</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Lifestyle