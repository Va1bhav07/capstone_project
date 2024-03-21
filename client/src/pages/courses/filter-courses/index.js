import { useNavigate } from "react-router-dom";
export function CourseFilter() {
    let navigate = useNavigate();
    function clearFilter() {
        navigate("/courses")
    }
    async function filterData() {
        let difficulty = document.getElementById("difficulty").value
        let courselength = document.getElementById("length").value
        let language = document.getElementById("language").value
        navigate("/filter/" + language + "/" + difficulty + "/" + courselength)
    }
    return (
        <div>
            <h3>Filters Courses</h3>
            <div className='row'>
                <div className='col-lg-2'>
                    <select id="difficulty" className="form-control m-1" name="difficulty">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advance</option>
                        <option>Expert</option>
                    </select>

                </div>
                <div className='col-lg-2'>
                    <select id="length" className="form-control m-1" name="length">
                        <option>less than 1 day</option>
                        <option>less than 5 days</option>
                        <option>less than 1 month</option>
                    </select>
                </div>
                <div className='col-lg-2'>
                    <select id="language" className="form-control m-1" name="language">
                        <option>English</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>
                <div className='col-lg-2'>
                    <button className='btn btn-primary' onClick={() => filterData}>Apply</button>
                </div>
                <div className='col-lg-2'>
                    <button className='btn btn-primary' onClick={clearFilter}>Clear filters</button>
                </div>
            </div>
        </div>
    )

}