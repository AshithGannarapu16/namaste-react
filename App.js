        import React from "react";
        import ReactDOM from "react-dom/client";  
        

        const Header=()=>{
            return(
                <div className="header">
                    <div className="logo-container">
                        <img className="logo"  src="https://www.shutterstock.com/image-vector/food-studio-vector-logo-kitchen-260nw-610419776.jpg"/>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Cart</li>
                        </ul>
                    </div>

                </div>
            )
        }
       
        // const styleCard =;

        const RestaurantCard=(props)=>{

            console.log(props);
            return(
                <div className="res-card" style={{ backgroundColor:"#f0f0f"}}>
                    <img 
                    className="res-logo"
                    alt="res-logo"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
                    />
                    <h3>{props.resName}</h3>
                    <h4>Biryani,North Indian,Asian</h4>
                    <h4>4.2 stars</h4>
                    <h4>38 minutes</h4>
                    <h4>rating</h4>
                </div>
            )
        }

        const Body =()=>{
            return(
                <div className="body">
                    <div className="search">Search</div>
                    <div className="res-container">
                        <RestaurantCard resName="Maghana Foods" cuisine="Biryani,North Indian, Asian"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza" />
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>
                        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food,Pizza"/>



                     
                        
                    </div>
                </div>
            )
        }
        
        const AppLayout=()=>{
            return(
                <div className="app">
                    <Header/>
                    <Body/>
                </div>
            )
        }
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<AppLayout/>);
