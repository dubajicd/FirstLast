/**
 * Author: Danko Dubajic
 * Date: 12.02.2015
 * @param selector
 */
function firstLast(selector){
    jQuery(selector).first().addClass('first');
    jQuery(selector).last().addClass('last');
}