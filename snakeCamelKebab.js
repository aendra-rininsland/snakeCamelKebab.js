/**
 * snakeCamelKebab.js
 * Quick library to switch between cases.
 */
(function(exports){
  'use strict';
  
  /**
   * Detects which case a string is in
   * @param  {string} input The string to test.
   * @return {string}       Case of string or false if not snake, camel or kebab.
   */
  exports.detectCase = function(input){
    if (input.match(/(?:[A-Za-z0-9][a-z0-9]*[A-Z0-9][a-z0-9]*)*/)) {
      return 'camel';
    } else if (input.match(/[A-Za-z0-9]+(?:\-[A-Za-z0-9]+)+/)) {
      return 'kebab';
    } else if (input.match(/[A-Za-z0-9\_]+(?:\_[A-Za-z0-9]+)*/)) {
      return 'snake';
    } else {
      return false;
    }
  };
  
  /**
   * Converts a string to snake_case
   * @param  {string} input Input string.
   * @return {string}       String in snake_case.
   */
  exports.toSnake = function(input) {
    switch(this.detectCase(input)) {
      case 'camel':
        return input.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
        
      case 'kebab':
        return input.replace(/(\-[A-Za-z])/g, function($1){return $1.replace('-','_');});
        
      default:
        return input;
    }
  };
  
  /**
   * Converts a string to kebab-case
   * @param  {string} input Input string.
   * @return {string}       String in kebab-case.
   */
  exports.toKebab = function(input) {
    switch(this.detectCase(input)) {
      case 'camel':
        return input.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
        
      case 'snake':
        return input.replace(/(\_[A-Za-z])/g, function($1){return $1.replace('_','-');});
        
      default:
        return input;
    }
  };
  
  /**
   * Converts a string to camelCase
   * @param  {string} input Input string.
   * @return {string}       String in camelCase.
   */
  exports.toCamel = function(input) {
    switch(this.detectCase(input)) {
      case 'snake':
        return input.replace(/(\_[A-Za-z])/g, function($1){return $1.toUpperCase().replace('_','');});
        
      case 'kebab':
        return input.replace(/(\-[A-Za-z])/g, function($1){return $1.toUpperCase().replace('-','');});
        
      default:
        return input;
    }
  };
  
  /**
   * Alias for toKebab
   * @param  {string} input Input string.
   * @return {string}       String in kebab-case.
   */
  exports.toDashed = function(input) {
    return this.toKebab(input);
  };
  
  /**
   * Alias for toSnake
   * @param  {string} input Input string.
   * @return {string}       String in snake_case.
   */
  exports.toUnderscore = function(input) {
    return this.toSnake(input);
  };

})(typeof exports === 'undefined' ? this.snakecamelkebab={} : exports);
