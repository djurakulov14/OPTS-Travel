
const cities = [
    {
        id:1,
        title: "Отели в Самарканде",
        link: "/hotel/id=1",
    },
    {
        id:2,
        title: "Отели в Бухаре",
        link: "/hotel/id=2",
    },
    {
        id:3,
        title: "Отели в Хиве",
        link: "/hotel/id=3",
    },
    {
        id:5,
        title: "Отели в Ташкенте",
        link: "/hotel/id=5",
    },
    {
        id:6,
        title: "Отели в Коканд",
        link: "/hotel/id=6",
    },
    {
        id:7,
        title: "Отели в Намангане",
        link: "/hotel/id=7",
    }
]

export default function handler(req, res) {
    // res.status(200).json(cities)
    switch(req.method){
      case "GET":
        res.status(200).json(cities)
      break
    }
  }
  