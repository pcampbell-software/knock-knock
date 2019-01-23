exports.handler = async (event, context) => {
    let resp, code;
    
    if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
        resp = event.queryStringParameters.sentence;
         
        if (resp) {
            resp = JSON.stringify(resp.split("").reverse().join("").split(" ").reverse().join(" "));
        }
    } else {
        code = 400;
        resp = "Error";
    }
     const response = {
        statusCode: 200,
        body: resp
    };
    return response;
};
