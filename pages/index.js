import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load products. Please refresh the page.');
        setLoading(false);
      });
  }, []);

  const buy = async (priceId) => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      alert('Payment error. Please try again.');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '1200px', margin: 'auto', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px' }}>
        🧺 Handwoven Bamboo Collection
      </h1>

      {loading && (
        <p style={{ textAlign: 'center', padding: '100px', fontSize: '18px', color: '#666' }}>
          Loading products...
        </p>
      )}

      {error && (
        <p style={{ textAlign: 'center', padding: '100px', fontSize: '18px', color: '#e74c3c' }}>
          {error}
        </p>
      )}

      {!loading && !error && products.length === 0 && (
        <p style={{ textAlign: 'center', padding: '100px', fontSize: '18px', color: '#666' }}>
          No products available at the moment.
        </p>
      )}

      {!loading && !error && products.length > 0 && (
        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: '1px solid #eee',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px',
                  }}
                />
              )}
              <h3 style={{ fontSize: '20px', margin: '10px 0' }}>{p.name}</h3>
              {p.description && (
                <p style={{ fontSize: '14px', color: '#666', margin: '10px 0', minHeight: '40px' }}>
                  {p.description.substring(0, 100)}
                  {p.description.length > 100 ? '...' : ''}
                </p>
              )}
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#635BFF', margin: '16px 0' }}>
                ${(p.price / 100).toFixed(2)}
              </p>
              <button
                onClick={() => buy(p.id)}
                style={{
                  background: '#635BFF',
                  color: 'white',
                  border: 'none',
                  padding: '14px 32px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '10px',
                  fontWeight: '600',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#5349e6')}
                onMouseLeave={(e) => (e.target.style.background = '#635BFF')}
              >
                Buy Now →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          marginTop: '100px',
          padding: '40px 0',
          textAlign: 'center',
          fontSize: '14px',
          color: '#666',
          borderTop: '1px solid #eee',
        }}
      >
        <a href="/shipping" style={{ margin: '0 20px', color: '#635BFF', textDecoration: 'none' }}>
          Shipping
        </a>
        <a href="/refund" style={{ margin: '0 20px', color: '#635BFF', textDecoration: 'none' }}>
          Refund Policy
        </a>
        <a href="/terms" style={{ margin: '0 20px', color: '#635BFF', textDecoration: 'none' }}>
          Terms of Service
        </a>
      </div>
    </div>
  );
}
