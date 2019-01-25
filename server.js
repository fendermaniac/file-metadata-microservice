import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = 3000;

app.use(fileUpload());
app.use('/', express.static('./public'));

app.post('/api/fileanalyze', (req,res) => {
  let fileName = req.files.upload;
  
  res.send(fileName);
});

app.listen(PORT);