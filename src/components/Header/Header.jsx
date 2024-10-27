import dp from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-4'>
            <h2>Header section</h2>
            <img src={dp} alt="" />
        </header>
    );
};

export default Header;