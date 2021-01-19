import router from "fsbr";
import {createServer} from 'http';
import {readFileSync} from "fs";
import {resolve} from "path";

const {on, route} = router();

on('GET', '/api/changelog', async (req, res) => {
    const path = resolve(__dirname, '..', 'CHANGELOG.md');
    const blob = readFileSync(path);
    const object = blob.toString();

    res.statusCode = 200;
    res.end(object);
});


const server = createServer(route);
server.listen(8070);