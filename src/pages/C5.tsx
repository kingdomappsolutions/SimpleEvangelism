// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const C5: React.FC = () => {
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
                        "Are you ready to trust in Jesus alone for eternal life?"
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/commitment/prayer" expand="block" shape="round">Yes</IonButton>
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

export default C5