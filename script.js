import multer from 'multer';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
app.use(cors())
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/upload',(req,resp)=>{
//   console.log(req.body);
// })

app.post('/upload', upload.array('file',10), (req, res) => {
  console.log('hello');
  // File upload middleware (e.g., multer) stores the uploaded file in 'req.file'
  const uploadedFile = req.files;
  
  // Text field data is available in 'req.body'
  const textFieldData = req.body;

  // Handle uploaded file and text field data as needed
  // console.log('Uploaded file:', uploadedFile);
  console.log('Text field data:', textFieldData);
  
  console.log(uploadedFile);

  // Send response back to the client
  res.json({success:true,data:textFieldData,file:uploadedFile})
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
