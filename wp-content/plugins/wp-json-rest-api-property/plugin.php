<?php

include_once("required.php");



/**
 * create the custom post type "property"
 *
 */

function create_post_type() {
  register_post_type( 'property',
    array(
      'labels' => array(
        'name' => __( 'Properties' ),
        'singular_name' => __( 'Property' )
      ),
      'public' => true,
      'has_archive' => true,
      // 'taxonomies' => array("property")
    )
  );
}

add_action( 'init', 'create_post_type' );



/**
 * register custom WP REST JSON API route
 *
 */

// include main property class
include_once(__DIR__ . '/libs/class-wp-json-property.php');

if ( ! function_exists ( 'wp_json_property_init' ) ) :

  /**
   * Init JSON REST API Property routes
   */
  function wp_json_property_init( $server ) {

    $class = new WP_JSON_Property( $server );
    add_filter( 'json_endpoints', array( $class, 'register_routes' ) );

  }
  add_action( 'wp_json_server_before_serve', 'wp_json_property_init' );

endif;



/**
 * create the custom taxonomy "property"
 *
 */

//create a custom taxonomy called property
function property_taxonomy() {
  // create a new taxonomy
  register_taxonomy(
    'property',
    'attachment', //default content type this taxonomy belongs to
    array(
      'label' => __( 'Property' ),
      'rewrite' => array( 'slug' => 'property' ),
    )
  );
}

add_action( 'init', 'property_taxonomy' );

//make custom taxonomy available to pages as well
function sf_wp_add_property_tax_to_posts() {
    register_taxonomy_for_object_type( 'property', 'property' );
}

add_action( 'init' , 'sf_wp_add_property_tax_to_posts' );



/**
 * add meta_data to all custom posts "property" always 
 * (even when not authenticated)
 *
 */

add_filter( 'json_prepare_post', function ($data, $post, $context) {
  if ($post["post_type"] != "property") { return $data; }

  /*
    town
    region
    asking_price
    monthly_fee
    area_m2
    rooms
    floor
    elevator
    balcony
    property_type
  */

  //add a new property to the data that is going to AngularJS, 
  //and fill it with our metadata
  $data['property_data'] = array(
    'city' => get_post_meta( $post['ID'], 'city', true ),
    'region' => get_post_meta( $post['ID'], 'region', true ),
    'asking_price' => get_post_meta( $post['ID'], 'asking_price', true ),
    'monthly_fee' => get_post_meta( $post['ID'], 'monthly_fee', true ),
    'gross_internal_area' => get_post_meta( $post['ID'], 'gross_internal_area', true ),
    'rooms' => get_post_meta( $post['ID'], 'rooms', true ),
    'floor' => get_post_meta( $post['ID'], 'floor', true ),
    'elevator' => get_post_meta( $post['ID'], 'elevator', true ),
    'balcony' => get_post_meta( $post['ID'], 'balcony', true ),
    'property_type' => get_post_meta( $post['ID'], 'property_type', true ),
  );
  return $data;
}, 10, 3 );