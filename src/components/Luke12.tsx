// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const Luke12: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Luke 12:51-53 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        Do you think that I have come to give peace on earth? No, I tell you, but rather division. For from now on in one house there will be five divided, three against two and two against three. They will be divided, father against son and son against father, mother against daughter and daughter against mother, mother-in-law against her daughter-in-law and daughter-in-law against mother-in-law.”
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>Luke 12:51-53 (ESV)</IonButton>
        </>
    )
}

export default Luke12