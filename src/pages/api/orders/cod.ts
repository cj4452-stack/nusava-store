import type { APIRoute } from 'astro';
import { saveOrder } from '../../../lib/db';
import { nusavaConfig } from '../../../products/nusava/config';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const {
      customerName,
      customerPhone,
      customerEmail,
      region,
      comuna,
      address,
      packId
    } = data;

    // Validación básica
    if (!customerName || !customerPhone || !region || !comuna || !address || !packId) {
      return new Response(JSON.stringify({
        error: 'Todos los campos obligatorios deben ser completados.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Buscar pack
    const selectedPack = nusavaConfig.packs.find(p => p.id === packId) || nusavaConfig.packs[1];

    // Generar código único de pedido
    const orderCode = `NS-${Math.floor(1000 + Math.random() * 9000)}`;

    // Guardar en base de datos SQLite
    saveOrder({
      order_code: orderCode,
      customer_name: customerName.trim(),
      customer_phone: customerPhone.trim(),
      customer_email: customerEmail ? customerEmail.trim() : '',
      region: region.trim(),
      comuna: comuna.trim(),
      address: address.trim(),
      pack_title: selectedPack.title,
      quantity: selectedPack.bottles,
      total_amount: selectedPack.finalPrice,
      shipping_cost: 0,
      payment_method: 'cod'
    });

    // Construir enlace de WhatsApp
    const whatsappNumber = process.env.WHATSAPP_NUMBER || '56912345678';
    const message = encodeURIComponent(
      `¡Hola! Acabo de realizar el pedido *${orderCode}* en Nusava Chile.\n\n` +
      `📦 *Producto:* ${selectedPack.title}\n` +
      `💰 *Total a pagar al recibir:* $${selectedPack.finalPrice.toLocaleString('es-CL')} CLP\n` +
      `👤 *Nombre:* ${customerName}\n` +
      `📍 *Dirección:* ${address}, ${comuna}, ${region}\n` +
      `🚚 *Envío:* Gratis con Pago Contra Entrega\n\n` +
      `Por favor confírmenme el despacho. ¡Muchas gracias!`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return new Response(JSON.stringify({
      ok: true,
      orderCode,
      whatsappUrl,
      total: selectedPack.finalPrice
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error al procesar orden:', error);
    return new Response(JSON.stringify({
      error: 'Hubo un error al procesar el pedido. Intenta nuevamente.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
