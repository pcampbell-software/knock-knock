exports.handler = async (event, context) => {
    let reversed = event.queryStringParameters.sentence;
     
    if (reversed) {
        reversed = reversed.split("").reverse().join("").split(" ").reverse().join(" ");
    }

     const response = {
        statusCode: 200,
        body: JSON.stringify(reversed),
    };
    return response;
};
