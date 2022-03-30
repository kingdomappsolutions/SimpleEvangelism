// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const IPeter2: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>1 Peter 2:2 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        Like newborn infants, long for the pure spiritual milk, that by it you may grow up into salvation
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>1 Peter 2:2 (ESV)</IonButton>
        </>
    )
}

export default IPeter2