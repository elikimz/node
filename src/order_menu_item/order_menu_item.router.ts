import { Hono } from "hono";
import { Insertorder_menu_itemData, deleteorder_menu_itemData, getAllorder_menu_itemData, getOneorder_menu_itemData, updateorder_menu_itemData } from "./order_menu_item.controller";


 export const order_menu_itemRouter=new Hono()

 order_menu_itemRouter.get("/order_menu_item",getAllorder_menu_itemData)
 order_menu_itemRouter.get("/order_menu_item/:id",getOneorder_menu_itemData)
 order_menu_itemRouter.post("/insert",Insertorder_menu_itemData)
 order_menu_itemRouter.delete("/order_menu_item/:id",deleteorder_menu_itemData)
 order_menu_itemRouter.put("/order_menu_item/:id",updateorder_menu_itemData)