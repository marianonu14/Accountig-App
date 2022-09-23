const Navigation = ({handlePages}) => {
    return ( 
        <nav className="hidden md:block bg-gray-300 w-[20%]">
            <ul className="flex flex-col justify-evenly mt-5 gap-5 px-2">
                <li className="active" onClick={() => handlePages('Invoice')}>New Invoice</li>
                <li onClick={() => handlePages('Transactions')}>Transactions</li>
                <li onClick={() => handlePages('Inventory')}>Inventory</li>
                <li onClick={() => handlePages('Statistics')}>Statistics</li>
            </ul>
        </nav>
     );
}
 
export default Navigation;