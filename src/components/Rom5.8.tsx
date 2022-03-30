// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Rom58: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Romans 5:8 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        But God shows his love for us in that while we were still sinners, Christ died for us.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>Romans 5:8 (ESV)</IonButton>
        </>
    )
}

export default Rom58