import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
    const { carts } = useSelector((state) => state.allCart);
    console.log("cartData", carts)
    return (
        <>
            <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">
                        <h3 className="text-light">Ecommerce</h3>
                    </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                        <div id="ex4">
                            <span className="p1 fa-stack fa-2x has-badge" data-count={carts?.length}>
                                <i className="p1 fa-solid fa-cart-shopping" />
                            </span>
                        </div>
                    </NavLink>

                </Container>
            </Navbar>
        </>
    )
}

export default Header