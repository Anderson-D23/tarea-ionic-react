import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from '@ionic/react';


import {
  homeOutline,
  calculatorOutline,
  textOutline,
  gridOutline,
  videocamOutline
} from 'ionicons/icons';

import './Menu.css';

const opciones = [
  {
    titulo: 'Página Inicial',
    ruta: '/folder/Inicio',
    icono: homeOutline
  },
  {
    titulo: 'Sumadora',
    ruta: '/folder/Sumadora',
    icono: calculatorOutline
  },
  {
    titulo: 'Números a Letras',
    ruta: '/folder/Traductor',
    icono: textOutline
  },
  {
    titulo: 'Tabla de Multiplicar',
    ruta: '/folder/Tabla',
    icono: gridOutline
  },
  {
    titulo: 'Experiencia Personal',
    ruta: '/folder/Experiencia',
    icono: videocamOutline
  }
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          <IonListHeader>Mi aplicación</IonListHeader>
          <IonNote>Proyecto de Ionic + React</IonNote>

          {opciones.map((opcion) => (
            <IonMenuToggle key={opcion.ruta} autoHide={false}>
              <IonItem
                routerLink={opcion.ruta}
                routerDirection="root"
                lines="none"
                detail={false}
              >
                <IonIcon slot="start" icon={opcion.icono} />
                <IonLabel>{opcion.titulo}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;