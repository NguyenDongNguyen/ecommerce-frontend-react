import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import { Col, Row } from "antd";

const HomePage = () => {
    const arr = ["TV", "Tu lanh", "Lap top"];
    return (
        <>
            <div style={{ padding: "0 120px" }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return <TypeProduct name={item} key={item} />;
                    })}
                </WrapperTypeProduct>
            </div>
            <div
                id="container"
                style={{
                    backgroundColor: "#efefef",
                    padding: "0 120px",
                    height: "1000px",
                }}
            >
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
                <WrapperProducts>
                    <Row gutter={[26, 26]}>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                        <Col lg={4}>
                            <CardComponent />
                        </Col>
                    </Row>
                </WrapperProducts>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                    }}
                >
                    <WrapperButtonMore
                        textbutton={"Xem thêm"}
                        type="outline"
                        styleButton={{
                            border: `1px solid rgb(11, 116, 229)`,
                            color: `rgb(11, 116, 229)`,
                            width: "240px",
                            height: "38px",
                            borderRadius: "4px",
                        }}
                        styleTextButton={{ fontWeight: 500 }}
                        // onClick={() => setLimit((prev) => prev + 6)}
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;
