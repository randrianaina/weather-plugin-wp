<?php
/**
 * @package Météo
 * @version 1.0.0
 */
 /*
 Plugin Name: meteo
 Plugin URI:
 Description: This plugin give the meteo of the next 3 days of a city entered by a user. It uses an API
 Author: Andrianaina Rabenjamina
 Version: 1.0.0
 License : GPL v2 or later
 License URI : https://www.gnu.org/licenses/gpl-2.0.html
 */

//Load custom CSS and Javascript

//add bootstrap CDN

    //bootstrap style
add_action( 'wp_enqueue_scripts', 'bootstrap_style' );
function bootstrap_style(){
    wp_enqueue_script('bootstrap-v5-style', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');  
}

     //bootstrap script
add_action( 'wp_enqueue_scripts', 'boostrap_scripts' );
function boostrap_scripts(){
     wp_enqueue_script('bootstrap-v5-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js');
     wp_enqueue_script('bootstrap-v5-js-bundle', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
}

//add custom CSS
add_action( 'wp_enqueue_scripts', 'meteo_widget_style');
function meteo_widget_style(){
    wp_enqueue_style('widget_css', plugins_url().'/meteo/css/meteo.css');   
}

//add custom JS
add_action( 'wp_enqueue_scripts', 'meteo_widget_script' );
function meteo_widget_script(){
    wp_enqueue_script( 'widget_JS', plugins_url().'/meteo/js/meteo.js');
}

//add the short code
add_shortcode( 'meteo-RABENJAMINA', 'meteo_form' );
function meteo_form(){
    echo('<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="weather">
                <div class="current">
                    <div class="info">
                        <div>&nbsp;</div>
                        <div id="today_weekday"></div>
                        <div id="city"></div>
                        <div id="temp"></div>
                        <div id="description"></div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="icon">
                        <img id="wrapper-icon-today" src="" class="w-100" alt="">
                    </div>
                </div>
                <div class="future">
                    <div class="day">
                        <div id="day_1_weekday"></div>
                        <div id="day_1_temp"></div>
                        <div class="icon">
                                <img id="wrapper-icon-day-1" src="" class="w-100" alt="">
                        </div>
                    </div>
                    <div class="day">
                        <div id="day_2_weekday"></div>
                        <div id="day_2_temp"></div>
                        <div class="icon">
                                <img id="wrapper-icon-day-2" src="" class="w-100" alt="">
                        </div>
                    </div>
                    <div class="day">
                        <div id="day_3_weekday"></div>
                        <div id="day_3_temp"></div>
                        <div class="icon">
                                <img id="wrapper-icon-day-3" src="" class="w-100" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    ');
}
?>