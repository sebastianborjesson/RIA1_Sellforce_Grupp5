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
define('DB_NAME', 'WP_RIA1_Grupp5');

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
define('AUTH_KEY',         'xLmK=A9Q+Thaszt}H7OEpo>R{_;%F?)]RZaC^>IFp-|#a{#?^lOQg`31(gIaklac');
define('SECURE_AUTH_KEY',  'rji1%Vd*)/q8JRGT !S-nqZ+l=UsLQJ!1.s|p%zw}<We8h7WT,gB+`-?9knYD#R@');
define('LOGGED_IN_KEY',    '<N#;&q|]3@){J{YG~Hl+3~[4C;vaJ2XO5.<A;, @q{&Vw|:k&*^(OjhTRo|KLX.m');
define('NONCE_KEY',        '-H+S]3A]oVy]y;,[=,y0g-K&yYKclC&,J>:q:C^?CfT%xD2E,3f@&`%]+=^F<lLj');
define('AUTH_SALT',        'FsM4{`PDC>x<j 1mW|EgLgRlXhEBR.t ^iSx&K*-XhmqJXX#2)#I~BNT Syfme;,');
define('SECURE_AUTH_SALT', 'dkShK-N]H8J00~Y,N[c=6k<K#{Dqdb+qyZA=@SGHD+%e)U-H|6:+.uvEs|b[F:wX');
define('LOGGED_IN_SALT',   'uZM(+ClVA(GMjdn@rBV<)suP-bshKnX.T>A|XRX%Bv1s6,$qz%?d>e//vT*~7n ^');
define('NONCE_SALT',       '3OvXc.^Y29=~r%x059D/ Ezb&APSvPwD%eNUu`QykW*uJU0?<.6f}I#K+T}U(w2i');

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