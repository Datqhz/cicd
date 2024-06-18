<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e1oQ_P/.78h)cw79cxxB:LT 3mg-`Z7W9R<6-eu|P1XQJOP+.L_%s!9q<(wMMpl-' );
define( 'SECURE_AUTH_KEY',  '_TuZ-oHzP<tq;u&S7w22*1gt|]U![_5*Y%V+z90O%FjU=lpIylul/R/BOa3-Zf+0' );
define( 'LOGGED_IN_KEY',    'ufzlV]fcyx YN7dvH~hko1a3E_R|o}&.k<UvKr(m}%_1$vf8/jy0Mb}}amzI;FN<' );
define( 'NONCE_KEY',        'h*T}L7N6Rj`CZz14odGbLHYw=9dk(*kVPk4~AK6x4<8ZMTFIh#ICqgrG2?P-6$^e' );
define( 'AUTH_SALT',        'MP>{i/nu|3swoBG:CxF*i{U_&z$ui/JokG?QJ&CHL/qm%BBb8 X0ASowaz;fRj[l' );
define( 'SECURE_AUTH_SALT', '(5cp:0::LnKZ2~&LvtcmAj]!j++9R>z$%fbr?sMS/yr9pq]i!ngyM)UMcxw%r3^8' );
define( 'LOGGED_IN_SALT',   'I[$WQ8pp7:f^YE33!U)q-<,?hEg^33{j-8I48M:yTl_T#~MV!{bF,rEe0Xt;md@H' );
define( 'NONCE_SALT',       'TS5e$~gh<hf2tDDy6L_:(g^FFpf$r?_|%=bsTtG]Ko(721zc3Ncv][m1kuZ.J_;]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
