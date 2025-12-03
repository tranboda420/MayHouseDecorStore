import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    // 9 Price IDs của bạn
    const priceIds = [
      'price_1RhBdlADNC6v7kD3TfqBlyzB',
      'price_1SZpRTADNC6v7kD3yyjwwaQR',
      'price_1RRbkyADNC6v7kD3xEQ6yb6T',
      'price_1RRbnWADNC6v7kD3vICzBVZW',
      'price_1RRbqGADNC6v7kD3dnEO4MfQ',
      'price_1RhBBJADNC6v7kD3zNmgStjS',
      'price_1RhBgKADNC6v7kD3h4EsOmoB',
      'price_1RhBnwADNC6v7kD339sF1xTe',
    ];

    // Lấy thông tin từ Stripe
    const products = await Promise.all(
      priceIds.map(async (priceId) => {
        try {
          const price = await stripe.prices.retrieve(priceId, {
            expand: ['product'],
          });

          return {
            id: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
            image: price.product.images?.[0] || null,
            description: price.product.description || '',
          };
        } catch (err) {
          console.error(`Error fetching ${priceId}:`, err.message);
          return null;
        }
      })
    );

    // Lọc bỏ sản phẩm lỗi
    const validProducts = products.filter((p) => p !== null);

    res.status(200).json(validProducts);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Could not load products' });
  }
}
