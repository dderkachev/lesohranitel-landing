<?php

declare(strict_types=1);

// iv.khramov@formoza.pskov.ru

define('MANAGER_EMAIL', 'dderkachev@gmail.com');
define('MAIL_SUBJECT', 'ЛХ лендинг: новый клиент!');
define('MAIL_MESSAGE', "Регион: %s\nИмя: %s\nПочта: %s\nТелефон: %s");
define('TELEGRAM_BOT_TOKEN', '1570750903:AAGfErBJ5fHXw5AyvZexHJgVyEhru2F6SRg');
define('TELEGRAM_CHAT_ID', 235452026);
define('TELEGRAM_SENDMESSAGE_ENDPOINT', 'https://api.telegram.org/bot%s/sendMessage');

if (!isset($_SERVER['REQUEST_METHOD']) || !isset($_SERVER['SERVER_PROTOCOL'])) {
    // hmm, probably the script launched via cli
    file_put_contents('php://stderr', "Error: this script works only over http.\n");
    die(5);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
    die(1);
}

try {
    $formData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
    die(2);
}

if (
    !isset($formData['region']) || !is_string($formData['region'])
    || !isset($formData['firstName']) || !is_string($formData['firstName'])
    || !isset($formData['email']) || !is_string($formData['email'])
    || !isset($formData['phone']) || !is_string($formData['phone'])
) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
    die(3);
}

$formattedMessage = sprintf(
    MAIL_MESSAGE,
    $formData['region'],
    $formData['firstName'],
    $formData['email'],
    $formData['phone']
);

$mailerResult = mail(
    MANAGER_EMAIL,
    MAIL_SUBJECT,
    sprintf(MAIL_MESSAGE, $formData['region'], $formData['firstName'], $formData['email'], $formData['phone']),
    [
        'From'         => 'Forester Robot <forester@lesohranitel.ru>',
        'Content-Type' => 'text/plain; charset=utf-8',
        'MIME-Version' => '1.0'
    ]
);

$telegramResult = file_get_contents(
    sprintf(TELEGRAM_SENDMESSAGE_ENDPOINT, TELEGRAM_BOT_TOKEN)
    . '?' .
    http_build_query([
        'chat_id' => TELEGRAM_CHAT_ID,
        'text' => $formattedMessage
    ])
);

// if the message sent with at least one method, it's OK, otherwise - 500 error
if (!$mailerResult && !$telegramResult) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    die(4);
}

header($_SERVER['SERVER_PROTOCOL'] . ' 204 No Content');
