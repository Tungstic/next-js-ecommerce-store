import { NextRequest, NextResponse } from 'next/server';
import { stripeClient } from '../../../util/stripe';

export async function POST(request: NextRequest) {
  const body = await request.json();
  // TODO: move all 6 cakes to stripe.products (with images and prices)
  const session = await stripeClient.checkout.sessions.create({
    success_url: 'https://nb-ecommerce-cakeshop.vercel.app/checkout/thank-you',
    line_items: [{ price: body.price, quantity: body.quantity || 1 }],
    mode: body.quantity ? 'payment' : 'subscription',
  });

  // return the session that you created
  return NextResponse.json({ sessions: session });
}
