<?php
/**
 * Baskonfiguration för WordPress.
 *
 * Denna fil innehåller följande konfigurationer: Inställningar för MySQL,
 * Tabellprefix, Säkerhetsnycklar, WordPress-språk, och ABSPATH.
 * Mer information på {@link http://codex.wordpress.org/Editing_wp-config.php 
 * Editing wp-config.php}. MySQL-uppgifter får du från ditt webbhotell.
 *
 * Denna fil används av wp-config.php-genereringsskript under installationen.
 * Du behöver inte använda webbplatsen, du kan kopiera denna fil direkt till
 * "wp-config.php" och fylla i värdena.
 *
 * @package WordPress
 */

// ** MySQL-inställningar - MySQL-uppgifter får du från ditt webbhotell ** //
/** Namnet på databasen du vill använda för WordPress */
define('DB_NAME', 'ria1_sellforce_grupp5');

/** MySQL-databasens användarnamn */
define('DB_USER', 'root');

/** MySQL-databasens lösenord */
define('DB_PASSWORD', 'mysql');

/** MySQL-server */
define('DB_HOST', 'localhost');

/** Teckenkodning för tabellerna i databasen. */
define('DB_CHARSET', 'utf8');

/** Kollationeringstyp för databasen. Ändra inte om du är osäker. */
define('DB_COLLATE', '');

/**#@+
 * Unika autentiseringsnycklar och salter.
 *
 * Ändra dessa till unika fraser!
 * Du kan generera nycklar med {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Du kan när som helst ändra dessa nycklar för att göra aktiva cookies obrukbara, vilket tvingar alla användare att logga in på nytt.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'a-wDW6*p9%cM%ED]):-:=|C|kD{34Kq38au@vY*(Qu.53-Xqz%$SFiY|J6v^>;/+');
define('SECURE_AUTH_KEY',  'HmBR>H|MoN=.L-g!!W-b.&b_8PaSp}|zHG*y<.s=7pY=[wir>v(1atLn9TqekA4Y');
define('LOGGED_IN_KEY',    'f/_tXtc$i*q*f+0%Af^o<V/|LwgG7 ;1f%IX5U}DxO}XgW@knO0)(f:<[2p,fNsd');
define('NONCE_KEY',        'jcB4],E{ctf-Z/OwwmP9.|z~%[g5|0z@q!nFw5*73$y|.@0elz0PDi+8V!q[NW|`');
define('AUTH_SALT',        '0G+Q;J[ |P?N|M|L6JLjr3/~ +4/huZB:}^ZGTH9v9-~Fu42e->~q9/B_QW9oFYU');
define('SECURE_AUTH_SALT', '04_E+:oyBSWA;<xIx|&1Xr0+}IS|^I+#/rT9 -JP|HzLO,lVRS3lQF{|%6%j1PGD');
define('LOGGED_IN_SALT',   'S{| 69T ?odon.#&Jk(3/|mdB!,wl8VEH90G_QW-}dUhMFJy>-eQ(i3*(wPpKwRS');
define('NONCE_SALT',       '$Dkj>t<DoU7Bm3$AK]]DtC@R-~](5ub8]D{+m{FtPC(I,[#`(*x+*~HX|-bqn`JW');

/**#@-*/

/**
 * Tabellprefix för WordPress Databasen.
 *
 * Du kan ha flera installationer i samma databas om du ger varje installation ett unikt
 * prefix. Endast siffror, bokstäver och understreck!
 */
$table_prefix  = 'wp_';

/** 
 * För utvecklare: WordPress felsökningsläge. 
 * 
 * Ändra detta till true för att aktivera meddelanden under utveckling. 
 * Det är rekommderat att man som tilläggsskapare och temaskapare använder WP_DEBUG 
 * i sin utvecklingsmiljö. 
 */ 
define('WP_DEBUG', false);

/* Det var allt, sluta redigera här! Blogga på. */

/** Absoluta sökväg till WordPress-katalogen. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Anger WordPress-värden och inkluderade filer. */
require_once(ABSPATH . 'wp-settings.php');