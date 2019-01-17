exports.handler = async (event, context) => {
    let resp = "Error";
    let code = 200;
    
    if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
        let a = event.queryStringParameters.a;
        let b = event.queryStringParameters.b;
        let c = event.queryStringParameters.c;
        
        if (isInt(a) && isInt(b) && isInt(c)) {
            if (a > 0 & b > 0 && c > 0) {
                let occurences = {};
                occurences[a] = a;
                occurences[b] = b;
                occurences[c] = c;
                
                switch (Object.keys(occurences).length) {
                    case 1:
                        resp = "Equilateral";
                        break;
                    case 2:
                        let sides = [a,b,c].sort(function (a,b) {
                             return b-a;
                        });
                        if (sides[1] + sides[2] > sides[0]) {
                            resp = "Isosceles";
                        }
                        break;
                    case 3:
                        resp = "Scalene";
                        break;
                }
            }
        } else {
            resp = {"message":"The request is invalid."};
            code = 400;
        }
    }
    
     const response = {
        statusCode: code,
        body: JSON.stringify(resp)
    };
    return response;
};

function isInt(value) {
	return !isNaN(value) && parseInt(Number(value),10) == value;
}