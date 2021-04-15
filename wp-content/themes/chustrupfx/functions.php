<?php

add_action( 'after_setup_theme', 'addThemesSupports' );

add_action( 'wp_enqueue_scripts', 'enqueueScriptsAndStyles' );

function enqueueScriptsAndStyles() {

    $version = wp_get_theme()->get( 'Version' );
    wp_enqueue_style('chustrupfx-style', get_template_directory_uri() . '/style.css', array(), $version);
    wp_enqueue_script('chustrupfx-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), $version, true);

}

function addThemesSupports()
{
    add_theme_support('title-tag');
}

