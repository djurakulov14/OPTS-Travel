import { tours } from "./data/tours"


export default function handler(req, res) {
    switch(req.method){
        case "GET":
        res.status(200).json(tours)
    break
  }
}
