// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cities } from "./data/cityEn"




export default function handler(req, res) {
  // res.status(200).json(cities)
  switch(req.method){
    case "GET":
      res.status(200).json(cities)
    break
  }
}
