import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'
import { useHistory } from "react-router-dom";

function AllItems(props) {
    const [listCategoriesDetail, setlistCategoriesDetail] = useState([]);

    const history = useHistory();
    console.log(props)

    const getArr = async () => {
        const response = await axios
            .get(`api/v1/items`)
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setlistCategoriesDetail(response.data.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);
    return (
        <div className="col-9">
            <br />
            <div className="row">
                <div className="col-md-3">
                    <input type="text" placeholder="ID/Name" />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <button>Add New Catalogy</button>
                </div>
                <div className="col-md-3">
                    <button>Add New Cake</button>
                </div>
            </div>
            <br />
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>SubCategory</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCategoriesDetail.map((item) => {
                            return (
                                <tr>
                                    <td><input type="checkbox" name={item.name} /></td>
                                    <td className="id">
                                        <label for={item.name}> {item.id}</label>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.subcategory}</td>
                                    <td className="abc">
                                        <i class="fas fa-pen"></i>
                                        <i class="far fa-trash-alt"></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AllItems;