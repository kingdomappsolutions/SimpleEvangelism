// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'
import IICor11 from "./IICor11_24_27";

const Evidence3: React.FC = () => {
    const [showEvidence, setShowEvidence] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showEvidence}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Conversion of Paul</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        Paul, also known as Saul of Tarsus, was an early church persecutor who, after meeting the risen Jesus, became an aggressive Christian missionary.
                    </p>
                    <p>
                        Paul speaks of his encounter with Jesus numerous times in the Bible most notably in Acts 9.
                    </p>
                    <p>
                        As a result of his conversion, Paul preached that Jesus was crucified and resurrected.
                    </p>
                    <p>
                        He paid for this with being persecuted himself. He recounts his persecutions in 2 Cor. 11:24-27.
                    </p>
                    <IICor11 />
                    <p>
                        Paul's belief that he had witnessed the risen Christ was so strong that he, like the other disciples, was willing to suffer and even die for the sake of the gospel.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowEvidence(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top ion-text-wrap" onClick={() => setShowEvidence(true)}>Conversion of the Church Persecutor Paul</IonButton>
        </>
    )
}

export default Evidence3