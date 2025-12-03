export default function Refund() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: 'auto', fontFamily: 'Arial', lineHeight: '1.6' }}>
      <h1>Refund Policy</h1>
      <p>
        We want you to be completely satisfied with your purchase. If you're not happy with your handwoven bamboo
        product, here's our policy:
      </p>
      <h3>30-Day Return Window</h3>
      <p>You may return any item within 30 days of delivery for a full refund or exchange.</p>
      <h3>Conditions</h3>
      <ul>
        <li>Item must be unused and in original condition</li>
        <li>Original packaging preferred but not required</li>
        <li>Please contact us before returning: hello@yourshop.com</li>
      </ul>
      <h3>Refund Process</h3>
      <p>
        Once we receive your return, we'll inspect it and process your refund within 5–7 business days. Refunds will be
        issued to your original payment method.
      </p>
      <p>
        <strong>Note:</strong> Return shipping costs are the customer's responsibility unless the item is defective or
        damaged.
      </p>
      <p>
        <a href="/" style={{ color: '#635BFF' }}>
          ← Back to Shop
        </a>
      </p>
    </div>
  );
}
```

✅ **Commit thay đổi**

---

### **Bước 1.5: Kiểm tra/Cập nhật file `.gitignore`**

Kiểm tra xem repo đã có file `.gitignore` chưa:
- Nếu **ĐÃ CÓ**: Click Edit, thêm các dòng này vào (nếu chưa có):
```
# dependencies
/node_modules
/.pnp
.pnp.js

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# local env files
.env*.local

# vercel
.vercel
