// Ionic imports
import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton } from "@ionic/react"

// CSS import
import './styles.css'

const Know: React.FC = () => {
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
                        Would you like to know what following and committing to Jesus truly means?
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/scriptures" expand="block" shape="round">Yes</IonButton>
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

export default Know