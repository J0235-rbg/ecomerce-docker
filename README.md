# E-commerce — Projeto 3

## Como rodar

```bash
cp .env.example .env
docker compose up --build
```

A API sobe em http://localhost:3000.

```bash
# criar um pedido
curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{"customer":"cliente@ethereal.email","items":[{"productId":1,"quantity":1}],"paymentMethod":"pix"}'

# buscar o pedido (200) e um inexistente (404)
curl -i http://localhost:3000/orders/1
curl -i http://localhost:3000/orders/9999

# parar sem perder os dados (não use -v)
docker compose down
```