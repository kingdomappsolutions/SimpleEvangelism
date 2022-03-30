// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Prayer: React.FC = () => {
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
                        Have the person pray and tell God what they just told you. If they hesitate, recap the answers they gave from the questions.
                    </h1>
                    <h1>
                        Example prayer:
                    </h1>
                    <h1 className="prayer">
                        Dear Lord, 
                    </h1>
                    <h1 className="prayer">
                        I am a sinner and I want forgiveness for my sin. I believe that Jesus died on the cross for my sin and rose from the dead. I want to follow and commit my life to Jesus. In Jesus's name, Amen.
                    </h1>
                    <h1>
                        If the person truly believes, then they are now a child of God!
                    </h1><br/>
                </IonText>
                <IonButton href="/growth" expand="block" shape="round">Continue</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Prayer