import { useState } from "react";

const QuantityPicker = ({ initialValue, OnQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialValue)
    const handleQuantityChange = e => {
        let newValue = Number(e.target.value) || 1
        if (newValue < 1) {
            newValue = 1
        }
        setQuantity(newValue)
        return OnQuantityChange(newValue)
    }
    const increment = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
        return OnQuantityChange(newQuantity)
    }
    const decrement = () => {
        const newQuantity = quantity > 1 ? quantity - 1 : 1
        setQuantity(newQuantity)
        return OnQuantityChange(newQuantity)
    }

    return (
        <div>
            <span className="text-gray-400 uppercase text-sm">Qty</span>
            <button className="ml-2 border border-gray-100 focus:outline-none bg-gray-200 text-gray-600 font-bold px-3 py-1" onClick={decrement} disabled={quantity < 2}>-</button>
            <input type="text" className="w-10 border-t border-b border-gray-100 text-center px-3 py-1 focus:outline-none" value={quantity} onChange={handleQuantityChange} />
            <button className="border border-gray-100 focus:outline-none bg-gray-200 text-gray-600 font-bold px-3 py-1" onClick={increment}>+</button>
        </div>
    )
}

export default QuantityPicker