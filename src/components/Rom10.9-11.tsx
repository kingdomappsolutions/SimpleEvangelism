// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Rom10_9_11: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Romans 10:9-11 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved. For the Scripture says, “Everyone who believes in him will not be put to shame.”
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>Romans 10:9-11 (ESV)</IonButton>
        </>
    )
}

export default Rom10_9_11