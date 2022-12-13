const express = require('express');
const logfmt = require('logfmt');
const app = express();
const PORT = 8080;

app.use(logfmt.requestLogger());

app.get('/user/info', async (req, res) => {
    let authentication = {
        name: "Mas Eka Setiawan"
    };

    try {
        if(shouldSimulateError(5)) {
            authentication = null;
        }

        const result = await getUserInfo(authentication);

        res.send(result)
    } catch(err) {
        let status = 500;
        switch(err.name) {
            case 'AuthenticationError':
                status = 401;
                break;
        }

        res.status(status).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Application is running at ${PORT}`);
});

// authentication { name: string }
async function getUserInfo(authentication) {
    if(!authentication) {
        const err = new Error("User is not authenticated");
        err.name = "AuthenticationError";

        throw err;
    }


    if(shouldSimulateError(10)) {
        const err = new Error("Server cannot handle the request");
        err.name = "InternalError";

        throw err;
    }

    if(shouldSimulateError(90)) {
        await sleep(100);  // sleep 100ms
    }


    return authentication.name;
}

// utility function to simulate error with pseudo-randomness
function shouldSimulateError(percentError) {
    percentError = percentError || 30
    const randomNumber = Math.floor(Math.random() * 100);

    return randomNumber <= percentError;
}

function sleep(delay) {
    return new Promise(function(resolve, _) {
        setTimeout(resolve, delay);
    });
}
