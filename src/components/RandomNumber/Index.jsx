export function RandomNumber(props) {
    return <strong>{Math.floor(Math.random()* props.max + props.min)}</strong>

}