// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Final: React.FC = () => {
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
                        That is a good thing, but it doesn't fully explain what following Jesus means.
                    </h1>
                </IonText><br/>
                <IonText>
                    <h1>
                        Would you like to know what following Jesus truly means?
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

export default Final