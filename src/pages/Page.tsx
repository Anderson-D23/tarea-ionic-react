import { useParams } from 'react-router';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import Sumadora from '../components/Sumadora';
import Traductor from '../components/Traductor';
import Tabla from '../components/Tabla';
import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const titulos: Record<string, string> = {
    Inicio: 'Página Inicial',
    Sumadora: 'Sumadora',
    Traductor: 'Números a Letras',
    Tabla: 'Tabla de Multiplicar',
    Experiencia: 'Experiencia Personal'
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>{titulos[name] || 'Mi aplicación'}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {name === 'Inicio' ? (
          <IonCard className="tarjeta-personal">
            <IonCardHeader>
              <IonCardTitle>Mis datos personales</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <img
                src="/foto.jpg"
                alt="Foto de Anderson Calderon"
                className="foto-personal"
              />

              <h2>Nombre: Anderson</h2>
              <h2>Apellido: Calderon</h2>
              <p className="correo-personal">
                Correo: andersoncalderon024@gmail.com
              </p>
            </IonCardContent>
          </IonCard>
               ) : name === 'Sumadora' ? (
          <Sumadora />
                ) : name === 'Sumadora' ? (
          <Sumadora />
        ) : name === 'Traductor' ? (
          <Traductor />
                ) : name === 'Traductor' ? (
          <Traductor />
        ) : name === 'Tabla' ? (
          <Tabla />
        ) : (
          <p>Próximamente agregaremos esta función.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;