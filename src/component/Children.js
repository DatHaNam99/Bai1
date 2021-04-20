import React, { useEffect, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { axios } from '../component/axios';
import '../component/HeaderSale.css';

function Children() {
    const [Arr, setArr] = useState([]);

    console.log("Datadfatr", Arr);

    const getArr = async () => {
        const response = await axios
            .get("/congthuc.json")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) setArr(response.data);
    };

    useEffect(() => {
        getArr();
    }, []);




    return (
        <div className="container">
            <div>
                <div className="rowstory">
                    {
                        Arr.k((item) =>
                            <div className="col-md-3">
                                <Card>
                                    <CardImg top width="100%" src={item.urlHinhAnh} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{item.ten}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.moTa}</CardSubtitle>
                                        <Button>Add Cart</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Children;

// C1: Object.keys(Arr)

// C2: biến đổi luôn response.data => [{id: "", doKho: ""}] ngay lúc gọi xong api

const x = {
    "-M8tUyTcuJ5STtHBIRVE": {
        "doKho": "Dễ",
        "idLoaiCongThuc": "1",
        "luotXem": "2300",
        "moTa": "Món này ngon lắm",
        "ngayRa": "12",
        "ten": "Bánh cuốn",
        "thoiGian": "20",
        "urlHinhAnh": "https://firebasestorage.googleapis.com/v0/b/rn-app-bc1e7.appspot.com/o/banh_cuon.jpg?alt=media&token=ea5d8801-7e06-4c24-88f5-cd14129fb6c9"
    },
    "-M8tUyU4nvtPRHcg_FFB": {
        "doKho": "Dễ",
        "idLoaiCongThuc": "3",
        "luotXem": "1800",
        "moTa": "Món này ngon lắm",
        "ngayRa": "3",
        "ten": "Canh chua cá",
        "thoiGian": "30",
        "urlHinhAnh": "https://firebasestorage.googleapis.com/v0/b/rn-app-bc1e7.appspot.com/o/canh_chua_ca.jpg?alt=media&token=4b126363-08ac-4d34-95fa-503be32670de"
    },
}

const y = [
    {
        "id": "-M8tUyTcuJ5STtHBIRVE",
        "doKho": "Dễ",
        "idLoaiCongThuc": "1",
        "luotXem": "2300",
        "moTa": "Món này ngon lắm",
        "ngayRa": "12",
        "ten": "Bánh cuốn",
        "thoiGian": "20",
        "urlHinhAnh": "https://firebasestorage.googleapis.com/v0/b/rn-app-bc1e7.appspot.com/o/banh_cuon.jpg?alt=media&token=ea5d8801-7e06-4c24-88f5-cd14129fb6c9"
    },
    {
        "id": "-M8tUyU4nvtPRHcg_FFB",
        "doKho": "Dễ",
        "idLoaiCongThuc": "3",
        "luotXem": "1800",
        "moTa": "Món này ngon lắm",
        "ngayRa": "3",
        "ten": "Canh chua cá",
        "thoiGian": "30",
        "urlHinhAnh": "https://firebasestorage.googleapis.com/v0/b/rn-app-bc1e7.appspot.com/o/canh_chua_ca.jpg?alt=media&token=4b126363-08ac-4d34-95fa-503be32670de"
    },
]