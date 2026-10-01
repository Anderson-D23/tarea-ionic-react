import { useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';

const Tabla: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [valor, setValor] = useState<number | null>(null);
  const [error, setError] = useState('');

  const generarTabla = () => {
    const entrada = Number(numero);

    if (
      numero.trim() === '' ||
      !Number.isFinite(entrada) ||
      !Number.isFinite(entrada * 13)
    ) {
      setError('Introduce un número válido que no sea demasiado grande.');
      setValor(null);
      return;
    }

    setError('');
    setValor(entrada);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Tabla de Multiplicar</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonInput
          label="Número"
          labelPlacement="stacked"
          type="number"
          step="any"
          placeholder="Ejemplo: 7"
          value={numero}
          onIonInput={(evento) => {
            setNumero(evento.detail.value ?? '');
            setValor(null);
            setError('');
          }}
        />

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={generarTabla}
        >
          Generar tabla
        </IonButton>

        {error && (
          <p role="alert" style={{ color: 'var(--ion-color-danger)' }}>
            {error}
          </p>
        )}

        {valor !== null && (
          <IonList aria-live="polite">
            {Array.from({ length: 13 }, (_, indice) => {
              const multiplicador = indice + 1;

              return (
                <IonItem key={multiplicador}>
                  <IonLabel>
                    {valor} × {multiplicador} = {valor * multiplicador}
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default Tabla;