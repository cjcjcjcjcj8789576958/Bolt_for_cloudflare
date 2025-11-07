
// functions/[[path]].js
import app from '../index.js'; // Assumes the main Express app is exported from index.js
import { httpServerHandler } from 'cloudflare:node';

// Bolt runs on a specific port. We use that port to listen internally.
const server = app.listen(8080);

// Export the handler to bridge the incoming Cloudflare request to the Express server
export default httpServerHandler(server);
