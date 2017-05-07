import $ from 'jquery'
import 'jquery-ui';


$.onReady(() =>{
    $('body').append('<button> Button</button>');
    $('button').button();
});