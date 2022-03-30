// Ionic imports
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'

// CSS import
import './styles.css'

// Image imports
import logo from '../images/logo.png'

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Simple Evangelism</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen color="secondary" className="ion-padding">
                <IonCard>
                    <IonCardContent>
                        <IonImg src={logo} />
                    </IonCardContent>
                </IonCard>
                <IonCard className="top">
                    <IonCardHeader color="primary">
                        <IonCardTitle>
                            About Simple Evangelism
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="top card-text">
                        Evangelism should be easy. Not hard. <br/><br/> Begin by clicking the Questions tab below.
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Home
