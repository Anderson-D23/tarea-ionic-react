import { useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput
} from '@ionic/react';

function numeroALetras(numero: number): string {
  const unidades = [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
    'seis', 'siete', 'ocho', 'nueve'
  ];

  const especiales = [
    'diez', 'once', 'doce', 'trece', 'catorce',
    'quince', 'dieciséis', 'diecisiete', 'dieciocho',
    'diecinueve', 'veinte', 'veintiuno', 'veintidós',
    'veintitrés', 'veinticuatro', 'veinticinco',
    'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'
  ];

  const decenas = [
    '', '', 'veinte', 'treinta', 'cuarenta',
    'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
  ];

  const centenas = [
    '', 'ciento', 'doscientos', 'trescientos',
    'cuatrocientos', 'quinientos', 'seiscientos',
    'setecientos', 'ochocientos', 'novecientos'
  ];

  if (numero === 1000) return 'mil';
  if (numero === 100) return 'cien';

  if (numero < 10) {
    return unidades[numero];
  }

  if (numero < 30) {
    return especiales[numero - 10];
  }

  if (numero < 100) {
    const decena = Math.floor(numero / 10);
    const unidad = numero % 10;

    return decenas[decena] +
      (unidad > 0 ? ' y ' + unidades[unidad] : '');
  }

  const centena = Math.floor(numero / 100);
  const resto = numero % 100;

  return centenas[centena] +
    (resto > 0 ? ' ' + numeroALetras(resto) : '');
}

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  const traducir = () => {
    const valor = Number(numero);

    if (
      numero.trim() === '' ||
      !Number.isInteger(valor) ||
      valor < 1 ||
      valor > 1000
    ) {
      setError('Introduce un número entero del 1 al 1000.');
      setResultado('');
      return;
    }

    setError('');
    setResultado(numeroALetras(valor));
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Números a Letras</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonInput
          label="Número del 1 al 1000"
          labelPlacement="stacked"
          type="number"
          min={1}
          max={1000}
          step="1"
          placeholder="Ejemplo: 256"
          value={numero}
          onIonInput={(evento) => {
            setNumero(evento.detail.value ?? '');
            setResultado('');
            setError('');
          }}
        />

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={traducir}
        >
          Convertir a letras
        </IonButton>

        {error && (
          <p role="alert" style={{ color: 'var(--ion-color-danger)' }}>
            {error}
          </p>
        )}

        {resultado && (
          <h2 aria-live="polite">Resultado: {resultado}</h2>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default Traductor;