// Ionic imports
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// CSS import
import './styles.css'

// Get year dynamically
const year = () => {
    var date = new Date().getFullYear();
    return date;
}

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>About Simple Evangelism</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h3>
                        Simple Evangelism is a simple way in which people can share their faith without having to ask numerous questions or memorize a lot of material. It is grounded in two fundamental questions which provide a way to move to a spiritual conversation and then transition either into a gospel presentation or not. If no presentation is made due to lack of interest, then at the very least, the people have something to think about.
                    </h3>
                    <h3>
                        Evangelism should be easy and not hard. Simple Evangelism is a tool that anyone can use to share their faith.
                    </h3>
                    <h6>
                        &copy; {year()} Kingdom Application Solutions LLC | All Rights Reserved
                    </h6>
                </IonText>
            </IonContent>
        </IonPage>
    )
}

export default About