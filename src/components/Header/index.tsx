import React from 'react';
import { Link } from 'react-router-dom';
// import { MdShoppingBasket } from 'react-icons/md';

// import logo from '../../assets/images/logo.svg';
import { Container } from './styles';
// import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {

    return (
        <Container>
            <Link to="/">
                <strong>Weather Music</strong>
            </Link>
            <Link to="/listmusic">
                <div>
                    <strong>Minhas Listas</strong>
                    <span data-testid="cart-size">
                    </span>
                </div>
                {/* <MdShoppingBasket size={36} color="#FFF" /> */}
            </Link>
        </Container>
    );
};

export default Header;