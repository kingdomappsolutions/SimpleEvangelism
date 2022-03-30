// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const C2: React.FC = () => {
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
                        "Do you want forgiveness for your sins?"
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/commitment/c3" expand="block" shape="round">Yes</IonButton>
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

export default C2