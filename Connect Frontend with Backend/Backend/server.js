import express from 'express';
const app=express()
import cors from "cors";
app.use("/images", express.static("public/images"));
//app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// })
app.get('/Jamiadata',(re,res)=>{
    const jamiadata=[
        {
            id:1,
            name:"Hafiz Umair",
            designation:"CEO",
            image:"http://localhost:3000/images/464199091_2470392579817939_7149812138385227024_n.jpg"
        },
        {
            id:2,
            name:"Hafiz Zuhair",
            designation:"Head of Finance",
            image:"http://localhost:3000/images/35298528_1725826604119919_1014397917273784320_n.jpg"
        },
        {
            id:3,
            name:"Syed Abdullah",
            designation:"Head of Educational Department",
            image:"http://localhost:3000/images/abdullah.jpg"
        },
        {
            id:4,
            name:"Qari Muhammad Uzair",
            designation:"Founder",
            image:"http://localhost:3000/images/uzair.png"
        },
        {
            id:5,
            name:"Fuzail Bin Uzair",
            designation:"Head of Kitchen Department",
            image:"http://localhost:3000/images/410210397_370615358981187_7922612272498376899_n.jpg"
        }
    ]
    res.send(jamiadata)
})



const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is running at PORT ${port}`);
    
})