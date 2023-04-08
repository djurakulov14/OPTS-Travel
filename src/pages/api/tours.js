import { tours } from "./data/tours"
import { toursEn } from "./data/toursEn"
import { toursIt } from "./data/toursIt"


export default function handler(req, res) {
    switch(req.method){
        case "GET":
          if(req.headers.lng === "ru"){
            res.status(200).json(tours)
          } else if(req.headers.lng === "en"){
            res.status(200).json(toursEn)
          } else if(req.headers.lng === "it"){
            res.status(200).json(toursIt)
          } else{
            res.status(200).json(toursEn)
          }
    break
  }
}
