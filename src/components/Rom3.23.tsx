// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Rom323: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Romans 3:23 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        For all have sinned and fall short of the glory of God.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>Romans 3:23 (ESV)</IonButton>
        </>
    )
}

export default Rom323