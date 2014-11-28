simple-sqs-client
=================

Es necesario contar con las credenciales de AWS necesarias para tener acceso a los recursos (S3, SQS). Para esto, crear un archivo de credenciales en `~/.aws/credentials` (Mac o Linux) o `C:\Users\USERNAME\.aws\credentials` con el siguiente contenido:

    [default]
    aws_access_key_id = <YOUR_ACCESS_KEY_ID>
    aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
    
Más info sobre credenciales de AWS en http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Credentials_from_the_Shared_Credentials_File_____aws_credentials_

Luego, desde el root correr:

    npm install
    
para traer las dependencias de Node y:

    node <NOMBRE_DEL_SCRIPT>
   
para correr los clientes, donde `<NOMBRE_DEL_SCRIPT>` es `send-text-message.js` (manda un mensaje de texto a la cola SQS) o `upload-to-s3-and-notifiy.js` (sube un archivo a S3, y luego manda un mensaje a la cola con el identificador del recurso subido).
