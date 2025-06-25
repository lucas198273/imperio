
import React from "react";
import { useCart } from "../../../contexts/CartContext";
import CartItemRow from "./CartRow";

interface Props {
  onClose: () => void;
}

const Cart: React.FC<Props> = ({ onClose }) => {
  const { items, total, error, removeItem, clearCart, isCartOpen } = useCart();

const handleWhatsAppClick = () => {
  if (items.length === 0) return;

  const itensFormatados = items
    .map((item) => {
      const precoUnitario = item.price.toFixed(2).replace(".", ",");
      const subtotal = (item.price * item.quantity).toFixed(2).replace(".", ",");
      return `• ${item.name}\n  Quantidade: ${item.quantity}\n  Valor unitário: R$ ${precoUnitario}\n  Subtotal: R$ ${subtotal}`;
    })
    .join("\n\n");

  const totalFormatado = total.toFixed(2).replace(".", ",");

  const mensagem = `
Olá! 😊 Gostaria de finalizar meu pedido com os seguintes produtos:\n
${itensFormatados}

💰 Total geral: R$ ${totalFormatado}

Por favor, poderia me confirmar a disponibilidade, formas de pagamento e opções de entrega?
  `.trim();

  const link = `https://wa.me/553198749678?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
};


  if (!isCartOpen) return null; // Não renderiza visualmente, mas permanece montado

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <header className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-900">Meu Carrinho</h2>
          <button onClick={onClose} className="text-blue-600 hover:text-red-800 text-2xl">
            ✕
          </button>
        </header>

        {error && items.length === 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 mx-6 mt-6 rounded-lg">
            {error}
          </div>
        )}

        {items.length === 0 ? (
          <p className="p-6 text-center text-gray-500 text-lg">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="p-4">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} onRemove={removeItem} />
              ))}
            </div>
            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <span className="font-semibold text-xl">Total:</span>
              <span className="text-green-600 font-bold text-2xl">R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex gap-4 px-6 pb-6">
              <button
                onClick={clearCart}
                className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 text-gray-800 font-medium disabled:opacity-50 transition-colors"
                disabled={items.length === 0}
              >
                Limpar Carrinho
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 transition-colors"
                disabled={items.length === 0}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;