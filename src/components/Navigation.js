const Navigation = () => {
    return ( 
        <nav className="hidden md:block bg-gray-300 w-[20%]">
            <ul className="flex flex-col justify-evenly mt-5 gap-5 px-2">
                <li className="active">New Invoice</li>
                <li>Transactions</li>
                <li>Inventory</li>
                <li>Statistics</li>
            </ul>
        </nav>
     );
}
 
export default Navigation;