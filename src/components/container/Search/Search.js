import './Search.css'
import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Search = () => {
    return (
        <div className="obwiy">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <InputGroup className="mt-4">
                        <InputGroupAddon addonType="prepend" >

                            <InputGroupText className="p-3 iconga">  </InputGroupText>

                        </InputGroupAddon>
                        <Input placeholder="760 703 объявлений рядом" className="input1" />

                    </InputGroup>
                    <InputGroup className="mt-4">

                        <InputGroupText className="p-3 iconga"> <HiOutlineLocationMarker /> </InputGroupText>
                        <Input placeholder="Весь Узбекистан" className="input1" />

                    </InputGroup>


                </div>

            </div>
        </div>
    )
}

export default Search