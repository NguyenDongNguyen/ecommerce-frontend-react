import { Badge, Button, Col, Popover } from "antd";
import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slicers/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [loading, setLoading] = useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await UserService.logoutUser();
        dispatch(resetUser());
        setLoading(false);
    };

    const content = (
        <div>
            <WrapperContentPopup onClick={() => handleClickNavigate("profile")}>
                Thông tin người dùng
            </WrapperContentPopup>
            {user?.isAdmin && (
                <WrapperContentPopup onClick={() => handleClickNavigate("admin")}>
                    Quản lí hệ thống
                </WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>
                Đơn hàng của tôi
            </WrapperContentPopup>
            <WrapperContentPopup onClick={() => handleClickNavigate()}>
                Đăng xuất
            </WrapperContentPopup>
        </div>
    );

    const handleClickNavigate = (type) => {
        if (type === "profile") {
            navigate("/profile-user");
        } else if (type === "admin") {
            navigate("/system/admin");
        } else if (type === "my-order") {
            navigate("/my-order", {
                state: {
                    id: user?.id,
                    token: user?.access_token,
                },
            });
        } else {
            handleLogout();
        }
        // setIsOpenPopup(false);
    };

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
                            <>
                                <Popover
                                    content={content}
                                    trigger="click"
                                    open={isOpenPopup}
                                >
                                    <div
                                        style={{
                                            cursor: "pointer",
                                            maxWidth: 100,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                        onClick={() =>
                                            setIsOpenPopup((prev) => !prev)
                                        }
                                    >
                                        {user?.name || user?.email}
                                    </div>
                                </Popover>
                            </>
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
