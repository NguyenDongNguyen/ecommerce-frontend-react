import { Badge, Button, Col, Popover } from "antd";
import React from "react";
import {
    WrapperContentPopup,
    WrapperHeader,
    WrapperHeaderAccout,
    WrapperTextHeader,
    WrapperTextHeaderSmall,
} from "./style";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import ButttonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    console.log("🚀 ~ Header ~ user:", user);

    return (
        <div
            style={{
                heiht: "100%",
                width: "100%",
                display: "flex",
                background: "#9255FD",
                justifyContent: "center",
            }}
        >
            <WrapperHeader
                style={{
                    justifyContent: "space-between",
                }}
            >
                <Col span={5}>
                    <WrapperTextHeader to="/">SHOP</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButttonInputSearch
                        size="large"
                        bordered={false}
                        textbutton="Tìm kiếm"
                        placeholder="input search text"
                        // onChange={onSearch}
                        backgroundColorButton="#5a20c1"
                    />
                </Col>
                <Col
                    span={6}
                    style={{ display: "flex", gap: "54px", alignItems: "center" }}
                >
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: "30px" }} />
                        {user?.name ? (
                            <div>{user.name}</div>
                        ) : (
                            <div
                                onClick={() => navigate("/sign-in")}
                                style={{ cursor: "pointer" }}
                            >
                                <WrapperTextHeaderSmall>
                                    Đăng nhập/Đăng ký
                                </WrapperTextHeaderSmall>
                                <div>
                                    <WrapperTextHeaderSmall>
                                        Tài khoản
                                    </WrapperTextHeaderSmall>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                        )}
                    </WrapperHeaderAccout>
                    <div
                        // onClick={() => navigate("/order")}
                        style={{ cursor: "pointer" }}
                    >
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined
                                style={{ fontSize: "30px", color: "#fff" }}
                            />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default Header;
