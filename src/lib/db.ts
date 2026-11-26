import { DatabaseSync } from 'node:sqlite';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const dbPath = process.env.DATABASE_PATH || './data/orders.db';

// Asegurar directorio
const dir = dirname(dbPath);
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

export const db = new DatabaseSync(dbPath);

// Configuración de alto rendimiento para SQLite
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

// Crear tablas si no existen
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_code TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT,
    region TEXT NOT NULL,
    comuna TEXT NOT NULL,
    address TEXT NOT NULL,
    pack_title TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    total_amount INTEGER NOT NULL,
    shipping_cost INTEGER NOT NULL DEFAULT 0,
    payment_method TEXT NOT NULL DEFAULT 'cod',
    status TEXT NOT NULL DEFAULT 'pending_whatsapp',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export interface CreateOrderParams {
  order_code: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  region: string;
  comuna: string;
  address: string;
  pack_title: string;
  quantity: number;
  total_amount: number;
  shipping_cost?: number;
  payment_method?: string;
}

export function saveOrder(params: CreateOrderParams) {
  const stmt = db.prepare(`
    INSERT INTO orders (
      order_code, customer_name, customer_phone, customer_email,
      region, comuna, address, pack_title, quantity, total_amount, shipping_cost, payment_method, status
    ) VALUES (
      ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?, ?, ?, 'pending_whatsapp'
    )
  `);

  return stmt.run(
    params.order_code,
    params.customer_name,
    params.customer_phone,
    params.customer_email || '',
    params.region,
    params.comuna,
    params.address,
    params.pack_title,
    params.quantity,
    params.total_amount,
    params.shipping_cost || 0,
    params.payment_method || 'cod'
  );
}
