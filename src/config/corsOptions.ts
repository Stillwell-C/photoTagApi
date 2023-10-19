import allowedOrigins from "./allowedOrigins";
import {CorsOptions} from 'cors'

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1 ) {
            callback(null, true);
          } else {
            console.log(origin)
            callback(Error("Not allowed by CORS"));
          }
        },
        optionsSuccessStatus: 200,
        credentials: true,
    }

    export default corsOptions