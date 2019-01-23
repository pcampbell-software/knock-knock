var cache = {};
let code, resp ;

exports.handler = async (event, context) => {
    if (isNaN(event.queryStringParameters.n) || !this.isInt(event.queryStringParameters.n)) {
        code = 400;
        resp = JSON.stringify({"message":"The request is invalid."});
    } else {
        resp = this.fibonacci(event.queryStringParameters.n);
        code = 200;
    }
    
     const response = {
        statusCode: code,
        body: resp
    };
    return response;
};

exports.isInt = function (value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

exports.fibonacci = function (number) {
    if (number < 1)
        return 0;

    if (number <= 2)
        return 1;
    
    if (number in cache)
        return cache[number];
    
    var value = this.fibonacci(number- 1) + this.fibonacci(number - 2);
        
    cache[number] = value;

    return value;
}
