const express = require("express")
const path = require("path")
const app = express()
const halls = require("./halls")
const hallBooked = require("./hallBooked")

app.use(express.static("./Public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post("/hall-created", (req, res) => {
  const { hallId, seats, amenities, price } = req.body
  const Seats = Number(seats)
  const Price = Number(price)

  halls.push({ hallId, Seats, amenities, Price, bookedBy: null })
  res.send(`hall created for ${seats}, ${amenities}, ${price}`)
  console.log(halls)
})

app.post("/hall-booked", (req, res) => {
  const { customer_name, date, start_time, end_time, hallId } = req.body
  let hallExists = halls.find((hall) => hall.hallId == hallId)

  if (!hallExists) {
    return res.send("Hall does not exists")
  }
  if (hallExists.bookedBy) {
    return res.send("Hall already booked")
  }

  hallExists.bookedBy = customer_name

  hallBooked.push({ customer_name, date, start_time, end_time, hallId })
  console.log(hallBooked)
  res.send("booked")
})

app.get("/halls", (req, res) => {
  const hallsInfo = halls.map((hall) => {
    const status = hall.bookedBy != null ? "Booked" : "Available"

    if (status == "Booked") {
      const booked = hallBooked.find((hb) => hb.hallId == hall.hallId)
      // console.log(booked)
      const { customer_name, date, start_time, end_time } = booked
      return {
        hall: hall.hallId,
        status,
        customer_name,
        date,
        start_time,
        end_time,
      }
    }
    return {
      hall: hall.hallId,
      status,
    }
  })
  res.send(hallsInfo)
})

app.get("/customers", (req, res) => {
  const customerInfo = hallBooked.map((hall) => {
    const { customer_name, date, start_time, end_time, hallId } = hall
    return { customer_name, date, start_time, end_time, hallId }
  })
  res.send(customerInfo)
})

app.get("/customers/:customerName", (req, res) => {
  const { customerName } = req.params
  const customerExists = hallBooked.filter((hall) => {
    const status = hall.customer_name == customerName
    if (status) {
      const { customer_name, date, start_time, end_time, hallId } = hall
      return { customer_name, date, start_time, end_time, hallId }
    }
  })

  if (customerExists.length == 0) {
    return res.send("Customer has not yet booked hall with us")
  }

  res.json({
    "No.of.times customer booked": customerExists.length,
    customerExists,
  })
})

app.listen(5000, () => {
  console.log("server is listening on port 5000")
})
