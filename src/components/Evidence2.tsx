// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Evidence2: React.FC = () => {
    const [showEvidence, setShowEvidence] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showEvidence}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Post-Resurrection Appearances</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        The passage in 1 Cor. 15 we read earlier is a very early (c. 55 A.D), eyewitness account of Jesus's post-resurrection appearances.
                    </p>
                    <p>
                        This account shows he appeared to the Apostles, more than 500 others, James, and Paul.
                    </p>
                    <p>
                        Had Jesus not resurrected, he would have had a very mangled body as a result of crucifixion. The disciples would not have believed he had resurrected.
                    </p>
                    <p>
                        However, the change in the boldness of the disciples indicates they saw the risen Jesus.
                    </p>
                    <p>
                        These appearances happened to numerous different people at different times ruling out a group hallucination.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowEvidence(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top ion-text-wrap" onClick={() => setShowEvidence(true)}>Post-Resurrection Appearances</IonButton>
        </>
    )
}

export default Evidence2