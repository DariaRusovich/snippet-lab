import { useHistory } from "react-router"


export default function PageHeader({title}) {
    const history = useHistory()
    return (
        <div>
            {title && <h1>{title}</h1>}
            <button onClick={() => history.goBack()}>Go back</button>
        </div>
    )
}
