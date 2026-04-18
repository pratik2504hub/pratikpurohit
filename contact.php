<?php
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$name    = trim(strip_tags($_POST['name'] ?? ''));
$email   = trim(strip_tags($_POST['email'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$to      = 'purohitpratik2504@gmail.com';
$subject = 'Portfolio Contact from ' . $name;
$body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = implode("\r\n", [
    'From: noreply@pratikpurohit.com',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
]);

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => "Thanks, $name! I'll get back to you soon."]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not send message. Please email me directly at purohitpratik2504@gmail.com']);
}
