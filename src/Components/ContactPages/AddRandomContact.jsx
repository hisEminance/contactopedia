import { getRandomUser } from "../../Utility/api";
const GetRandomContact = async(props) => {
    const responseFromAPI = await getRandomUser();
    console.log(responseFromAPI);
    const user = responseFromAPI.data.results[0];
    return props.handleAddRandomContact ({
        name: user.name.first + " " + user.name.last,
        phone: user.phone,
        email: user.email
    });
};

const AddRandomContact = (props) => {
    return (
        <div>
            <button className="btn btn-success form-control" onClick={() => GetRandomContact(props)}>Add Random Contact</button>
        </div>
    );
};
export default AddRandomContact;