<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'agapyt-luka');

/** Имя пользователя MySQL */
define('DB_USER', 'agapyt-luka');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'u9QLPyvJWsXWZ6Gz');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'BoD7WTN[K|0cJR(;o(OoGVq,,54Dl~@9Qi1F8g<uP8F{Y8AyHJn=/AKA)$sJvi_A');
define('SECURE_AUTH_KEY',  'Xj+7oBGNl/9el;*_=6I>_aT0v,r,4lP2>B~X_[<soO+o7*%?/F@4BdaAa`Pn*bO*');
define('LOGGED_IN_KEY',    'J$|MARK=BL$CZ,33q5|DQJA|7$^0B?wSA`@>+>y3OGL7vxK.dMJ{Q^?wMuXe7`sJ');
define('NONCE_KEY',        'NEM,+u>G1K&MnF{:Os=yOr&do,-,g/WA$w}[[bEEkAGIxATH_=h}W/)ijeg6U?=V');
define('AUTH_SALT',        'I(%C7{P:n6rG@&%L73Au_7oxf|9#LAkl.9]KO.%E8cV566[+P;g[{q?!;D}rKx|o');
define('SECURE_AUTH_SALT', '_j/8L9q[W$-l3B&|aQ(]>~(I{*Q/gk@ue@Ww|0z*MA+mdRA 4QjM_W{<|&9T` GI');
define('LOGGED_IN_SALT',   '4&[J]pJk68@fAPBJ&&hYh`&,@Dz,y5w<bNF}W`/Ainca?(}Cnm!Dv]1P!h0ZD=dA');
define('NONCE_SALT',       '^-g@Nl^6|B=3CGt#f8`LyTLtJU,,3]7z1>tiWr%ow?QS/:h9iLd,T3kB`#^eR}^R');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
