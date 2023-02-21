import { hotels } from "./data/hotels"



export default function handler(req, res) {
  switch(req.method){
    case "GET":
      res.status(200).json(hotels)
    break
  }
}
