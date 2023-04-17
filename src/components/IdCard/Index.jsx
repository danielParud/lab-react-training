export function IdCard (props) {
    return (
    <div>
    <h2>First Name:{props.firstName}</h2>
    <h2>Last Name:{props.lastName}</h2>
    <h2>Gender:{props.gender}</h2>
    <h2>Height:{props.height}</h2>
    <h2>Birth:{props.birth.toString()}</h2>
    <img src={props.img} alt={props.firstName} />
    </div>
    );
    }