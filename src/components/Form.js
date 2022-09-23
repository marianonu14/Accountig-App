import { useState } from "react"
const Form = () => {

    const [invoice,setInvoice] = useState({
        description: '',
        transaction: '',
        taxes: '',
        amount: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(invoice)
        setInvoice({
            description: '',
            transaction: '',
            taxes: '',
            amount: ''
        })
    }

    const handleChange = e => {setInvoice({...invoice, [e.target.name]: e.target.value})}

    return ( 
        <form className="flex flex-col justify-between h-[80%] lg:w-[60%] w-[90%] m-auto" onSubmit={handleSubmit}>
            <h2 className="text-4xl pt-10">Invoices</h2>
            <div>
                <label>Description:</label>
                <input 
                className="w-full mt-5" 
                type="text" 
                name="description" 
                value={invoice.description}
                onChange={handleChange}
                />
            </div>
            <div className="flex justify-between">
                <label>Transaction Type</label>
                <div className="flex gap-5" >
                    <input 
                    type="radio" 
                    name="transaction"
                    value="buy"
                    onChange={handleChange} 
                    />
                    <label>Buy</label>
                    <input 
                    type="radio" 
                    name="transaction"
                    value="sell"
                    onChange={handleChange} 
                    />
                    <label>Sell</label>
                </div>
            </div>
            <div className="flex justify-between">
                <label>Tax Type</label>
                <div className="flex gap-5">
                    <input 
                    type="radio" 
                    name="taxes"
                    value="full"
                    onChange={handleChange} 
                    />
                    <label>Income Tax</label>
                    <input 
                    type="radio" 
                    name="taxes"
                    value="min"
                    onChange={handleChange} 
                    />
                    <label>Property Tax</label>
                    <input 
                    type="radio" 
                    name="taxes"
                    value="free"
                    onChange={handleChange} 
                    />
                    <label>Tax Free</label>
                </div>
            </div>
            <div className="flex justify-between">    
                <label>Amount (USD)</label>
                <input 
                type="text"
                name="amount"
                value={invoice.amount}
                onChange={handleChange} 
                />
            </div>
            <button className="bg-cyan-600 rounded-xl p-2 w-1/3 text-white">Submit</button>
        </form>
     );
}
 
export default Form;