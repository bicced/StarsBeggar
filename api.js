import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); 

function handleError(err) {
  throw err?.response?.data || err;
}

export async function fetchFromAPI(endpointURL, options = {}) {
  try {
    const {method, body} = {method: 'GET', body: null, ...options};
    const res = await axios(endpointURL, {
      method,
      ...(body && {data: body}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ARENA_AUTH_TOKEN}`,
      },
    });

    return res.data;
  } catch (err) {
    handleError(err);
  }
}
