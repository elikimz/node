import { serve } from '@hono/node-server'
import { Hono } from 'hono'
 import "dotenv/config"
import { stateRouter } from './states/states.router'
import { usersRouter } from './users/user.router'
import { addressRouter } from './address/address.router'
import { cityRouter } from './city/city.router'
import { restaurantRouter } from './restaurant/restaurant.router'
import { restaurant_ownerRouter } from './restaurant_owner/restaurant_owner.router'
import { categoryRouter } from './category/category.router'
import { menu_itemRouter } from './menu_item/menu_item.router'
import { ordersRouter } from './orders/orders.router'
import { order_menu_itemRouter } from './order_menu_item/order_menu_item.router'
import { order_statusRouter } from './order_status/order_status.router'
import { status_catalogRouter } from './status_catalog/status_catalog.router'
import { commentRouter } from './comment/comment.router'
import { driverRouter } from './driver/driver.router'
import { authRouter } from './Auth/router' 
import { readFile } from 'fs/promises'

const app =new Hono()
// app.get('/',(c)=>{
//   return c.text("hello hono")

// })

app.get('/', async (c) => {
  try {
    let html = await readFile('./index.html', 'utf-8');
    return c.html(html);
  } catch (error: any) {
    return c.text(error.message,500);
  }
});
app.route("/",stateRouter)
app.route("/", usersRouter)
app.route("/",addressRouter)   
app.route("/", cityRouter)
app.route("/", restaurantRouter)
app.route("/", restaurant_ownerRouter)
app.route("/", categoryRouter)
app.route("/",menu_itemRouter)
app.route("/",ordersRouter)
app.route("/",order_menu_itemRouter)
app.route("/",order_statusRouter)
app.route("/",status_catalogRouter)
app.route("/",commentRouter)
app.route("/",driverRouter)
app.route("/auth",authRouter)
serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
console.log(`Server is running on port ${process.env.PORT}`)

