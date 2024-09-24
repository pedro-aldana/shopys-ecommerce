import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Valida que los datos obligatorios estén presentes y sean correctos
function validateOrderData(data: any) {
  const requiredFields = ["firstName", "lastName", "address", "city", "department", "phone", "items"];
  
  for (const field of requiredFields) {
    if (!data[field]) {
      return `El campo ${field} es obligatorio.`;
    }
  }

  if (!Array.isArray(data.items) || data.items.length === 0) {
    return "Debes incluir al menos un producto en la orden.";
  }

  return null;
}

export async function POST(req: Request) {
  try {
    // 1. Obtener los datos del cuerpo de la solicitud
    const {
      firstName,
      lastName,
      address,
      city,
      department,
      phone,
      items,  // Lista de productos en la orden
    } = await req.json();

    // 2. Validar los datos
    const validationError = validateOrderData({ firstName, lastName, address, city, department, phone, items });
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    // 3. Calcular el total de la orden
    const totalAmount = items.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);

    // 4. Crear la orden
    const order = await db.order.create({
      data: {
        firstName,
        lastName,
        address,
        city,
        department,
        phone,
        totalAmount, // Agregar el total calculado
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            productType: item.productType,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: true, // Incluir los items creados
      },
    });

    // 5. Retornar una respuesta exitosa
    return NextResponse.json({ order }, { status: 201 });

  } catch (error) {
    console.error("Error al crear la orden:", error);

    // 6. Devolver un error más descriptivo
    return NextResponse.json({ message: "Hubo un error al procesar tu orden, inténtalo de nuevo más tarde." }, { status: 500 });
  }
}
