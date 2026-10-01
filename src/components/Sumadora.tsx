import { useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput
} from '@ionic/react';

const Sumadora: React.FC = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState('');

  const sumar = () => {
    const primero = Number(numero1);
    const segundo = Number(numero2);

    if (
      numero1.trim() === '' ||
      numero2.trim() === '' ||
      !Number.isFinite(primero) ||
      !Number.isFinite(segundo)
    ) {
      setError('Introduce dos números válidos.');
      setResultado(null);
      return;
    }

    const total = primero + segundo;

    if (!Number.isFinite(total)) {
      setError('El resultado es demasiado grande.');
      setResultado(null);
      return;
    }

    setError('');
    setResultado(total);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Sumadora</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonInput
          label="Primer número"
          labelPlacement="stacked"
          type="number"
          step="any"
          placeholder="Ejemplo: 10"
          value={numero1}
          onIonInput={(evento) => {
            setNumero1(evento.detail.value ?? '');
            setResultado(null);
            setError('');
          }}
        />

        <IonInput
          label="Segundo número"
          labelPlacement="stacked"
          type="number"
          step="any"
          placeholder="Ejemplo: 5"
          value={numero2}
          onIonInput={(evento) => {
            setNumero2(evento.detail.value ?? '');
            setResultado(null);
            setError('');
          }}
        />

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={sumar}
        >
          Sumar
        </IonButton>

        {error && (
          <p role="alert" style={{ color: 'var(--ion-color-danger)' }}>
            {error}
          </p>
        )}

        {resultado !== null && (
          <h2 aria-live="polite">Resultado: {resultado}</h2>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default Sumadora;