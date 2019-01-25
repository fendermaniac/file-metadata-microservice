import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = 3000;

app.use(fileUpload());
app.use('/', express.static('./public'));

app.post('/api/fileanalyze', (req,res) => {
  let { name, mimetype, data } = req.files.upfile;
  
  res.send({ name, type: mimetype, size: `${parseFloat(data.length).toLocaleString()} bytes`});
});

app.listen(PORT);