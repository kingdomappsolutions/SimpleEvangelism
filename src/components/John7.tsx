// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'

const John7: React.FC = () => {
    const [showVerse, setShowVerse] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showVerse}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>John 7:1-5 (ESV)</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        After this Jesus went about in Galilee. He would not go about in Judea, because the Jews were seeking to kill him. Now the Jews’ Feast of Booths was at hand. So his brothers said to him, “Leave here and go to Judea, that your disciples also may see the works you are doing. For no one works in secret if he seeks to be known openly. If you do these things, show yourself to the world.” For not even his brothers believed in him.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowVerse(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top" onClick={() => setShowVerse(true)}>John 7:1-5 (ESV)</IonButton>
        </>
    )
}

export default John7