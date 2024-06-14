import { Hono } from "hono";
import { Insertmenu_itemData, deletemenu_itemData, getAllmenu_itemData, getOnemenu_itemData, updatemenu_itemData } from "./menu_item.controller";


 export const menu_itemRouter=new Hono()

 menu_itemRouter.get("/menu_item",getAllmenu_itemData)
 menu_itemRouter.get("/menu_item/:id",getOnemenu_itemData)
 menu_itemRouter.post("/menu_item",Insertmenu_itemData)
 menu_itemRouter.delete("/menu_item/:id",deletemenu_itemData)
 menu_itemRouter.put("/menu_item/:id",updatemenu_itemData)