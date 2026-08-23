import { CanDeactivateFn } from '@angular/router';
import { Contacto } from '../contacto/contacto';

export const formGuard: CanDeactivateFn<Contacto> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component.nosPermiteSalir()) {
    confirm('¿Esta seguro que quieres salir de la pagina?, Se perderan los datos ingresados en el formulario')
    return true;
  }
  return true;
}