/**
 * Created by Chen on 16/8/1.
 */
import express from "express";
let server = express();
server.set('views', './views')
server.set('view engine', 'jade'); // 设置模板引擎
server.use(handleRender);

function handleRender(req,res) {
    console.log(req.url);
    res.render(req.url.replace("/",""), { title: 'Hey', url: 'www.google.com'});
}

server.listen(3000, () => {
    console.log('this server is running on ' + 3000)
});