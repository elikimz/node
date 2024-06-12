import { relations } from 'drizzle-orm';
import { pgTable, integer, varchar, serial, decimal, boolean, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// Define User model
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  contact_phone: varchar('contact_phone', { length: 255 }),
  phone_verified: boolean('phone_verified'),
  email: varchar('email', { length: 255 }),
  email_verified: boolean('email_verified'),
  confirmation_code: varchar('confirmation_code', { length: 255 }),
  // password: varchar('password', { length: 255 }),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at')
});

// Define Address model
export const address = pgTable('address', {
  id: serial('id').primaryKey(),
  street_address_1: varchar('street_address_1', { length: 255 }),
  street_address_2: varchar('street_address_2', { length: 255 }),
  zip_code: varchar('zip_code', { length: 255 }),
  delivery_instructions: varchar('delivery_instructions', { length: 255 }),
  user_id: integer('user_id').references(() => users.id),
  city_id: integer('city_id').references(() => city.id),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
});

// Define City model
export const city = pgTable('city', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  state_id: integer('state_id').references(() => state.id),
});

// Define State model
export const state = pgTable('state', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  code: varchar('code', { length: 255 }),
});

// Define Restaurant model
export const restaurant = pgTable('restaurant', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  street_address: varchar('street_address', { length: 255 }),
  zip_code: varchar('zip_code', { length: 255 }),
  city_id: integer('city_id').references(() => city.id),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
});

// Define RestaurantOwner model
export const restaurant_owner = pgTable('restaurant_owner', {
  id: serial('id').primaryKey(),
  restaurant_id: integer('restaurant_id').references(() => restaurant.id),
  owner_id: integer('owner_id').references(() => users.id),
});

// Define Category model
export const category = pgTable('category', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
});

// Define MenuItem model
export const menu_item = pgTable('menu_item', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  restaurant_id: integer('restaurant_id').references(() => restaurant.id),
  category_id: integer('category_id').references(() => category.id),
  description: varchar('description', { length: 255 }),
  ingredients: varchar('ingredients', { length: 255 }),
  price: decimal('price'),
  active: boolean('active'),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
});

// Define Order model
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  restaurant_id: integer('restaurant_id').references(() => restaurant.id),
  estimated_delivery_time: timestamp('estimated_delivery_time'),
  actual_delivery_time: timestamp('actual_delivery_time'),
  delivery_address_id: integer('delivery_address_id').references(() => address.id),
  user_id: integer('user_id').references(() => users.id),
  driver_id: integer('driver_id').references(() => driver.id),
  price: decimal('price'),
  discount: decimal('discount'),
  final_price: decimal('final_price'),
  comment: varchar('comment', { length: 255 }),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
});

// Define OrderMenuItem model
 export const order_menu_item = pgTable('order_menu_item', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id').references(() => orders.id),
  menu_item_id: integer('menu_item_id').references(() => menu_item.id),
  quantity: integer('quantity'),
  item_price: decimal('item_price'),
  price: decimal('price'),
  comment: varchar('comment', { length: 255 }),
});

// Define OrderStatus model
export const order_status = pgTable('order_status', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id').references(() => orders.id),
  status_catalog_id: integer('status_catalog_id').references(() => status_catalog.id),
  created_at: timestamp('created_at'),
});

// Define StatusCatalog model
 export const status_catalog = pgTable('status_catalog', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
});

//export Comment model
 export const comment = pgTable('comment', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id').references(() => orders.id),
  user_id: integer('user_id').references(() => users.id),
  comment_text: varchar('comment_text', { length: 255 }),
  is_complaint: boolean('is_complaint'),
  is_praise: boolean('is_praise'),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
});

// Define Driver model
export const driver = pgTable('driver', {
  id: serial('id').primaryKey(),
  car_make: varchar('car_make', { length: 255 }),
  car_model: varchar('car_model', { length: 255 }),
  car_year: integer('car_year'),
  user_id: integer('user_id').references(() => users.id),
  online: boolean('online'),
  delivering: boolean('delivering'),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
});

export const roleEnum = pgEnum("role", ["admin", "user"])

export const Auth = pgTable("auth_Table", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    password: varchar("password", { length: 50 }),
    username: varchar("username", { length: 50}),
    role: roleEnum("role").default("user")
});

export const AuthOnUsersRelations = relations(Auth, ({ one }) => ({
    user: one(users, {
        fields: [Auth.userId],
        references: [users.id]
    })
}));





export type usersInsert = typeof users.$inferInsert;
export type usersSelect = typeof users.$inferSelect;


export type stateSelect=typeof state.$inferSelect;
export type stateInsert=typeof state.$inferInsert;


export type addressSelect=typeof address.$inferSelect;

export type addressInsert=typeof address.$inferInsert;


export type citySelect=typeof city.$inferSelect;

export type cityInsert=typeof city.$inferInsert;


export type restaurantSelect=typeof restaurant.$inferSelect;

export type restaurantInsert=typeof restaurant.$inferInsert;



export type restaurant_ownerSelect=typeof restaurant_owner.$inferSelect;

export type restaurant_ownerInsert=typeof restaurant_owner.$inferInsert;


export type categorySelect=typeof category.$inferSelect;

export type categoryInsert=typeof category.$inferInsert;


export type menu_itemSelect=typeof menu_item.$inferSelect;

export type menu_itemInsert=typeof menu_item.$inferInsert;



export type ordersSelect=typeof orders.$inferSelect;

export type ordersInsert=typeof orders.$inferInsert;


export type order_menu_itemSelect=typeof order_menu_item.$inferSelect;

export type order_menu_itemInsert=typeof order_menu_item.$inferInsert;



export type order_statusSelect=typeof order_status.$inferSelect;

export type order_statusInsert=typeof order_status.$inferInsert;



export type status_catalogSelect=typeof status_catalog.$inferSelect;

export type status_catalogInsert=typeof status_catalog.$inferInsert;



export type commentSelect=typeof comment.$inferSelect;

export type commentInsert=typeof comment.$inferInsert;


export type driverSelect=typeof driver.$inferSelect;

export type driverInsert=typeof driver.$inferInsert;

export type AuthOnUser = typeof Auth.$inferInsert;
export type authOnUser = typeof Auth.$inferSelect;

