// Ionic imports
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

const Obj3: React.FC = () => {
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
                        Let me tell you what sin is.
                    </h1>
                </IonText>
                <IonText>
                    <h1>
                        Sin can be broken into three categories:
                    </h1>
                    <ul>
                        <li>Things you do</li>
                        <li>Things you should do but don't</li>
                        <li>Things you think</li>
                    </ul>
                    <h1>
                        Doing anything the Bible says is wrong is sin.
                    </h1>
                    <h1>
                        Not doing things the Bible commands are also sins.
                    </h1>
                    <h1>
                        Finally, bad thoughts such as lust are things others may not see, but are still sins.
                    </h1>
                    <h1>
                        Now that you know what sin is, do you want the forgiveness Jesus offers?
                    </h1>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton href="/commitment" expand="block" shape="round">Yes</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton href="/no" expand="block" shape="round">I still don't know</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonText>
            </IonContent>
        </IonPage>
    )
}

export default Obj3