import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  enviarCorreo(destinatario: any, asunto: string, cuerpo: string): void {
    // Simulamos el envío del correo electrónico mostrando un mensaje en la consola
    console.log('Enviando correo a:', destinatario);
    console.log('Asunto:', asunto);
    console.log('Cuerpo del correo:', cuerpo);
    console.log('Correo enviado exitosamente.');
  }
}
