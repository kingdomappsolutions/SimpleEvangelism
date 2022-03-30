// Ionic & React imports
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

// CSS import
import '../pages/styles.css'
import Acts1 from "./Acts1";
import John7 from "./John7";

const Evidence4: React.FC = () => {
    const [showEvidence, setShowEvidence] = useState(false);
    
    return (
        <>
            <IonModal isOpen={showEvidence}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Conversion of James</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding" color="secondary">
                    <p>
                        James, the brother of Jesus, was not a follower of Jesus prior to his resurrection.
                    </p>
                    <John7 />
                    <p>
                        Here Jesus's brothers (including James) taunt him and display their unbelief in him.
                    </p>
                    <p>
                        Shortly after the resurrection of Jesus, his brothers are shown to be his followers. They are shown to be among the group of followers in Acts 1:14.
                    </p>
                    <Acts1 />
                    <p>
                        Later in Acts, James appears to be a leading spokesman for the Jerusalem Church.
                    </p>
                    <p>
                        James's commitment to Jesus was so strong that he died a martyr. His martyrdom is reported by the Jewish historian Josephus as well as Eusebius of Ceasarea.
                    </p>
                    <IonButton expand="block" shape="round" onClick={() => setShowEvidence(false)}>Close</IonButton>
                </IonContent>
            </IonModal>
            <IonButton expand="block" shape="round" className="top ion-text-wrap" onClick={() => setShowEvidence(true)}>Conversion of James the Skeptical Brother of Jesus</IonButton>
        </>
    )
}

export default Evidence4