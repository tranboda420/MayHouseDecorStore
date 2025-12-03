// pages/refund.js
export default function Refund() {
  return (
    <div
      style={{
        padding: '60px 20px',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.7',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '24px', textAlign: 'center' }}>
        Refund Policy
      </h1>

      <p style={{ marginBottom: '20px' }}>
        We want you to be completely satisfied with your purchase. If you're not happy with your handwoven bamboo product, we offer a hassle-free return policy.
      </p>

      <h3 style={{ fontSize: '22px', margin: '24px 0 12px' }}>30-Day Return Window</h3>
      <p>You have 30 days from the date of delivery to request a return for a full refund or exchange.</p>

      <h3 style={{ fontSize: '22px', margin: '24px 0 12px' }}>Conditions for Return</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li>The item must be unused and in the same condition as received</li>
        <li>Original tags and packaging are preferred (but not required)</li>
        <li>Proof of purchase is required</li>
      </ul>

      <h3 style={{ fontSize: '22px', margin: '24px 0 12px' }}>How to Return</h3>
      <p>
        Please email us at <strong>hello@mayhousedecor.com</strong> (or your real email) with your order number and reason for return. 
        We’ll send you return instructions within 24 hours.
      </p>

      <h3 style={{ fontSize: '22px', margin: '24px 0 12px' }}>Refund Processing</h3>
      <p>
        Once we receive and inspect your returned item, we will issue a full refund to your original payment method within 3–5 business days.
      </p>

      <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <strong>Note:</strong> Return shipping costs are the responsibility of the customer unless the item arrived damaged or defective.
      </p>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <a
          href="/"
          style={{
            color: '#635BFF',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          ← Back to Shop
        </a>
      </div>
    </div>
  );
}
