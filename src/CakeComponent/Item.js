import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import './Style/Items.css'
import { BrowserRouter as Link } from "react-router-dom";
import { axios } from '../component/axios'
import AllItem from '../CakeComponent/AllItems'
import { useHistory } from "react-router-dom";

function Item() {

    const [listCatarogy, setlistCatarogy] = useState([]);

    const getArr = async () => {
        const response = await axios
            .get("api/v1/categories")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setlistCatarogy(response.data.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    const history = useHistory();
    function ShowItem(name) {
        history.push("/cate/" + name)
    }

    return (
        <>
            <div className="itemss">
                <Container>
                    <div className="row">
                        <div className="col-3">
                            {
                                listCatarogy.map((item) => {
                                    return (
                                        <ul className="danhmuc">
                                            <li className="li1">
                                                <div className="abc">
                                                    <button
                                                        // onClick={() => ShowItem(item.name)
                                                        // }
                                                        onClick={() => <AllItem todoProps={item.name} />
                                                        }
                                                    >{item.name}</button>
                                                </div>
                                                <ul className="ul1">
                                                    {
                                                        item.subcategory.map((icon) =>
                                                            <li> <Link to="/" className="nav-link">{icon.sub_name}</Link> </li>
                                                        )
                                                    }
                                                </ul>
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>

                        <AllItem />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Item;