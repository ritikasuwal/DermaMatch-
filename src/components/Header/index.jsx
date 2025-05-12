import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/sanologo.png";
import Search from "../../components/Search/Search";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdCompare } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation/Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-3 border-t-[1px] border-gray-250  border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[18px] font-[500] ">
              🎉 5.5 Flash Sale: Snag up to 20% OFF – Today Only!
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center{""}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking{""}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header top-strip py-1 border-gray-600 border-b-[1px]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[30%]">
            <Link to={"/"}>
              <img src={logo} style={{ width: "250px", height: "auto" }} />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[25%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>{" "}
                | &nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              
              <li>
              <Tooltip title="WishList" >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                  <FaRegHeart/>
                  </StyledBadge>
                </IconButton></Tooltip>
              </li>
              <li>
              <Tooltip title="Compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                  <MdCompare />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
              <Tooltip title="Cart">
  <Link to="/Cart" style={{ color: 'inherit', textDecoration: 'none' }}>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <IoMdCart />
      </StyledBadge>
    </IconButton>
  </Link>
</Tooltip>

              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
      <Outlet/>
    </header>
  );
};
export default Header;
