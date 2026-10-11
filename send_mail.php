<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Casilla de destino actualizada
    $to = "feerieshows@gmail.com"; 
    $subject = "New Inquiry from Féerie Website";
    
    // Sanitización de datos
    $name    = strip_tags(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST['message']));
    
    // Validación
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?status=error#contact");
        exit;
    }

    // Estructura del cuerpo del correo
    $email_content = "Has recibido un nuevo mensaje desde la web de Féerie.\n\n";
    $email_content .= "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Encabezados optimizados (Para evitar SPAM)
    // El 'From' debe ser un correo de tu dominio o el del sistema
    $headers = "From: Féerie Website <noreply@feerieshows.com>\r\n";
    $headers .= "Reply-To: $email\r\n"; // Para que al dar 'Responder' le llegue al cliente
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envío
    if (mail($to, $subject, $email_content, $headers)) {
        header("Location: index.html?status=success#contact");
    } else {
        header("Location: index.html?status=error#contact");
    }
} else {
    echo "Direct access not allowed.";
}
?>