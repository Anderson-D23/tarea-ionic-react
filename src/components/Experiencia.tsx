import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';

const Experiencia: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Mi experiencia personal</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <p>
          En este video explico mi experiencia desarrollando
          esta aplicación con Ionic y React.
        </p>

        <iframe
          src="https://www.youtube.com/embed/yZPmmPHTWZQ"
          title="Experiencia de Anderson Calderon"
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            border: 0,
            marginTop: '16px'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <IonButton
          expand="block"
          href="https://youtu.be/yZPmmPHTWZQ"
          target="_blank"
          rel="noopener noreferrer"
          className="ion-margin-top"
        >
          Ver en YouTube
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default Experiencia;