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

const Header = () => {
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
                        <div
                            // onClick={handleNavigateLogin}
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
                    </WrapperHeaderAccout>
                    <div
                        // onClick={() => navigate("/order")}
                        style={{ cursor: "pointer" }}
                    >
                        <ShoppingCartOutlined
                            style={{ fontSize: "30px", color: "#fff" }}
                        />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default Header;
