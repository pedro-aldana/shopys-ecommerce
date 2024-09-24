export function formatPrice(price: number) {
    // Verifica que el precio sea el valor correcto en pesos colombianos
    const priceFormatted = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 3, // Ajusta según sea necesario
    }).format(price);

    return priceFormatted;
}
