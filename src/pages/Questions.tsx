// Ionic & React imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react"

// CSS import
import './styles.css'

const Questions: React.FC = () => {

    const [first, setFirst] = useState(false)

    const choice = () => {
        setFirst(true)
    }

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
                        Do you go to church anywhere? or Do you have any kind of spiritual beliefs?
                    </h1>
                </IonText>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton onClick={choice} expand="block" shape="round">Yes</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton onClick={choice} expand="block" shape="round">No</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {first && 
                    <>
                        <IonText>
                            <h1>
                                Have you committed your life to following Jesus?
                            </h1>
                        </IonText>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonButton href="/questions/yes" expand="block" shape="round">Yes</IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton href="/questions/know" expand="block" shape="round">No</IonButton>
                                </IonCol>
                            </IonRow>
                            <IonButton href="/questions/nottrue" expand="block" shape="round">I don't believe in Jesus</IonButton>
                        </IonGrid>
                    </>
                }
            </IonContent>
        </IonPage>
    )
}

export default Questions