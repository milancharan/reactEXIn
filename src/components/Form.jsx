import React from 'react'

const Form = ({ onfromSubmit }) => {
    let data = {};
    const handlechange = (e) => {
        data = { ...data, [e.target.name]: e.target.value };
    }
    return (
        <div>

            <form onSubmit={() => onfromSubmit(data)} onChange={handlechange}>

                <div className="row mb-4">


                    <div className="col">
                        <label className="form-label" for="fname">

                            First name

                        </label>

                        <input

                            type="text"

                            id="fname"

                            name="fname"

                            className="form-control" required

                        />



                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            Middle name

                        </label>


                        <input

                            type="text"

                            id="form6Example2"

                            name="mname"

                            className="form-control" required

                        />


                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            Last name

                        </label>


                        <input

                            type="text"

                            id="form6Example2"

                            name="lname"

                            className="form-control" required

                        />


                    </div>

                </div>




                <div className=" mb-4">
                    <label className="form-label" for="form6Example5">

                        Email

                    </label>


                    <input

                        type="email"

                        id="form6Example5"

                        name="email"

                        className="form-control" required

                    />


                </div>

                <div className="row mb-4">

                    <div className="col">

                        <label className="form-label" for="form6Example1">

                            building

                        </label>


                        <input

                            type="text"

                            name="building"

                            id="form6Example1"

                            className="form-control" required

                        />

                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            Area

                        </label>


                        <input

                            type="text"

                            name="Area"

                            id="form6Example2"

                            className="form-control" required

                        />


                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            City

                        </label>


                        <input

                            name="City"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />


                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            State

                        </label>


                        <input

                            name="State"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />


                    </div>

                </div>

                <div>

                    gender :

                    <div className="form-check form-check-inline">
                        <label className="form-check-label" for="inlineRadio1">

                            Male

                        </label>

                        <input

                            className="form-check-input ref={}"

                            type="radio"

                            name="gender"

                            id="inlineRadio1"

                            value="male"

                        />



                    </div>

                    <div className="form-check form-check-inline">
                        <label className="form-check-label" for="inlineRadio2">

                            Female

                        </label>

                        <input

                            className="form-check-input ref={}"

                            type="radio"

                            name="gender"

                            id="inlineRadio2"

                            value="female"

                        />



                    </div>

                </div> <br />




                <div className="row mb-4">

                    <div className="col">
                        <label className="form-label" for="form6Example1">

                            10th marks

                        </label>


                        <input

                            type="number"

                            name="10thmarks"

                            id="form6Example1"

                            className="form-control" required

                        />


                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            10th grade

                        </label>

                        <input

                            name="10thgrade"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />



                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            passing year of 10th

                        </label>

                        <input

                            name="10thyear"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />



                    </div>

                </div>

                <div className="row mb-4">

                    <div className="col">
                        <label className="form-label" for="form6Example1">

                            12th marks

                        </label>

                        <input

                            name="12thmarks"

                            type="number"

                            id="form6Example1"

                            className="form-control" required

                        />



                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            12th grade

                        </label>

                        <input

                            name="12thgrade"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />



                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            12th passing year

                        </label>

                        <input

                            name="12thyear"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />



                    </div>

                </div>

                <div className="row mb-4">

                    <div className="col">
                        <label className="form-label" for="form6Example1">

                            degree marks

                        </label>


                        <input

                            name="Dmarks"

                            type="text"

                            id="form6Example1"

                            className="form-control" required

                        />


                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            degree grade

                        </label>

                        <input

                            name="Dgrade"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />



                    </div>

                    <div className="col">
                        <label className="form-label" for="form6Example2">

                            degree passing year

                        </label>

                        <input

                            name="Dyear"

                            type="text"

                            id="form6Example2"

                            className="form-control" required

                        />



                    </div>

                </div>




                <button type="submit" className="btn btn-dark btn-block mb-4">

                    Submit

                </button>

            </form>
        </div>
    )
}
export default Form