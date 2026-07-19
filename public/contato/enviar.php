<?php
// ====================================================
// EQUILIBRIUS — Processador de formulário de contato
// Uso: recebe POST dos formulários, valida e envia e-mail
// ====================================================

// ─── Config ────────────────────────────────────────
$destinatario = filter_var(
    getenv('CONTATO_EMAIL') ?: 'equilibriusconsultoria24@gmail.com',
    FILTER_SANITIZE_EMAIL
);
$assunto_prefixo = '[Contato Equilibrius] ';
$redirect_base = '/contato';
// ───────────────────────────────────────────────────

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contato');
    exit;
}

// Honeypot — se preenchido, é bot
if (!empty($_POST['_gotcha'])) {
    header('Location: ' . $redirect_base . '?enviado=ok');
    exit;
}

// ─── Sanitização ──────────────────────────────────
$nome     = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) ?: '');
$empresa  = trim(filter_input(INPUT_POST, 'company', FILTER_SANITIZE_STRING) ?: '');
$telefone = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING) ?: '');
$email    = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?: '');
$mensagem = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING) ?: '');
$contexto = trim(filter_input(INPUT_POST, 'service_context', FILTER_SANITIZE_STRING) ?: 'contato-geral');

// ─── Validação ─────────────────────────────────────
if (empty($nome) || (empty($telefone) && empty($email))) {
    header('Location: ' . $redirect_base . '?erro=campos_obrigatorios');
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: ' . $redirect_base . '?erro=email_invalido');
    exit;
}

// ─── Corpo do e-mail ───────────────────────────────
$corpo = "
<html>
<body style='font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto;'>
  <h2 style='color: #0B1E3B; border-bottom: 2px solid #0B1E3B; padding-bottom: 8px;'>
    Novo contato — EQUILIBRIUS
  </h2>
  <table style='width: 100%; border-collapse: collapse; margin: 16px 0;'>
    <tr><td style='padding: 8px; background: #f1f5f9; font-weight: 600; width: 120px;'>Nome</td>
        <td style='padding: 8px;'>" . htmlspecialchars($nome) . "</td></tr>
    " . ($empresa ? "<tr><td style='padding: 8px; background: #f1f5f9; font-weight: 600;'>Empresa</td>
        <td style='padding: 8px;'>" . htmlspecialchars($empresa) . "</td></tr>" : "") . "
    " . ($telefone ? "<tr><td style='padding: 8px; background: #f1f5f9; font-weight: 600;'>Telefone</td>
        <td style='padding: 8px;'>" . htmlspecialchars($telefone) . "</td></tr>" : "") . "
    " . ($email ? "<tr><td style='padding: 8px; background: #f1f5f9; font-weight: 600;'>E-mail</td>
        <td style='padding: 8px;'>" . htmlspecialchars($email) . "</td></tr>" : "") . "
    <tr><td style='padding: 8px; background: #f1f5f9; font-weight: 600;'>Contexto</td>
        <td style='padding: 8px;'>" . htmlspecialchars($contexto) . "</td></tr>
    " . ($mensagem ? "<tr><td style='padding: 8px; background: #f1f5f9; font-weight: 600; vertical-align: top;'>Mensagem</td>
        <td style='padding: 8px;'>" . nl2br(htmlspecialchars($mensagem)) . "</td></tr>" : "") . "
  </table>
  <hr style='border: none; border-top: 1px solid #cbd5e1;'>
  <p style='font-size: 12px; color: #64748b;'>Enviado em " . date('d/m/Y H:i') . "</p>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: formulario@equilibriusconsultoria.com.br\r\n";
$headers .= "Reply-To: " . ($email ?: $destinatario) . "\r\n";

$assunto = $assunto_prefixo . ($contexto !== 'contato-geral' ? "[$contexto] " : '') . $nome;

// ─── Envio ─────────────────────────────────────────
if (mail($destinatario, $assunto, $corpo, $headers)) {
    header('Location: ' . $redirect_base . '?enviado=ok');
} else {
    header('Location: ' . $redirect_base . '?erro=envio_falhou');
}
exit;
