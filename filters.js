exports = {
    validateAlpha: function(input) {
        var alphaRegex = /a-zA-Z/;
        
        return {value: input, safe: alphaRegex.test(input)};
    }
};