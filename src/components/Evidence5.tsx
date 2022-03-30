// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Evidence5: React.FC = () => {
    const [showEvidence, setShowEvidence] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showEvidence}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>The Empty Tomb</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        The evidence of the empty tomb is not as historically undisputed as the previous four facts, yet holds a 75% historicity among leading scholars.
                    </p>
                    <p>
                        Many of these scholars are open to or hold that the resurrection of Jesus is the best explanation as to why the tomb was empty.
                    </p>
                    <p>
                        There are five evidences for the empty tomb:
                    </p>
                    <ol>
                        <li> The evidence of Jesus's burial</li>
                        <ul>
                            <li>Jesus's burial is well attested by scholars</li>
                        </ul>
                        <li>The discovery of Jesus's empty tomb is independently reported in very early sources</li>
                        <li>Mark's account is very simple and lacks legendary development</li>
                        <li>The empty tomb was first discovered by women</li>
                        <ul>
                            <li>The testimony of women in that time period was not considered credible</li>
                        </ul>
                        <li>The earliest Jewish response to the proclamation of Jesus's resurrection presupposes the empty tomb</li>
                    </ol>
                    <IonButton expand="block" shape="round" onClick={() => setShowEvidence(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top ion-text-wrap" onClick={() => setShowEvidence(true)}>The Empty Tomb</IonButton>
        </>
    )
}

export default Evidence5