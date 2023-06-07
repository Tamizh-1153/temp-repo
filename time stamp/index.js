const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()


const folderPath = path.resolve(__dirname, "Files")
app.use(express.static('./'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post("/file-created", (req, res) => {
    
    const date = new Date()
    const filename = `file_${Date.now()}.txt`

  fs.writeFile(
    `${folderPath}/${filename}`,
    `File created at ${date}`,
    (err) => {
      if (err) {
        console.error(err)
        res.status(500).send("An error occurred while creating the file.")
      } else {
        res.send("File created successfully!")
      }
    }
  )
})

app.get("/files", (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err)
      res.status(500).send("An error occurred while retrieving the files.")
    } else {
      res.json(files)
    }
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
