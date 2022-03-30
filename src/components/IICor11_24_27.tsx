// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const IICor11: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>2 Corinthians 11:24-27 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        Five times I received at the hands of the Jews the forty lashes less one. Three times I was beaten with rods. Once I was stoned. Three times I was shipwrecked; a night and a day I was adrift at sea; on frequent journeys, in danger from rivers, danger from robbers, danger from my own people, danger from Gentiles, danger in the city, danger in the wilderness, danger at sea, danger from false brothers; in toil and hardship, through many a sleepless night, in hunger and thirst, often without food, in cold and exposure.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>2 Corinthians 11:24-27 (ESV)</IonButton>
        </>
    )
}

export default IICor11