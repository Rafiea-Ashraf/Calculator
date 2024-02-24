<?php
function wpdocs_theme_name_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // Enqueue main JavaScript file
    wp_enqueue_script('js', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.1', true);
    wp_enqueue_script('js2', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.1', true);
}

add_action('wp_enqueue_scripts', 'wpdocs_theme_name_scripts');
?>