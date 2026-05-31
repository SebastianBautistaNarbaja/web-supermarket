import { prisma } from "@/lib/prisma"

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: { category: true }
  })
  return products.map(p => ({
    ...p,
    price: Number(p.price)
  }))
}