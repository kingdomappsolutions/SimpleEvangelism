// Ionic imports
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"

// Component imports
import Acts1_8 from "../components/Acts1.8"
import IJohn1 from "../components/IJohn1"
import IPeter2 from "../components/IPeter2"
import John4 from "../components/John4"
import Phil4 from "../components/Phil4"
import Psalm122 from "../components/Psalm122"

// CSS import
import './styles.css'

const Growth: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Growth</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding" color="secondary">
                <IonText>
                    <h1>
                        Just as a newborn baby grows physically, in a similar way, you can grow spiritually, by taking the following steps:
                    </h1>
                    <h2>
                        Read the Bible
                    </h2>
                    <p className="growth">
                        Starting with the Gospel of John, read a chapter each day.
                    </p>
                    <IPeter2 />
                    <h2>
                        Pray
                    </h2>
                    <p className="growth">
                        Spend time each day talking with God.
                    </p>
                    <Phil4 />
                    <h2>
                        Worship
                    </h2>
                    <p className="growth">
                        Regularly attend a church that honors Jesus Christ and teaches you the Bible.
                    </p>
                    <Psalm122 />
                    <John4 />
                    <h2>
                        Fellowship
                    </h2>
                    <p className="growth">
                        Join with Christians who will help you grow in faith.
                    </p>
                    <IJohn1 />
                    <h2>
                        Witness
                    </h2>
                    <p className="growth">
                        Tell others what Jesus Christ means to you!
                    </p>
                    <Acts1_8 />
                </IonText><br/>
                <IonButton href="/" expand="block" shape="round">Back Home</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Growth