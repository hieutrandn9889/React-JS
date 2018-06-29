import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active1">
								<a className="nav-link" >Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" >Sản Phẩm</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>

				);
			}
		}
		
		export default Header;
