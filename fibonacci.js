var cache = {};
let code = 200, resp ;

exports.handler = async (event, context) => {
    if (isNaN(event.queryStringParameters.n) || !isInt(event.queryStringParameters.n)) {
        code = 400;
        resp = JSON.stringify({"message":"The request is invalid."});
    } else {
        resp = fibonacci(event.queryStringParameters.n);
    }
    
     const response = {
        statusCode: code,
        body: resp
    };
    return response;
};

function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

function fibonacci(number) {
    if (number < 1)
        return 0;

    if (number <= 2)
        return 1;
    
    if (number in cache)
        return cache[number];
    
    var value = fibonacci(number- 1) + fibonacci(number - 2);
        
    cache[number] = value;

    return value;
}