// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Evidence1: React.FC = () => {
    const [showEvidence, setShowEvidence] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showEvidence}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Medical Evidence</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        Crucifixion was a common form of execution used by the Romans. Prior to the actual crucifixion, the Romans would flog or whip the person.
                    </p>
                    <p>
                        Medically, the person would be nailed to a cross after flogging and left to suffocate. The typical cause of death for crucifixion is asphyxiation.
                    </p>
                    <p>
                        The entire event was torturous on the body and the Romans were exceedingly efficient at ensuring the person was dead when they were taken down.
                    </p>
                    <p>
                        There is no doubt that Jesus did in fact die as a result of crucifixion.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowEvidence(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top ion-text-wrap" onClick={() => setShowEvidence(true)}>Medical Evidence for Crucifixion</IonButton>
        </>
    )
}

export default Evidence1